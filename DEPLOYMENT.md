# Vercel Deployment Guide - Universal Converter

Complete guide for deploying the Universal Converter application on Vercel with all three services.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Important Considerations](#important-considerations)
- [Prerequisites](#prerequisites)
- [Deployment Approach](#deployment-approach)
- [Option 1: Hybrid Deployment (Recommended)](#option-1-hybrid-deployment-recommended)
- [Option 2: Full Vercel Deployment](#option-2-full-vercel-deployment)
- [Environment Variables](#environment-variables)
- [Post-Deployment Configuration](#post-deployment-configuration)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

The Universal Converter consists of three main components:

1. **Frontend** - React + Vite application
2. **Backend** - Node.js API for documents, images, and archives
3. **Backend-Media** - Node.js API for audio and video processing

---

## ⚠️ Important Considerations

### Vercel Limitations for File Processing

Vercel is optimized for frontend and serverless functions, but has constraints for file conversion backends:

| Limitation | Hobby Plan | Pro Plan | Enterprise |
|------------|------------|----------|------------|
| Function Timeout | 10 seconds | 60 seconds | 300 seconds |
| Request Body Size | 4.5 MB | 4.5 MB | 4.5 MB |
| File System | Ephemeral | Ephemeral | Ephemeral |
| Function Memory | 1024 MB | 3008 MB | 3008 MB |

**Why This Matters:**
- Large file uploads (>4.5MB) won't work on Vercel
- Long conversion processes will timeout
- Converted files can't be stored permanently on Vercel's filesystem
- FFmpeg and LibreOffice binaries may exceed size limits

### Recommended Solutions

1. **Deploy frontend on Vercel, backends elsewhere** (Railway, Render, DigitalOcean)
2. **Use Vercel with external storage** (AWS S3, Cloudinary) + serverless optimization
3. **Migrate to Next.js API routes** with streaming and external storage

---

## 🔧 Prerequisites

Before deploying, ensure you have:

- [ ] GitHub account (or GitLab/Bitbucket)
- [ ] Vercel account ([vercel.com](https://vercel.com))
- [ ] Git repository with your code
- [ ] Vercel CLI installed (optional): `npm i -g vercel`

---

## 🚀 Deployment Approach

## Option 1: Hybrid Deployment (Recommended)

**✅ Best for production use with large files and long processing times**

Deploy each service to the platform that best suits its needs:

### 1. Frontend → Vercel
### 2. Backend → Railway/Render
### 3. Backend-Media → Railway/Render

---

### Step 1: Deploy Frontend to Vercel

#### A. Via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/universal-converter.git
   git push -u origin main
   ```

2. **Import Project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Choose "Continue"

3. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variables**
   ```env
   VITE_API_URL=https://your-backend.railway.app/api
   VITE_MEDIA_API_URL=https://your-media-backend.railway.app/api
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your frontend will be live at `https://your-app.vercel.app`

#### B. Via Vercel CLI

```bash
cd frontend
npm install -g vercel
vercel login
vercel

# Follow prompts:
# Set up and deploy? Yes
# Which scope? [Select your account]
# Link to existing project? No
# Project name? universal-converter-frontend
# In which directory is code? ./
# Override settings? Yes
# Build command? npm run build
# Output directory? dist
# Development command? npm run dev

# Add environment variables
vercel env add VITE_API_URL production
# Enter: https://your-backend.railway.app/api

vercel env add VITE_MEDIA_API_URL production
# Enter: https://your-media-backend.railway.app/api

# Deploy to production
vercel --prod
```

---

### Step 2: Deploy Backend to Railway

Railway is ideal for Node.js backends with long-running processes.

1. **Sign up at [railway.app](https://railway.app)**

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Backend Service**
   - Select "Add Service" → "From Repo"
   - Root Directory: `backend`
   - Start Command: `npm start`

4. **Add Environment Variables**
   ```env
   NODE_ENV=production
   PORT=5000
   MAX_FILE_SIZE=104857600
   CLEANUP_INTERVAL=3600000
   ALLOWED_ORIGINS=https://your-app.vercel.app
   ```

5. **Generate Domain**
   - Go to "Settings" → "Networking"
   - Click "Generate Domain"
   - Copy the URL (e.g., `https://your-backend.railway.app`)

6. **Update Frontend Environment Variables in Vercel**
   - Go to Vercel dashboard → Your project → Settings → Environment Variables
   - Update `VITE_API_URL` with Railway backend URL

---

### Step 3: Deploy Backend-Media to Railway

1. **Add Another Service to Railway Project**
   - In same Railway project, click "New Service"
   - Select "From Repo"
   - Root Directory: `backend-media`

2. **Add Environment Variables**
   ```env
   NODE_ENV=production
   PORT=5001
   MAX_FILE_SIZE=104857600
   CLEANUP_INTERVAL=3600000
   ALLOWED_ORIGINS=https://your-app.vercel.app
   FFMPEG_PATH=/usr/bin/ffmpeg
   ```

3. **Generate Domain**
   - Generate a domain for this service
   - Copy URL (e.g., `https://your-media-backend.railway.app`)

4. **Update Frontend in Vercel**
   - Add `VITE_MEDIA_API_URL` with media backend URL

---

### Step 4: Update CORS in Backend

Update CORS origins in both backends to allow your Vercel frontend:

**backend/server.js** and **backend-media/server.js:**

```javascript
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:5173',
            'https://your-app.vercel.app', // Add your Vercel URL
            process.env.ALLOWED_ORIGINS
        ].filter(Boolean);

        if (allowedOrigins.some(allowed => origin.includes(allowed))) {
            return callback(null, true);
        }

        callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Disposition'],
    maxAge: 86400
};
```

Commit and push changes - Railway will auto-redeploy.

---

## Option 2: Full Vercel Deployment

**⚠️ Limited use case - only suitable for:**
- Small files (<4MB)
- Quick conversions (<10s on Hobby, <60s on Pro)
- Testing/demo purposes

### Architecture Changes Required

To deploy backends on Vercel, you must convert them to serverless functions:

#### 1. Project Structure Changes

Create a mono-repo structure with Vercel-compatible API routes:

```
univert/
├── vercel.json
├── api/
│   ├── documents/
│   │   └── convert.js
│   ├── images/
│   │   └── convert.js
│   ├── audio/
│   │   └── convert.js
│   └── video/
│       └── convert.js
├── frontend/
│   └── [existing frontend files]
└── shared/
    └── [shared utilities]
```

#### 2. Create vercel.json

```json
{
  "version": 2,
  "name": "universal-converter",
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/$1"
    }
  ],
  "functions": {
    "api/**/*.js": {
      "memory": 3008,
      "maxDuration": 60
    }
  },
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### 3. Convert Express Routes to Serverless Functions

**Example: api/documents/convert.js**

```javascript
import formidable from 'formidable';
import { convertDocument } from '../../shared/documentService';

export const config = {
  api: {
    bodyParser: false,
    responseLimit: '50mb'
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({ maxFileSize: 4.5 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const result = await convertDocument(files.file, fields.outputFormat);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
```

#### 4. External Storage Setup

Since Vercel has ephemeral storage, use cloud storage:

**Install AWS SDK:**
```bash
npm install @aws-sdk/client-s3 @aws-sdk/lib-storage
```

**shared/storage.js:**
```javascript
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export async function uploadToS3(buffer, filename, contentType) {
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `converted/${Date.now()}-${filename}`,
      Body: buffer,
      ContentType: contentType
    }
  });

  const result = await upload.done();
  
  // Generate signed URL for download
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: result.Key
  });
  
  const downloadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  return downloadUrl;
}
```

#### 5. Environment Variables for Vercel

```env
# AWS S3 Storage
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_BUCKET_NAME=univert-files

# App Config
NODE_ENV=production
MAX_FILE_SIZE=4500000
```

#### 6. Deploy to Vercel

```bash
vercel login
vercel

# Deploy to production
vercel --prod
```

### Limitations of Full Vercel Deployment

❌ **File size limit:** 4.5MB maximum
❌ **Timeout:** 10s (Hobby), 60s (Pro), 300s (Enterprise)
❌ **No FFmpeg:** Large binaries difficult to include
❌ **No LibreOffice:** Cannot bundle LibreOffice for document conversion
❌ **Cold starts:** Functions may be slow on first request
❌ **Cost:** Can become expensive with high usage on Pro plan

---

## 🔑 Environment Variables

### Frontend (Vercel)

```env
# Backend API URLs
VITE_API_URL=https://your-backend.railway.app/api
VITE_MEDIA_API_URL=https://your-media-backend.railway.app/api
```

### Backend (Railway/Render)

```env
NODE_ENV=production
PORT=5000
MAX_FILE_SIZE=104857600
CLEANUP_INTERVAL=3600000
FILE_RETENTION_TIME=3600000
ALLOWED_ORIGINS=https://your-app.vercel.app
LIBREOFFICE_PATH=/usr/bin/soffice
```

### Backend-Media (Railway/Render)

```env
NODE_ENV=production
PORT=5001
MAX_FILE_SIZE=104857600
CLEANUP_INTERVAL=3600000
FILE_RETENTION_TIME=3600000
ALLOWED_ORIGINS=https://your-app.vercel.app
FFMPEG_PATH=/usr/bin/ffmpeg
```

### Full Vercel Deployment (if using S3)

```env
# All of the above, plus:
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_BUCKET_NAME=univert-files
REDIS_URL=redis://your-redis-url
```

---

## 🔄 Post-Deployment Configuration

### 1. Test All Conversion Types

Visit your deployed frontend and test:
- ✅ Document conversion (PDF → DOCX, etc.)
- ✅ Image conversion and manipulation
- ✅ Audio conversion
- ✅ Video conversion
- ✅ Archive operations

### 2. Monitor Performance

**Railway Dashboard:**
- Check CPU and memory usage
- Monitor response times
- View logs for errors

**Vercel Dashboard:**
- Check function invocations
- Monitor bandwidth usage
- Review edge network performance

### 3. Set Up Custom Domain (Optional)

**Vercel (Frontend):**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `app.yourdomain.com`)
3. Configure DNS:
   ```
   Type: CNAME
   Name: app
   Value: cname.vercel-dns.com
   ```

**Railway (Backend):**
1. Go to Service Settings → Networking
2. Add custom domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: api
   Value: your-backend.railway.app
   ```

### 4. Enable Analytics

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

**frontend/src/main.jsx:**
```javascript
import { inject } from '@vercel/analytics';

inject();
```

### 5. Set Up Error Tracking (Optional)

**Install Sentry:**
```bash
npm install @sentry/react @sentry/vite-plugin
```

**Configure in main.jsx:**
```javascript
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'your-sentry-dsn',
  environment: 'production'
});
```

---

## 🐛 Troubleshooting

### Issue: CORS Errors

**Symptom:** Browser shows "blocked by CORS policy"

**Solution:**
1. Verify backend CORS allows your Vercel domain
2. Check ALLOWED_ORIGINS environment variable
3. Ensure credentials: true is set
4. Clear browser cache

```javascript
// backend/server.js
const allowedOrigins = [
    'https://your-app.vercel.app',
    'https://your-app-git-main.vercel.app', // Preview deployments
    /https:\/\/.*\.vercel\.app$/ // All Vercel preview URLs
];
```

### Issue: API Not Found (404)

**Symptom:** Frontend can't reach backend

**Solution:**
1. Verify environment variables in Vercel
2. Check Railway/Render domains are correct
3. Test backend directly: `curl https://your-backend.railway.app/api/health`
4. Ensure trailing slashes match

### Issue: File Upload Fails

**Symptom:** Large files fail to upload

**Solution:**
1. Check file size limits
2. For Vercel: max 4.5MB (consider hybrid approach)
3. For Railway: check service plan limits
4. Review backend MAX_FILE_SIZE setting

### Issue: Conversion Timeout

**Symptom:** Long conversions fail with timeout

**Solution:**
1. Increase timeout in api.js:
   ```javascript
   const api = axios.create({
     baseURL: API_BASE_URL,
     timeout: 300000 // 5 minutes
   });
   ```
2. For Vercel: use Pro plan or hybrid deployment
3. For Railway: upgrade to higher tier if needed

### Issue: FFmpeg/LibreOffice Not Found

**Symptom:** Media/document conversions fail

**Solution:**

**Railway:**
```dockerfile
# Dockerfile includes installation
RUN apt-get update && apt-get install -y \
    ffmpeg \
    libreoffice \
    python3 \
    python3-pip
```

**Vercel:** Must use hybrid deployment or install via layer

### Issue: Memory Errors

**Symptom:** Process crashes during large file processing

**Solution:**
1. Reduce max file size
2. Optimize conversion settings (lower quality, resolution)
3. Upgrade Railway/Render plan
4. Implement streaming for large files

### Issue: Slow Cold Starts

**Symptom:** First request is very slow

**Solution:**
1. Railway: Keep services warm with cron job
   ```javascript
   // Use a service like cron-job.org to ping
   // https://your-backend.railway.app/api/health every 5 mins
   ```
2. Vercel: Use Pro plan for faster cold starts
3. Implement loading states in frontend

---

## 📊 Deployment Comparison

| Feature | Hybrid (Recommended) | Full Vercel |
|---------|---------------------|-------------|
| Frontend Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Backend Performance | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| File Size Limit | 100MB+ | 4.5MB |
| Processing Time | No limit | 10-60s |
| Setup Complexity | Medium | High |
| Monthly Cost (est.) | $10-20 | $20-50+ |
| Scalability | Excellent | Limited |
| Best For | Production | Demos only |

---

## 🚀 Quick Start Commands

### Deploy Frontend to Vercel
```bash
cd frontend
vercel --prod
```

### Deploy Backend to Railway via CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Deploy
railway up
```

### Check Deployment Status
```bash
# Vercel
vercel ls

# Railway
railway status
```

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Frontend loads at Vercel URL
- [ ] Backend health check responds: `/api/health`
- [ ] Media backend health check responds: `/api/health`
- [ ] Document conversion works
- [ ] Image conversion works
- [ ] Audio conversion works
- [ ] Video conversion works
- [ ] Archive operations work
- [ ] File downloads work correctly
- [ ] Error messages display properly
- [ ] No console errors in browser
- [ ] Mobile responsive design works
- [ ] CORS configured correctly
- [ ] Custom domains configured (if applicable)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)
- [Express.js Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)

---

## 🆘 Need Help?

If you encounter issues not covered here:

1. Check Vercel deployment logs
2. Check Railway/Render service logs
3. Test backend endpoints directly with curl/Postman
4. Review browser console for frontend errors
5. Verify all environment variables are set correctly

---

**Recommended Deployment:** Option 1 (Hybrid) for production applications with large files and complex conversions.

**Alternative for Simple Use:** Option 2 (Full Vercel) only for demos or small file conversions with strict limits.

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**Vercel:** Automatically deploys on every push to main branch

**Railway:** Configure auto-deployment:
1. Go to Service Settings
2. Enable "Deploy on Git Push"
3. Select branch (main)

### Preview Deployments

**Vercel:** Automatically creates preview URLs for PRs
- Format: `https://your-app-git-branch.vercel.app`

**Railway:** Create separate environments:
```bash
railway environment create staging
railway environment use staging
```

---

## 🔐 Security Best Practices

1. **Environment Variables:** Never commit secrets to Git
2. **CORS:** Whitelist only your domains
3. **Rate Limiting:** Implement on backend:
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   
   app.use('/api/', limiter);
   ```
4. **File Validation:** Always validate file types and sizes
5. **HTTPS:** Ensure all traffic uses HTTPS (default on Vercel/Railway)

---

**Last Updated:** 2026-02-09
**Version:** 1.0.0

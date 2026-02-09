const path = require('path');

const config = {
    port: process.env.PORT || 5001,
    uploadDir: path.join(__dirname, '..', 'uploads'),
    convertedDir: path.join(__dirname, '..', 'converted'),
    maxFileSize: 100 * 1024 * 1024,
    cleanupInterval: 30 * 60 * 1000,
    fileRetentionTime: 60 * 60 * 1000,
    allowedFormats: {
        audio: ['.mp3', '.wav', '.aac', '.ogg', '.flac', '.m4a', '.wma'],
        video: ['.mp4', '.mkv', '.avi', '.webm', '.mov', '.wmv', '.flv', '.m4v']
    },
    ffmpegPath: process.env.FFMPEG_PATH || 'ffmpeg'
};

module.exports = config;

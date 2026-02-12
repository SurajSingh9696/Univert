import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
    return (
        <div className="privacy-policy-page">
            <div className="container">
                <motion.div
                    className="policy-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="policy-title">Privacy Policy</h1>
                    <p className="policy-subtitle">Last updated: February 12, 2026</p>
                </motion.div>

                <motion.div
                    className="policy-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <section className="policy-section">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to UniConvert ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our file conversion service.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Files You Upload</h3>
                        <p>
                            When you use our service, you upload files for conversion. We temporarily store these files on our servers during the conversion process. These files are automatically deleted after conversion or within 24 hours, whichever comes first.
                        </p>
                        
                        <h3>2.2 Usage Data</h3>
                        <p>
                            We may collect information about how you access and use our service, including:
                        </p>
                        <ul>
                            <li>Device information (browser type, operating system)</li>
                            <li>IP address and general location data</li>
                            <li>Conversion history and file types processed</li>
                            <li>Pages visited and time spent on our service</li>
                            <li>Errors and performance data</li>
                        </ul>

                        <h3>2.3 Cookies and Tracking</h3>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience. These include:
                        </p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for the service to function properly</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings (e.g., theme selection)</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Process your file conversions</li>
                            <li>Improve and optimize our service</li>
                            <li>Detect and prevent technical issues</li>
                            <li>Analyze usage patterns and trends</li>
                            <li>Ensure security and prevent abuse</li>
                            <li>Communicate with you about service updates</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>4. Data Storage and Security</h2>
                        <h3>4.1 File Storage</h3>
                        <p>
                            All uploaded files are stored temporarily on secure servers. We employ industry-standard encryption and security measures to protect your files during transmission and storage. Files are automatically deleted after conversion or after 24 hours maximum.
                        </p>

                        <h3>4.2 Security Measures</h3>
                        <p>We implement various security measures including:</p>
                        <ul>
                            <li>SSL/TLS encryption for data transmission</li>
                            <li>Secure file storage with access controls</li>
                            <li>Regular security audits and updates</li>
                            <li>Automated file deletion systems</li>
                            <li>Firewall and intrusion detection</li>
                        </ul>

                        <h3>4.3 Data Retention</h3>
                        <p>
                            <strong>Uploaded Files:</strong> Deleted within 24 hours<br/>
                            <strong>Converted Files:</strong> Deleted within 24 hours<br/>
                            <strong>Usage Data:</strong> Retained for up to 90 days for analytics<br/>
                            <strong>Error Logs:</strong> Retained for up to 30 days
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>5. Data Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our service (e.g., cloud hosting, analytics)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>6. Your Rights and Choices</h2>
                        <p>You have the following rights regarding your information:</p>
                        <ul>
                            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your information</li>
                            <li><strong>Objection:</strong> Object to processing of your information</li>
                            <li><strong>Data Portability:</strong> Request a copy of your information in a portable format</li>
                            <li><strong>Cookie Control:</strong> Manage or disable cookies through your browser settings</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>7. File Privacy and Confidentiality</h2>
                        <p>
                            We understand that your files may contain sensitive information. We commit to:
                        </p>
                        <ul>
                            <li>Never access, view, or analyze the content of your files except for automated conversion processing</li>
                            <li>Never share your files with any third party</li>
                            <li>Automatically delete all files after processing</li>
                            <li>Encrypt files during transmission and storage</li>
                            <li>Isolate each user's files from others</li>
                        </ul>
                    </section>

                    <section className="policy-section">
                        <h2>8. Third-Party Services</h2>
                        <p>
                            Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>9. Children's Privacy</h2>
                        <p>
                            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>10. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className="policy-section">
                        <h2>12. Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> privacy@uniconvert.com</p>
                            <p><strong>Website:</strong> https://uniconvert.com/contact</p>
                            <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                        </div>
                    </section>

                    <section className="policy-section">
                        <h2>13. Your Consent</h2>
                        <p>
                            By using our service, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our service.
                        </p>
                    </section>

                    <div className="policy-footer">
                        <p>This privacy policy is effective as of February 12, 2026.</p>
                        <Link to="/terms" className="related-link">Read our Terms and Conditions →</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './TermsAndConditions.css'

function TermsAndConditions() {
    return (
        <div className="terms-page">
            <div className="container">
                <motion.div
                    className="terms-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <p className="terms-subtitle">Last updated: February 12, 2026</p>
                </motion.div>

                <motion.div
                    className="terms-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <section className="terms-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using UniConvert ("Service," "we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>2. Description of Service</h2>
                        <p>
                            UniConvert provides online file conversion services, allowing users to convert various file formats including documents, images, audio, video, and archives. The service is provided "as is" and may be modified, suspended, or discontinued at any time without notice.
                        </p>
                        <h3>2.1 Supported Formats</h3>
                        <ul>
                            <li>Documents: PDF, DOCX, XLSX, PPTX, HTML, TXT, CSV, JSON</li>
                            <li>Images: JPG, PNG, WEBP, GIF, SVG, BMP, TIFF</li>
                            <li>Audio: MP3, WAV, AAC, OGG, FLAC, M4A</li>
                            <li>Video: MP4, MKV, AVI, WEBM, MOV, FLV</li>
                            <li>Archives: ZIP, RAR, 7Z, TAR, GZ</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>3. User Eligibility</h2>
                        <p>
                            You must be at least 13 years old to use this service. By using UniConvert, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>4. User Responsibilities</h2>
                        <h3>4.1 Acceptable Use</h3>
                        <p>You agree to use the service only for lawful purposes. You must not:</p>
                        <ul>
                            <li>Upload files containing malware, viruses, or malicious code</li>
                            <li>Upload copyrighted material without proper authorization</li>
                            <li>Upload illegal, obscene, or offensive content</li>
                            <li>Attempt to circumvent security measures or access restrictions</li>
                            <li>Use the service to harm, harass, or violate others' rights</li>
                            <li>Automate access to the service through bots or scripts without permission</li>
                            <li>Overload or disrupt the service infrastructure</li>
                        </ul>

                        <h3>4.2 File Ownership</h3>
                        <p>
                            You retain all ownership rights to files you upload. By uploading files, you grant us a limited license to process, convert, and temporarily store your files solely for the purpose of providing the service.
                        </p>

                        <h3>4.3 Content Responsibility</h3>
                        <p>
                            You are solely responsible for the content of files you upload. We do not monitor or review file content and are not responsible for any content uploaded by users.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>5. Service Limitations</h2>
                        <h3>5.1 File Size Limits</h3>
                        <p>
                            Maximum file size: 100MB per file<br/>
                            Maximum batch upload: 20 files simultaneously
                        </p>

                        <h3>5.2 Conversion Quality</h3>
                        <p>
                            We strive to provide high-quality conversions, but we cannot guarantee perfect accuracy or quality for all conversions. Output quality may vary depending on the input file and conversion type.
                        </p>

                        <h3>5.3 Processing Time</h3>
                        <p>
                            Conversion times vary based on file size, format, and server load. While we aim for fast processing, we do not guarantee specific completion times.
                        </p>

                        <h3>5.4 Service Availability</h3>
                        <p>
                            We aim for 99% uptime but do not guarantee uninterrupted service. The service may be temporarily unavailable due to maintenance, updates, or technical issues.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>6. Intellectual Property</h2>
                        <h3>6.1 Our Rights</h3>
                        <p>
                            All intellectual property rights in the service, including design, code, logos, and trademarks, belong to UniConvert. You may not copy, modify, distribute, or create derivative works without our written permission.
                        </p>

                        <h3>6.2 User Rights</h3>
                        <p>
                            You retain all rights to your uploaded files and converted outputs. We claim no ownership over your content.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>7. Privacy and Data Security</h2>
                        <p>
                            Your privacy is important to us. Our data collection and usage practices are detailed in our Privacy Policy, which is incorporated into these terms by reference.
                        </p>
                        <h3>7.1 File Deletion</h3>
                        <p>
                            All uploaded and converted files are automatically deleted from our servers within 24 hours. We do not retain copies of your files after this period.
                        </p>
                        <h3>7.2 Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your data. However, no internet transmission is 100% secure. Use the service at your own risk.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>8. Disclaimer of Warranties</h2>
                        <p>
                            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                        </p>
                        <ul>
                            <li>Warranties of merchantability or fitness for a particular purpose</li>
                            <li>Warranties that the service will be uninterrupted or error-free</li>
                            <li>Warranties regarding the accuracy or reliability of conversions</li>
                            <li>Warranties that files will be secure or free from loss</li>
                        </ul>
                        <p>
                            We do not warrant that the service will meet your requirements or that any errors will be corrected.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>9. Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, UNICONVERT SHALL NOT BE LIABLE FOR ANY:
                        </p>
                        <ul>
                            <li>Indirect, incidental, special, or consequential damages</li>
                            <li>Loss of data, profits, or business opportunities</li>
                            <li>Damages resulting from file corruption or loss</li>
                            <li>Damages from unauthorized access to your files</li>
                            <li>Damages from service interruption or unavailability</li>
                        </ul>
                        <p>
                            Our total liability for any claim shall not exceed $100 USD or the amount you paid to use the service (if any), whichever is greater.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>10. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless UniConvert, its affiliates, officers, and employees from any claims, damages, losses, or expenses (including legal fees) arising from:
                        </p>
                        <ul>
                            <li>Your use of the service</li>
                            <li>Your violation of these terms</li>
                            <li>Your violation of any third-party rights</li>
                            <li>Content of files you upload</li>
                        </ul>
                    </section>

                    <section className="terms-section">
                        <h2>11. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to the service at any time, with or without notice, for any reason, including violation of these terms.
                        </p>
                        <p>
                            Upon termination, you must cease all use of the service. Provisions regarding intellectual property, disclaimers, and limitations of liability shall survive termination.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>12. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes constitutes acceptance of the modified terms.
                        </p>
                        <p>
                            We will indicate the "Last updated" date at the top of these terms when changes are made.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>13. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which UniConvert operates, without regard to conflict of law provisions.
                        </p>
                        <p>
                            Any disputes arising from these terms or your use of the service shall be resolved in the courts of that jurisdiction.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>14. Dispute Resolution</h2>
                        <h3>14.1 Informal Resolution</h3>
                        <p>
                            Before filing a claim, you agree to contact us to attempt informal resolution of the dispute.
                        </p>
                        <h3>14.2 Arbitration</h3>
                        <p>
                            If informal resolution fails, disputes shall be resolved through binding arbitration rather than in court, except where prohibited by law.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>15. Severability</h2>
                        <p>
                            If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>16. Entire Agreement</h2>
                        <p>
                            These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and UniConvert regarding the use of the service.
                        </p>
                    </section>

                    <section className="terms-section">
                        <h2>17. Contact Information</h2>
                        <p>
                            For questions about these Terms and Conditions, please contact us:
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> legal@uniconvert.com</p>
                            <p><strong>Support:</strong> support@uniconvert.com</p>
                            <p><strong>Website:</strong> https://uniconvert.com/contact</p>
                            <p><strong>Response Time:</strong> We aim to respond within 48-72 hours</p>
                        </div>
                    </section>

                    <section className="terms-section">
                        <h2>18. Acknowledgment</h2>
                        <p>
                            BY USING UNICONVERT, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
                        </p>
                    </section>

                    <div className="terms-footer">
                        <p>These terms and conditions are effective as of February 12, 2026.</p>
                        <Link to="/privacy" className="related-link">Read our Privacy Policy →</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TermsAndConditions

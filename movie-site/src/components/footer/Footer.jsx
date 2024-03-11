import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Connect With Us</p>
                <section className="social-links">
                    <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon/>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon/>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon/>
                    </a>
                </section>
            </div>
            <div className="footer-bottom">
                <p>©2024 StreamVibe, All Rights Reserved</p>
                <section className="footer-nav">
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </section>
            </div>
        </footer>
    );
}
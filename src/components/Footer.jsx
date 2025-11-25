import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 md:p-8 text-center text-[var(--text-secondary)] text-xs md:text-sm font-mono">
            <p className="mb-2">Built with React</p>
            <p>&copy; {new Date().getFullYear()} Santanu Jana. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

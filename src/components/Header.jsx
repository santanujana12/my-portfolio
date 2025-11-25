import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { x: '100%' },
        open: { x: 0, transition: { type: 'tween', duration: 0.3 } }
    };

    return (
        <header className="glass-header">
            <div className="text-2xl font-bold text-gradient">
                Santanu Jana
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex list-none m-0 p-0">
                <li><a href="#hero" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#experience" className="nav-link">Experience</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden bg-transparent border-none text-[var(--text-color)] text-2xl cursor-pointer p-2" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="fixed top-0 right-0 w-full h-screen bg-[var(--bg-color)] flex flex-col justify-center items-center z-999"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <ul className="list-none p-0 text-center">
                            <li className="my-8"><a href="#hero" onClick={toggleMenu} className="text-2xl text-[var(--text-color)] no-underline">Home</a></li>
                            <li className="my-8"><a href="#about" onClick={toggleMenu} className="text-2xl text-[var(--text-color)] no-underline">About</a></li>
                            <li className="my-8"><a href="#experience" onClick={toggleMenu} className="text-2xl text-[var(--text-color)] no-underline">Experience</a></li>
                            <li className="my-8"><a href="#projects" onClick={toggleMenu} className="text-2xl text-[var(--text-color)] no-underline">Projects</a></li>
                            <li className="my-8"><a href="#contact" onClick={toggleMenu} className="text-2xl text-[var(--text-color)] no-underline">Contact</a></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

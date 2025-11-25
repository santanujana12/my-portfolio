import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-profile.png';

const Hero = () => {
    return (
        <section id="hero" className="pt-24 md:pt-32 px-4 md:px-8 pb-8 min-h-[90vh] md:min-h-[80vh] flex flex-col md:flex-row justify-center items-center text-left max-w-1200px mx-auto gap-6 md:gap-12">
            <div className="flex-1">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[var(--primary-color)] text-base md:text-xl mb-3 md:mb-4 block"
                >
                    Hi, my name is
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[clamp(2.5rem,8vw,5rem)] m-0 leading-tight"
                >
                    Santanu Jana.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[clamp(1.75rem,5vw,4rem)] my-2 mb-6 md:mb-8 text-[var(--text-secondary)]"
                >
                    Frontend Web Developer.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base md:text-xl max-w-600px text-[var(--text-secondary)] mb-8 md:mb-12 leading-relaxed"
                >
                    Frontend developer with 4+ years of experience building performant, scalable web applications using React, Redux, and modern tooling.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#projects" className="btn-primary text-sm md:text-base">
                        Check out my work!
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                    <img src={heroImage} alt="Santanu Jana" className="w-full h-full object-cover" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

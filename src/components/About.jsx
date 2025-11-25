import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about-coding.png';

const About = () => {
    const skills = [
        'JavaScript (ES6+)', 'TypeScript', 'React JS', 'Redux Toolkit',
        'Jest', 'Material UI', 'Tailwind CSS', 'Bootstrap',
        'Git', 'Webpack', 'Vite', 'AWS'
    ];

    return (
        <section id="about" className="py-24 px-8 max-w-1000px mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl mb-8 flex items-center text-[var(--text-color)]">
                    <span className="text-[var(--primary-color)] mr-2">01.</span> About Me
                    <span className="h-px bg-[var(--glass-border)] flex-1 ml-4"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start">
                    <div>
                        <p className="mb-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                            I am a Frontend developer with over 4 years of experience building performant, scalable web applications using React, Redux, and modern tooling. I have experience in delivering independent modules as well as collaborating in Agile teams across global clients.
                        </p>
                        <p className="mb-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                            I am a strong believer in clean UI, code quality, and continuous learning. My expertise spans across the entire frontend ecosystem, from crafting responsive UIs to optimizing application performance.
                        </p>
                        <p className="mb-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 gap-x-2 p-0 m-0 list-none">
                            {skills.map((skill, i) => (
                                <li key={i} className="relative pl-5 mb-2 font-mono text-sm text-[var(--text-secondary)]">
                                    <span className="absolute left-0 text-[var(--primary-color)]">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="w-full rounded relative overflow-hidden border-2 border-[var(--primary-color)]">
                            <img src={aboutImage} alt="Coding Illustration" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Infosys Limited',
            role: 'Senior Associate Consultant',
            duration: 'November 2024 - Present',
            location: 'Pune, Maharashtra, India',
            description: [
                'Developed a secure and scalable React-based KYC portal for a major bank, enhancing document upload/download workflows.',
                'Leveraged Redux Toolkit for efficient global state management and React Router DOM for smooth navigation.',
                'Achieved over 70% improvement in operational efficiency by automating manual processes.'
            ],
            tech: ['React JS', 'Redux Toolkit', 'Vite', 'Jest', 'React Testing Library']
        },
        {
            company: 'Accenture Solutions',
            role: 'Application Developer Analyst',
            duration: 'June 2023 - October 2024',
            location: 'Bangalore, Karnataka, India',
            description: [
                'Contributed to developing a micro-frontend application for a banking product targeting Small and enterprise businesses.',
                'Integrated React with AngularJS using Single SPA, enabling modular, scalable architecture.',
                'Applied organizational design and routing strategies with Redux Toolkit and Vite.'
            ],
            tech: ['React JS', 'Micro-Frontend', 'Redux Toolkit', 'Vite']
        },
        {
            company: 'Accenture Solutions',
            role: 'Application Developer Associate',
            duration: 'April 2021 - May 2023',
            location: 'Bangalore, Karnataka, India',
            description: [
                'Independently developed the frontend of an internal affiliate handbook tool using React.',
                'Implemented Admin panel with role-based authorization and Single-Sign-Ons using OAuth2.0.',
                'Improved user experience by 50% through optimization techniques like lazy-loading and memoization.'
            ],
            tech: ['React JS', 'HTML', 'CSS', 'Vite', 'Axios', 'OAuth2.0']
        }
    ];

    return (
        <section id="experience" className="py-24 px-8 max-w-1000px mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl mb-12 flex items-center text-[var(--text-color)]"
            >
                <span className="text-[var(--primary-color)] mr-2">02.</span> Where I've Worked
                <span className="h-px bg-[var(--glass-border)] flex-1 ml-4"></span>
            </motion.h2>

            <div className="flex flex-col gap-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card-glow p-8 border-l-2 border-l-[var(--primary-color)]"
                    >
                        <div className="flex justify-between flex-wrap mb-2">
                            <h3 className="text-2xl text-[var(--text-color)] m-0">{exp.role}</h3>
                            <span className="text-[var(--text-secondary)] font-mono">{exp.duration}</span>
                        </div>
                        <h4 className="text-lg text-[var(--primary-color)] mt-1 mb-4">@ {exp.company}</h4>
                        <ul className="list-none p-0 m-0">
                            {exp.description.map((item, i) => (
                                <li key={i} className="relative pl-5 mb-2 text-[var(--text-secondary)] leading-relaxed">
                                    <span className="absolute left-0 text-[var(--primary-color)]">▹</span> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exp.tech.map((t, i) => (
                                <span key={i} className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--glass-bg)] px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

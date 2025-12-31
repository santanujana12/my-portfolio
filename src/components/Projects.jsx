import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Netflix Clone',
            description: 'Developed a user-friendly streaming interface replicating core Netflix features. Integrated TMDB APIs for dynamic movie data and Google Firebase for authentication.',
            tech: ['React JS', 'Redux Toolkit', 'Tailwind CSS', 'Firebase'],
            link: "https://earnest-gecko-b95f82.netlify.app/"
        },
        {
            title: 'Tinder Clone',
            description: 'Full-stack web application emulating Tinder’s core features like profile swiping and matching. Built with React JS frontend and Express JS/MongoDB backend.',
            tech: ['React JS', 'Express JS', 'MongoDB']
        },
        {
            title: 'Digital Handbook for Affiliates',
            description: 'Internal tool dashboard for affiliate records with CRUD operations. Implemented Admin panel with role-based authorization and OAuth2.0 SSO.',
            tech: ['React JS', 'Vite', 'Axios', 'OAuth2.0']
        },
    ];

    return (
        <section id="projects" className="py-12 md:py-24 px-4 md:px-8 max-w-1000px mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl mb-8 md:mb-12 flex items-center text-[var(--text-color)]"
            >
                <span className="text-[var(--primary-color)] mr-2">03.</span> Some Things I've Built
                <span className="h-px bg-[var(--glass-border)] flex-1 ml-4"></span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <a href={project?.link} target="_blank" rel="noopener noreferrer" className='decoration-none'>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="card-glow p-6 md:p-8 text-[var(--text-color)]"
                        >
                            <div className="flex justify-between mb-4 md:mb-6 text-[var(--primary-color)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <h3 className="text-lg md:text-xl mb-2 text-[var(--text-color)]">{project.title}</h3>
                            <p className="text-sm md:text-base text-[var(--text-secondary)] mb-4 md:mb-6 leading-relaxed">{project.description}</p>
                            <ul className="flex flex-wrap gap-2 md:gap-4 list-none p-0 m-0 text-[10px] md:text-xs font-mono text-[var(--text-secondary)]">
                                {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;

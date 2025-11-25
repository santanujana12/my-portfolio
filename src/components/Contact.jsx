import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-24 px-4 md:px-8 max-w-600px mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[var(--primary-color)] text-base md:text-lg mb-3 md:mb-4 font-mono">04. What's Next?</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-[var(--text-color)]">Get In Touch</h3>
                <p className="text-[var(--text-secondary)] text-base md:text-xl leading-relaxed mb-8 md:mb-12">
                    I'm currently looking for new opportunities and would love to hear from you! Whether you have a job opportunity, a project collaboration, or just want to connect, feel free to reach out.
                </p>
                <a href="mailto:santanu.jana@aol.com" className="btn-primary text-sm md:text-base">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;

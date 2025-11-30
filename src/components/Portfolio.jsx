import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { id: 1, title: 'NEON BRAND', category: 'Branding', img: 'https://placehold.co/800x600/111/fff?text=Neon' },
    { id: 2, title: 'URBAN FLOW', category: 'Web Design', img: 'https://placehold.co/800x600/222/fff?text=Urban' },
    { id: 3, title: 'ABSTRACT MOTION', category: 'Animation', img: 'https://placehold.co/800x600/333/fff?text=Motion' },
    { id: 4, title: 'TECH CORP', category: 'UI/UX', img: 'https://placehold.co/800x600/444/fff?text=Tech' },
    { id: 5, title: 'FUTURE LABS', category: 'Development', img: 'https://placehold.co/800x600/555/fff?text=Future' },
];

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section style={{ padding: '10vh 5vw', position: 'relative' }} onMouseMove={handleMouseMove}>
            {/* SVG Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="liquid">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.7" numOctaves="3" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                </filter>
            </svg>

            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                marginBottom: '4rem',
                fontWeight: 700
            }}>
                SELECTED WORKS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        onHoverStart={() => setHoveredProject(project)}
                        onHoverEnd={() => setHoveredProject(null)}
                        style={{
                            borderTop: '1px solid #333',
                            padding: '3rem 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                            zIndex: 10
                        }}
                        whileHover={{ paddingLeft: '2rem', backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2rem, 4vw, 5rem)',
                            fontWeight: 600,
                            margin: 0
                        }}>
                            {project.title}
                        </h3>
                        <p style={{ fontSize: '1.2rem' }}>{project.category}</p>
                    </motion.div>
                ))}
                <div style={{ borderTop: '1px solid #333' }} />
            </div>

            <AnimatePresence>
                {hoveredProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mousePos.x - 200,
                            y: mousePos.y - 150
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '400px',
                            height: '300px',
                            pointerEvents: 'none',
                            zIndex: 5,
                            overflow: 'hidden',
                            borderRadius: '8px',
                            filter: 'url(#liquid)' // Apply the liquid filter
                        }}
                    >
                        <img
                            src={hoveredProject.img}
                            alt={hoveredProject.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;

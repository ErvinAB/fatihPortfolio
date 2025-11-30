import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 5vw 50px',
            position: 'relative'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? '1fr auto 1fr' : '1fr',
                gap: '4rem',
                alignItems: 'center',
                maxWidth: '1400px',
                width: '100%'
            }}>
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ textAlign: window.innerWidth > 768 ? 'right' : 'center' }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.2
                    }}>
                        Graphic/Product<br />& Brand Designer
                    </h2>
                </motion.div>

                {/* Center: Avatar + Name + Tools */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem',
                        minWidth: '300px'
                    }}
                >
                    {/* Circular Avatar */}
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--color-accent)',
                        boxShadow: '0 0 30px rgba(0, 200, 83, 0.3)'
                    }}>
                        <img
                            src="/avatar.png"
                            alt="Fatih Kerim"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Stylized Name */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                            letterSpacing: '0.1em',
                            color: '#888',
                            marginBottom: '0.25rem',
                            fontWeight: 500,
                            fontFamily: 'var(--font-display)'
                        }}>
                            Fatih
                        </div>
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            margin: 0,
                            lineHeight: 0.9,
                            textTransform: 'uppercase'
                        }}>
                            KERIM
                        </h1>
                    </div>

                    {/* Tools Strip */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        opacity: 0.6
                    }}>
                        {['Ai', 'Ps', 'Canva', 'Figma', 'Blender', 'AE'].map((tool, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: 600
                                }}
                            >
                                {tool.slice(0, 2)}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Bio */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ textAlign: window.innerWidth > 768 ? 'left' : 'center' }}
                >
                    <p style={{
                        fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                        color: '#888',
                        lineHeight: 1.6,
                        maxWidth: '400px',
                        margin: window.innerWidth > 768 ? '0' : '0 auto'
                    }}>
                        Hi, I'm Fatih, a graphic designer, product designer, and brand strategy passionate about crafting result-driven designs and giving your products an interesting story and look.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

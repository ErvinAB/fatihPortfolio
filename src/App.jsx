import React, { useState, useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence, useScroll, useMotionValueEvent, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import Magnetic from './components/Magnetic';
import Services from './components/Services';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Theme switching kept for potential future use
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 2000);
    }, []);

    return (
        <ReactLenis root>
            <div className="app">
                <AnimatePresence mode='wait'>
                    {isLoading && <Preloader />}
                </AnimatePresence>

                <div className="grain-overlay"></div>
                <CustomCursor />

                {/* Header with Navigation Buttons */}
                <motion.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        padding: '1.5rem 5vw',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.5rem',
                        zIndex: 100,
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        flexWrap: 'wrap'
                    }}
                >
                    <Magnetic>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <span style={{ color: 'var(--color-accent)' }}>👁️</span>
                            See my work
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <span style={{ color: 'var(--color-accent)' }}>🛍️</span>
                            My catalog
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button style={{
                            background: 'var(--color-accent)',
                            border: 'none',
                            color: 'black',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}>
                            <span>✓</span>
                            Book a service
                        </button>
                    </Magnetic>
                </motion.header>

                <main>
                    <Hero />
                    <Services />
                    <Contact />
                </main>
            </div>
        </ReactLenis>
    );
}

export default App;

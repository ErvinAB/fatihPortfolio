import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Merhaba"];

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, 140);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <motion.div
            variants={{
                initial: { top: 0 },
                exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
            }}
            initial="initial"
            exit="exit"
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                zIndex: 99,
                backgroundColor: '#141516'
            }}
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={{
                            initial: { opacity: 0 },
                            enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
                        }}
                        initial="initial"
                        animate="enter"
                        style={{
                            display: 'flex',
                            color: 'white',
                            fontSize: '42px',
                            alignItems: 'center',
                            position: 'absolute',
                            zIndex: 1
                        }}
                    >
                        <span style={{ display: 'block', width: '10px', height: '10px', background: 'white', borderRadius: '50%', marginRight: '10px' }}></span>
                        {words[index]}
                    </motion.p>
                    <svg style={{ position: 'absolute', top: 0, width: '100%', height: 'calc(100% + 300px)' }}>
                        <motion.path variants={curve} initial="initial" exit="exit" fill="#141516"></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );
};

export default Preloader;

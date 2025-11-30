import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const icons = [
    { name: 'Mail', url: 'mailto:hello@fatih.design', label: '✉️' },
    { name: 'Instagram', url: '#', label: '📸' },
    { name: 'WhatsApp', url: '#', label: '💬' },
    { name: 'Behance', url: '#', label: 'Bh' },
];

const Contact = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100
        }}>
            <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem 2rem',
                background: 'rgba(20, 20, 20, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#888',
                    fontSize: '0.9rem'
                }}>
                    Contact me
                </div>
                {icons.map((icon, index) => (
                    <Magnetic key={index}>
                        <a
                            href={icon.url}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: 'white',
                                transition: 'background 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#333'}
                        >
                            {icon.label}
                        </a>
                    </Magnetic>
                ))}
            </div>
        </div>
    );
};

export default Contact;

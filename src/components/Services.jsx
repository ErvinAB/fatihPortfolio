import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const services = [
    { title: 'Brand Identity & Logo Design', icon: '🎨', img: 'https://placehold.co/400x200/111/fff?text=Brand' },
    { title: 'Social Media Ads / Design', icon: '📱', img: 'https://placehold.co/400x200/222/fff?text=Social' },
    { title: 'YouTube Thumbnails', icon: '▶️', img: 'https://placehold.co/400x200/333/fff?text=YouTube' },
    { title: 'Movie Posters / Album Covers', icon: '🎬', img: 'https://placehold.co/400x200/444/fff?text=Poster' },
    { title: 'Sports Design', icon: '⚽', img: 'https://placehold.co/400x200/555/fff?text=Sports' },
    { title: 'AI Prompt for Design', icon: '🤖', img: 'https://placehold.co/400x200/666/fff?text=AI' },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ service }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-full w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0"
        >
            <div
                className="glass-card"
                style={{
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '100%',
                    transform: "translateZ(50px)", // Pop out effect
                    transformStyle: "preserve-3d",
                    position: 'relative'
                }}
            >
                {/* Spotlight Effect */}
                <motion.div
                    style={{
                        background: useMotionTemplate`
                    radial-gradient(
                    650px circle at ${xSpring}px ${ySpring}px,
                    rgba(0, 200, 83, 0.15),
                    transparent 80%
                    )
                `,
                        position: 'absolute',
                        inset: -1,
                        borderRadius: '16px',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                />

                <div style={{
                    width: '80px',
                    height: '60px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    zIndex: 10
                }}>
                    <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, zIndex: 10 }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>{service.title}</h3>
                </div>
                <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    zIndex: 10
                }}>
                    →
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section style={{ padding: '5vh 5vw 15vh' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                }}>
                    what I do
                </h2>
                <div style={{ width: '40px', height: '3px', background: 'var(--color-accent)' }}></div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                perspective: '1000px' // Essential for 3D tilt
            }}>
                {services.map((service, index) => (
                    <TiltCard key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;

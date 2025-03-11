"use client"

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Navbar from "./Navbar";
import GridDistortion from "./anims/GridDistortion";
import Parallex from "./Parallax";
import TeslaPage from "./3d/modelfeatures";
import Feature from "./3d/Feature";


export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5, stagger: 0.2 }
        );

        gsap.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
        );
    }, []);

    return (
        <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
            {/* <Navbar /> */}

            {/* Background with Grid Distortion Effect */}
            <div className="absolute inset-0 w-full h-full">
                <GridDistortion
                    imageSrc="/cybertruck-bg.jpg"
                    grid={15}
                    mouse={0.1}
                    strength={0.2}
                    relaxation={0.85}
                    className="w-full h-full"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24">
                <motion.div ref={textRef} className="max-w-2xl text-white space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-gray-900">
                        CYBERTRUCK
                    </h1>
                    <p className="text-lg md:text-2xl relative top-[-30px] left-[620px] leading-relaxed">
                        The future of trucks is here. Unparalleled performance meets rugged durability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        {[
                            { label: "Range (est.)", value: "500+ mi" },
                            { label: "0-60 mph", value: "As fast as 2.9s" },
                            { label: "Towing Capacity", value: "11,000+ lbs" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                                className="bg-white/10 backdrop-blur-lg p-5 rounded-lg shadow-lg text-center"
                            >
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-sm text-gray-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div ref={buttonRef} className="flex flex-wrap gap-4 mt-8">
                        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-lg tracking-wide shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Order Now
                        </button>
                        <button className="bg-black/30 backdrop-blur-lg text-white border border-white px-8 py-3 rounded-lg font-semibold text-lg tracking-wide hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>
            <Parallex />

        </div>
    );
}

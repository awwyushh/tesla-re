import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import App from "../App";
import BlurText from "../TextEffects/BlurText";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Progress counter effect
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Small delay before transition
                    return 100;
                }
                return prev + 1;
            });
        }, 60); // Adjust speed by changing this interval

        return () => clearInterval(interval);
    }, []);

    // Audio effect
    useEffect(() => {
        const audio = new Audio("/tesla-whoosh.mp3");
        audio.loop = false;
        audio.volume = 0.5;

        if (typeof window !== "undefined") {
            audio.play().catch((error) => console.error("Audio failed:", error));
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="loading"
                    className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/tesla.mp4"
                        onError={(e) => console.error("Video failed to load:", e)}
                    />

                    {/* Loading Overlay with Percentage */}
                    <motion.div
                        className="absolute bottom-8 right-8 flex items-center justify-center z-10 pointer-events-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="text-white text-[23vw] font-bold"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            {progress}%
                        </motion.span>
                    </motion.div>

                    <div
                        className="absolute top-8 left-8 flex items-center justify-center text-zinc-100 z-10 pointer-events-none"
                    >
                        <h1 className="text-4xl font-bold">Cybertruck</h1>
                </div>




                </motion.div>
    ) : (
        <motion.div
            key="app"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <App />
        </motion.div>
    )
}
        </AnimatePresence >
    );
}

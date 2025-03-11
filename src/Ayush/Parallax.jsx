import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronRight, Truck, Zap, Shield, Gauge, Wrench, X } from "lucide-react";
import { useState, useRef } from "react";
import FlowingMenu from "./anims/FlowingMenu";
import TeslaPage from "./3d/modelfeatures";


// Custom Button component
const Button = ({ children, variant, size, className, ...props }) => {
    const baseStyles = "font-bold rounded transition-colors";
    const variantStyles = variant === "outline"
        ? "border border-white bg-transparent hover:bg-white hover:text-black"
        : "bg-white text-black hover:bg-gray-200";
    const sizeStyles = size === "lg" ? "px-8 py-6 text-lg" : "px-4 py-2";

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Custom Card components
const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
    <div className={`p-6 ${className}`}>{children}</div>
);

// Custom ScrollArea component
const ScrollArea = ({ children, className, orientation }) => (
    <div className={`overflow-x-auto ${className}`}>{children}</div>
);

export default function Parallex() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const parallaxTextRef = useRef(null);
    const { scrollYProgress: parallaxProgress } = useScroll({
        target: parallaxTextRef,
        offset: ["start end", "end start"],
    });

    const teslaModels = [
        { link: "#", text: "Model S", image: "/tesla-model-s.jpg" },
        { link: "#", text: "Model 3", image: "/tesla-model-3.jpg" },
        { link: "#", text: "Model X", image: "/tesla-model-x.jpg" },
        { link: "#", text: "Model Y", image: "/tesla-model-y.jpg" },
        { link: "#", text: "Cybertruck", image: "/tesla-cybertruck.jpg" },
    ];

    const parallaxX = useTransform(parallaxProgress, [0, 1], ["0%", "-50%"]);

    const sections = [
        {
            id: "hero",
            title: "CYBERTRUCK",
            subtitle: "FUTURE-FORWARD DESIGN",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DzldFZmAm8kdGy-Dd2FKhkJzfi4GS3ZeVQ&s",
            description: "A VEHICLE THAT DOESN'T LOOK LIKE ANYTHING ELSE ON THE ROAD",
        },
        // ... (keeping all other sections the same, just updating image URLs)
        {
            id: "order",
            title: "ORDER NOW",
            subtitle: "BE PART OF THE FUTURE",
            image: "/teslacar.jpg",
            description: "RESERVE YOUR CYBERTRUCK TODAY",
        },
    ];

    const features = [
        {
            icon: <Truck className="h-8 w-8" />,
            title: "RUGGED UTILITY",
            description: "Vault-like storage. Room for your toolbox, tire and gear.",
        },
        // ... (keeping all other features the same)
    ];

    const specs = [
        { label: "Range", value: "500+ miles" },
        // ... (keeping all other specs the same)
    ];

    const galleryImages = [
        "https://wallpapercg.com/download/tesla-cybertruck--18126.jpg",
        "https://images.wsj.net/im-927888?width=1280&size=1.33333333",
        "https://automaxgroup.me/wp-content/uploads/2025/01/1.webp",
        "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup-700x350.png",
        // ... (updating all gallery images to use real placeholder URLs)
    ];

    return (
        <div ref={containerRef} className="relative">
            {/* Navigation */}
            <div className="relative">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white">
                    <div className="text-2xl font-bold">TESLA</div>
                    <button
                        className="border-white text-white hover:bg-white hover:text-black px-4 py-2 border rounded"
                        onClick={toggleMenu}
                    >
                        ORDER NOW
                    </button>
                </nav>

                {/* Flowing Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex flex-col">
                        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                            <a href="/" aria-label="Tesla Home">
                                <img
                                    src="/tesla-logo.svg"
                                    alt="Tesla Logo"
                                    className="h-6 w-auto bg-cover"
                                />
                            </a>
                            <button
                                className="text-white hover:text-gray-300 transition-colors"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                <X className="h-8 w-8" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <FlowingMenu items={teslaModels} />
                        </div>
                    </div>
                )}
            </div>

            {/* Full-screen sections */}
            {sections.map((section, index) => (
                <motion.section
                    key={section.id}
                    id={section.id}
                    className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <img
                        src={section.image}
                        alt={section.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 text-center text-white p-4 max-w-4xl">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {section.title}
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {section.subtitle}
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl mb-12"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {section.description}
                        </motion.p>
                        {index === sections.length - 1 && (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                                    ORDER NOW
                                </Button>
                            </motion.div>
                        )}
                    </div>
                    {index < sections.length - 1 && (
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronDown className="h-10 w-10 text-white" />
                        </motion.div>
                    )}
                </motion.section>
            ))}

            {/* Rest of the components remain largely the same, with these key changes: */}
            {/* 1. Replace Image components with regular img tags */}
            {/* 2. Use the custom Button, Card, and ScrollArea components */}
            {/* 3. Update image URLs to use standard URLs instead of Next.js optimized paths */}

            {/* Example of gallery section with changes: */}
            <section className="relative h-screen w-full bg-black flex items-center">
                <div className="w-full">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-12 text-center text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        GALLERY
                    </motion.h2>
                    <ScrollArea className="w-full whitespace-nowrap rounded-md" orientation="horizontal">
                        <div className="flex space-x-4 p-4">
                            {galleryImages.map((image, index) => (
                                <Card key={index} className="w-[300px] md:w-[500px] flex-shrink-0 overflow-hidden rounded-lg">
                                    <CardContent className="p-0">
                                        <img
                                            src={image}
                                            alt={`Cybertruck gallery image ${index + 1}`}
                                            className="w-full h-auto aspect-video object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                    
                </div>
            </section>

            {/* ... rest of the components ... */}

            <TeslaPage />

        </div>
    );
}
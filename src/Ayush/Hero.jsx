"use client"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import GridDistortion from "./anims/GridDistortion"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar />

      {/* Background with Grid Distortion Effect */}
      <div className="absolute inset-0 w-full h-full">
        <GridDistortion
          imageSrc="/cybertruck-bg.jpg"
          grid={15}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">CYBERTRUCK</h1>
          <p className="text-xl md:text-2xl mb-6">
            Better utility than a truck with more performance than a sports car
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
              <p className="text-3xl font-bold">500+ mi</p>
              <p className="text-sm">Range (est.)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
              <p className="text-3xl font-bold">0-60 mph</p>
              <p className="text-sm">As fast as 2.9s</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
              <p className="text-3xl font-bold">11,000+ lbs</p>
              <p className="text-sm">Towing Capacity</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-opacity-90 transition-colors">
              Order Now
            </button>
            <button className="bg-black/30 backdrop-blur-sm text-white border border-white px-8 py-3 rounded font-medium hover:bg-black/50 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


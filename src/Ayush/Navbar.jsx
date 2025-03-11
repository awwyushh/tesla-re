import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import FlowingMenu from "./anims/FlowingMenu";

const teslaModels = [
  { link: "#", text: "Model S", image: "/tesla-model-s.jpg" },
  { link: "#", text: "Model 3", image: "/tesla-model-3.jpg" },
  { link: "#", text: "Model X", image: "/tesla-model-x.jpg" },
  { link: "#", text: "Model Y", image: "/tesla-model-y.jpg" },
  { link: "#", text: "Cybertruck", image: "/tesla-cybertruck.jpg" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="text-white"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
              <a href="/" aria-label="Tesla Home">
                <img
                  src="/tesla-logo.svg"
                  alt="Tesla Logo"
                  width={120}
                  height={24}
                  className="h-6 w-auto object-contain"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/series-s">SERIES-S</NavLink>
              <NavLink href="/range">RANGE</NavLink>
              <NavLink href="/battery">BATTERY</NavLink>
              <NavLink href="/body">BODY</NavLink>
              <NavLink href="/interior">INTERIOR</NavLink>
              <NavLink href="/launch">LAUNCH</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" aria-label="Tesla Home">
              <img
                src="/tesla-logo.svg"
                alt="Tesla Logo"
                width={120}
                height={24}
                className="h-6 w-auto"
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
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
    >
      {children}
    </a>
  );
}
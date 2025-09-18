"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Container from "@/components/ui/Container";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Image
            src="/dsl_icon.png"
            alt="DSL Service Logo"
            width={75}
            height={75}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
            >
              Acasă
            </button>
            <button
              onClick={() => scrollToSection("itp-section")}
              className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
            >
              ITP
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
            >
              Despre Noi
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-medium"
            >
              Programează-te
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "x" : "menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-4 bg-white/95 backdrop-blur-md">
            <Container>
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent transition-colors"
              >
                Acasă
              </button>
              <button
                onClick={() => scrollToSection("itp-section")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent transition-colors"
              >
                ITP
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent transition-colors"
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent transition-colors"
              >
                Despre Noi
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-accent transition-colors"
              >
                Contact
              </button>
              <div className="px-4 pt-2 flex items-center gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="flex-1 justify-center"
                >
                  Programează-te
                </Button>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </nav>
  );
}

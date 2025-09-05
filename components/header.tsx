"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarArrowDown, Clock, Menu, X } from "lucide-react";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change header opacity on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = () => {
    if (pathname === "/") {
      // If on home page, just scroll to contact section
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to home page and then scroll to contact
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-slate-50 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        scrolled ? "bg-background/100" : "bg-background/100"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/profile-logo.jpg"
              alt="KET Design Logo"
              width={120}
              height={48}
              priority
              className="h-12 w-full"
              style={{
                mixBlendMode: "darken",
                backgroundColor: "transparent",
              }}
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link
              href="/"
              className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors ${
                pathname === "/"
                  ? "text-foreground border-foreground"
                  : "text-accent border-transparent "
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors ${
                pathname === "/about"
                  ? "text-foreground border-foreground"
                  : "text-accent border-transparent "
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors ${
                pathname === "/projects"
                  ? "text-foreground border-foreground"
                  : "text-accent border-transparent "
              }`}
            >
              Projects
            </Link>
            <Button
              onClick={handleContactClick}
              className="font-sans cursor-pointer px-4 py-2 bg-foreground text-white border-b-2 transition-colors rounded-lg flex items-center space-x-2"
            >
              <span>Book Appointment</span>
              <Calendar   className="w-4 h-4 text-white animate-pulse" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-neutral-800 font-extrabold cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className="h-10 w-10 stroke-[2] rounded-lg bg-neutral-800 p-0 text-accent-foreground font-extrabold cursor-pointer"
                size={24}
              />
            ) : (
              <Menu
                className="h-20 w-20 stroke-[2] rounded-lg bg-neutral-800 p-0 text-accent-foreground font-extrabold cursor-pointer"
                size={24}
              />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 font-medium">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors inline-block w-fit ${
                  pathname === "/"
                    ? "text-foreground border-foreground"
                    : "text-accent border-transparent "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors inline-block w-fit ${
                  pathname === "/about"
                    ? "text-foreground border-foreground"
                    : "text-accent border-transparent "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className={`font-sans cursor-pointer pb-1 border-b-2 transition-colors inline-block w-fit ${
                  pathname === "/projects"
                    ? "text-foreground border-foreground"
                    : "text-accent border-transparent "
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              <Button
                onClick={handleContactClick}
                className="font-sans cursor-pointer px-4 py-2  bg-foreground text-white border-b-2 transition-colors rounded-lg w-[11rem]"
              >
                <span>Book Appointment</span>
                <Calendar className="w-4 h-4 text-white animate-pulse" />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

"use client";

import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar"; // Ensure this is correctly implemented


export function NavbarDemo() {
  const navItems = [
   
    { name: "Home", path: "/home" },
    { name: "Projects", path: "/projectspage" },
    { name: "Blog", path: "/blogpage" },
    // { name: "TimelineDemo", path: "/timelineDemo" },
    { name: "Contact", path: "/contactpage" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="fixed top-0 py-10 left-0 right-0 z-50 backdrop-blur-sm dark:bg-black   ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
            <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </NavBody>
       

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 block py-2 "
              >
                {item.name}
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
    </>
  );
}

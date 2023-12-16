"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-white flexBetween max-container padding-container relative z-30 py-5 flex-row">
      <div
        onClick={() => (window.location.href = "/")}
        style={{ cursor: "pointer" }}
      >
        <Image src="/logo.png" alt="logo" width={200} height={200} />
      </div>

      {/* Menu icon for smaller devices */}
      <div className="lg:hidden">
        <Image
          src="/menu.png"
          alt="menu"
          width={50}
          height={50}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-20 right-0 bg-darkcyan-500 shadow-md p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mb-3">
              <div
                onClick={() => (window.location.href = link.href)}
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Regular menu for larger devices */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <div
              onClick={() => (window.location.href = link.href)}
              style={{ cursor: "pointer" }}
            >
              {link.label}
            </div>
          </li>
        ))}
      </ul>
      {/* Login button for larger devices */}
      <div className="lg:flexCenter hidden gap-3">
        <Button  type="button" title="Students" variant="btn_blue" url="/" />
        <Button  type="button" title="Non-Profits" variant="btn_white" url="/" />
      </div>
    </nav>
  );
};

export default Navbar;

import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "./navbar";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[transparent] text-[#488286]">
      {/* Navbar */}
      <Navbar/>

      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#bd7581] py-6 px-4 mt-10 text-[#2d2d2d] shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn transition-all duration-700">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/codeLogo.png"
              alt="CodeCollab Logo"
              className="w-15 h-15 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="font-semibold text-xl hidden sm:block">
              UMass CodeCollab
            </p>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col md:items-end items-center">
            <div className="flex gap-6 text-lg">
              <a
                href="https://www.instagram.com/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-7 h-7"
                />
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/supriyaahejib/personal-portfolio-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-7 h-7" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#a3747e] transition duration-200"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs mt-0 text-center opacity-70">
          &copy; 2025 UMass CodeCollab
        </p>
      </footer>
    </div>
  );
}

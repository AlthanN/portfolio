import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "./navbar";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-[transparent] text-[#488286]">
      
      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      
    </div>
  );
}

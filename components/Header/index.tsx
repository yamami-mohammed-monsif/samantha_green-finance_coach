"use client";
import { useState } from "react";
import HamburgerButton from "../UI/HamburgerButton";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Link from "next/link";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-5 md:px-8 lg:px-[100px] mb-6 max-w-[1200px] mx-auto">
      <div className="relative overflow-hidden flex items-center justify-between px-4 md:px-6 py-2 lg:py-4 rounded-full">
        <div className="bg-white/30 backdrop-blur-xs w-full absolute inset-0 -z-10" />
        <Link href="/" className="text-white font-bold">
          SAMANTHA
        </Link>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Index;

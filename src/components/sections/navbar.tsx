"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import DesktopMenu from "../navbar/desktopMenu";
import MobileMenu from "../navbar/mobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/#services", label: "SERVICES" },
    { href: "/#caseStudies", label: "CASE STUDIES" },
    { href: "/blogs", label: "BLOGS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contactus", label: "CONTACTS" },
  ];
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
   <motion.nav
  initial={{ opacity: 0, y: -5 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, type: "keyframes" }}
  className={`fixed left-1/2 -translate-x-1/2 z-50 font-archivo !text-foreground transition-all duration-300
    ${scrolled
      ? "top-4 w-[90%] rounded-full backdrop-blur border border-zinc-900"
      : "top-0 w-full rounded-none bg-background/40 bakdrop-blur border-b border-zinc-900"
    }`}
>
  <div className="flex justify-between items-center px-4 md:px-8 p-2 md:py-4">
    <Link href="/" className="text-2xl md:text-3xl">
      <span className="font-bold">Valet</span><span className="text-primary font-bold">Rex</span>
    </Link>

    {/* Desktop Menu */}
    <div className="hidden lg:flex px-4">
      <DesktopMenu
        navItems={navItems}
        pathname={pathname}
        />
    </div>
    {/* Hamburger */}
    <div className="lg:hidden text-3xl mt-1 text-primary">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose /> : <TiThMenu />}
      </button>
    </div>
  </div>
</motion.nav>
<div className="w-full relative overflow-hidden">
        <MobileMenu
          isOpen={isOpen}
          navItems={navItems}
          pathname={pathname}
          closeMenu={() => setIsOpen(false)}
          />
      </div>
          </>
  );
}

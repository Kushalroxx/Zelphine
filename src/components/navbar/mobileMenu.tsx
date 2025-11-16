import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

export default function MobileMenu({
  isOpen,
  navItems,
  pathname,
  closeMenu,
}: {
  isOpen: boolean;
  navItems: { href: string; label: string }[];
  pathname: string;
  closeMenu: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-foreground/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
            />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2  bg-background shadow-lg z-50 flex flex-col px-6 pt-3 gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            >
            <div className="flex justify-between items-start">
            <ul className="flex flex-col gap-6 mt-16">
              {navItems.map((item) => (
                <li key={item.href} onClick={closeMenu}>
                  <Link
                    href={item.href}
                    className={`text-lg ${
                      pathname.startsWith(item.href)
                        ? "text-primary font-bold"
                        : "hover:text-primary text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              
            </ul>
             <button className="text-3xl cursor-pointer text-primary" onClick={() => closeMenu()}>
                        {isOpen ? <MdClose /> : <TiThMenu />}
                      </button>

                      </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

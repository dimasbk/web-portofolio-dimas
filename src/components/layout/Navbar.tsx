"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

interface NavItem {
  label: string;
  href: string;
  code: string;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/", code: "01" },
  { label: "Experience", href: "/#experience", code: "02" },
  { label: "Projects", href: "/projects", code: "03" },
  { label: "Contact", href: "/#contact", code: "04" },
];

/**
 * Sticky Swiss Minimalist navigation bar with 12-column grid alignment and mobile drawer.
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "/") {
      setActiveHash("");
    } else if (href.startsWith("/#")) {
      setActiveHash(href.slice(1));
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeHash === "";
    if (href.startsWith("/#")) return pathname === "/" && activeHash === href.slice(1);
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-100 w-full border-b border-swiss-grey/30 bg-swiss-white/95 backdrop-blur-sm">
      <div className="swiss-container">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand & System Identifier */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-swiss-taupe"
            onClick={() => handleNavClick("/")}
          >
            <span className="flex h-8 w-8 items-center justify-center border border-swiss-black bg-swiss-black text-swiss-white transition-colors duration-200 group-hover:bg-swiss-taupe group-hover:border-swiss-taupe">
              <Terminal className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-swiss-black leading-none">
                {profile.name}
              </span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-swiss-grey leading-none">
                {profile.role} // ID
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-swiss-taupe",
                    active
                      ? "font-medium text-swiss-black"
                      : "font-normal text-swiss-grey hover:text-swiss-black"
                  )}
                >
                  <span className="font-mono text-[10px] text-swiss-taupe">
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-0 h-0.5 bg-swiss-black"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-1.5 border border-swiss-black bg-swiss-black px-3.5 py-2 text-xs font-semibold tracking-wide text-swiss-white transition-all duration-200 hover:bg-neutral-800 active:-translate-y-px sm:inline-flex"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-swiss-grey/40 bg-swiss-white text-swiss-black transition-colors duration-200 hover:border-swiss-black md:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-swiss-grey/30 bg-swiss-white md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="swiss-container flex flex-col divide-y divide-swiss-grey/20 py-2"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center justify-between py-3.5 text-sm transition-colors duration-200",
                      active
                        ? "font-semibold text-swiss-black"
                        : "font-normal text-swiss-grey hover:text-swiss-black"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-swiss-taupe">
                        {item.code}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {active && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-swiss-black">
                        ACTIVE
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="py-4">
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 border border-swiss-black bg-swiss-black px-4 py-3 text-xs font-semibold tracking-wide text-swiss-white"
                >
                  <span>EMAIL: {profile.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

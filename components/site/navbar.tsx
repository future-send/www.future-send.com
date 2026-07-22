"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/site/cta-button";
import { div } from "framer-motion/client";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent")}>
      <nav className="mx-auto container flex h-22 items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          <img className="h-12" src="logo.png" alt="FutureSend Logo" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <div key={link.href} className="min-w-28">
                <Link href={link.href} className={cn("rounded-sm  px-8 font-heading py-2 text-base  font-bold uppercase transition-colors", active ? "bg-primary text-foreground" : "text-muted-foreground hover:text-foreground")}>
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <p className="rounded-sm  pe-4 font-heading py-2 text-base  font-bold uppercase transition-colors">Available August 31</p>

          <Link href="/">
            <img src="/images/iphone.svg" alt="Download on the App Store" className="h-9" />
          </Link>

          <Link href="/">
            <img src="/images/android.svg" alt="Get it on Google Play" className="h-9" />
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)} className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={cn("rounded-xl px-4 py-3 text-base font-medium transition-colors", active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary  hover:text-foreground")}>
                  {link.label}
                </Link>
              );
            })}
            <CTAButton href="/contact" className="mt-2 w-full">
              Download App
            </CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import { AtSign, MessageCircle, Send, Share2 } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/ethan-ramolia-795b85419/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "mailto:ethanramolia@gmail.com", label: "Email", icon: AtSign },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto container px-5 py-14 sm:px-8">
        <div className="flex flex-col  gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex content-start gap-8">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
              <img className="h-36" src="logo1.png" alt="FutureSend Logo" />
            </Link>
            <p className="mt-4 max-w-96 text-pretty leading-relaxed text-muted-foreground">Schedule messages across Apple, Android, WhatsApp, and Email — and let AI personalize every word.</p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold font-heading text-foreground">Navigation</span>
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground font-heading  transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold font-heading  text-foreground">Follow</span>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} FutureSend. All rights reserved.</p>
          <p>Built for people who never want to forget a moment.</p>
        </div>
      </div>
    </footer>
  );
}

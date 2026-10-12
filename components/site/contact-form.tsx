"use client";

import { Phone, Mail, MapPin } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function ContactForm() {
  return (
    <div className="flex flex-col gap-6 text-xl ">
      {/* Phone */}
      <a href="tel:+19173643751" className="group flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground text-primary transition-colors group-hover:bg-white">
          <Phone className="size-5" />
        </div>

        <div className="flex flex-col ">
          <h3 className="font-medium text-foreground">Phone</h3>
          <p className="text-muted-foreground transition-colors group-hover:text-foreground">+1 917 364 3751</p>
        </div>
      </a>

      {/* Email */}
      <a href="mailto:futuresendapp@gmail.com" className="group flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground text-primary transition-colors group-hover:bg-white">
          <Mail className="size-5 " />
        </div>

        <div className="flex flex-col ">
          <h3 className="font-medium text-foreground">Email</h3>
          <p className="text-muted-foreground transition-colors group-hover:text-foreground">futuresendapp@gmail.com</p>
        </div>
      </a>

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground text-primary">
          <MapPin className="size-5" />
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium text-foreground">Address</h3>
          <p className="text-muted-foreground">69 Greenway W, New Hyde Park, NY 11040, USA</p>
        </div>
      </div>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" className="group flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground text-primary transition-colors group-hover:bg-white">
          <LinkedInIcon />
        </div>

        <div className="flex flex-col ">
          <h3 className=" font-medium text-foreground">LinkedIn</h3>
          <p className="text-muted-foreground transition-colors group-hover:text-foreground">Connect with us</p>
        </div>
      </a>
    </div>
  );
}

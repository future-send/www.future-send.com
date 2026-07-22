"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "done";

const fieldClasses = "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 focus:border-primary focus:ring-3 focus:ring-ring/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (!res.ok) {
      //   throw new Error("Failed to send");
      // }

      form.reset();
      setStatus("done");

      // Dopo 5 secondi torna al pulsante normale
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base font-medium text-foreground">
          Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-base font-medium text-foreground">
          Email
        </label>
        <input id="email" name="email" type="email" required placeholder="jane@example.com" className={fieldClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-base font-medium text-foreground">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help…" className={cn(fieldClasses, "resize-none")} />
      </div>

      <button type="submit" disabled={status === "submitting"} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-bold text-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/60 disabled:opacity-70">
        {status === "idle" ? (
          <>
            Send Message <Send className="size-4" />
          </>
        ) : null}
        {status === "submitting" ? (
          <>
            Sending <Loader2 className="size-4 animate-spin" />
          </>
        ) : null}
        {status === "done" ? (
          <>
            Message Sent <Check className="size-4" />
          </>
        ) : null}
      </button>

      {status === "done" ? (
        <p className="text-sm text-primary" role="status">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
      ) : null}
    </form>
  );
}

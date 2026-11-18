import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "./mark";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "How it works" },
  { href: "#join", label: "Telegram" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav-bar fixed inset-x-0 top-0 z-40 ${solid || open ? "is-solid" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5 text-fg">
          <Mark className="size-7 text-primary" />
          <span className="text-base font-medium tracking-tight">Easy Money</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="tap hidden h-10 items-center rounded-pill bg-fg px-4 text-sm font-medium text-ink md:inline-flex"
          >
            Join Telegram
          </a>
          <button
            type="button"
            className="tap grid size-11 place-items-center rounded-pill text-fg md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex h-12 items-center text-lg text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="tap mt-3 flex h-12 items-center justify-center rounded-pill bg-fg text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Join Telegram
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

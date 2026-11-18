import { Bot, Headphones, LineChart, Shield } from "lucide-react";
import { Mark } from "./mark";

const TELEGRAM_URL = "";

const PILLARS = [
  {
    icon: LineChart,
    title: "An expert, not a guessing machine",
    body: "A real trader takes the position. Easy Money is not a pure AI trying to predict the market.",
  },
  {
    icon: Bot,
    title: "Copied at the same time",
    body: "When he enters, the bot places that trade for you. When he exits, it exits. Same moment, without you watching the screen.",
  },
  {
    icon: Shield,
    title: "Free forever",
    body: "No seats. No plans. No checkout. Sign up and you are in the Telegram group immediately.",
  },
];

const PROMISES = [
  { icon: LineChart, title: "A real trader", body: "The ideas come from an expert who is actually in the market." },
  { icon: Bot, title: "Same-time copy", body: "The bot mirrors his entry and his exit as he places them." },
  { icon: Shield, title: "Free forever", body: "The group does not charge. Join once and you stay." },
  { icon: Headphones, title: "While you sleep", body: "You do not have to be awake for the copy to go through." },
];

const QUESTIONS = [
  {
    q: "Is this pure AI?",
    a: "No. An expert trader makes the call. A bot copies that trade for you at the same time he places it.",
  },
  {
    q: "What does it cost?",
    a: "Nothing. Easy Money is free forever. There is no seat, no trial, and no monthly plan.",
  },
  {
    q: "How do I get in?",
    a: "Join the Telegram group. Access is instant. That is the signup.",
  },
  {
    q: "Do you promise I will make money?",
    a: "No. Copying a trader can lose money. Sleep is the point. A guaranteed return is not.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

export function Story() {
  return (
    <>
      <section className="border-y border-line bg-raised">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {PROMISES.map((item) => (
            <div key={item.title} className="bg-bg px-5 py-8">
              <item.icon className="size-5 text-primary" strokeWidth={1.5} />
              <h2 className="mt-4 text-base font-medium text-fg">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>About</SectionLabel>
            <h2 className="display mt-4 text-4xl text-fg md:text-6xl">He trades. The bot copies. You sleep.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-muted">
              Easy Money follows one expert trader. The moment he places a trade, the bot places it for you. You are not staring at charts, and you are not trusting a machine to invent the idea.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The group is free. Sign up on Telegram and you are in. No application, no seat, no fee.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">His trade. Your account. Same time.</h2>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {PILLARS.map((item, index) => (
              <article key={item.title} className="grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-8">
                <p className="display text-3xl text-primary md:col-span-1">0{index + 1}</p>
                <div className="flex items-center gap-3 md:col-span-4">
                  <item.icon className="size-5 text-primary" strokeWidth={1.5} />
                  <h3 className="text-xl font-medium text-fg">{item.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted md:col-span-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Join() {
  return (
    <section id="join" className="scroll-mt-20 border-t border-line">
      <div className="relative isolate overflow-hidden">
        <img src="/art/cosmos-wide.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-start px-5 py-24 md:py-32">
          <SectionLabel>Free forever</SectionLabel>
          <h2 className="display mt-4 text-4xl text-fg md:text-6xl">Sign up. You’re in the group.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            No seats and no price list. Join the Telegram group and you get access immediately — the expert’s trades, copied for you while you sleep.
          </p>
          {TELEGRAM_URL ? (
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="tap mt-8 inline-flex h-12 items-center rounded-pill bg-fg px-6 text-sm font-medium text-ink"
            >
              Join the free Telegram
            </a>
          ) : (
            <a
              href="#join"
              className="tap mt-8 inline-flex h-12 items-center rounded-pill bg-fg px-6 text-sm font-medium text-ink"
            >
              Join the free Telegram
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-24 md:py-32">
        <SectionLabel>Questions</SectionLabel>
        <h2 className="display mt-4 text-4xl text-fg">Before you join.</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {item.q}
                <span className="text-faint group-open:hidden">+</span>
                <span className="hidden text-faint group-open:inline">–</span>
              </summary>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5 text-fg">
            <Mark className="size-7 text-primary" />
            <span className="font-medium">Easy Money</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            An expert trades. A bot copies him at the same time. Free forever. Trading can lose money. Nothing here is financial advice or a promise of profit.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer">
          <a href="#about" className="hover:text-fg">
            About
          </a>
          <a href="#services" className="hover:text-fg">
            How it works
          </a>
          <a href="#join" className="hover:text-fg">
            Telegram
          </a>
        </nav>
      </div>
    </footer>
  );
}

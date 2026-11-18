import { Bot, Cpu, Headphones, Wallet } from "lucide-react";
import { Mark } from "./mark";

const PILLARS = [
  {
    icon: Wallet,
    title: "Set up the account",
    body: "Open the trading account. That is the whole application. No seat, no plan, no waiting list.",
  },
  {
    icon: Bot,
    title: "Connect our broker",
    body: "Link the account to our broker. One connection. After that the trades have somewhere to land.",
  },
  {
    icon: Cpu,
    title: "Deposit, then we work",
    body: "Put the cash in. The RTX 5090 bots already tested the strategies, and a real expert stays in the loop. You watch the funds. We do the trading.",
  },
];

const PROMISES = [
  { icon: Cpu, title: "RTX 5090 bots", body: "The machines tested multiple winning strategies before a trade is run for you." },
  { icon: Headphones, title: "A real expert", body: "A human trader stays in the loop. The bots do not trade alone." },
  { icon: Wallet, title: "Three steps to start", body: "Account, our broker, a deposit. Then you are trading." },
  { icon: Bot, title: "We do the work", body: "After the deposit you are not the one placing trades. You watch it grow." },
];

const QUESTIONS = [
  {
    q: "What is the strategy?",
    a: "AI bots built on an RTX 5090 tested multiple winning strategies. A real human expert stays in the loop, so the trading is not a machine left on its own.",
  },
  {
    q: "How do I start?",
    a: "Set up the trading account, connect it to our broker, and deposit. That is the start. After that we do the work.",
  },
  {
    q: "What do I do after I deposit?",
    a: "Nothing on the charts. We trade. You watch the funds.",
  },
  {
    q: "Can this lose money?",
    a: "Yes. A strategy that tested well can still lose. Watching funds grow is the aim, not a promise.",
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
            <h2 className="display mt-4 text-4xl text-fg md:text-6xl">Tested by the bots. Run with an expert.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-muted">
              Easy Money is AI bots built on an RTX 5090. They tested multiple winning strategies. A real human expert stays in the loop, so the trading is not a black box left overnight.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Starting is the simple part. Set up the trading account, connect our broker, deposit, and then let us do the work.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">Account. Broker. Deposit. We trade.</h2>
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
          <SectionLabel>Start</SectionLabel>
          <h2 className="display mt-4 text-4xl text-fg md:text-6xl">Set up. Connect. Deposit.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            Open the trading account, connect it to our broker, and put the cash in. After that we do the work, and you watch the funds.
          </p>
          <ol className="mt-8 grid w-full max-w-lg gap-3">
            {["Set up the trading account", "Connect our broker", "Deposit, then leave it to us"].map((step, index) => (
              <li key={step} className="flex items-center gap-4 rounded-card border border-line bg-bg/80 px-4 py-3">
                <span className="display text-2xl text-primary">0{index + 1}</span>
                <span className="text-base text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Marcus L.",
    place: "Manchester",
    quote:
      "I opened the account, connected the broker, and deposited. After that I stopped living on the charts.",
  },
  {
    name: "Amina K.",
    place: "Dubai",
    quote: "The start really is that short. They trade. I check the account when I feel like it.",
  },
  {
    name: "Chris D.",
    place: "Austin",
    quote:
      "The bots did the testing on serious hardware, and a real trader is still in it. I just funded the account.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionLabel>Members</SectionLabel>
        <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">From people who already started.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-card border border-line bg-bg p-6">
              <blockquote className="text-base leading-relaxed text-fg">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="text-fg">{review.name}</span>
                <span className="text-faint"> · {review.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="pointer-events-none mt-8 cursor-default select-none text-sm text-faint">Over 100 more</p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-24 md:py-32">
        <SectionLabel>Questions</SectionLabel>
        <h2 className="display mt-4 text-4xl text-fg">Before you deposit.</h2>
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
          <a href="#top" className="inline-flex">
            <Mark className="h-16 w-auto" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            AI bots on an RTX 5090 tested the strategies. A real expert stays in the loop. You open the account, connect our broker, deposit, and we trade. Markets can lose money. Nothing here is a promise of profit.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer">
          <a href="#about" className="hover:text-fg">
            About
          </a>
          <a href="#services" className="hover:text-fg">
            How it works
          </a>
          <a href="#reviews" className="hover:text-fg">
            Reviews
          </a>
          <a href="#join" className="hover:text-fg">
            Start
          </a>
        </nav>
      </div>
    </footer>
  );
}

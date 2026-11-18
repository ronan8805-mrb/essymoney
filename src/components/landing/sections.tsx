import { useEffect, useState, type FormEvent } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Bot, Eye, Headphones, LineChart, Shield } from "lucide-react";
import { Mark } from "./mark";

const PILLARS = [
  {
    icon: LineChart,
    title: "Professional strategies",
    body: "Sleeves built by people who already trade the session — momentum, quiet FX, metals overnight. You pick the sleeve. You do not pick every tick.",
  },
  {
    icon: Bot,
    title: "Fully automated",
    body: "Once a sleeve is armed, Easy Money mirrors the entry, the exit, and the size inside the risk budget you set. Hands off until you say otherwise.",
  },
  {
    icon: Eye,
    title: "Transparent results",
    body: "Every copied fill, every fee, every drawdown sits on one tape. If a sleeve is off, you can see it before the next open.",
  },
];

const PROMISES = [
  { icon: LineChart, title: "A record you can read", body: "Not a screenshot of someone else’s month. Your copies, your account, your tape." },
  { icon: Bot, title: "Hands-off trading", body: "The desk works the session. You check it when you want, not because a candle screamed." },
  { icon: Shield, title: "Secure partners", body: "Broker and custody partners are named before a dollar moves. This showcase takes no deposits." },
  { icon: Headphones, title: "Support when you need it", body: "A person on the desk for onboarding, risk questions, and the day something looks wrong." },
];

const STEPS = [
  { n: "01", title: "Choose a sleeve", body: "Match a strategy to the market you already understand. Example lineup, not the live book." },
  { n: "02", title: "Set the ceiling", body: "A risk budget and a max size. Automation cannot spend past the number you typed." },
  { n: "03", title: "Arm the copy", body: "Entries and exits follow the sleeve. You can flatten or pause without closing the account." },
  { n: "04", title: "Read the tape", body: "Open copies, closed copies, and the equity curve — labeled, timed, and yours." },
];

const SLEEVES = [
  { name: "Atlas Momentum", market: "Index futures", note: "Rides a clean trend. Sits out when the range is noise.", state: "Example" },
  { name: "Harbor Quiet", market: "Major FX", note: "Small size, fewer trades, built for weeks that do not trend.", state: "Example" },
  { name: "Night Metals", market: "Gold", note: "Trades the overnight session and is flat before the cash open.", state: "Example" },
];

const TAPE = [
  { sleeve: "Atlas Momentum", side: "Long", symbol: "NAS100", status: "Copied" },
  { sleeve: "Harbor Quiet", side: "Flat", symbol: "EURUSD", status: "Watching" },
  { sleeve: "Night Metals", side: "Short", symbol: "XAUUSD", status: "Copied" },
  { sleeve: "Atlas Momentum", side: "Flat", symbol: "US30", status: "Closed" },
];

const CURVE = [
  { d: "Mon", v: 46840 },
  { d: "Tue", v: 47110 },
  { d: "Wed", v: 46620 },
  { d: "Thu", v: 47480 },
  { d: "Fri", v: 47940 },
  { d: "Sat", v: 47810 },
  { d: "Sun", v: 48216 },
];

const PLANS = [
  {
    name: "Observer",
    price: "$0",
    cadence: "while we open",
    detail: "Read the public tape. No capital, no copies.",
    points: ["Sample sleeves", "Weekly desk note", "No automation"],
    featured: false,
  },
  {
    name: "Copier",
    price: "$49",
    cadence: "per month, at launch",
    detail: "Follow up to three sleeves inside one risk budget.",
    points: ["3 live sleeves", "Automation on", "Email the desk"],
    featured: true,
  },
  {
    name: "Desk",
    price: "$149",
    cadence: "per month, at launch",
    detail: "For people running more than one book.",
    points: ["Unlimited sleeves", "Priority support", "Risk review"],
    featured: false,
  },
];

const QUESTIONS = [
  {
    q: "Is Easy Money live?",
    a: "Not yet. This site shows the product. easymoneytrading.com opens when the desk does. Nothing here takes a deposit.",
  },
  {
    q: "What do you actually do?",
    a: "Copy trading. You choose a professional strategy. The platform copies its trades into rules you set — size, risk, and a switch to turn it off.",
  },
  {
    q: "Do you promise returns?",
    a: "No. Markets lose money. The numbers on this page are a sample desk so you can see the interface, not a track record.",
  },
  {
    q: "Who holds the account?",
    a: "A named broker partner, published before launch. Easy Money is the automation layer, not a place that quietly holds client funds in this preview.",
  },
  {
    q: "Can I stop a copy?",
    a: "Yes. Automation is a switch. Pause a sleeve, flatten, or leave. Hands-off is a choice, not a lock.",
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
            <h2 className="display mt-4 text-4xl text-fg md:text-6xl">
              A desk that trades when you are not watching the screen.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-muted">
              Easy Money is an automated copy-trading business. Experienced strategies stay on the tape. The platform copies them. You decide how much of your account is allowed to follow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This page is the showcase for easymoneytrading.com. The product is not open, and the figures you see are there to explain the desk — not to sell a result we have not earned.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionLabel>Services</SectionLabel>
          <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">Copy trading, made plain.</h2>
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

          <ol className="mt-16 grid gap-6 md:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="border-t border-line pt-5">
                <p className="eyebrow">{step.n}</p>
                <h3 className="mt-3 text-lg font-medium text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function Platform() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <section id="platform" className="scroll-mt-20 border-t border-line bg-raised">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Platform</SectionLabel>
            <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">The desk, in one view.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A sample week so the screen makes sense. Live sleeves and a real curve publish when the desk opens.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <div className="rounded-card border border-line bg-bg p-5 lg:col-span-3">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow">Sample equity</p>
                <p className="display mt-2 text-4xl">$48,216</p>
              </div>
              <p className="text-sm text-primary">+3.0% sample week</p>
            </div>
            <div className="mt-4 h-40">
              {ready ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CURVE} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="var(--color-primary)"
                      fill="var(--color-primary)"
                      fillOpacity={0.18}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2">
            {SLEEVES.map((sleeve) => (
              <article key={sleeve.name} className="rounded-card border border-line bg-bg p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-medium">{sleeve.name}</h3>
                  <span className="eyebrow">{sleeve.state}</span>
                </div>
                <p className="mt-1 text-xs text-faint">{sleeve.market}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{sleeve.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto rounded-card border border-line bg-bg">
          <table className="w-full min-w-xl text-left text-sm">
            <caption className="sr-only">Sample copied trades</caption>
            <thead className="text-faint">
              <tr className="border-b border-line">
                <th className="px-4 py-3 font-medium">Sleeve</th>
                <th className="px-4 py-3 font-medium">Side</th>
                <th className="px-4 py-3 font-medium">Market</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {TAPE.map((row) => (
                <tr key={`${row.sleeve}-${row.symbol}`} className="border-b border-line last:border-0">
                  <td className="px-4 py-3">{row.sleeve}</td>
                  <td className="px-4 py-3 text-muted">{row.side}</td>
                  <td className="px-4 py-3 text-muted">{row.symbol}</td>
                  <td className="px-4 py-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="display mt-4 max-w-xl text-4xl text-fg md:text-5xl">Seats, not a checkout.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          Prices are the plan for launch. Nothing bills today. Join the list and we open the desk on easymoneytrading.com.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-card border p-6 ${plan.featured ? "border-primary bg-raised" : "border-line bg-bg"}`}
            >
              <p className="eyebrow">{plan.featured ? "Most seats" : "Plan"}</p>
              <h3 className="mt-3 text-2xl font-medium">{plan.name}</h3>
              <p className="display mt-4 text-5xl">{plan.price}</p>
              <p className="mt-1 text-sm text-faint">{plan.cadence}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{plan.detail}</p>
              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {plan.points.map((point) => (
                  <li key={point} className="text-fg">
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`tap mt-8 flex h-12 items-center justify-center rounded-pill text-sm font-medium ${plan.featured ? "bg-primary text-ink" : "bg-fg text-ink"}`}
              >
                Request a seat
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("em-waitlist");
      if (!raw) return;
      const parsed = JSON.parse(raw) as { email?: string };
      if (parsed.email) setSaved(parsed.email);
    } catch {
      /* ignore broken local notes */
    }
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setError("Enter a real email so we know who to open the desk for.");
      return;
    }
    const entry = { name: name.trim(), email: clean, at: new Date().toISOString() };
    localStorage.setItem("em-waitlist", JSON.stringify(entry));
    setSaved(clean);
    setError("");
  }

  return (
    <section id="join" className="scroll-mt-20 border-t border-line">
      <div className="relative isolate overflow-hidden">
        <img src="/art/cosmos-wide.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:py-28">
          <div>
            <SectionLabel>Opening soon</SectionLabel>
            <h2 className="display mt-4 text-4xl text-fg md:text-5xl">Save a seat before the desk goes live.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Easy Money is not taking accounts yet. Leave a note on this device. When easymoneytrading.com opens, that is where the real list will live.
            </p>
          </div>
          {saved ? (
            <div className="glass self-center p-6">
              <p className="eyebrow">Noted</p>
              <p className="mt-3 text-xl font-medium">{saved}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Saved in this browser only. This preview does not send mail and does not take payment.
              </p>
              <button
                type="button"
                className="mt-5 text-sm text-primary"
                onClick={() => {
                  localStorage.removeItem("em-waitlist");
                  setSaved(null);
                }}
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="glass self-center p-6" noValidate>
              <label className="block text-sm text-muted" htmlFor="seat-name">
                Name
              </label>
              <input
                id="seat-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className="mt-2 h-12 w-full rounded-card border border-line bg-bg px-4 text-fg outline-none"
                placeholder="Your name"
              />
              <label className="mt-4 block text-sm text-muted" htmlFor="seat-email">
                Email
              </label>
              <input
                id="seat-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                autoComplete="email"
                required
                className="mt-2 h-12 w-full rounded-card border border-line bg-bg px-4 text-fg outline-none"
                placeholder="you@email.com"
              />
              {error ? <p className="mt-3 text-sm text-primary">{error}</p> : null}
              <button
                type="submit"
                className="tap mt-5 flex h-12 w-full items-center justify-center rounded-pill bg-fg text-sm font-medium text-ink"
              >
                Request a seat
              </button>
            </form>
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
        <h2 className="display mt-4 text-4xl text-fg">Before you arm anything.</h2>
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
            Automated copy trading. easymoneytrading.com is not live. Trading can lose money. Nothing on this page is financial advice or a promise of profit.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="Footer">
          <a href="#about" className="hover:text-fg">About</a>
          <a href="#services" className="hover:text-fg">Services</a>
          <a href="#platform" className="hover:text-fg">Platform</a>
          <a href="#pricing" className="hover:text-fg">Pricing</a>
          <a href="#join" className="hover:text-fg">Request a seat</a>
        </nav>
      </div>
    </footer>
  );
}

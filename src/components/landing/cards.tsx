import { ArrowUpRight } from "lucide-react";

function Ring({ value }: { value: number }) {
  const r = 15;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <svg viewBox="0 0 40 40" className="size-14 -rotate-90" aria-hidden>
      <circle cx="20" cy="20" r={r} fill="none" className="stroke-line" strokeWidth="3" />
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c - dash}`}
      />
    </svg>
  );
}

export function EquityCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">Sample desk</p>
      <p className="mt-3 text-sm text-muted">Account equity</p>
      <p className="display mt-1 text-4xl text-fg">$48,216.40</p>
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-3">
        <div>
          <p className="text-xs text-faint">Copied in</p>
          <p className="mt-1 text-sm font-medium">$2,410.12</p>
        </div>
        <div>
          <p className="text-xs text-faint">Closed</p>
          <p className="mt-1 text-sm font-medium">$1,186.90</p>
        </div>
      </div>
    </article>
  );
}

export function SleeveCard() {
  return (
    <article className="glass flex items-center gap-3 p-4 text-fg">
      <div className="relative grid place-items-center">
        <Ring value={68} />
        <span className="absolute text-xs font-medium">68</span>
      </div>
      <div>
        <p className="eyebrow">Atlas sleeve</p>
        <p className="mt-1 text-lg font-medium text-primary">+$1,284.20</p>
        <p className="text-xs text-faint">Session copy · sample</p>
      </div>
    </article>
  );
}

export function RiskCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">Risk budget</p>
      <p className="mt-2 text-2xl font-medium">$12,500</p>
      <p className="mt-1 text-xs text-faint">of a $20,000 sleeve cap</p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-line">
        <div className="risk-fill h-full rounded-pill bg-primary" />
      </div>
    </article>
  );
}

const COPIES = [
  { name: "Atlas Momentum", state: "On" },
  { name: "Harbor Quiet", state: "On" },
  { name: "Night Metals", state: "Watch" },
];

export function CopiesCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">Live copies</p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {COPIES.map((row) => (
          <li key={row.name} className="flex items-center justify-between gap-3 text-sm">
            <span>{row.name}</span>
            <span className={row.state === "On" ? "text-primary" : "text-faint"}>{row.state}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function AutoCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">Automation</p>
      <p className="mt-2 flex items-center gap-2 text-2xl font-medium">
        <span className="size-2 rounded-pill bg-primary" />
        Armed
      </p>
      <p className="mt-1 text-xs text-faint">6 of 8 risk rules active</p>
    </article>
  );
}

export function StartButton({ label = "Start now" }: { label?: string }) {
  return (
    <a
      href="#join"
      className="tap inline-flex h-12 items-center gap-3 rounded-pill border border-line bg-ink/80 py-1 pr-1.5 pl-5 text-sm font-medium text-fg backdrop-blur-md"
    >
      {label}
      <span className="grid size-9 place-items-center rounded-pill bg-primary text-ink">
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  );
}

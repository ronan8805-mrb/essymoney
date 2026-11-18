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
      <p className="eyebrow">Copied tonight</p>
      <p className="mt-3 text-sm text-muted">Same time as the expert</p>
      <p className="display mt-1 text-4xl text-fg">$2,410.00</p>
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-3">
        <div>
          <p className="text-xs text-faint">Entry</p>
          <p className="mt-1 text-sm font-medium">Filled</p>
        </div>
        <div>
          <p className="text-xs text-faint">Exit</p>
          <p className="mt-1 text-sm font-medium">Open</p>
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
        <p className="eyebrow">Expert</p>
        <p className="mt-1 text-lg font-medium text-primary">Copied</p>
        <p className="text-xs text-faint">Bot matched the fill</p>
      </div>
    </article>
  );
}

export function RiskCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">While you sleep</p>
      <p className="mt-2 text-2xl font-medium">On</p>
      <p className="mt-1 text-xs text-faint">You don’t have to be awake</p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-pill bg-line">
        <div className="risk-fill h-full rounded-pill bg-primary" />
      </div>
    </article>
  );
}

const COPIES = [
  { name: "XAUUSD", state: "Copied" },
  { name: "NAS100", state: "Copied" },
  { name: "EURUSD", state: "Waiting" },
];

export function CopiesCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">His trades</p>
      <ul className="mt-3 flex flex-col gap-2.5">
        {COPIES.map((row) => (
          <li key={row.name} className="flex items-center justify-between gap-3 text-sm">
            <span>{row.name}</span>
            <span className={row.state === "Copied" ? "text-primary" : "text-faint"}>{row.state}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function AutoCard() {
  return (
    <article className="glass p-4 text-fg">
      <p className="eyebrow">The bot</p>
      <p className="mt-2 flex items-center gap-2 text-2xl font-medium">
        <span className="size-2 rounded-pill bg-primary" />
        Armed
      </p>
      <p className="mt-1 text-xs text-faint">Places it when he does</p>
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

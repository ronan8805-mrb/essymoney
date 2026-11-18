import { useEffect, useRef, type ReactNode } from "react";
import { AutoCard, CopiesCard, EquityCard, RiskCard, SleeveCard, StartButton } from "./cards";

function useDrift<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--px", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
      el.style.setProperty("--py", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return ref;
}

function Drift({
  dx,
  dy,
  delay,
  children,
  className = "",
}: {
  dx: number;
  dy: number;
  delay: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`slot ${className}`}
      style={{ ["--dx" as string]: String(dx), ["--dy" as string]: String(dy) }}
    >
      <div className="rise" style={{ ["--delay" as string]: delay }}>
        <div className="bob" style={{ ["--delay" as string]: delay }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const stage = useDrift<HTMLElement>();

  return (
    <section id="top" ref={stage} className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/art/cosmos-wide.jpg"
          alt=""
          className="hero-bg-wide absolute inset-0 h-full w-full object-cover object-center"
        />
        <img
          src="/art/cosmos-portrait.jpg"
          alt=""
          className="hero-bg-tall absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-shade absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col px-5 pt-28 pb-8 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="rise eyebrow" style={{ ["--delay" as string]: "0.05s" }}>
            AI copy trading · opening soon
          </p>
          <h1 className="display mt-5 text-5xl text-fg sm:text-6xl lg:text-7xl">
            <span className="rise block" style={{ ["--delay" as string]: "0.12s" }}>
              Take Control
            </span>
            <span className="rise mt-1 block italic" style={{ ["--delay" as string]: "0.22s" }}>
              of your Trades
            </span>
          </h1>
          <p
            className="rise mx-auto mt-5 max-w-md text-base leading-relaxed text-muted"
            style={{ ["--delay" as string]: "0.32s" }}
          >
            Automatically copy professional strategies. Easy Money sizes the risk and places the trades. You keep the
            rules.
          </p>
          <div className="rise mt-7" style={{ ["--delay" as string]: "0.42s" }}>
            <StartButton />
          </div>
        </div>

        <div className="mt-10 grid gap-3 lg:hidden">
          <Drift dx={0} dy={0} delay="0.5s">
            <EquityCard />
          </Drift>
          <div className="grid gap-3 sm:grid-cols-2">
            <Drift dx={0} dy={0} delay="0.62s">
              <SleeveCard />
            </Drift>
            <Drift dx={0} dy={0} delay="0.74s">
              <CopiesCard />
            </Drift>
          </div>
        </div>

        <div className="mt-auto hidden items-end gap-4 pt-16 lg:grid lg:grid-cols-12">
          <div className="col-span-3 flex flex-col gap-4">
            <Drift dx={-18} dy={10} delay="0.7s">
              <SleeveCard />
            </Drift>
            <Drift dx={-10} dy={16} delay="0.85s">
              <RiskCard />
            </Drift>
          </div>
          <div className="col-span-4 col-start-5">
            <Drift dx={6} dy={-12} delay="0.55s">
              <EquityCard />
            </Drift>
          </div>
          <div className="col-span-3 col-start-10 flex flex-col gap-4">
            <Drift dx={18} dy={8} delay="0.75s">
              <CopiesCard />
            </Drift>
            <Drift dx={12} dy={16} delay="0.95s">
              <AutoCard />
            </Drift>
          </div>
        </div>

        <p className="rise mt-8 text-center text-xs text-faint" style={{ ["--delay" as string]: "1s" }}>
          Figures on this page are a sample desk, not a live track record.
        </p>
      </div>
    </section>
  );
}

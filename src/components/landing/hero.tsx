import { StartButton } from "./cards";

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
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

      <div className="relative z-10 mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-5 pt-24 pb-16 text-center">
        <p className="rise eyebrow" style={{ ["--delay" as string]: "0.05s" }}>
          Expert trader · copied live
        </p>
        <h1 className="display mt-5 text-5xl text-fg sm:text-6xl lg:text-7xl">
          <span className="rise block" style={{ ["--delay" as string]: "0.12s" }}>
            Trading
          </span>
          <span className="rise mt-1 block italic" style={{ ["--delay" as string]: "0.22s" }}>
            While You Sleep
          </span>
        </h1>
        <p
          className="rise mx-auto mt-5 max-w-md text-base leading-relaxed text-muted"
          style={{ ["--delay" as string]: "0.32s" }}
        >
          An expert takes the trade. The bot copies it for you at the same time. Your money can work while you sleep.
        </p>
        <div className="rise mt-7" style={{ ["--delay" as string]: "0.42s" }}>
          <StartButton label="Join the free Telegram" />
        </div>
        <p className="rise mt-8 max-w-sm text-xs text-faint" style={{ ["--delay" as string]: "0.55s" }}>
          Free forever. Trading can lose money. This is not a promise of profit.
        </p>
      </div>
    </section>
  );
}

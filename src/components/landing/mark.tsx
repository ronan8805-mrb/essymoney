export function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="12" cy="16" r="7.6" fill="currentColor" />
      <circle cx="20.2" cy="16" r="7.6" className="fill-bg" />
      <circle cx="20.2" cy="16" r="6.15" fill="none" stroke="currentColor" strokeWidth="2.1" />
    </svg>
  );
}

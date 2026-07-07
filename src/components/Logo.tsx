export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Mozaic<span className={light ? "text-ma-green-light" : "text-ma-green"}>.ma</span>
    </span>
  );
}

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind",
  "n8n",
  "OpenAI",
];

/** Franja de tecnologías con desplazamiento lento. El ancho y márgenes los define quien la usa. */
export default function StackMarquee({ className = "" }: { className?: string }) {
  return (
    <div className={`hp-mq-wrap ${className}`} aria-label="Tecnologías con las que trabajo">
      <div className="hp-mq">
        {[...stack, ...stack].map((name, index) => (
          <span key={`${name}-${index}`} aria-hidden={index >= stack.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

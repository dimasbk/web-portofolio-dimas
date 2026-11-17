import { cn } from "@/lib/utils";

interface TechTagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "dark";
  className?: string;
}

/**
 * Monospace tag strictly using JetBrains Mono and sharp 0px–2px Swiss borders.
 */
export function TechTag({
  children,
  variant = "default",
  className,
}: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5 font-mono text-xs leading-tight tracking-tight rounded-[2px] transition-colors duration-200",
        variant === "default" &&
          "border-swiss-grey/40 bg-swiss-beige/60 text-swiss-black",
        variant === "accent" &&
          "border-swiss-taupe/60 bg-swiss-taupe/15 text-swiss-black",
        variant === "dark" &&
          "border-swiss-black bg-swiss-black text-swiss-white",
        className
      )}
    >
      {children}
    </span>
  );
}

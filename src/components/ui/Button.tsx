import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-swiss-black text-swiss-white border border-swiss-black hover:bg-neutral-800 hover:shadow-sm active:-translate-y-px",
  secondary:
    "bg-transparent text-swiss-black border-[1.5px] border-swiss-grey/60 hover:border-swiss-black hover:bg-swiss-beige/50 active:-translate-y-px",
};

/**
 * Swiss Minimalist button primitive with sharp 0px corners and tactile press feedback.
 */
export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-none px-4 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-swiss-taupe disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

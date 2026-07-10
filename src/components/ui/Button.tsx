import Link from "next/link";

type Variant = "primary" | "ghost" | "inverse";

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  style?: React.CSSProperties;
}

type ButtonProps = CommonProps & (
  | { href: string; onClick?: never; type?: never }
  | { href?: never; onClick?: () => void; type?: "button" | "submit" }
);

export default function Button({ children, variant = "primary", style, ...rest }: ButtonProps) {
  const cls = "s9ui-btn" + (variant !== "primary" ? ` s9ui-btn--${variant}` : "");
  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  const { onClick, type = "button" } = rest as { onClick?: () => void; type?: "button" | "submit" };
  return (
    <button type={type} className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

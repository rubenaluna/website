import { type FC, type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  download?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  download,
  target,
  rel,
  ariaLabel,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium rounded-lg shadow-lg";

  const variantClasses = {
    primary:
      "px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-emerald-900/50",
    secondary:
      "px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-emerald-900/50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
      >
        {icon && icon}
        {children && <span>{children}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className={classes}>
      {icon && icon}
      {children && <span>{children}</span>}
    </button>
  );
};

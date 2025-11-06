import { type FC, type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
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
  icon,
  download,
  target,
  rel,
  ariaLabel,
  className = "",
}) => {
  const baseClasses =
    "border border-white/10 bg-white/5 inline-flex items-center gap-2 font-medium rounded-lg shadow-lg px-6 py-3 backdrop-blur-sm bg-white/0 hover:bg-white/10 transition-colors duration-300";

  const classes = `${baseClasses}  ${className}`;

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

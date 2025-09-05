import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm";

    const variants = {
      primary:
        "text-black bg-[linear-gradient(135deg,#D6BD98,#c8b087)] hover:brightness-105 hover:-translate-y-[1px]",
      secondary:
        "bg-gray-900 text-white hover:bg-gray-800 hover:-translate-y-[1px]",
      outline:
        "border-2 border-accent text-accent hover:bg-accent hover:text-black hover:-translate-y-[1px]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-button-login-default text-white hover:bg-button-login-hover hover:cursor-pointer transition-all delay-300",
        outline:
          "border  border-button-login-default text-primary hover:cursor-pointer hover:text-background hover:bg-button-login-hover transition-all delay-300",
        ghost: "hover:bg-button-login-disabled",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-1",
        lg: "h-12 px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, arrow = false, children, ...props }, ref) => {
    return (
      <button
        className={`${buttonVariants({ variant, size })} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
        {arrow && (
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;

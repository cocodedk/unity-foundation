import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-growth text-seedwhite hover:bg-coral shadow-soft",
        secondary: "bg-seedwhite text-growth border-2 border-growth hover:bg-fluff",
        outline: "border-2 border-growth text-growth hover:bg-growth hover:text-seedwhite",
        ghost: "hover:bg-fluff text-wind"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const Comp = asChild ? "a" : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...(props as ButtonHTMLAttributes<HTMLElement>)}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

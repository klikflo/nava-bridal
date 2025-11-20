import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-light tracking-wide ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-98 uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 border border-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
        outline: "border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-primary/50 backdrop-blur-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        ghost: "hover:bg-foreground/5 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline font-normal",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-sm",
        sm: "h-9 px-4 rounded-sm text-xs",
        lg: "h-14 px-10 rounded-sm text-base",
        icon: "h-11 w-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

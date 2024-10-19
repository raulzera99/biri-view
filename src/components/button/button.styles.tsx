/**
 * @file button.styles.tsx
 *
 * @changelog
 *  - 2024-06-28
 *    - Create button.styles.tsx.
 */

import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex shadow items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-light-primary-600 border text-white hover:bg-light-primary-400 shadow-sm dark:bg-dark-primary-600",
        destructive: "bg-danger-600 text-white shadow-sm hover:bg-danger-400",
        success: "bg-success-600 text-white hover:bg-success-400",
        warning: "bg-warning-600 text-white hover:bg-warning-400",
        info: "bg-info-600 hover:bg-info-light text-white",
        outline:
          "border border-input bg-background text-black dark:text-white shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary shadow-sm text-black dark:text-white hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 shadow-none hover:underline hover:text-solutia-light",
        disabled: "bg-disabled text-disabled dark:text-disabled",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-6 px-2 text-[11px]",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-8 w-8",
        "icon-xs": "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

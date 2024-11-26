import { cn } from "@/utils/style"
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode } from "react"

const buttonVariants = cva(
  "uppercase py-4 px-8 font-bold text-white-default text-base transition-all",
  {
    variants: {
      intent: {
        primary: "bg-orange-accent hover:bg-orange-light",
        secondary: "bg-black-pure hover:bg-gray-800",
        hollow:
          "bg-transparent border-2 border-black text-black-pure hover:bg-black-pure hover:text-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
)

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export default function Button({ intent, children, ...props }: Props) {
  return (
    <button className={cn(buttonVariants({ intent }))} {...props}>
      {children}
    </button>
  )
}
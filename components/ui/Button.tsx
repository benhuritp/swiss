"use client"

import { cn } from "@/utils/cn"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "t1" | "brand" | "t3" | "t4"
}

const variantStyles = {
    t1: "bg-tier1",
    brand: "bg-brand",
    t3: "bg-tier3",
    t4: "bg-tier4"
} as const

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "brand", ...props }, ref) => {
        return (
            <button
                style={{
                    color: "white"
                }}
                ref={ref}
                className={cn(
                    "w-full py-[12px] text-buttonText  font-spaceGrotesk transition-colors",
                    variantStyles[variant],
                    "hover:bg-opacity-90",
                    className
                )}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"

export default Button

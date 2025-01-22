"use client"
import React from "react"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { useFloating, useInteractions, useHover, FloatingPortal, offset, shift, flip } from "@floating-ui/react"
import Button from "./ui/Button"
import { useAnswersStore } from "@/store/useAnswersStore"

type ServiceCardElement = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode
}

type InfoProps = ServiceCardElement & {
    tooltip: React.ReactNode
}

type SelectProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "t1" | "brand" | "t3" | "t4"
}

// Подкомпоненты
const Title = ({ children, className, ...props }: ServiceCardElement) => (
    <h4 className={cn(className)} {...props}>
        {children}
    </h4>
)

const Description = ({ children, className, ...props }: ServiceCardElement) => (
    <div className={cn(className)} {...props}>
        {children}
    </div>
)

const Info = ({ children, className, tooltip, ...props }: InfoProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top",
        middleware: [offset(5), flip(), shift()],
    })

    const hover = useHover(context)
    const { getReferenceProps, getFloatingProps } = useInteractions([hover])

    return (
        <div className={cn("text-center flex gap-[5px] justify-center items-center", className)} {...props}>
            {children}
            <div ref={refs.setReference} {...getReferenceProps()}>
                <Image src="/question.svg" width={17} height={17} alt="question" />
            </div>
            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                        className="bg-white p-[16px] rounded-[8px] shadow-lg z-50"
                    >
                        {tooltip}
                    </div>
                </FloatingPortal>
            )}
        </div>
    )
}

const Text = ({ children, className, ...props }: ServiceCardElement) => (
    <div className={cn(className)} {...props}>
        {children}
    </div>
)

const Price = ({ children, className, ...props }: ServiceCardElement) => (
    <div className={cn(className)} {...props}>
        {children}
    </div>
)

const Select = ({ children = "SELECT", variant = "brand", ...props }: SelectProps) => {
    const setAnswer = useAnswersStore((state) => state.setAnswer)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const questionId = e.currentTarget.closest("[data-question-id]")?.getAttribute("data-question-id")
        if (!questionId) return

        // Находим заголовок и цену в карточке
        const card = e.currentTarget.closest("[data-service-card]")
        const title = card?.querySelector("[data-title]")?.textContent
        const price = card?.querySelector("[data-price]")?.textContent

        if (title && price) {
            const answer = {
                questionId,
                title,
                price
            }
            setAnswer(questionId, answer)
            console.log("Вопрос:", questionId)
            console.log("Ответ:", answer)
        }

        props.onClick?.(e)
    }

    return (
        <Button variant={variant} {...props} onClick={handleClick}>
            {children}
        </Button>
    )
}

// Основной компонент
const ServiceCard = ({ children, className, ...props }: ServiceCardElement) => {
    // Находим компоненты
    const blocks = React.Children.toArray(children)
    const title = blocks.find((child) => React.isValidElement(child) && child.type === Title)
    const description = blocks.find((child) => React.isValidElement(child) && child.type === Description)
    const info = blocks.find((child) => React.isValidElement(child) && child.type === Info)
    const text = blocks.find((child) => React.isValidElement(child) && child.type === Text)
    const price = blocks.find((child) => React.isValidElement(child) && child.type === Price)
    const select = blocks.find((child) => React.isValidElement(child) && child.type === Select)

    return (
        <div className={cn("flex flex-col p-[24px] border border-secondary", className)} data-service-card {...props}>
            {/* Иконка */}
            <div className="flex justify-center mb-[24px]">
                <div className="w-[72px] h-[72px] rounded-full border border-secondary" />
            </div>

            {/* Заголовок */}
            {title && <div className="text-heading2Bold mb-[16px] text-center" data-title>{title}</div>}

            {/* Описание */}
            {description && <div className={`text-body-regular text-center mb-[4px] ${!text && !info && `!mb-[24px]` }  `}>{description}</div>}

            {/* Info */}
            {info && <div className={`${!text && "mb-[24px]"}`}>
                {info}
            </div>}

            {/* Text */}
            {text && <div className="mt-[4px] text-center mb-[24px] font-light">
                {text}
            </div>}

            {/* Цена */}
            {price && <div className="mt-auto text-center mb-[24px]" data-price>{price}</div>}

            {/* Кнопка */}
            {select && <div>{select}</div>}
        </div>
    )
}

// Привязка подкомпонентов
ServiceCard.Title = Title
ServiceCard.Description = Description
ServiceCard.Info = Info
ServiceCard.Text = Text
ServiceCard.Price = Price
ServiceCard.Select = Select

export default ServiceCard

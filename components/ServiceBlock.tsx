import React from "react"
import { cn } from "@/utils/cn"
import Image from "next/image"

type ServiceBlockElement = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode
}

type ServiceBlockProps = ServiceBlockElement & {
    id: string
}

// Подкомпоненты
const Title = ({ children, className, ...props }: ServiceBlockElement) => (
    <h4 className={cn("", className)} {...props}>
        {children}
    </h4>
)

const Subtitle = ({ children, className, ...props }: ServiceBlockElement) => (
    <h3 className={cn("", className)} {...props}>
        {children}
    </h3>
)

const Content = ({ children, className, ...props }: ServiceBlockElement) => (
    <div className={cn("", className)} {...props}>
        {children}
    </div>
)

// Основной компонент
const ServiceBlock = ({ id, children, className, ...props }: ServiceBlockProps) => {
    const [isOpen, setIsOpen] = React.useState(true)
    const contentRef = React.useRef<HTMLDivElement>(null);

    // Находим компоненты
    const blocks = React.Children.toArray(children)
    const title = blocks.find((child) => React.isValidElement(child) && child.type === Title)
    const subtitle = blocks.find((child) => React.isValidElement(child) && child.type === Subtitle)
    const content = blocks.find((child) => React.isValidElement(child) && child.type === Content)

    return (
        <div className={cn("p-[25px] max-lg:py-[15px] max-lg:px-0 relative", className)} data-question-id={id} {...props}>
            <button 
                className="absolute top-[25px] right-[25px] max-lg:right-[0px] max-lg:top-[15px] transition-transform duration-300" 
                style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image className="max-lg:w-[40px] max-lg:h-[40px]" src="/toggleArrow.svg" width={80} height={80} alt="toggle arrow" />
            </button>

            <div className="flex items-center pr-[80px] max-lg:pr-[40px]">
                <div className="w-[80px] h-[80px] border-[2px] border-secondary mr-[40px] max-lg:w-[40px] max-lg:h-[40px] max-lg:mr-[20px]" />
                {title && (
                    <div className="text-Heading2Medium max-lg:text-body-regular">
                        {title}
                    </div>
                )}
            </div>

            <div 
                className="grid transition-all duration-500"
                style={{ 
                    gridTemplateRows: isOpen ? "1fr" : "0fr"
                }}
            >
                <div className="overflow-hidden">
                    <div ref={contentRef}>
                        <div className="pt-[16px] mt-[25px]">
                            <div>
                                {subtitle && (
                                    <div className="mb-[16px]">
                                        {subtitle}
                                    </div>
                                )}
                            </div>
                            {/* Основной контент */}
                            {content && (
                                <div className="">
                                    {content}
                                </div>
                            )}
                            {blocks.filter(child => 
                                !(React.isValidElement(child) && 
                                (child.type === Title || child.type === Subtitle || child.type === Content))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Привязка подкомпонентов
ServiceBlock.Title = Title
ServiceBlock.Subtitle = Subtitle
ServiceBlock.Content = Content

export default ServiceBlock

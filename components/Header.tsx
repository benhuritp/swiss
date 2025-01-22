"use client"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="min-h-header relative flex items-center">
            <div className="container flex items-center justify-between">
                <Image src={"logo.svg"} width={102} height={28} alt="logo" />

                {/* Бургер кнопка */}
                <button
                    className="max-lg:flex hidden flex-col gap-[6px] p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-[24px] bg-brand-dark h-[2px] bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-[24px] bg-brand-dark h-[2px] bg-black transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-[24px] bg-brand-dark h-[2px] bg-black transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Мобильное меню */}
                <div className={`z-[10] menu max-lg:absolute static top-[100%] left-0 max-lg:w-full w-auto max-lg:bg-white transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "max-lg:translate-x-full"}`}>
                    <div className="items-center
                    max-lg:flex-col flex max-lg:gap-6 max-lg:p-6
                    lg:gap-[32px]
                    ">
                        <select className="uppercase text-inherit" name="lang" id="lang">
                            <option>en</option>
                            <option>ru</option>
                        </select>
                        <a className="flex gap-[6px] items-center" href="mailto:info@swisspc.com">
                            <Image src={"email.svg"} width={16} height={16} alt="email" />
                            <span>info@swisspc.com</span>
                        </a>
                        <div className="flex gap-[6px] items-center">
                            <Image src={"pin.svg"} width={16} height={16} alt="pin" />
                            <span>Clarens, Switzerland</span>
                        </div>
                        <div className="flex gap-[16px]">
                            <a href="#" target="_blank">
                                <Image src={"whatsapp.svg"} width={24} height={24} alt="whatsapp" />
                            </a>
                            <a href="#" target="_blank">
                                <Image src={"telegram.svg"} width={24} height={24} alt="telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="absolute bottom-0 left-0" width="100%" height="2">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#4f4f4f" strokeWidth="1" strokeDasharray="4, 4" />
            </svg>
        </header>
    )
}

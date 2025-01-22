import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-[92px] bg-brand-dark">
            <div className="container flex justify-between items-center max-lg:flex-col max-lg:items-start gap-[25px]">
                <Image src={"footer-logo.svg"} width={102} height={28} alt="logo" />
                <div className="flex gap-[32px] max-lg:flex-col max-lg:gap-[20px]">
              
                    <a className="flex gap-[6px] items-center text-white" href="mailto:info@swisspc.com">
                        <Image src={"email-white.svg"} width={16} height={16} alt="email" />
                        <span>info@swisspc.com</span>
                    </a>
                    <div className="flex gap-[6px] items-center text-white">
                        <Image src={"pin-white.svg"} width={16} height={16} alt="pin" />
                        <span>Clarens, Switzerland</span>
                    </div>
                    <div className="flex gap-[16px]">
                        <a href="#" target="_blank">
                            <Image src={"whatsapp-white.svg"} width={24} height={24} alt="whatsapp" />
                        </a>
                        <a href="#" target="_blank">
                            <Image src={"telegram-white.svg"} width={24} height={24} alt="telegram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const FooterPage = () => {
    return (
        <div className="border-t border-[#border-[#2D313B]] mt-11 p-9 bg-[#0C0D10]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-center items-center gap-2">
                        <Image src={Logo} alt="FitLog logo" className="w-6 h-auto" />
                        <span className="text-[#FFFFFF] font-bold text-[18px]">FITLOG</span>
                    </div>
                    <div>
                        <p className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterPage;
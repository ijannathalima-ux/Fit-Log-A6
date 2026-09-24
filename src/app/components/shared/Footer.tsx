import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const FooterPage = () => {
    return (
       <div className="border border-t-[#9CA3AF] mt-9 p-9 bg-[#0C0D10]">
         <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="flex justify-center items-center gap-2">
                    <Image src={Logo} alt="FitLog logo" className="w-6 h-auto"/>
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
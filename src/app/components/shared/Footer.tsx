import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const FooterPage = () => {
    return (
        <div className="container mx-auto flex">
            <div className="flex justify-center items-center gap-2">
                <Image src={Logo} alt="FitLog logo" />
                <span className="text-[#FFFFFF] font-bold text-[20px]">FITLOG</span>
            </div>
            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default FooterPage;
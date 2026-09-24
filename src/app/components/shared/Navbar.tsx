import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const NavbarPage = () => {
    return (
        <div className="bg-[#0C0D10] sticky top-0 z-40">
            <div className="container mx-auto p-6">
                <div className="flex justify-between">

                    {/* Navbar logo */}
                    <div className="flex justify-center items-center gap-2">
                        <Image src={Logo} alt="FitLog logo" />
                        <span className="text-[#FFFFFF] font-bold text-[20px]">FITLOG</span>
                    </div>

                    {/* navbar menu */}
                    <ul className="flex justify-center items-center gap-4 text-[17px] text-[#9CA3AF] font-medium">
                        <li><ActiveLink href="/">Workouts</ActiveLink></li>
                        <li><ActiveLink href="/my-plan">My Plan</ActiveLink></li>
                    </ul>


                    <div className="flex justify-center items-center gap-9 text-[17px] text-[#9CA3AF] font-medium">
                        {/* plan button */}
                        <Link href="/my-plan" className="flex items-center gap-2">
                            <span> Plan </span>
                            <span className="bg-[#C2F800] rounded-full py-1 px-3 text-black">0</span>
                        </Link>

                        {/* saved button */}
                        <Link href="/my-plan" className="flex items-center gap-2">
                            <span> Saved </span>
                            <span className="border border-[#2D313B] rounded-full text-[#D1D5DB] py-1 px-3">0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;
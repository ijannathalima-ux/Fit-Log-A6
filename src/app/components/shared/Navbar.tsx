import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import ActiveLink from "./ActiveLink";
import PlanBadge from "../badge/PlanBadge";
import SavedBadge from "../badge/SavedBadge";

const NavbarPage = () => {
    return (
        <div className="bg-[#0C0D10] sticky top-0 z-40 border-b border-[#2D313B]">
            <div className="container mx-auto px-4 py-4 md:p-6 ">


                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Navbar logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="FitLog logo"
                            width={28}
                            height={28}
                        />
                        <span className="text-[#FFFFFF] font-bold text-[20px]">FITLOG</span>
                    </div>

                    {/* navbar menu */}
                    <ul className="flex items-center gap-3 text-[15px] text-[#9CA3AF] font-medium md:gap-4 md:text-[17px]">
                        <li>
                            <ActiveLink href="/">Workouts</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/my-plan">My Plan</ActiveLink>
                        </li>
                    </ul>

                    {/* plan and saved */}
                    <div className="flex items-center gap-5 text-sm md:gap-9 md:text-[17px] text-[#9CA3AF] font-medium">

                        <PlanBadge />

                        <SavedBadge />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;
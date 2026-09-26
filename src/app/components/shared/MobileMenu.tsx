"use client"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ActiveLink from "./ActiveLink";
import PlanBadge from "../badge/PlanBadge";
import SavedBadge from "../badge/SavedBadge";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative md:hidden shrink-0">

            {/* Hamburger Button */}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Moblile menu */}

            {isOpen &&
                (<div className="absolute right-0 top-10 w-48 bg-[#0C0D10] border-t border-[#2D313B] rounded-xl p-4">
                    <div className="flex flex-col gap-4 text-[#9CA3AF]">
                        <ActiveLink href="/"> Workouts </ActiveLink>
                        <ActiveLink href="/my-plan"> My Plan </ActiveLink>
                        <PlanBadge />
                        <SavedBadge />
                    </div>
                </div>
            )}

        </div>
    );
};

export default MobileMenu;
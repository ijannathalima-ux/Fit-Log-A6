"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


export interface ActiveLinkProps {
    href : string;
    children : ReactNode;
}


const ActiveLink = ({href, children} : ActiveLinkProps) => {

    const pathname = usePathname()

    const isActive = pathname === href ;

    return (
        <Link href={href} className={`transition duration-200 font-medium ${isActive ? "text-[#C2F800] bg-[#1A2312] py-2 px-4 rounded-2xl" : "text-[#9CA3AF]"}`}>

            {children}
            
        </Link>
    );
};

export default ActiveLink;
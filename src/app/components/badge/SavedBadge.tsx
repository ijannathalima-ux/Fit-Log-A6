"use client"
import { useFitLog } from "@/app/context/FitLogContext";
import Link from "next/link";

const SavedBadge = () => {
    const { saved } = useFitLog()
    return (
        <div>
            <Link href="/my-plan"
                className="flex items-center gap-2"
            >
                <span> Saved </span>
                <span className="border border-[#2D313B] rounded-full text-[#D1D5DB] py-1 px-3">{saved.length}</span>
            </Link>
        </div>
    );
};

export default SavedBadge;
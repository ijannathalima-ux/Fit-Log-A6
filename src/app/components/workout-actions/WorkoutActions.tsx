"use client";

import { FitLogType } from "@/type/types";
import { useFitLog } from "@/app/context/FitLogContext";
import { BiPlusCircle } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";
import { MdAddCard } from "react-icons/md";

interface WorkoutActionsProps {
    workout: FitLogType;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {

    const { plan, saved, addToPlan, saveForLater } = useFitLog();

    const isAlreadyInPlan = plan.some(
        (item) => String(item.id) === String(workout.id)
    );

    const isAlreadySaved = saved.some(
        (item) => String(item.id) === String(workout.id)
    );

    const handleAddToPlan = () => {

        if (isAlreadyInPlan) {
            toast.error("This workout is already in today's plan");
            return;
        }

        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    const handleSaveForLater = () => {

        if (isAlreadySaved) {
            toast.error("This workout is already saved");
            return;
        }

        saveForLater(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 pt-4">

            {/* Add to today's plan */}
            <button
                onClick={handleAddToPlan}
                className="flex-1 bg-[#C2F800] text-black font-bold text-xs py-2 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
                <MdAddCard className="w-4 h-4" />

                <span>
                    Add to today&apos;s plan
                </span>
            </button>

            {/* Save for later */}
            <button
                onClick={handleSaveForLater}
                className="flex-1 border border-[#2D313B] text-[#D1D5DB] font-bold text-xs py-3 rounded-2xl flex items-center justify-center gap-2 hover:border-white transition"
            >
                <FiBookmark className="w-4 h-4" />

                <span>
                    Save for later
                </span>
            </button>

        </div>
    );
};

export default WorkoutActions;
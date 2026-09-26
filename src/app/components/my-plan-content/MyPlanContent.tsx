"use client"
import { useFitLog } from "@/app/context/FitLogContext";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { FiActivity, FiCheck, FiClock, FiStar, FiX } from "react-icons/fi";



const MyPlanContent = () => {

    const { plan, saved, removePlan, removeSaved, markAsDone } = useFitLog();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const currentWorkouts = [...(activeTab === "plan" ? plan : saved)];

    if (sortBy === "duration") {
        currentWorkouts.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
        currentWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }

    if (sortBy === "rating") {
        currentWorkouts.sort((a, b) => b.rating - a.rating);
    }

    const totalMinutes = plan.reduce((total, workout) => total + workout.duration, 0);

    const totalCalories = plan.reduce((total, workout) => total + workout.caloriesBurned, 0);

    const handleRemovePlan = (id: string | number) => {
        removePlan(id);
        toast.success("Workout removed from today's plan");
    };

    const handleRemoveSaved = (id: string | number) => {
        removeSaved(id);
        toast.success("Workout removed from saved");
    };

    const handleDone = (id: string | number) => {
        markAsDone(id);
        toast.success("Workout marked as done");
    };


    return (
        <main className="min-h-screen bg-[#0C0D10] text-white">
            <div className="container mx-auto px-4 py-10 md:px-6 md:py-14 max-w-7xl">

                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold uppercase md:text-5xl tracking-tight text-white">
                        MY PLAN
                    </h1>
                    <p className="mt-2 text-sm text-[#9CA3AF]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>


                <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 font-mono">
                    <div className="rounded-xl border border-[#222630] bg-[#15171E] p-5">
                        <p className="text-xs font-bold  text-[#9CA3AF] tracking-wider">Exercises</p>
                        <p className="mt-2 text-4xl font-bold text-[#C2F800]">{plan.length}</p>
                    </div>

                    <div className="rounded-xl border border-[#222630] bg-[#15171E] p-5">
                        <p className="text-xs font-bold  text-[#9CA3AF] tracking-wider">Minutes</p>
                        <p className="mt-2 text-4xl font-bold text-white">{totalMinutes}</p>
                    </div>

                    <div className="rounded-xl border border-[#222630] bg-[#15171E] p-5">
                        <p className="text-xs font-bold text-[#9CA3AF] tracking-wider">Calories</p>
                        <p className="mt-2 text-4xl font-bold text-white">{totalCalories}</p>
                    </div>
                </div>


                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex gap-2 bg-[#151921] py-2 px-3 rounded-2xl">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`px-5 py-3 text-sm font-bold tracking-wider transition ${activeTab === "plan" ? " rounded-2xl text-white bg-[#2B303D]" : "text-[#9CA3AF] hover:text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`px-5 py-3 text-sm font-bold tracking-wider transition ${activeTab === "saved" ? "rounded-2xl text-white bg-[#2B303D]" : "text-[#9CA3AF] hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>


                    <div className="flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] pb-2 sm:pb-0">
                        <span>Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as "duration" | "calories" | "rating"
                                )
                            }
                            className="bg-[#15171E] border border-[#222630] text-white rounded-2xl px-2 py-1 outline-none text-xs font-bold uppercase"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>


                {currentWorkouts.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-[#222630] py-20 text-center flex flex-col items-center justify-center">
                        <h2 className="text-xl font-black tracking-widest text-white uppercase mb-2">NOTHING HERE YET</h2>
                        <p className="mx-auto mt-1 max-w-sm text-xs text-[#A1A1AA] mb-6">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex text-black rounded-2xl bg-[#C2F10D] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition"
                        >
                            Go to workouts
                        </Link>
                    </div>
                )}


                <div className="space-y-4">
                    {currentWorkouts.map((workout) => (
                        <div
                            key={workout.id}
                            className="p-4 border border-[#222630] bg-[#15171E] flex flex-col sm:flex-row items-center rounded-2xl justify-between gap-4 w-full"
                        >
                            <div className="flex items-center gap-4 w-full sm:w-auto">

                                <div className="relative w-20 h-20 shrink-0 bg-zinc-950 overflow-hidden rounded">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover" />
                                </div>


                                <div>
                                    <h3 className="text-base font-bold text-white uppercase tracking-tight">
                                        {workout.name}
                                    </h3>
                                    <p className="text-xs text-[#9CA3AF] mt-0.5">{workout.equipment}</p>


                                    <div className="mt-3 flex items-center gap-4 text-xs text-[#9CA3AF]">
                                        <span className="flex items-center gap-1">
                                            <FiClock className="text-zinc-500" /> {workout.duration} min
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FiActivity className="text-zinc-500" /> {workout.caloriesBurned} kcal
                                        </span>
                                        <span className="flex items-center gap-1 text-yellow-500">
                                            <FiStar className="fill-current" /> {workout.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800">
                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="px-4 py-2 border border-zinc-700 hover:border-white text-xs font-bold tracking-wide transition text-white rounded-2xl"
                                >
                                    View Details
                                </Link>

                                {activeTab === "plan" && (
                                    <button
                                        onClick={() => handleDone(workout.id)}
                                        className="px-4 py-2 bg-[#C2F800] text-black text-xs font-bold transition flex items-center gap-1 rounded-2xl hover:opacity-90"
                                    >
                                        <FiCheck strokeWidth={3} /> Mark as Done
                                    </button>
                                )}

                                <button
                                    onClick={() => activeTab === "plan" ? handleRemovePlan(workout.id) : handleRemoveSaved(workout.id)}
                                    className="p-2 border border-zinc-800 hover:bg-zinc-900/50 text-zinc-500 hover:text-red-400 text-xs font-bold transition rounded"
                                >
                                    <FiX size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default MyPlanContent;
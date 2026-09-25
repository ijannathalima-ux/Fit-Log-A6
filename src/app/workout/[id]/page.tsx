import { FitLogType } from "@/type/types";
import Image from "next/image";
import { BiPlusCircle } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";

interface IWorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>
}

const getWorkout = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json()
    return data;
}

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {

    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const workoutId = await res.json()
    const workoutData = await getWorkout()
    const workoutDetailsData = workoutData.find((workout: FitLogType) => String(workout.id) === String(id)) as FitLogType
    console.log(workoutDetailsData)

    console.log(workoutId)

    return (
        <div className="bg-[#0C0D10] min-h-screen text-white p-6 md:p-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">

                <div className="w-full  sm:aspect-square relative overflow-hidden rounded-2xl border border-[#1F222A]">
                    <Image
                        src={workoutDetailsData.image}
                        alt={workoutDetailsData.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>


                <div className="flex flex-col justify-between">
                    <div>

                        <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-2 font-sans text-white">
                            {workoutDetailsData.name}
                        </h1>
                        <p className="text-[#9CA3AF] text-sm mb-5 leading-relaxed">
                            {workoutDetailsData.description}
                        </p>


                        <div className="flex gap-2 mb-8">
                            {workoutDetailsData.muscleGroups.map((muscle, index) => (
                                <span key={index} className="bg-[#C2F800] text-black text-xs font-bold px-3 py-2 rounded-full uppercase">
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        <div className="bg-[#151922] border border-[#232834] rounded-xl p-5 py-4 text-xs divide-y divide-[#1F222A] mb-8">

                            <div className="flex justify-between py-4">
                                <span className="text-[#9CA3AF] uppercase font-bold">Equipment</span>
                                <span className="text-white">{workoutDetailsData.equipment}</span>
                            </div>
                            
                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Difficulty</span>
                                <span className="text-white">{workoutDetailsData.difficulty}</span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Sets</span>
                                <span className="text-white">{workoutDetailsData.sets}</span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Reps</span>
                                <span className="text-white">{workoutDetailsData.reps}</span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Duration</span>
                                <span className="text-white">{workoutDetailsData.duration} min</span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Calories</span>
                                <span className="text-white">{workoutDetailsData.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between py-3">
                                <span className="text-[#9CA3AF] uppercase font-bold">Rating</span>
                                <span className="text-white">{workoutDetailsData.rating}</span>
                            </div>
                        </div>


                        <div className="mb-8">
                            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Instructions</h3>
                            <ol className="list-decimal pl-5 space-y-3 text-xs text-[#9CA3AF] leading-relaxed">
                                {workoutDetailsData.instructions.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* button */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {/* Primary Button */}
                        <button className="flex-1 bg-[#C2F800] text-black font-bold text-xs uppercase py-2 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition">
                            <BiPlusCircle className="w-4 h-4" />
                            <span>Add to today&apos;s plan</span>
                        </button>

                        {/* Secondary Button */}
                        <button className="flex-1 border border-[#2D313B] text-[#D1D5DB] font-bold text-xs uppercase py-3 rounded-2xl flex items-center justify-center gap-2 hover:border-white transition">
                            <FiBookmark className="w-4 h-4" />
                            <span>Save for later</span>
                        </button>
                    </div>
                    
                </div>

            </div>

            
        </div>
    );
};
export default WorkoutDetailsPage;
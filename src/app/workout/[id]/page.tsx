import WorkoutActions from "@/app/components/workout-actions/WorkoutActions";
import { FitLogType } from "@/type/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>
}


const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {

    const { id } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)

    if(!res.ok){
        notFound()
    }

    const workoutDetailsData: FitLogType = await res.json();

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

                    <WorkoutActions workout={workoutDetailsData} />

                </div>

            </div>


        </div>
    );
};
export default WorkoutDetailsPage;
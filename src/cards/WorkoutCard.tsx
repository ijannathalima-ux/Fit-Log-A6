import { FitLogType } from '@/type/types';
import Image from 'next/image';
import { FaFireAlt, FaRegClock, FaRegStar } from 'react-icons/fa';
import Link from 'next/link';

interface WorkoutCardsProps {
    workout: FitLogType
}

const WorkoutCards = ({ workout }: WorkoutCardsProps) => {
    return (
        <Link
            href={`/fitlog/${workout.id}`}
            className="group bg-[#15171E] rounded-2xl border border-[#222630] overflow-hidden hover:border-[#C2F800] transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <div>

                    <div className="relative aspect-video w-full bg-[#222630] overflow-hidden">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={350}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>


                    <div className="p-5">

                        <div className="flex flex-wrap gap-2 mb-3">
                            {workout.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] bg-[#C2F800] text-black px-2 py-0.5 rounded-2xl font-black tracking-widest uppercase"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        <h3 className="text-lg font-bold tracking-tight text-white mb-2 uppercase">
                            {workout.name}
                        </h3>


                        <p className="text-xs text-[#9CA3AF] font-medium">
                            Equipment: <span className="text-[#D1D5DB]">{workout.equipment}</span>
                        </p>
                    </div>
                </div>


                <div className="px-5 pb-5 pt-3 border-t border-[#1F222A] flex items-center justify-between text-xs text-[#9CA3AF] font-mono">

                    <div className="flex items-center gap-1">
                        <FaRegClock className="text-[#9CA3AF]" />
                        <span>{workout.duration} min</span>
                    </div>


                    <div className="flex items-center gap-1">
                        <FaFireAlt className="text-[#E11D48]" />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>


                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaRegStar className="fill-current" />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCards;
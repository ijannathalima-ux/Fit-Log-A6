import WorkoutCards from '@/app/cards/WorkoutCard';
import { FitLogType } from '@/type/types';

const getWorkout = async () =>{
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json()
    return data;
}


const WorkoutLibraryPage = async () => {

    const data = await getWorkout()

    return (
        <div id="library" className='container mx-auto px-4 py-8 md:px-6'>


            <h2 className='text-[#FFFFFF] font-bold text-3xl uppercase tracking-tight mb-3 md:text-[4xl]'>
                THE LIBRARY
            </h2>
            <p className='text-[#9CA3AF] md:text-[19px] font-base'>
                Twelve lifts covering every major muscle group.
            </p>

            <div className='grid grid-cols-1 gap-5 mt-9 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((workout: FitLogType) => {
                        return <WorkoutCards
                            key={workout.id}
                            workout={workout}>
                        </WorkoutCards>
                    })
                }
            </div>
        </div>
    );
};

export default WorkoutLibraryPage;
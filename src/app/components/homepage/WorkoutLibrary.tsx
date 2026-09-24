import WorkoutCards from '@/cards/WorkoutCard';
import { FitLogType } from '@/type/types';
import React from 'react';



const WorkoutLibraryPage = async () => {

    const res = await fetch ("http://localhost:3000/data.json");
    const data = await res.json()
    console.log(data, "data")

    return (
        <div className='container mx-auto'>
            <h2 className='text-[#FFFFFF] font-bold text-4xl uppercase tracking-tight mb-3'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] text-[19px] font-sans '>Twelve lifts covering every major muscle group.</p>

        <div className='grid grid-cols-3 gap-4 mt-9'>
            {
                data.map((workout:FitLogType, ind: number) => {
                    return <WorkoutCards key={ind} workout={workout}></WorkoutCards>
                })
            }
        </div>
        </div>
    );
};

export default WorkoutLibraryPage;
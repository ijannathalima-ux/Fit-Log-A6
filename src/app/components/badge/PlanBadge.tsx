"use client"
import { useFitLog } from '@/app/context/FitLogContext';
import Link from 'next/link';

const PlanBadge = () => {
    const {plan} = useFitLog()
    return (
        <div>
            <Link href="/my-plan" className='flex items-center gap-2'>
            <span>Plan</span>
            <span className='bg-[#C2F800] rounded-full py-1 px-3 text-black'>{plan.length}</span>
            </Link>
        </div>
    );
};

export default PlanBadge;
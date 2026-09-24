import Image from "next/image";
import BannerImage from "@/app/assets/banner.png";

const BannerPage = () => {
    return (
        <div className="p-12 ">
            <div className="container mx-auto flex justify-center items-center gap-5 p-8 bg-[#222630] rounded-2xl border border-[#9CA3AF] h-150">
            {/* left side */}
            <div className="">
                <span className="text-[#C2F800] font-medium block mb-2">WORKOUT LIBRARY</span>
                <h2 className="text-[#FFFFFF] text-5xl font-black mb-3 uppercase tracking-tight font-sans">TRAIN WITH INTENT. LOG<br></br>
                    EVERY SET.</h2>
                <p className="text-[#9CA3AF] text-[20px] mb-6 max-w-xl">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into todays plan, and watch the weeks work add up.</p>
                <a href="#library"
                 className="bg-[#C2F800] font-medium py-3 px-7 text-[#000000] rounded-md inline-flex items-center gap-2 uppercase tracking-wide text-sm hover:opacity-90 transition">
                    <span>BROWSE WORKOUTS</span>
                    </a>
            </div>


            {/* right side */}
            <Image src={BannerImage} alt="FitLog Image" className="w-85 h-auto"/>
        </div>
        </div>
    );
};

export default BannerPage;
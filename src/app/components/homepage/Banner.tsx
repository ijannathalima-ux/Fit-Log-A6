import Image from "next/image";
import BannerImage from "@/app/assets/banner.png";

const BannerPage = () => {
    return (
        <div className="px-4 py-6 md:px-8 md:py-9">
            <div className="container mx-auto flex flex-col items-center gap-8 p-6 bg-[#222630] rounded-2xl border border-[#9CA3AF] md:flex-row md:justify-between md:p-8">


                {/* Left side */}
                <div className="w-full md:w-1/2">

                    <span className="mb-2 block font-medium text-[#C2F800]">
                        WORKOUT LIBRARY
                    </span>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h2>

                    <p className="mb-6 max-w-xl text-base text-[#9CA3AF] md:text-[20px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s
                        work add up.
                    </p>

                    <a
                        href="#library"
                        className="inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-6 py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:opacity-90"
                    >
                        <span>BROWSE WORKOUTS</span>
                    </a>

                </div>



               
                {/* Right side */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={BannerImage}
                        alt="FitLog workout"
                        className="mx-auto w-full max-w-[400px]"
                    />
                </div>


            </div>
        </div>
    );
};

export default BannerPage;
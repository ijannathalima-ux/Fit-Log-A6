import Link from "next/link";

const notFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center px-4">
            <div className="text-center">

                <h2 className="font-bold text-5xl mb-4 uppercase">
                    Oops, page not found!
                </h2>

                <p className="text-[#9CA3AF] mb-6 text-[19px] font-medium">
                    The page you are looking for is not available.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-[#C2F800] text-black font-bold py-3 px-9 rounded-2xl uppercase text-sm hover:opacity-90 transition"
                >
                    Back to home
                </Link>

            </div>
        </div>
    );
};

export default notFoundPage;
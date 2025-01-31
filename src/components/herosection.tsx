import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex w-full h-fit justify-between">
            <div className="lg:py-32 lg:px-32 md:px-8 md:py-20 sm:px-10 sm:py-14 w-full lg:w-3/5 h-fit overflow-auto text-white ">
                <h1 className="text-6xl font-text font-bold leading-tight"><span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text">Intelligent</span> cloud-based
                    <span className="bg-gradient-to-tr from-[#017373] to-[#AAD9D1] text-transparent bg-clip-text "> note-taking </span> and collaboration tool</h1>
                <p className="font-text py-1">Experience the power of smart note-taking and transform the way you work today.</p>
                <div className="flex w-fit h-fit gap-1 bg-white my-14 rounded-md">
                    <input className=" w-[221px] text-black m-2 px-2 text-md font-text ">
                    </input>
                    <div className="">
                        <button className=" flex items-center gap-2 m-1 py-1 px-4 bg-gradient-to-tr text-black font-semibold font-text from-[#017373] to-[#AAD9D1] rounded-lg">
                            Sign up
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-2">
                                <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                                <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" />
                                <path d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-16 mx-32 flex-shrink-0 hidden xl:block">
                <Image src={"/AbstractShapes.png"} width={363} height={483} alt="HeroSection"></Image>
            </div>
        </div>
    );
}
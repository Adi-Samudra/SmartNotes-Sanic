import Image from "next/image";

interface TesitmonialsProp {
    prop: string[];
};

// export default function Quotes({prop}:TesitmonialsProp) {
//     return(
//         <div className="flex-col w-fll h-fit py-12 px-52 mx-80">
//             <Image src={"/singlequote.png"} width={37} height={24} alt="Quotes"/>
//             <p className="text-3xl text-white font-semibold justify-self-center text-wrap mx-24 w-full text-center">
//             {prop[0]}
//             </p>
//             <div className="flex gap-8 py-8 justify-center">
//             <p className="text-white font-text font-medium text-lg">{prop[1]}</p>
//             <p className="font-text text-lg font-medium text-[#737373]"> {prop[2]}</p>
//             </div>
//         </div>
//     );
// }


export default function Quotes({ prop }: TesitmonialsProp) {
    return (
        <div className="flex-col w-full h-fit py-12 px-6 sm:px-12 md:px-24 lg:px-52 mx-auto max-w-screen-lg">
            <Image src={"/singlequote.png"} width={37} height={24} alt="Quotes" />
            <p className="text-3xl text-white font-semibold text-center mx-4 sm:mx-12">
                {prop[0]}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 py-8 justify-center">
                <p className="text-white font-text font-medium text-lg text-center sm:text-left">
                    {prop[1]}
                </p>
                <p className="font-text text-lg font-medium text-[#737373] text-center sm:text-left">
                    {prop[2]}
                </p>
            </div>
        </div>
    );
}

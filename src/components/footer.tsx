import Image from "next/image";

export default function Footer() {

    return (
        <div>
            <div className="border-[#017373] border-t-2 flex flex-col lg:flex-row w-full h-fit bg-black">
                <div className=" md:w-full sm:w-full lg:w-2/6 xl:w-2/6 flex flex-col text-white font-text items-start px-32 xl:py-12 lg:py-12 md:py-6 sm:py-6">
                    <div className="flex  gap-1">
                        <svg width="35" height="35" viewBox="0 0 26 26" fill="#017373" xmlns="http://www.w3.org/2000/svg" className="bg-[#017373] rounded-md border-4 border-[#017373]">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6425 25.5C15.35 25.5 15.9763 25.5025 16.5737 25.2975C17.17 25.0925 17.665 24.7062 18.2225 24.2725L18.335 24.1838L23.0875 20.4875L23.25 20.3625C24.035 19.7537 24.7337 19.2125 25.1187 18.425C25.5037 17.6375 25.5025 16.7537 25.5 15.76V6.6675C25.5 5.56 25.5 4.605 25.3975 3.84C25.2875 3.02125 25.0387 2.235 24.4013 1.59875C23.7638 0.96125 22.9787 0.7125 22.16 0.6025C21.395 0.5 20.44 0.5 19.3325 0.5H6.6675C5.56 0.5 4.605 0.5 3.84 0.6025C3.02125 0.7125 2.235 0.96125 1.59875 1.59875C0.96125 2.23625 0.7125 3.02125 0.6025 3.84C0.5 4.605 0.5 5.56 0.5 6.6675V19.3325C0.5 20.44 0.5 21.395 0.6025 22.16C0.7125 22.9787 0.96125 23.765 1.59875 24.4013C2.23625 25.0387 3.02125 25.2875 3.84 25.3975C4.605 25.5 5.56 25.5 6.6675 25.5H14.6425ZM20.5 13C20.5 12.6685 20.3683 12.3505 20.1339 12.1161C19.8995 11.8817 19.5815 11.75 19.25 11.75H13.41C12.4938 11.75 11.75 12.4938 11.75 13.41V19.25C11.75 19.5815 11.8817 19.8995 12.1161 20.1339C12.3505 20.3683 12.6685 20.5 13 20.5C13.3315 20.5 13.6495 20.3683 13.8839 20.1339C14.1183 19.8995 14.25 19.5815 14.25 19.25V14.25H19.25C19.5815 14.25 19.8995 14.1183 20.1339 13.8839C20.3683 13.6495 20.5 13.3315 20.5 13Z" fill="#EFECE6" />
                        </svg>
                        <h1 className="align-middle font-bold text-xl">SmartNotes</h1>
                    </div>
                    <div className="flex w-fit h-fit gap-1 bg-white xl:my-14 lg:my-14 md:my-8 sm:my-4 rounded-md border-[#017373] border-2">
                        <input className=" w-[170px] text-black m-2 px-2 text-md font-text ">
                        </input>
                        <div className="">
                            <button className=" flex items-center gap-2 m-1 py-1 px-4 bg-white text-black rounded-lg font-semibold font-text">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-1">
                                    <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#017373" />
                                    <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#017373" />
                                    <path d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z" fill="#017373" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="lg:w-4/6 md:w-full sm:w-full md:px-12 flex sm:flex-col md:flex-col gap-8 justify-evenly text-white font-text lg:py-12 sm:py-4 md:py-8 px-12">
                    <div className="w-full grid grid-cols-3 md:grid-cols-4 xl:gap-36 lg:gap-36 sm:gap-6 [&_ul]:text-[#737373] [&_ul]:font-light [&_ul]:text-md [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:pb-7 [&_ul]:pb-1">
                        <div>
                            <h1>Product</h1>
                            <ul>About</ul>
                            <ul>Features</ul>
                            <ul>Pricing</ul>
                            <ul>Integrations</ul>
                            <ul>FAQs</ul>
                        </div>
                        <div className="">
                            <h1>Company</h1>
                            <ul>Our Story</ul>
                            <ul>Team</ul>
                            <ul>Careers</ul>
                            <ul>Press</ul>
                            <ul>Contact Us</ul>
                        </div>
                        <div className="">
                            <h1>Resources</h1>
                            <ul>Blog</ul>
                            <ul>Webinars</ul>
                            <ul>Case Studies</ul>
                            <ul>Templates</ul>
                            <ul>Help Center</ul>
                        </div>
                        <div className="">
                            <h1>Legal</h1>
                            <ul>Terms of Service</ul>
                            <ul>Privacy Policy</ul>
                            <ul>Cookie Policy</ul>
                            <ul>Acceptable Use</ul>
                            <ul>Refund Policy</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#048C80] text-black flex justify-around items-center py-4">
                <div className="font-text text-sm">
                  <p>@2024 SmartNotes | All rights Reserved. </p>  
                </div>
                <div className="flex gap-3">
                <Image src={"/FB.png"} width={40} height={40} alt="SocialMedia" className="rounded-full"></Image>
                <Image src={"/LI.png"} width={40} height={40} alt="SocialMedia" className="rounded-full"></Image>
                <Image src={"/TW.png"} width={40} height={40} alt="SocialMedia" className="rounded-full"></Image>
                <Image src={"/YT.png"} width={40} height={40} alt="SocialMedia" className="rounded-full"></Image>
                </div>
            </div>

        </div>
    );
}
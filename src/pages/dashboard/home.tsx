import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpg"
import { Button } from "../../components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { HomeNavItems } from "../../components/common/navigation";

const iconStyles: Record<string, string> = {
    purple: "bg-[#E9D4FF] text-[#9013FE]",
    blue: "bg-[rgba(19,216,254,0.1)] text-[#13D8FE]",
    red: "bg-[rgba(255,107,107,0.1)] text-[#FF6B6B]",
    green: "bg-[rgba(72,187,120,0.1)] text-[#48BB78]",
};


type HomeNavItem = {
    title: string;
    url: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: keyof typeof iconStyles;
};

function HomeDashboard() {
    const [showTools, setShowTools] = useState(true)
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    const navigate = useNavigate()

    return (
        <div className="lg:h-[calc(100vh-85px)]  [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto" style={{ marginTop: isTablet ? "70px" : "10px" }} >
            <div className="mt-2 block md:flex flex-col 2xl:flex-row items-center gap-5 my-3">
                <div className="w-full">
                    <div className="banner banner-1 h-fit block md:flex">
                        <div className="block lg:flex items-center gap-6 flex-1">
                            <div className="icon-section flex justify-center lg:justify-start mb-4 lg:mb-0">
                                <img src={banner} alt="announcement" className="banner-image mb-6 md:mt-0"></img>
                            </div>

                            <div className="text-section text-center lg:text-left"><div className="banner-title"><strong> Big News: We&apos;re Becoming Bravoo! 🎉</strong></div><div className="banner-subtitle">Bravoo a platform designed to make learning fun, simple, and truly rewarding. With Bravoo, you&apos;ll complete quick, engaging missions that help you build real digital skills while earning coins, prizes, gadgets, and more. Explore what&apos;s coming on our brand-new website: <a href="https://www.joinbravoo.com" target="_blank" className="underline">www.joinbravoo.com</a> You&apos;ll get a sneak peek of the experience and learn how to join the growing Bravoo community. We officially launch on January 10, and we&apos;re excited to have you on this journey with us.</div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1 mt-5">
                <div className="flex justify-end mb-4">
                    <Button
                        className="bg-transparent text-[#9013FE] border-none outline-none flex items-center cursor-pointer hover:bg-transparent "
                        onClick={() => setShowTools(prev => !prev)}
                    >
                        {showTools ? <Eye className="stroke-[2.5]" />
                            : <EyeOff className="stroke-[2.5]" />}
                    </Button>

                </div>

                <div className="grid gap-5 mb-8 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(4,1fr)] ">
                    {showTools ?
                        (HomeNavItems as HomeNavItem[]).map((item) => (
                            <Link to={item.url} key={item.title} className="bg-white text-start rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:border-[#E9D4FF] border border-[#E2E8F0] transition-all duration-300 ease-in-out flex  flex-col items-start gap-3">
                                <div className={`w-10 h-10 rounded-full flex justify-center items-center mb-1 ${iconStyles[item.color]}`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold  text-[1rem]">{item.title}</h3>
                                <p className="text-[#718096] text-[0.8rem]">{item.description}</p>
                                <span className="text-[#9013FE] flex items-center text-[0.8rem] gap-2">Browse tools<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right ml-4 w-3 hover:translate-x-0.75 transition-all duration-300 ease-in-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                            </Link>
                        ))
                        : null
                    }

                </div>
            </div>


            <div className="bg-white rounded-2xl p-8 text-center mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#E2E8F0]">
                <div className="w-20 h-20 rounded-full bg-[#E9D4FF] text-[#9013FE] flex justify-center items-center text-[2rem] m-[0_auto_1.5rem]">
                    <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"
                        />
                    </svg>

                </div>
                <h3 className="font-semibold text-[1.2rem] mb-2">No Tools Added Yet</h3>
                <p className="text-[#718096] mb-6 text-sm max-w-100 ml-auto mr-auto">Start by adding your favorite tools to your library. We'll help you track usage, subscriptions, and optimize your stack.</p>
                <div className="flex flex-col md:flex-col w-full md:items-center lg:flex-row md:items-cen gap-4 justify-center mt-6">
                    <Button className="inline-flex items-center w-full justify-center text-xs font-bold md:text-base md:max-w-87.5  rounded-[50px] border-none text-center transition-all duration-300 ease-in-out text-white bg-[#9013FE] hover:bg-[#7c0fe0] hover:-translate-y-0.5  h-12.5 hover:shadow-[0_4px_8px_rgba(144,19,254,0.2)]" ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus  mr-[.2rem] md:mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"></path></svg> Add Your First Tool</Button>
                    <Button className="inline-flex items-center justify-center w-full md:text-base md:max-w-87.5 font-bold h-12.5 rounded-[50px] text-xs text-center bg-transparent text-[#2D3748] border  border-[#E2E8F0] hover:bg-[#F7FAFC]" onClick={() => navigate('/dashboard/discover')}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compass" className="svg-inline--fa fa-compass mr-[.2rem] md:mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>Discover Tools</Button>
                </div>
            </div>
        </div>
    );
}

export default HomeDashboard;
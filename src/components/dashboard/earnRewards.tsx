import { Star, Calendar, Zap} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import spotlightIcon from "../../assets/spotlight.png";
import { Button } from "../ui/button";
import ReferAndEarn from "./referAndEarn";

const rewardsJourney = [
    {
        id: 1,
        type: "points_balance",
        title: "Points Balance",
        icon: <Star className="w-5 h-5 text-purple-600" />,
        value: "10",
        target: "$5 Gift Card",
        current: 10,
        total: 5000,
        footer: "🚀 Just getting started — keep earning points!",
        headerBg: "bg-[#f5f3ff]",
    },
    {
        id: 2,
        type: "daily_streak",
        title: "Daily Streak",
        icon: <Calendar className="w-5 h-5 text-blue-500" />,
        value: "1 day",
        days: [
            { label: "M", status: "completed" },
            { label: "T", status: "current" },
            { label: "W", status: "upcoming" },
            { label: "T", status: "upcoming" },
            { label: "F", status: "upcoming" },
            { label: "S", status: "upcoming" },
            { label: "S", status: "upcoming" },
        ],
        footerTwo: "Check in daily to earn +5 points",
        headerBg: "bg-[#eff6ff]",
    },
];

export default function RewardEarning() {
    return (
        <div className="no-scrollbar">
            <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
                Your Rewards Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rewardsJourney.map((card) => (
                    <div
                        key={card.id}
                        className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-3xl bg-white border border-[#f3f4f6] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 relative border border-b-[#f3f4f6] bg-[#eef2ff] border-t-0 border-r-0 border-l-0">
                            <h3 className="flex items-center gap-2 text-gray-700 font-semibold">
                                {card.icon}
                                {card.title}
                            </h3>
                        </div>

                        <div className="p-5">
                            {card.type === "points_balance" ? (
                                <>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-[42px] font-extrabold text-[#9013fe]">
                                            {card.value}
                                        </div>
                                        <DotLottieReact
                                            src="/lottie/coin.lottie"
                                            autoplay
                                            style={{ width: 120, height: 120 }}
                                        />

                                    </div>

                                    <div>
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-gray-500">
                                                Progress to{" "}
                                                <span className="font-semibold text-gray-700">
                                                    {card.target}
                                                </span>
                                            </span>
                                            <span className="font-bold text-gray-700">
                                                {card.current}/{card.total}
                                            </span>
                                        </div>

                                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-linear-to-r from-[#9013fe] to-[#FF9FF5] transition-all duration-700"
                                                style={{
                                                    width: `${((card.current ?? 0) / (card.total ?? 1)) * 100}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-[42px] font-extrabold text-[#9013fe] mb-4">
                                        {card.value}
                                    </div>

                                    <div className="flex justify-between mb-6">
                                        {card.days?.map((day, i) => (
                                            <div key={i} className="flex flex-col items-center">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                          ${day.status === "completed"
                                                            ? "bg-sky-400 text-white"
                                                            : day.status === "current"
                                                                ? "border-2 border-[#9013fe] text-[#9013fe]"
                                                                : "bg-gray-100 text-gray-400"
                                                        }`}
                                                >
                                                    {day.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-[#9013fe] hover:bg-[#7a10d8] text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors">
                                        <Zap className="w-4 h-4" />
                                        Claim Today's Points
                                    </button>
                                </>
                            )}

                            <p className="text-xs text-gray-500 mt-2 mb-10">
                                {card.footer}
                            </p>
                            <p className="text-[0.875rem] text-gray-600 text-center -mt-3">{card.footerTwo}</p>
                        </div>
                    </div>
                ))}

                {/* Static Third Card: Top Tool Spotlight */}
                <div className="hover:-translate-y-0.75 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]bg-white rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-[#f3f4f6] transition-all duration-300 ease-in-out">
                    <div className="p-4 bg-[linear-gradient(135deg,#9013FE_0%,#70D6FF_100%)] text-white relative overflow-hidden">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Featured</span>
                        <h3 className="text-xl font-bold mt-3 mb-5 leading-tight">Top Tool Spotlight</h3>
                        <p className="text-lg opacity-90 mt-1 font-medium">Reclaim</p>

                        {/* Abstract Tool Icon */}
                        <div className="absolute top-10 right-6 w-14 h-14 rounded-2xl flex items-center justify-center ">
                            <img src={spotlightIcon} alt="spotlight" className="w-full" />
                        </div>
                    </div>

                    <div className="p-5 bg-white grow flex flex-col justify-between">
                        <div className="flex justify-start mb-4 gap-4">
                            <div className="">
                                <Calendar className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1 text-gray-800">Automate and Optimize Your Schedule</h4>
                                <p className="text-[0.875rem] text-gray-600  leading-relaxed">
                                    Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!
                                </p>
                            </div>
                        </div>

                        <div className="px-4 py-1.25 flex justify-between items-center border border-t-[#f3f4f6] border-b-0 border-r-0 border-l-0">
                            <Button className="bg-[#9013fe] hover:bg-[#8628da] text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border-0"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" className="svg-inline--fa fa-user-plus w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></svg> Sign up</Button>

                            <Button className="bg-[linear-gradient(45deg,#9013FE,#FF8687)] text-white flex gap-2 py-2 px-4 rounded-full font-semibold text-sm"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gift" className="svg-inline--fa fa-gift w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"></path></svg> Claim 50 pts</Button></div>
                    </div>

                </div>

            </div>

            <ReferAndEarn/>
        </div>
    );
}

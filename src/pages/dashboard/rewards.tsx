import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import RewardEarning from "../../components/dashboard/earnRewards";
import RedeemSection from "../../components/dashboard/redeemReward";


function RewardsDashboard() {
    const [active, setActive] = useState<string>("earn");
    return (
        <div>
            <p className="text-gray-600">Earn points, unlock rewards, and celebrate your progress!</p>
            <div className="lg:h-[calc(100vh-110px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
                <div className="mt-5">
                    <Tabs
                        defaultValue="earn"
                        onValueChange={(value) => setActive(value)}
                        className="w-full"
                    >
                        <TabsList className="relative grid h-12 w-75 grid-cols-2 bg-transparent p-1">
                            {/* Sliding indicator */}
                            <div className={` absolute top-1 left-1 h-10 w-37.5 rounded-t-md rounded-b-none bg-[#DFC3FB] shadow-none border-b-4 border-[#9013fe] transition-transform duration-300 ease-in-out
                            ${active === "redeem" ? "translate-x-35" : "translate-x-0"}`} />

                            <TabsTrigger
                                value="earn"
                                className=" w-full relative z-10 rounded-t-md text-gray-500 data-[state=active]:text-[#9013fe] transition-colors shadow-none bg-transparent cursor-pointer">
                                Earn Points
                            </TabsTrigger>

                            <TabsTrigger
                                value="redeem"
                                className="relative z-10 cursor-pointer w-full text-center rounded-t-md text-gray-500 data-[state=active]:text-[#9013fe] transition-colors">
                                Redeem Rewards
                            </TabsTrigger>
                        </TabsList>

                        <div className=" mt-4">
                            <TabsContent value="earn" className="animate-in fade-in duration-300">
                                <RewardEarning />
                            </TabsContent>

                            <TabsContent value="redeem" className="animate-in fade-in duration-300">
                                <RedeemSection />
                            </TabsContent>
                        </div>
                    </Tabs>


                </div>
            </div>
        </div>
    );
}

export default RewardsDashboard;
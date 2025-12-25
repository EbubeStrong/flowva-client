import { Button } from "../../components/ui/button";


function SubscriptionDashboard() {
    return (
        <div className="lg:h-[calc(100vh-90px)]  [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto">
            <div className="mx-auto p-2">
                <div className="flex items-center flex-col mb-8 shadow-sm rounded-xl border-0">
                    <div className="py-12 px-8 flex flex-col items-center justify-center">
                        <div className="text-6xl text-[#9013FE] mb-6"><span role="img" aria-label="inbox"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="inbox" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path></svg></span></div>
                        <h5 className="text-xl font-bold text-gray-800 mb-4 css-1d4w9r2">No subscriptions yet</h5>
                        <p className="text-gray-500 text-center text-sm md:text-lg max-w-md mx-auto block mb-8 leading-relaxed css-1d4w9r2">You haven't added any subscriptions yet. Track your recurring payments and manage all your subscriptions in one place.</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button className="inline-flex items-center  font-semibold rounded-[50px]  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500
    px-4 py-2 text-sm gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Subscription</Button>
                            <Button className="inline-flex items-center bg-transparent  font-semibold rounded-[50px]  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
    border border-purple-600 text-purple-600 hover:bg-purple-100 hover:text-gray-500 focus:ring-purple-500
    px-4 py-2 text-sm gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>Import via Email</Button>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default SubscriptionDashboard;
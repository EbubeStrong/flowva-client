import banner from "../../assets/banner.jpg"

function HomeDashboard() {
    return ( 
        <div className="lg:h-[calc(100vh-85px)]  [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto">
            <div className="mt-2 flex flex-col 2xl:flex-row items-center gap-5 my-3">
                <div className="w-full">
                    <div className="banner banner-1 h-fit">
                        <div className="left-content">
                            <div className="icon-section">
                                <img src={banner} alt="announcement" className="banner-image"></img>
                            </div>

                            <div className="text-section"><div className="banner-title"><strong> Big News: We&apos;re Becoming Bravoo! 🎉</strong></div><div className="banner-subtitle">Bravoo a platform designed to make learning fun, simple, and truly rewarding. With Bravoo, you&apos;ll complete quick, engaging missions that help you build real digital skills while earning coins, prizes, gadgets, and more. Explore what&apos;s coming on our brand-new website: <a href="https://www.joinbravoo.com" target="_blank" className="underline">www.joinbravoo.com</a> You&apos;ll get a sneak peek of the experience and learn how to join the growing Bravoo community. We officially launch on January 10, and we&apos;re excited to have you on this journey with us.</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomeDashboard;
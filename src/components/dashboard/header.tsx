import { Link } from "react-router-dom";
import { NavItems } from "../common/nav";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Logo from "../../assets/flowva-logo.png";
import { useState } from "react";


function DashboardHeader({ title, titleSpan }: { title: string, titleSpan?: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="sticky top-0 z-20 bg-gray-50 pb-2 flex py-2 pt-3 ">
            <div className=" bg-gray-50 flex justify-between items-center w-full">
                <div className="flex items-center gap-3 ">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button className="lg:hidden bg-[#6D28D9] hover:bg-[#6D28D9]/70 transition-colors duration-300 ease-in-out ">
                                <svg
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="28"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                                    />
                                </svg>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-72 p-4">
                            <div className="flex flex-col gap-4">
                                <img src={Logo} alt="Flowva Logo" className="h-15 w-35" />
                                {NavItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        to={item.url}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 p-3 rounded hover:bg-[#6D28D9]/40 hover:text-[#7026e6] transition-colors duration-300 ease-in-out"
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.title}</span>
                                    </Link>

                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>


                    <div className="flex ml-2 md:ml-0 w-fit items-center gap-1">
                        <h1 className=" whitespace-nowrap text-xl md:text-[1.5rem] font-medium  ">{title}</h1>
                        {titleSpan && (
                            <span className="text-[#9013FE] text-xl md:text-[1.5rem] truncate w-30 md:52.5 overflow-hidden block font-medium">{titleSpan}</span>
                        )}


                    </div>
                </div>
            </div>

            <div className="notification-container group"><button className="notification-bell has-unread " aria-label="Notifications"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell text-[#2D3748] group-hover:text-[#9013fe]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="black" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg>
                <span className="notification-badge ">1</span></button>
            </div>
        </div>
    );
}
export default DashboardHeader;
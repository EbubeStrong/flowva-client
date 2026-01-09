import { Link } from "react-router-dom";
import { NavItems } from "../common/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Logo from "../../assets/flowva-logo.png";
import { useState } from "react";
import NotificationDropdown from "./notifications";
import { Separator } from "../ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useAuth } from "../../providers/useAuth";
import { supabase } from "../../lib/supabase";


function DashboardHeader({ greetingTitle, userNameTitleSpan, showActive }: { greetingTitle: string, userNameTitleSpan?: string, showActive: string }) {
    const [open, setOpen] = useState(false);

    const { session } = useAuth()
    // console.log(session)
    
    // HANDLE LOGOUT
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/auth/signin";
    };

    return (
        <div className=" bg-gray-50 pb-2 flex py-2 pt-3 ">
            <div className=" bg-gray-50 flex justify-between items-center w-full">
                <div className="flex items-center gap-3 ">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button className="md:hidden bg-[#6D28D9] hover:bg-[#6D28D9]/70 transition-colors duration-300 ease-in-out ">
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
                            <div className="flex flex-col gap-4 h-full relative">
                                <img src={Logo} alt="Flowva Logo" className="h-15 w-35" />
                                {NavItems.map((item) => {
                                    const isActive = showActive === item.url;
                                    return (

                                        <Link
                                            key={item.title}
                                            to={item.url}
                                            onClick={() => setOpen(false)}
                                            className={`flex items-center gap-3 p-3 rounded hover:bg-[#6D28D9]/40 hover:text-[#7026e6] transition-colors duration-300 ease-in-out ${isActive ? "bg-[#6D28D9]/40 text-[#7026e6] font-semibold" : "hover:bg-[#6D28D9] hover:text-[#7026e6]"}`}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.title}</span>
                                        </Link>

                                    )
                                })}
                                <div className="absolute w-full left-0 bottom-5 right-0">
                                <Separator className="my-2 border-black/10 mb-5" />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full flex-col py-3 justify-start px-6 bg-transparent cursor-pointer hover:bg-transparent"
                                        >
                                            {session?.user && (
                                                <div className="flex gap-3 items-center border-black/10">
                                                    <Avatar>
                                                        <AvatarFallback className="bg-purple-600 text-white">
                                                            {session.user.email?.charAt(0).toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div className="min-w-0">
                                                        {!open ? null : (
                                                            <div className="flex flex-col items-start">
                                                            <span>{session?.user?.user_metadata?.full_name}</span>
                                                            <span className="break-words whitespace-normal font-light">
                                                                {session.user?.email}
                                                            </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        side="top"
                                        align="center"
                                        className="w-56"
                                    >
                                        <DropdownMenuItem>
                                            Feedback
                                        </DropdownMenuItem>

                                        <DropdownMenuItem>
                                            Support
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            className="text-red-600 focus:text-red-600"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                            </div>

                            
                        </SheetContent>
                    </Sheet>


                    <div className="flex flex-col md:flex-row items-start ml-2 md:ml-0 w-fit  gap-1">
                        <h1 className=" whitespace-nowrap text-xl md:text-[1.5rem] font-medium">{greetingTitle}</h1>
                        {userNameTitleSpan && (
                            <span className="text-[#9013FE] text-xl md:text-[1.5rem] truncate  overflow-hidden block font-medium">{userNameTitleSpan}</span>
                        )}


                    </div>
                </div>
            </div>

            <NotificationDropdown />
        </div>
    );
}
export default DashboardHeader;
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/header";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { useState } from "react";
import { X } from "lucide-react";
import Logo from "../../assets/flowva-logo.png";
import { NavItems } from "../../components/common/navigation";
import { useAuth } from "../../providers/useAuth";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { supabase } from "../../lib/supabase";



function AppSidebar({
  isOpen,
  toggleSidebar,
  showActive
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
  location: ReturnType<typeof useLocation>;
  showActive: string;
}) {
  const { session } = useAuth()
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/auth/signin";
  };

  return (
    <SidebarContent className="flex flex-col h-full ">
      {/* Top bar with X button when open */}
      {isOpen ? (
        <div className="flex flex-col justify-between p-4 ">
          <button onClick={toggleSidebar} className="flex justify-end cursor-pointer">
            <X className="w-5 h-5 " />
          </button>
          <img src={Logo} alt="Flowva Logo" className="h-20 w-45" />
        </div>
      ) : (
        //  vertical bar when collapsed
        <div className="flex justify-center items-center h-12 border-b border-black/10">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <span className="rotate-90 text-lg font-bold cursor-pointer">☰</span>
          </button>
        </div>
      )}

      {/* Sidebar items */}
      <SidebarGroup className="flex-1 relative overflow-y-auto">
        {isOpen && <SidebarGroupLabel className="sr-only">Navigation Menus</SidebarGroupLabel>}
        <SidebarGroupContent>
          <SidebarMenu className="flex flex-col gap-2 ">
            {NavItems.map((item) => {
              const isActive = showActive === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`hover:bg-[#6D28D9]/40 hover:text-[#7026e6] transition-colors duration-300 ease-in-out ${isActive ? "bg-[#6D28D9] text-[#7026e6] font-semibold" : ""}`}>
                    <Link
                      to={item.url}
                      className={`${isOpen ? "px-6" : "px-4"} flex items-center py-6 rounded transition-colors duration-300 ease-in-out ${isActive ? "bg-[#6D28D9]/40 text-[#7026e6] font-semibold" : "hover:bg-[#6D28D9] hover:text-[#7026e6]"}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {isOpen && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
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
                          {!isOpen ? null : (
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

          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}

function DashboardLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const showActive = location.pathname
  const { session } = useAuth();


  function getGreetingByTime() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good morning,";
    if (currentHour < 16) return "Good afternoon,";
    return "Good evening,";
  }


  const user = {
    name: session?.user?.user_metadata?.name ?? "Guest",
  };


  const headerTitleMap: Record<string, string> = {
    "/dashboard/discover": "Discover",
    "/dashboard/library": "Library",
    "/dashboard/tech-stack": "Tech Stack",
    "/dashboard/subscriptions": "Subscriptions",
    "/dashboard/earn-rewards": "Earn Rewards",
    "/dashboard/account-settings": "Account Settings",
  };

  const isHome = location.pathname === "/dashboard";
  const greetingTitle = isHome ? getGreetingByTime() : headerTitleMap[location.pathname] || "Dashboard";
  const userNameTitleSpan = isHome ? user?.name : undefined;

  return (
    <div className="flex flex-col md:flex-row min-h-dvh lg:h-screen lg:md:overflow-hidden w-full">
      {/* Sidebar */}
      <aside
        className={`hidden md:flex flex-col h-screen shadow-md text-black font-sans bg-primary-100 transition-all duration-300 ${isSidebarOpen ? "w-72" : "w-16"
          }`}
      >
        <SidebarProvider>
          <Sidebar
            className="border-r shadow-md"
            style={isSidebarOpen ? { width: "17rem", } : { width: "4rem" }}

          >
            <AppSidebar
              isOpen={isSidebarOpen}
              toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
              location={location}
              showActive={showActive}
            />
          </Sidebar>
        </SidebarProvider>
      </aside>

      {/* Main content */}
      <main className="w-full bg-gray-50 px-4 lg:pt-8 md:px-9 min-h-screen grow md:overflow-y-auto box-border lg:min-h-0 transition-all duration-300">
        <div className="bg-gray-50 sticky w-full md:fixed md:w-full md:max-w-[70%] lg:max-w-full pr-3 md:pr-14 lg:pr-5 lg:sticky top-0 z-20">
          <DashboardHeader greetingTitle={greetingTitle} userNameTitleSpan={userNameTitleSpan} showActive={showActive} />
        </div>
        <div className="md:mt-14 pb-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;

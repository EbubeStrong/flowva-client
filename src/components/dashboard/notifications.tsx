import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { MoreHorizontal, MinusCircle, PlusCircle, Flame } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "removal" | "addition" | "streak";
  isRead: boolean;
}

const NOTIFICATIONS_DATA: Notification[] = [
  {
    id: "1",
    title: "Tool Removed from Your Library",
    description: "Slack has been removed from your library.",
    timestamp: "1d ago",
    type: "removal",
    isRead: false,
  },
  {
    id: "2",
    title: "New Tool Successfully Added",
    description: "Slack is now available in your library. Explore it now!",
    timestamp: "1d ago",
    type: "addition",
    isRead: false,
  },
  {
    id: "3",
    title: "Daily Streak Reminder",
    description: "Don't forget to claim your streak today and start b...",
    timestamp: "4d ago",
    type: "streak",
    isRead: true,
  },
];



const NotificationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Using your provided HTML structure */}
        <div className="notification-container group cursor-pointer relative">
          <button className="notification-bell has-unread" aria-label="Notifications">
            <svg
              aria-hidden="true"
              focusable="false"
              className="w-5 h-6 text-[#2D3748] group-hover:text-[#9013fe] transition-colors"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
              ></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {NOTIFICATIONS_DATA.filter((n) => !n.isRead).length}
            </span>
          </button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="w-[380px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl"
      >
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#9013fe] to-[#e100ff] p-4 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg">Notifications</h3>
          <div className="flex gap-4 text-xs font-medium opacity-90">
            <button className="hover:underline">Mark all as read</button>
            <button className="hover:underline">Delete All</button>
          </div>
        </div>

        {/* Notification List */}
        <div className="bg-[#f8faff] max-h-[400px] overflow-y-auto">
          {NOTIFICATIONS_DATA.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </div>

        {/* Footer */}
        <div className="bg-white p-4 text-center border-t border-gray-100">
          <button className="text-[#9013fe] text-sm font-semibold hover:underline">
            View all notifications (5)
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NotificationItem = ({ item }: { item: Notification }) => {
  // Logic to determine icon based on type
  const getIcon = () => {
    switch (item.type) {
      case "removal":
        return <div className="bg-red-50 text-red-500 p-2 rounded-full"><MinusCircle size={20} /></div>;
      case "addition":
        return <div className="bg-green-50 text-green-500 p-2 rounded-full"><PlusCircle size={20} /></div>;
      case "streak":
        return <div className="bg-orange-50 text-orange-500 p-2 rounded-full"><Flame size={20} /></div>;
    }
  };

  return (
    <div className="p-4 border-b border-gray-100 flex gap-4 hover:bg-white transition-colors cursor-pointer group/item">
      <div className="shrink-0">{getIcon()}</div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-[#4a5568] truncate">{item.title}</h4>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
        <p className="text-[11px] text-gray-400 mt-1">{item.timestamp}</p>
      </div>

      <button className="text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
};

export default NotificationDropdown;
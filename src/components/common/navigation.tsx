import { AccountIcon, CardIcon, CompassIcon, HomeIcon, LayersIcon, LibraryIcon, RewardIcon } from "../dashboard/icons";

// Nav items
export const NavItems = [
  { title: "Home", url: "/dashboard", icon: HomeIcon },
  { title: "Discover", url: "/dashboard/discover", icon: CompassIcon },
  { title: "Library", url: "/dashboard/library", icon: LibraryIcon },
  { title: "Tech Stack", url: "/dashboard/tech-stack", icon: LayersIcon },
  { title: "Subscriptions", url: "/dashboard/subscriptions", icon: CardIcon },
  { title: "Rewards Hub", url: "/dashboard/earn-rewards", icon: RewardIcon },
  { title: "Settings", url: "/dashboard/account-settings", icon: AccountIcon },
];

// Home page nav items
export const HomeNavItems = [
  { title: "Discover New Tools", url: "/dashboard/discover", description: "Find the best tools for your workflow", icon: CompassIcon, color: "purple" },
  { title: "Manage your Library", description: "Manage all your tools", url: "/dashboard/library", icon: LibraryIcon, color: "blue" },
  { title: "Build your Tech Stack", description: "Organize your tools for specific projects", url: "/dashboard/tech-stack", icon: LayersIcon, color: "green" },
  {title: "Track Your Subscriptions", description: "Track renewals and spending", url: "/dashboard/subscriptions", icon: CardIcon, color: "red"
  }
]
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Button } from "../../components/ui/button";

interface Tool {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    url: string;
    icon?: string;
}

function DiscoverDashboard() {
    const [tools, setTools] = useState<Tool[]>([]);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [activeFilter, setActiveFilter] = useState<"all" | "recommended" | "featured" | "trending">("all");

    useEffect(() => {
        fetch("/tools.json")
            .then((res) => res.json())
            .then(setTools);
    }, []);

    // categories for select dropdown
    const categories = ["all", ...Array.from(new Set(tools.map(t => t.category)))];

    // Filter tools
    const filteredTools = tools.filter(tool => {
        const matchesQuery =
            tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase()) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

        const matchesCategory = category === "all" || tool.category === category;

        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "recommended") ||
            (activeFilter === "featured") ||
            (activeFilter === "trending");

        return matchesQuery && matchesCategory && matchesFilter;
    });

    return (
        <div className="overflow-y-auto no-scrollbar pb-3 md:pt-0 mt-3 h-[calc(100vh-px)] lg:h-[calc(100vh-94px)] lg:scrollbar-hidden">
            <div className="mb-4 md:mb-6 px-2 ">
                <div className="w-full h-fit py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 rounded-2xl flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 font-semibold-bold text-black mb-2 sm:mb-3 md:mb-4 text-center">Find The Right Tools</h2>
                    <div className="relative w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-2xl">
                        {/* Search + Filters */}
                        <Input
                            type="text"
                            placeholder="Search tools..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full h-11.25 bg-[#E9ECEF] placeholder:text-[#00000080] rounded-full py-2 sm:py-4 px-4 sm:px-6 text-md sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <div className="absolute lg:right-0.5 right-1 lg:-mt-px top-1/2 transform -translate-y-1/2 cursor-pointer"><img src="data:image/svg+xml,%3csvg%20width='40'%20height='38'%20viewBox='0%200%2040%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20.2376'%20cy='19.761'%20r='16.72'%20fill='%239013FE'/%3e%3cpath%20d='M19.2298%2024.8354C22.87%2024.8354%2025.8209%2021.998%2025.8209%2018.4978C25.8209%2014.9976%2022.87%2012.1602%2019.2298%2012.1602C15.5896%2012.1602%2012.6387%2014.9976%2012.6387%2018.4978C12.6387%2021.998%2015.5896%2024.8354%2019.2298%2024.8354Z'%20fill='%239013FE'%20stroke='white'%20stroke-opacity='0.85'%20stroke-width='1.58108'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28.4372%2027.3605L23.877%2022.9756'%20stroke='white'%20stroke-opacity='0.85'%20stroke-width='1.58108'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="Search"
                            className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="sticky -top-px md:top-0 z-10 bg-gray-50 px-2 py-3 lg:py-6">
                    <div className="flex items-center flex-col md:hidden gap-5">
                        <div className="w-full max-w-[90%] self-start">
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:border-purple-400 w-full">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <div className="overflow-x-auto mt-7">
                                <div className="inline-flex items-center  space-x-1 md:space-x-3 lg:space-x-6">
                                    {["all", "recommended", "featured", "trending"].map(filter => (
                                        <Button
                                            key={filter}
                                            onClick={() => setActiveFilter(filter as "all" | "recommended" | "featured" | "trending")}
                                            className={`px-4 py-2 rounded bg-transparent text-black shadow-none cursor-pointer hover:bg-purple-600 ${activeFilter === filter ? "bg-purple-200 rounded-lg" : null
                                                }`}
                                        >
                                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center">
                        <div>
                            <div className="w-55 self-start">
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:border-purple-400 w-full">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((item) => (
                                            <SelectItem key={item} value={item}>
                                                {item.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="ml-16">
                            <div className="inline-flex items-center space-x-1 md:space-x-3 lg:space-x-6">
                                {["all", "recommended", "featured", "trending"].map(filter => (
                                    <Button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter as "all" | "recommended" | "featured" | "trending")}
                                        className={`px-4 py-2 rounded bg-transparent text-black shadow-none cursor-pointer hover:bg-purple-600 ${activeFilter === filter ? "bg-purple-200 rounded-lg" : null
                                            }`}
                                    >
                                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" md:mt-6 px-2 pb-3 overflow-hidden">
                    <div>
                        <div className="mb-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                {filteredTools.length === 0 ? (
                                    <p className="col-span-full text-center text-gray-500">No tools found</p>
                                ) : (
                                    filteredTools.map(tool => (
                                        <div
                                            key={tool.id}
                                            className="w-full min-h-62.5 bg-white rounded-[10px] border-3 border-purple-600 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-transform duration-200 cursor-pointer flex flex-col hover:-translate-y-1.5"
                                        >
                                            <div className="p-6 flex justify-between items-center">
                                                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center">
                                                    {tool.icon && (
                                                        <img
                                                            src={tool.icon}
                                                            alt={tool.name}
                                                            className="w-12 h-12 object-contain"
                                                        />
                                                    )}
                                                </div>

                                                <div className="relative group">
                                                    <Button className="bg-transparent"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path></svg></Button>
                                                </div>
                                            </div>

                                            <div className="px-6 pb-6 grow flex flex-col">
                                                <h3 className="font-bold mb-2 text-lg text-black">{tool.name}</h3>
                                                <div className="text-base mb-6 grow text-black"><p className="line-clamp-4">{tool.description}</p></div>

                                                <div className="mt-auto">
                                                    <Button className="w-full h-12.5 bg-purple-600 text-white border-none rounded-[50px] font-bold cursor-pointer transition-colors duration-200 flex items-center justify-center text-base hover:bg-purple-700">
                                                        Visit Tool →
                                                    </Button>

                                                </div>
                                            </div>


                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DiscoverDashboard;
import { PlusIcon, StarIcon, SwapIcon } from "../../components/dashboard/icons";

const LibraryDashboardContent = [
  {
    icon: <PlusIcon className="w-6 h-6 text-purple-500" />,
    title: "Add New Tool",
    description: "Save a new tool to your library",
  },
  {
    icon: <SwapIcon className="w-6 h-6 text-purple-500" />,
    title: "Compare Tools",
    description: "Evaluate tools side-by-side",
  },
  {
    icon: <StarIcon className="w-6 h-6 text-purple-500"/>,
    title: "Tool Reviews",
    description: "Share your experiences",
  },
];


function LibraryDashboard() {
    return (
        <div className="lg:h-[calc(100vh-90px)] [scrollbar-width:none] [-ms-overflow-style:none] overflow-x-hidden">
            <p className="mb-6 text-gray-600">Your personal library of tools.</p>

            <div className="flex flex-wrap flex-col md:flex-row gap-8 justify-between mt-4">
                {
                    LibraryDashboardContent.map((item, index) => (
                        <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm cursor-pointer transition-all duration-300 ease-in-out flex-1 min-w-50 hover:-translate-y-0.75 hover:shadow-lg">
                            <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
                                <div className="text-black transition-colors duration-300 justify-center items-center flex group-hover:text-purple-600">
                                    <div className=" w-fit flex justify-center items-center">
                                        <span role="img" aria-label="plus" className="text-purple-600 text-lg">{item.icon}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="action-text">
                                <h3 className="text-lg font-semibold m-0 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500 m-0">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LibraryDashboard;
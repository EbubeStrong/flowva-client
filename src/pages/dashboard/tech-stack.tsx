import { Button } from "../../components/ui/button";



function TechStackDashboard() {
    return (
        <div className="lg:h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden thin-scrollbar">
            <p className="text-gray-600 mb-3">Curated Tech Stacks of tools tailored to specific tasks or projects.</p>
            <div className="text-center py-12 bg-gray-50 rounded-lg"><p className="text-gray-500 mb-4">You haven't created any Tech Stacks yet.</p>
                <Button
                    type="button"
                    className="h-11 rounded-[100px] bg-purple-600 border border-purple-600 font-semibold text-white"
                >
                    <span>Create Your First Tech Stack</span>
                </Button>
            </div>
        </div>
    );
}

export default TechStackDashboard;
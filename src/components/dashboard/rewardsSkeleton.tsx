import { Skeleton } from "../ui/skeleton";

export default function RewardsJourneySkeleton() {
  return (
    <div className="grid [@media(max-width:750px)]:grid-cols-1 [@media(max-width:1200px)]:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-[400px] w-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-3xl bg-white border border-[#f3f4f6] overflow-hidden flex flex-col"
        >
          {/* Header Skeleton */}
          <div className="p-4 border-b border-[#f3f4f6] bg-gray-50/50">
             <Skeleton className="h-6 w-1/2 bg-gray-200" />
          </div>

          <div className="p-5 flex flex-col flex-1">
            {/* Value/Number Skeleton */}
            <div className="flex justify-between items-center mb-4">
               <Skeleton className="h-12 w-24 bg-gray-200" />
               {i === 1 && <Skeleton className="w-24 h-24 rounded-full bg-gray-100" />}
            </div>

            {/* Middle Section (Progress Bar or Days) */}
            <div className="space-y-4 mb-6">
               <Skeleton className="h-4 w-full bg-gray-100" />
               <Skeleton className="h-2.5 w-full rounded-full bg-gray-100" />
            </div>

            {/* Button Placeholder for Card 2 style */}
            {i === 2 && <Skeleton className="h-12 w-full rounded-2xl bg-gray-100" />}

            {/* Footer Skeletons */}
            <div className="mt-auto space-y-2">
              <Skeleton className="h-3 w-3/4 mx-auto bg-gray-100" />
              <Skeleton className="h-4 w-1/2 mx-auto bg-gray-100" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
import { useState, useMemo } from 'react';
import { REWARDS_DATA } from '../config/index';
import { Star } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  iconType: 'bank' | 'paypal' | 'visa' | 'apple' | 'google' | 'amazon' | 'course';
  isComingSoon: boolean;
}

type RewardStatus = 'all' | 'unlocked' | 'locked' | 'coming_soon';

const USER_POINTS = 10; 

const RedeemSection = () => {
  const [activeFilter, setActiveFilter] = useState<RewardStatus>('all');

//   Function to determine reward status
  const getStatus = (reward: Reward): RewardStatus => {
    if (reward.isComingSoon) return 'coming_soon';
    return USER_POINTS >= reward.points ? 'unlocked' : 'locked';
  };

  // Filtered list based on tab
  const filteredRewards = useMemo(() => {
    if (activeFilter === 'all') return REWARDS_DATA;
    return REWARDS_DATA.filter((r) => getStatus(r) === activeFilter);
  }, [activeFilter]);

  // Counts for the tab badges
  const counts = {
    all: REWARDS_DATA.length,
    unlocked: REWARDS_DATA.filter(r => getStatus(r) === 'unlocked').length,
    locked: REWARDS_DATA.filter(r => getStatus(r) === 'locked').length,
    coming_soon: REWARDS_DATA.filter(r => r.isComingSoon).length,
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
        <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
        Redeem Your Points
      </h2>

      {/* Tabs / Filters */}
      <div className="flex gap-6 border-b border-gray-100 mb-8 overflow-x-auto pb-1">
        {(['all', 'unlocked', 'locked', 'coming_soon'] as RewardStatus[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`flex items-center gap-2 pb-3 transition-all whitespace-nowrap border-b-2 ${
              activeFilter === tab 
                ? 'border-purple-600 text-purple-600 font-medium' 
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              activeFilter === tab ? 'bg-purple-100' : 'bg-gray-100'
            }`}>
              {counts[tab]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRewards.map((reward) => (
          <RewardCard key={reward.id} reward={reward} status={getStatus(reward)} />
        ))}
      </div>
    </div>
  );
};

const RewardCard = ({ reward, status }: { reward: Reward, status: RewardStatus }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      {/* Icon Placeholder - Replace with your actual assets */}
      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
        <span className="text-2xl opacity-80">
           {reward.iconType === 'bank' && '🏦'}
           {reward.iconType === 'paypal' && '🅿️'}
           {reward.iconType === 'visa' && '💳'}
           {reward.iconType === 'apple' && '🍎'}
           {reward.iconType === 'google' && '🤖'}
           {reward.iconType === 'amazon' && '📦'}
           {reward.iconType === 'course' && '📚'}
        </span>
      </div>

      <h3 className="font-bold text-gray-800 mb-2">{reward.title}</h3>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-4 min-h-[60px]">
        {reward.description}
      </p>

      <div className="flex items-center gap-1.5 text-purple-600 font-bold mb-6">
        <Star size={16} fill="currentColor" />
        <span className="text-sm">{reward.points} pts</span>
      </div>

      <button 
        disabled={status !== 'unlocked'}
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition ${
          status === 'unlocked' 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
        }`}
      >
        {status === 'coming_soon' ? 'Coming Soon' : 'Locked'}
      </button>
    </div>
  );
};

export default RedeemSection;
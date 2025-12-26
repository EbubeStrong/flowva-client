import React from 'react';
import { Star, Share2, Users, Copy, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import {  Link } from 'react-router-dom';

const ReferAndEarn = () => {
  // Data for the "Earn More Points" grid
  const earnMorePoints = [
    {
      title: "Refer and win 10,000 points!",
      icon: <Star className="w-5 h-5 text-purple-600" />,
      description: "Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of 10,000 points. Friends must complete onboarding to qualify.",
      bgColor: "bg-white",
      headerBg: "bg-[#fdfaff]"
    },
    {
      title: "Share Your Stack",
      subtitle: "Earn +25 pts",
      icon: <Share2 className="w-5 h-5 text-purple-600" />,
      description: "Share your tool stack",
      buttonLabel: "Share",
      bgColor: "bg-white",
      headerBg: "bg-[#fdfaff]"
    }
  ];

  const referralLink = "https://app.flowvahub.com/signup/?ref=stron5987";

  return (
    <div className="space-y-10 pt-10 bg-white">
      
      {/* SECTION: Earn More Points */}
      <section>
        <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
          Earn More Points
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {earnMorePoints.map((card, index) => (
            <div key={index} className="shadow-[0_5px_15px_rgba(0,0,0,0.05)] rounded-3xl border border-[#f3f4f6] overflow-hidden bg-white">
              {/* Card Header */}
              <div className={`p-4 flex items-center justify-between border-b border-[#f3f4f6] ${card.headerBg}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm border border-purple-50">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{card.title}</h3>
                    {card.subtitle && <p className="text-[10px] text-gray-500 font-medium">{card.subtitle}</p>}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex justify-between items-center min-h-[120px]">
                <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
                  {card.description}
                </p>
                {card.buttonLabel && (
                  <button className="flex items-center gap-2 bg-[#f3e8ff] text-[#9013fe] px-4 py-2 rounded-2xl text-xs font-bold hover:bg-[#e9d5ff] transition-colors">
                    <Share2 className="w-3.5 h-3.5" />
                    {card.buttonLabel}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Refer & Earn */}
      <section>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-l-4 border-[#9013fe] pl-3">
          Refer & Earn
        </h2>
        
        <div>
          {/* Header */}
          <div className="flex bg-[#f5f8ff] p-3 rounded-sm items-start gap-4 mb-10">
            <div className="p-3 text-purple-500">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 ">Share Your Link</h3>
              <p className="text-sm text-gray-400">Invite friends and earn 25 points when they join!</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="text-center">
              <div className="text-2xl font-medium text-[#9013fe]">0</div>
              <div className="text-xs text-gray-500 font-medium">Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-[#9013fe]">0</div>
              <div className="text-xs text-gray-500 font-medium">Points Earned</div>
            </div>
          </div>

          {/* Referral Link Input */}
          <div className="p-3 space-y-2 mb-8">
            <label className="text-xs font-semibold text-gray-500 ml-1">Your personal referral link:</label>
            <div className="relative">
              <input 
                readOnly 
                value={referralLink}
                className="w-full bg-white border border-gray-100 rounded-xl py-3 px-4 pr-12 text-xs text-gray-600 focus:outline-none shadow-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <SocialIcon bg="bg-[#1877F2] w-2 h-2" icon={<Facebook className="w-4 h-4 fill-current" />} href="hhttps://web.facebook.com/share_channel/" />
            <SocialIcon bg="bg-black  w-2 h-2" icon={<XIcon />} href='https://x.com/intent/post?text=%F0%9F%9A%80%20Join%20me%20on%20Flowva!%0AFlowva%20is%20where%20I%20discover%20top%20tools%2C%20earn%20rewards%2C%20and%20grow%20with%20community%20power.%0A%0AUse%20my%20referral%20link%20to%20sign%20up%20and%20get%20rewarded%20too%3A%0Ahttps%3A%2F%2Fapp.flowvahub.com%2Fsignup%2F%3Fref%3Dstron5987' />
            <SocialIcon bg="bg-[#0077B5] w-2 h-2" icon={<Linkedin className="w-4 h-4 fill-current" /> } href='https://www.linkedin.com/sharing/share-offsite/?summary=%F0%9F%9A%80%20Join%20me%20on%20Flowva!%0AFlowva%20is%20where%20I%20discover%20top%20tools%2C%20earn%20rewards%2C%20and%20grow%20with%20community%20power.%0A%0AUse%20my%20referral%20link%20to%20sign%20up%20and%20get%20rewarded%20too%3A%0Ahttps%3A%2F%2Fapp.flowvahub.com%2Fsignup%2F%3Fref%3Dstron5987'/>
            <SocialIcon bg="bg-[#25D366] w-2 h-2" icon={<MessageCircle className="w-4 h-4 fill-current" />} href='https://api.whatsapp.com/send?text=%F0%9F%9A%80%20Join%20me%20on%20Flowva!%0AFlowva%20is%20where%20I%20discover%20top%20tools%2C%20earn%20rewards%2C%20and%20grow%20with%20community%20power.%0A%0AUse%20my%20referral%20link%20to%20sign%20up%20and%20get%20rewarded%20too%3A%0Ahttps%3A%2F%2Fapp.flowvahub.com%2Fsignup%2F%3Fref%3Dstron5987' />
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper components for the icons
const SocialIcon = ({
  bg,
  icon,
  href,
}: {
  bg: string;
  icon: React.ReactNode;
  href: string;
}) => (
  <Link
    to={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${bg} w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md`}
  >
    {icon}
  </Link>
);


const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default ReferAndEarn;
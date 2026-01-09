import React, { useEffect, useState } from 'react';
import { Users, Copy, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from "../../providers/useAuth";

interface Profile {
  referral_code: string;
  referrals_count: number;
}

const ReferAndEarn = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const { session } = useAuth();
  const user = session?.user;

  useEffect(() => {
  if (!user) return;

  const fetchProfile = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("referral_profiles")
      .select("referral_code, referrals_count")
      .eq("id", user.id)
      .single();

    // console.log("Fetched profile:", data, error); 

    if (!error && data) setProfile(data);

    setLoading(false);
  };

  fetchProfile();
}, [user]);


  const referralLink = profile
    ? `https://flowva-beta.vercel.app/auth/signup/?ref=${profile.referral_code}`
    : "";


  return (
    <div className="space-y-10 pt-10 ">

      {/* SECTION: Earn More Points */}
      <section>
        <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-[#9301fe] pl-3 font-semibold">
          Earn More Points
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr] gap-6">
          <div className="transition-all hover:border-[#9013fe] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(228,144,230,0.1)] text-[#9013fe]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg></div>
              <div>
                <h3 className="font-semibold">Refer and win 10,000 points!</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of <span className="text-[#9013fe]">10,000 points</span>. Friends must complete onboarding to qualify.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="transition-all hover:border-[#9013fe] hover:-translate-y-1.25 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] ease-linear duration-200 border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="p-4 border border-b-[#f3f4f6] border-t-0 border-r-0 border-l-0 bg-white flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 bg-[rgba(144,_19,_254,_0.1)] text-[#9013fe]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 lucide-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg></div>
              <div>
                <h3 className="font-semibold">Share Your Stack</h3>
                <p className="text-xs text-gray-500">Earn +25 pts</p>
              </div>
            </div>
            <div className="p-[1rem]"><div className="flex items-center justify-between"><div><p className="font-medium text-sm">Share your tool stack</p>
            </div>
              <button className="bg-[#eef2ff] hover:text-white hover:bg-[#9013fe] text-[#9013fe] py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 lucide-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Share</button>
            </div>
            </div>
          </div>
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
              <div className="text-2xl font-medium text-[#9013fe]">  {loading ? "—" : profile?.referrals_count ?? 0}</div>
              <div className="text-xs text-gray-500 font-medium">Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-[#9013fe]">0</div>
              <div className="text-xs text-gray-500 font-medium">Points Earned</div>
            </div>
          </div>

          {/* Referral Link Input */}
          <div className="p-3 space-y-2 mb-8">
            <label className="text-xs font-semibold text-gray-500 ml-1">
              Your personal referral link:
            </label>

            <div className="relative">
              <input
                readOnly
                value={loading ? "Loading..." : referralLink}
                className="w-full bg-white border border-gray-100 rounded py-3 px-4 pr-12 text-xs text-gray-600 focus:outline-none shadow-sm"
              />

              <button
                onClick={() => navigator.clipboard.writeText(referralLink)}
                disabled={!referralLink}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-purple-500 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>


          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <SocialIcon bg="bg-[#1877F2] w-2 h-2" icon={<Facebook className="w-4 h-4 fill-current" />} href="hhttps://web.facebook.com/share_channel/" />
            <SocialIcon bg="bg-black  w-2 h-2" icon={<XIcon />} href='https://x.com/intent/post?text=%F0%9F%9A%80%20Join%20me%20on%20Flowva!%0AFlowva%20is%20where%20I%20discover%20top%20tools%2C%20earn%20rewards%2C%20and%20grow%20with%20community%20power.%0A%0AUse%20my%20referral%20link%20to%20sign%20up%20and%20get%20rewarded%20too%3A%0Ahttps%3A%2F%2Fapp.flowvahub.com%2Fsignup%2F%3Fref%3Dstron5987' />
            <SocialIcon bg="bg-[#0077B5] w-2 h-2" icon={<Linkedin className="w-4 h-4 fill-current" />} href='https://www.linkedin.com/sharing/share-offsite/?summary=%F0%9F%9A%80%20Join%20me%20on%20Flowva!%0AFlowva%20is%20where%20I%20discover%20top%20tools%2C%20earn%20rewards%2C%20and%20grow%20with%20community%20power.%0A%0AUse%20my%20referral%20link%20to%20sign%20up%20and%20get%20rewarded%20too%3A%0Ahttps%3A%2F%2Fapp.flowvahub.com%2Fsignup%2F%3Fref%3Dstron5987' />
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
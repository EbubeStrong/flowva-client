import { supabase } from "../lib/supabase";


export const generateReferralCode = (name: string) => {
  const short = name.toLowerCase().slice(0, 5);
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `${short}${digits}`;
};

interface UserProfile {
  id: string;
  email: string;
  user_metadata?: {
    name?: string;
    [key: string]: unknown;
  };
}

export const ensureProfileExists = async (user: UserProfile) => {
  const { data: profile } = await supabase
    .from("referral_profiles")
    .select("id")
    .eq("id", user.id)
    .single();

  if (profile) return;

  const referralCode = generateReferralCode(
    user.user_metadata?.name || user.email
  );

  const refCode = localStorage.getItem("referral_code");

  let referredBy = null;

  if (refCode) {
    const { data: referrer } = await supabase
      .from("referral_profiles")
      .select("id, referrals_count, points")
      .eq("referral_code", refCode)
      .single();

    if (referrer && referrer.id !== user.id) {
      referredBy = referrer.id;

      await supabase
        .from("referral_profiles")
        .update({
          referrals_count: referrer.referrals_count + 1,
          points: referrer.points + 25,
        })
        .eq("id", referrer.id);
    }
  }

  await supabase.from("referral_profiles").insert({
    id: user.id,
    referral_code: referralCode,
    referred_by: referredBy,
    username: user.user_metadata?.name || user.email,
  });

  localStorage.removeItem("referral_code");
};

// import { supabase } from "../lib/supabase";

// export const generateReferralCode = (name: string) => {
//   const short = name.toLowerCase().slice(0, 5);
//   const digits = Math.floor(1000 + Math.random() * 9000);
//   return `${short}${digits}`;
// };

// interface UserProfile {
//   id: string;
//   email: string;
//   user_metadata?: {
//     name?: string;
//     [key: string]: unknown;
//   };
// }

// export const ensureProfileExists = async (user: UserProfile) => {
//   console.log("Running ensureProfileExists for user:", user.id, user.email);

//   let profile = null;

//   try {
//     const { data, error } = await supabase
//       .from("referral_profiles")
//       .select("*")
//       .eq("id", user.id)
//       .single();

//     if (error && error.code !== "PGRST116") {
//       // PGRST116 = no rows found, ignore
//       console.error("Error fetching existing profile:", error);
//     } else {
//       profile = data;
//       console.log("Existing profile found:", profile);
//     }
//   } catch (err) {
//     console.error("Exception fetching profile:", err);
//   }

//   if (profile) {
//     console.log("Profile already exists, skipping insertion.");
//     return;
//   }

//   const referralCode = generateReferralCode(user.user_metadata?.name || user.email);
//   const refCode = localStorage.getItem("referral_code");
//   console.log("Referral code from localStorage:", refCode);

//   let referredBy: string | null = null;

//   // If a referral code exists, fetch the referrer
//   if (refCode) {
//     const { data: referrer, error } = await supabase
//       .from("referral_profiles")
//       .select("id, referrals_count, points")
//       .eq("referral_code", refCode)
//       .single();

//     if (error) {
//       console.error("Error fetching referrer:", error);
//     } else {
//       console.log("Fetched referrer:", referrer);
//       if (referrer && referrer.id !== user.id) {
//         referredBy = referrer.id;

//         const { data: updatedReferrer, error: updateError } = await supabase
//           .from("referral_profiles")
//           .update({
//             referrals_count: (referrer.referrals_count || 0) + 1,
//             points: (referrer.points || 0) + 25,
//           })
//           .eq("id", referrer.id);

//         if (updateError) {
//           console.error("Error updating referrer:", updateError);
//         } else {
//           console.log("Referrer updated successfully:", updatedReferrer);
//         }
//       }
//     }
//   } else {
//     console.log("No referral code found in localStorage, skipping referrer logic.");
//   }

//   // Insert the new user's profile
//   const { data: insertedProfile, error: insertError } = await supabase
//     .from("referral_profiles")
//     .insert({
//       id: user.id,
//       referral_code: referralCode,
//       referred_by: referredBy,
//       username: user.user_metadata?.name || user.email,
//       referrals_count: 0,
//       points: 0,
//     })
//     .select();

//   if (insertError) {
//     console.error("Error inserting new profile:", insertError);
//   } else {
//     console.log("Inserted new profile successfully:", insertedProfile);
//   }

//   // Clean up referral code from storage
//   localStorage.removeItem("referral_code");
// };


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
  // console.log("[ProfileService] Running ensureProfileExists for:", user.id);

  //  Check if profile already exists
  const { data: existingProfile, error: fetchError } = await supabase
    .from("referral_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  // If profile exists (no error or error is not "no rows found"), return early
  if (existingProfile || (fetchError && fetchError.code !== "PGRST116")) {
    if (existingProfile) {
      // console.log("[ProfileService] Existing profile found:", existingProfile);
      // console.log("[ProfileService] Skipping creation & referral logic");
    } else if (fetchError) {
      // console.log("[ProfileService] Error checking profile (not PGRST116):", fetchError);
    }
    return;
  }

  // console.log("[ProfileService] No existing profile, creating new one");

  const referralCode = generateReferralCode(
    user.user_metadata?.name || user.email
  );

  const refCode = localStorage.getItem("referral_code")?.trim();
  // console.log("[ProfileService] referral_code from localStorage:", refCode);

  let referredBy: string | null = null;

  // Handle referral logic
  if (refCode) {
    // console.log("[ProfileService] Looking up referrer with code:", refCode);
    const { data: referrer, error } = await supabase
      .from("referral_profiles")
      .select("id, referrals_count, points")
      .eq("referral_code", refCode)
      .single();

    // console.log("[ProfileService] Fetched referrer:", referrer);
    // console.log("[ProfileService] Referrer fetch error:", error);

    if (error) {
      // console.error("[ProfileService] Error fetching referrer with code:", refCode, error);
      // if (error.code === "PGRST116") {
      //   console.error("[ProfileService] Referral code not found in database:", refCode);
      // }
    }

    if (referrer && referrer.id !== user.id) {
      referredBy = referrer.id;
      // console.log("[ProfileService] Setting referredBy to:", referredBy);

      const { error: updateError } = await supabase
        .from("referral_profiles")
        .update({
          referrals_count: (referrer.referrals_count || 0) + 1,
          points: (referrer.points || 0) + 25,
        })
        .eq("id", referrer.id);

      if (updateError) {
        // console.error("[ProfileService] Error updating referrer:", updateError);
      } else {
        // console.log("[ProfileService] Referrer updated successfully:", {
        //   referrerId: referrer.id,
        //   newReferralsCount: (referrer.referrals_count || 0) + 1,
        //   newPoints: (referrer.points || 0) + 25,
        // });
      }
    } else if (referrer && referrer.id === user.id) {
      // console.log("[ProfileService] Referrer ID matches user ID, skipping self-referral");
    }
  } else {
    // console.log("[ProfileService] No referral code present in localStorage");
  }

  //  Insert new profile
  // const { data: insertedProfile, error: insertError } = await supabase
  const {  error: insertError } = await supabase
    .from("referral_profiles")
    .insert({
      id: user.id,
      referral_code: referralCode,
      referred_by: referredBy,
      username: user.user_metadata?.name || user.email,
      referrals_count: 0,
      points: 0,
    });

  // console.log("[ProfileService] Inserted profile:", insertedProfile);
  // console.log("[ProfileService] Insert error:", insertError);

  // Handle duplicate key error (profile was created between check and insert - race condition)
  if (insertError) {
    if (insertError.code === "23505") {
      // console.log("[ProfileService] Profile already exists (duplicate key) - race condition detected, skipping");
      return;
    } else {
      // console.error("[ProfileService] Error inserting profile:", insertError);
      return;
    }
  }

  //  Create referral_reward record if referral was successful
  if (referredBy) {
    const { error: rewardError } = await supabase
      .from("referral_rewards")
      .insert({
        referrer_id: referredBy,
        referred_user_id: user.id,
        points: 25,
      });

    if (rewardError) {
      // console.error("[ProfileService] Error creating referral_reward:", rewardError);
    } else {
      // console.log("[ProfileService] Referral reward created successfully for referrer:", referredBy);
    }
  }

  //  Cleanup
  localStorage.removeItem("referral_code");
  localStorage.removeItem("referral_code_checked");

  // console.log("[ProfileService] Cleared referral localStorage");
};


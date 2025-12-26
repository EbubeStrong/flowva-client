import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  console.log("USER:", session?.user?.id);



  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get("token_hash");
    const type = params.get("type") as "email" | "sms" | null;

    const verifyMagicLink = async () => {
      if (!token_hash || type !== "email") return;

      const { error } = await supabase.auth.verifyOtp({ token_hash, type });

      if (error) {
        toast.error("Authentication failed", { description: error.message });
      } else {
        toast.success("Authentication successful");
      }

      window.history.replaceState({}, document.title, "/");
    };

    verifyMagicLink();

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false); // ✅ ensure loading clears
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

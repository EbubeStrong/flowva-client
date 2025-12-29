import { useState } from "react";
import CommonForm from "../../components/common/form";
import { forgotPasswordFormControls } from "../../components/config";
import { supabase } from "../../lib/supabase";
import { toast } from "sonner";


const initialState = {
    email: "",
};

function ForgotPassword() {
    const [formData, setFormData] = useState<Record<string, string>>(initialState);
    const [isLoading, setIsLoading] = useState(false)

   async function onSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  setIsLoading(true);

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: formData.email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) throw error;

    toast.success("Check your email", {
      description: "We sent you a secure login link to regain access.",
    });
  } catch (error) {
    console.error("Error sending recovery email:", error);
    toast.error("Unable to send recovery email");
  } finally {
    setIsLoading(false);
  }
}


    return (
        <div className="mx-auto w-full max-w-md space-y-6 ">
            <div className=" mb-7.5"><h1 className="text-2xl text-[#6D28D9] font-semibold  mb-2 text-center w-full  ">Reset Password</h1><p className="text-sm text-[#6B7280] text-center w-full ">Enter your email to receive a reset link</p></div>
            <CommonForm
                formControls={forgotPasswordFormControls}
                buttonText={"Sign in"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
                loading={isLoading}
            />

            <div className="text-center mt-5 text-sm">
                <p className="text-[#6B7280]">Remember your password? <a href="/auth/signin" className="text-[#9013fe]  no-underline font-medium hover:underline">Sign in</a></p>
                </div>
        </div>
    );
}

export default ForgotPassword;
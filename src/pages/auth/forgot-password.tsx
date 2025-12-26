import { useState } from "react";
import CommonForm from "../../components/common/form";
import { forgotPasswordFormControls } from "../../components/config";


const initialState = {
    email: "",
};

function ForgotPassword() {
    const [formData, setFormData] = useState<Record<string, string>>(initialState);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
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
                isBtnDisabled={true}
            />

            <div className="text-center mt-5 text-sm">
                <p className="text-[#6B7280]">Remember your password? <a href="/auth/signin" className="text-[#9013fe]  no-underline font-medium hover:underline">Sign in</a></p>
                </div>
        </div>
    );
}

export default ForgotPassword;
import { useState } from "react";
import CommonForm from "../../components/common/form";
import { registerFormControls } from "../../components/config";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";


const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
};


function AuthRegister() {
    const [formData, setFormData] = useState<Record<string, string>>(initialState);


    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // dispatch(loginUser(formData)).then((data) => {
        //   if (data?.payload?.success) {
        //     toast({
        //       title: data?.payload?.message,
        //       className: "bg-white text-black",
        //     });
        //   } else {
        //     toast({
        //       title: data?.payload?.message,
        //       variant: "destructive",
        //       className: "bg-red-600 text-white",
        //     });
        //   }
        // });
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className=" mb-7.5">
                <h1 className="text-2xl text-[#6D28D9] font-semibold  mb-2 text-center w-full  ">Create Your Account</h1>
                <p className="text-sm text-[#6B7280] text-center w-full ">Sign up to manage your tools</p>
            </div>

            <CommonForm
                formControls={registerFormControls}
                buttonText={"Sign Up Account"}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
            <div className="relative flex items-center w-full my-5">
                <div className="grow h-px bg-[#EDE9FE]"></div>
                <span className=" text-[13px] text-[#A78BFA] font-medium bg-white px-3">or</span>
                <div className="grow h-px bg-[#EDE9FE]"></div>
            </div>

            <Button className="border py-6 px-3.5 text-sm md:text-md w-full gap-2 bg-transparent text-[#111827] border-[#EDE9FE] rounded-md hover:bg-[#F5F3FF] transition-colors flex items-center justify-center relative cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-10 h-10"
                >
                    <g fill="none" fillRule="evenodd" clipRule="evenodd">
                        <path fill="#f44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity={0.987}></path>
                        <path fill="#ffc107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity={0.997}></path>
                        <path fill="#448aff" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity={0.999}></path>
                        <path fill="#43a047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity={0.993}></path>
                    </g>
                </svg>

                <span>Sign in with Google</span>
            </Button>

            <div className="text-center mt-5 text-sm">
                <p className="text-[#6B7280]">Don't have an account? <Link to="/auth/signin" className="text-[#9013fe]  no-underline font-medium hover:underline">Login</Link></p></div>
        </div>
    );
}

export default AuthRegister;

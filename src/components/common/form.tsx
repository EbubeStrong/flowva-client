import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Label } from "../ui/label";

interface CommonFormProps {
  formControls: Array<{
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    componentType: "input";
    options?: Array<{ id: string; label: string }>;
  }>;
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText?: string;
  isBtnDisabled?: boolean;
  forgotPassword?: boolean;
}

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
  forgotPassword = false,
}: CommonFormProps) {
  // Tracking visibility for multiple password fields
  const [showPasswordFields, setShowPasswordFields] = useState<Record<string, boolean>>({})
  
  return (
    <form onSubmit={onSubmit} className="w-full text-[#111827]">
      <div className="flex flex-col gap-1">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1" key={controlItem.name}>
            <div>
            <Label htmlFor={controlItem.label} className="block text-sm font-medium mb-2 text-[#111827]">{controlItem.label}</Label>

            <div className="relative group w-full mb-5">
              <Input
                name={controlItem.name}
                type={controlItem.type === "password" ? (showPasswordFields[controlItem.name] ? "text" : "password") : controlItem.type}
                placeholder={controlItem.placeholder}
                id={controlItem.name}
                value={formData[controlItem.name] || ""}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [controlItem.name]: e.target.value,
                  });
                }}
                className="peer w-full border text-base py-5.75 px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe] focus:ring-0 bg-white"
              />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-md peer-focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"></div>
              {controlItem.type === "password" && (
                <Button
                  type="button"
                  className="absolute bg-transparent hover:bg-transparent cursor-pointer right-3 border-none text-[#A78BFA] h-fit font-medium text-xs top-0 bottom-0 m-auto"
                  onClick={() => setShowPasswordFields((prev) => ({ ...prev, [controlItem.name]: !prev[controlItem.name] }))}
                >
                  {showPasswordFields[controlItem.name] ? "Hide" : "Show"}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {forgotPassword && (
        <div className="flex justify-end items-center w-full">
          <Link className="mt-2 text-[#9013fe] no-underline text-sm font-medium hover:underline" to="/auth/forgot-password" data-discover="true">Forgot Password?</Link>
        </div>
      )}

      <Button disabled={isBtnDisabled} type="submit" className="w-full h-13.75 gap-2 flex justify-center text-base items-center p-2.75 text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9] mt-3 cursor-pointer">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;

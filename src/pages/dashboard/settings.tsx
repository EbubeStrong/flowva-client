import { useState } from "react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
};


function AccountSettingDashboard() {
    const [formData, setFormData] = useState<Record<string, string>>(initialState);

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle form submission logic here
    }

    return (
        <div className="lg:h-[calc(100vh-99px)] my-3  [scrollbar-width:none] [-ms-overflow-style:none] overflow-y-auto">
            <div className="grid md:grid-cols-[1fr_1fr] gap-6">
                <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] p-6 rounded-2xl border border-[#E2E8F0]">
                    <div className="flex flex-col justify-between items-start mb-6">
                        <h2 className="font-semibold text-[1.1rem] flex items-center"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user mr-3 text-[#9013FE] w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"></path></svg>Profile Information</h2>

                        <div className="flex justify-between w-full items-end mt-6 mb-6">
                            <div className=" md:flex items-center mb-4 gap-6 w-full">
                                <div className="flex justify-center md:block">
                                    <div className="w-20 h-20 cursor-pointer rounded-full flex items-center mb-6 xl:mb-0 justify-center overflow-hidden shrink-0 bg-[#E9D4FF]">
                                        <Avatar>
                                            <AvatarFallback>Hb</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-[1fr_1fr] gap-3 w-full items-center">
                                <Button className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-[0.9rem] font-medium cursor-pointer border-none text-center  transition-all duration-300 ease-in-out text-white bg-[#9013FE] hover:bg-[#7c0fe0] hover:-translate-y-0.5 shadow-[0_4px_8px_rgba(144,19,254,0.2)]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" className="svg-inline--fa fa-upload mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
                                    Upload
                                </Button>
                                <Button className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-[0.9rem] font-medium cursor-pointer  text-center  transition-all duration-300 ease-in-out bg-transparent border border-[#E2E8F0] text-[#2D3748] hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:border-[#E9D4FF]">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>Remove
                                </Button>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} className="w-full text-[#111827]">
                            <div className="flex flex-col gap-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName" className="block text-sm font-medium mb-2 text-[#111827]">First Name</Label>
                                        <div className="relative group w-full mb-5">
                                            <Input
                                                name="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                                className="peer w-full border text-base py-5.75 px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe] focus:ring-0 bg-white"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName" className="block text-sm font-medium mb-2 text-[#111827]">Last Name</Label>
                                        <div className="relative group w-full mb-5">
                                            <Input
                                                name="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                                className="peer w-full border text-base py-5.75 px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe] focus:ring-0 bg-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="block text-sm font-medium mb-2 text-[#111827]">Email</Label>
                                    <div className="relative group w-full mb-5">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="youremail.com"
                                            id="email"
                                            value={formData.email}
                                            disabled={true}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            className="peer w-full border text-base py-5.75 px-3.5 border-[#EDE9FE] transition-all ease-linear duration-200 rounded-md outline-none focus:border-[#9013fe] focus:ring-0 bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button disabled={false} type="submit" className="w-full h-13.75 gap-2 flex justify-center text-base items-center p-2.75 text-center bg-[#9013FE] text-white  font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9] mt-3 cursor-pointer">
                                Save Changes
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettingDashboard;
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";

export default function Create({user}) {

    const {data, setData, post, errors, reset} = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("user.store"));
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create new Users
                    </h2>
                    
                </div>
            }
        >
            <Head title="Users" />
            user={user}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                
                                {/* User Name */}
                                <div >
                                    <InputLabel htmlFor="user_email" value="User Name"/>
                                    <TextInput  id="user_name" type="text" name="name" value={data.name} className="mt-1 block w-full" isFocused={true} onChange={(e) => setData("name", e.target.value)} />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                {/* User Email */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_name" value="User Email"/>
                                    <TextInput  id="user_email" type="text" name="email" value={data.email} className="mt-1 block w-full" onChange={(e) => setData("email", e.target.value)} />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                {/* User password */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_password" value="Password"/>
                                    <TextInput  id="user_password" type="text" name="password" value={data.password} className="mt-1 block w-full" onChange={(e) => setData("password", e.target.value)} />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                {/* User password confirmation */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="user_password_confirmation" value="Confirm Password"/>
                                    <TextInput  id="user_password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} className="mt-1 block w-full" onChange={(e) => setData("password_confirmation", e.target.value)} />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                                <div className="mt-4 text-right">
                                    <Link href={route("user.index")} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">Cancel</Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
            
    )
}
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="bg-white p-6 rounded-lg mx-6 flex items-center flex flex-col">

                <div className="mb-4 text-sm text-gray-600">
                    <img className='w-100' src="/images/register_image.svg" alt="" />
                    <h1 className='font-bold text-2xl text-center mt-3'>Masuk ke <span className='text-yellow-500'>HIPMI Marketplace</span></h1>
                    <p className='text-center font-bold text-lg'>Belum punya akun? 
                        <span className='ms-1'>
                        <Link
                            href={route('register')}
                            className="rounded-md text-lg text-green-700 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Daftar
                        </Link>
                    </span></p>
                </div>
                
                <form style={{width:"100%"}} onSubmit={submit}>

                    <div className="mt-4">
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeHolder="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="name"
                            name="name"
                            placeHolder="Nama Lengkap"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeHolder="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            placeHolder="konfirmasi password"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    
                    <div className=" text-end">
                    {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-green-600 underline hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Lupa password?
                            </Link>
                        )}
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton style={{width:"100%"}} className="ms-4 w-100 text-center" disabled={processing}>
                            Login
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </GuestLayout>
    );
}

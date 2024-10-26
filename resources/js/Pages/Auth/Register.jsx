import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="mb-4 hidden lg:block text-sm text-gray-600 text-center">
                <img src="/images/login_image.svg" alt="" />
                <h5 className="font-bold text-lg">Kembangkan Bisnis Bersama HIPMI</h5>
                <p>Sudah punya akun? 
                    <span className='ms-1'>
                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-green-700 underline hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Masuk
                        </Link>
                    </span>
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg mx-6 flex items-center">

                <form style={{maxWidth: '350px'}} onSubmit={submit}>
                    
                    <h1 className='font-bold text-xl text-center'>Silahkan isi form untuk mendaftar akun anda</h1>

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

                    <div className="mt-4 flex items-center justify-end">
                        <PrimaryButton style={{width:"100%"}} className="ms-4 w-100 text-center" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}

"use client";
import ConnectForm from "@molecules/ConnectForm";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const handleFormSuccess = (email) => {
        console.log("Email submitted:", email);
        router.push('./verification');
    };

    return (
        <>
            <ConnectForm
                inputLabel="Enter your email"
                inputType="email"
                buttonText="Next"
                onSuccess={handleFormSuccess}
            />
        </>
    );
};

export default LoginPage;

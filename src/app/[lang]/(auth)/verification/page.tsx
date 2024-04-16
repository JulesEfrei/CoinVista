"use client";
import ConnectForm from "@molecules/ConnectForm";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const handleFormSuccess = (inputValue) => {
        console.log("Input value submitted:", inputValue);
        router.push('./');
    };

    return (
        <>
            <ConnectForm
                inputLabel="Enter your code"
                inputType="text"
                buttonText="Connect"
                onSuccess={handleFormSuccess}
            />
        </>
    );
};

export default LoginPage;

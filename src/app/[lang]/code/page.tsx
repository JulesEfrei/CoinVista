import ConnectForm from "@molecules/ConnectForm";
import React from "react";

const ComparePage = () => {
    
    const handleConnect = (value) => {
        console.log(`Connected with ${value}`);
    };

    return (
        <>
            <h1>Connection</h1>
            <ConnectForm
                onConnect={handleConnect}
                inputType="email"
                placeholder="Email"
                redirectUrl="/code"
            />
        </>
    );
};

export default ComparePage;

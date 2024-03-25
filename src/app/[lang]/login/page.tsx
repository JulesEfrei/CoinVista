"use client";
import React, { useState } from "react";
import ConnectForm from "@molecules/ConnectForm";

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (value, event) => {
    event.preventDefault();
    if (value.trim() === "") {
      setError("Please enter a valid email.");
    } else {
      setError("");
      setEmail(value);
      console.log("Code sent to:", value);
      setStep(2);
    }
  };

  const handleCodeSubmit = (value, event) => {
    event.preventDefault();
    if (value.trim() === "") {
      setError("Please enter the code.");
    } else {
      setError("");
      console.log(`Connected with email: ${email} and code: ${value}`);
      setIsConnected(true);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Welcome to Coinvista</h1> 
        <ConnectForm
            inputLabel={step === 1 ? "Email" : "Code"}
            onSubmit={step === 1 ? handleEmailSubmit : handleCodeSubmit}
            inputType={step === 1 ? "email" : "text"}
            buttonText={step === 1 ? "Next" : "Connect"}
            errorMessage={error}
        />
        {isConnected && <p>Successfully connected!</p>}
      </div>
    </>
  );
};

export default LoginPage;

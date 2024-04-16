"use client";
import React, { useState } from "react";
import Input from "@atoms/Input";
import Button from "@atoms/Button";

const ConnectForm = ({ inputType, inputLabel, buttonText, onSuccess }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setError("Please enter a value.");
    } else {
      onSuccess(inputValue);
      setInputValue("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label htmlFor="inputField">{inputLabel}</label>
          <Input
            type={inputType}
            onChange={handleInputChange}
            placeholder={inputLabel}
            id="inputField"
          />
          {error && (
            <p className="text-red-500">{error}</p>
          )}
          <div className="flex justify-center mt-3">
            <Button type="submit">{buttonText}</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConnectForm;

"use client";
import React, { useState } from "react";
import Button from "@atoms/Button";
import Input from "@atoms/Input";

const ConnectForm = ({ inputType, inputLabel, onSubmit, errorMessage, buttonText }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue, event);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label htmlFor="inputField">{inputLabel}</label>
          <Input
            value={inputValue}
            type={inputType}
            onChange={handleInputChange}
            placeholder={inputLabel}
            id="inputField"
          />
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
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

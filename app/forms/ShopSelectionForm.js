"use client";
import React, { useState } from "react";
import { platforms } from "../utils/platforms";

const ShopSelectionForm = ({ onSaveAndContinue}) => {
  const [selectedShop, setSelectedShop] = useState("");

  const handleShopSelection = (platformName) => {
    setSelectedShop(platformName);
  };

  const handleSaveAndContinueClick = () => {
    // Add validation logic before allowing to proceed
    if (selectedShop.trim() === "") {
      alert("Please select a shop system.");
    } else {
      // Move to the next step
      onSaveAndContinue();
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 py-8 h-full">
      <div className="text-2xl font-semibold mb-4">
        Choose your platform and let the magic begin!
      </div>
      <p className="mb-8">Kindly select the shop system you are currently using</p>

      <form className="w-full md:w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              type="button"
              onClick={() => handleShopSelection(platform.name)}
              className={`flex flex-col items-center focus:outline-none p-4 rounded-xl ${
                selectedShop === platform.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-white hover:text-blue-500"
              }`}
            >
              {React.createElement(platform.icon, { size: 64 })}
              <span className="mt-2">{platform.name}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          {/* Save and Continue Button */}
          <button
            type="button"
            onClick={handleSaveAndContinueClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShopSelectionForm;

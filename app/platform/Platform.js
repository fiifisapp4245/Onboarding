"use client";

import React, { useState } from "react";
import ShopSelectionForm from "../forms/ShopSelectionForm";
import WebLinksForm from "../forms/WebLinksForm";
import CustomizeForm from "../forms/CustomizeForm";
import VerificationForm from "../forms/VerificationForm";

const Platform = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // form rendering based on current step

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShopSelectionForm
            onSaveAndContinue={() => setCurrentStep(2)}
            onGoToPreviousStep={() => setCurrentStep(1)}
          />
        );
      case 2:
        return (
          <WebLinksForm
            onSaveAndContinue={() => setCurrentStep(3)}
            onGoToPreviousStep={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <CustomizeForm
            onSaveAndContinue={() => setCurrentStep(4)}
            onGoToPreviousStep={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <VerificationForm
            onSaveAndContinue={() => setCurrentStep(1)}
            onGoToPreviousStep={() => setCurrentStep(3)}
          />
        );
      default:
        return null;
    }
  };

  const stepDescriptions = {
    1: {
      title: "Choose Shop System",
      description: "Which system are you using for your store",
    },
    2: {
      title: "Add Your Website Links",
      description: "Provide the links to your platform",
    },
    3: {
      title: "Customization of Recommendations",
      description: "Customize your recommendations",
    },
    4: {
      title: "Verification",
      description: "Verify the plugin",
    },
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Steps Indicator */}
      <div className="lg:w-1/4 bg-blue-500 order-1 lg:order-1 h-full flex flex-col justify-between p-4">
        {/* logo */}
        <div className="text-white font-bold">Recomaze.ai</div>

        {/* steps */}
        <div className="text-white">
          {[1, 2, 3, 4].map((step) => (
            <div
              className={`flex items-center mb-8 ${
                step !== currentStep ? "opacity-50" : ""
              }`}
              key={step}
            >
              <div
                className={`bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2 ${
                  step !== currentStep ? "bg-gray-300" : ""
                }`}
              >
                {step}
              </div>
              <div>
                <h2
                  className={`font-semibold text-xs lg:text-sm ${
                    step !== currentStep ? "text-gray-500" : ""
                  }`}
                >
                  {stepDescriptions[step].title}
                </h2>
                <p
                  className={`text-xs lg:text-xs ${
                    step !== currentStep ? "text-gray-500" : ""
                  }`}
                >
                  {stepDescriptions[step].description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* contact section */}
        <div className="md:w-full md:mt-8">
          <div className="h-full flex flex-col">
            <h3 className="text-sm lg:text-base font-bold mb-2 md:mb-4 text-white">
              Having troubles?
            </h3>
            <p className="mb-2 md:mb-4 text-sm lg:text-base text-white">
              Feel free to contact us, and we will always help you through the
              process.
            </p>
            <button
              type="submit"
              className="bg-white w-full lg:w-40 text-blue-500 text-sm font-semibold py-2 px-4 rounded-md"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <div className="lg:w-3/4 order-2 lg:order-2 h-full mx-2">
        {renderForm()}
      </div>
    </div>
  );
};

export default Platform;

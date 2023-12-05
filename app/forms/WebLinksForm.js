"use client";
import React, { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

const WebLinksForm = ({ onSaveAndContinue, onGoToPreviousStep }) => {
  const [websiteDomain, setWebsiteDomain] = useState("");
  const [checkoutPageURL, setCheckoutPageURL] = useState("");
  const [successPageURL, setSuccessPageURL] = useState("");
  const [showWebsiteDomainHelp, setShowWebsiteDomainHelp] = useState(false);
  const [showCheckoutPageURLHelp, setShowCheckoutPageURLHelp] = useState(false);
  const [showSuccessPageURLHelp, setShowSuccessPageURLHelp] = useState(false);

  const handleSaveAndContinueClick = () => {
    // Add validation logic before allowing to proceed
    if (websiteDomain.trim() === "") {
      // Display an alert or error message to the user
      alert("Website Domain is required.");
    } else {
      // Move to the next step
      onSaveAndContinue();
    }
  };

  const toggleHelp = (field) => {
    switch (field) {
      case "websiteDomain":
        setShowWebsiteDomainHelp(!showWebsiteDomainHelp);
        break;
      case "checkoutPageURL":
        setShowCheckoutPageURLHelp(!showCheckoutPageURLHelp);
        break;
      case "successPageURL":
        setShowSuccessPageURLHelp(!showSuccessPageURLHelp);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-50 py-8 h-full">
      <div className="text-2xl font-semibold mb-4">Add Your Website Links</div>
      <p className="mb-8">
        Provide the following URLs which will help us connect with your platform
      </p>

      <form className="w-full md:w-1/2">
        <div className="bg-white py-6 px-6 rounded-lg">
          {/* Input for website or domain URL */}
          <div className="mb-4 relative">
            <label
              htmlFor="websiteDomain"
              className="block text-sm font-medium text-gray-700"
            >
              Website Domain
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="websiteDomain"
              value={websiteDomain}
              onChange={(e) => setWebsiteDomain(e.target.value)}
              className="mt-1 p-2 w-full border bg-slate-100 border-gray-300 rounded-md"
            />
            {/* Help icon */}
            <IoIosHelpCircleOutline
              className="absolute top-2/3 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => toggleHelp("websiteDomain")}
            />
            {/* Tooltip for help message */}
            {showWebsiteDomainHelp && (
              <div className="absolute top-2 w-64 left-full ml-2 p-2 bg-white rounded shadow-md">
                Enter the main domain of your website, excluding &quot;https://&quot; or
                &quot;www.&quot;For example,&quot;example.com&quot;.
              </div>
            )}
          </div>

          {/* Input for checkout URL */}
          <div className="mb-4 relative">
            <label
              htmlFor="checkoutURL"
              className="block text-sm font-medium text-gray-700"
            >
              Checkout Page URL
            </label>
            <input
              type="text"
              id="checkoutURL"
              value={checkoutPageURL}
              onChange={(e) => setCheckoutPageURL(e.target.value)}
              className="mt-1 p-2 w-full border bg-slate-100 border-gray-300 rounded-md"
            />
            {/* Help icon */}
            <IoIosHelpCircleOutline
              className="absolute top-2/3 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => toggleHelp("checkoutPageURL")}
            />
            {/* Tooltip for help message */}
            {showCheckoutPageURLHelp && (
              <div className="absolute w-64 top-2 left-full ml-2 p-2 bg-white rounded shadow-md">
                Provide the URL where customers are directed during the checkout
                process. It typically includes 'https://' and the path to the
                checkout page, like 'https://example.com/checkout.
              </div>
            )}
          </div>
          {/* Input for success page URL */}
          <div className="mb-4 relative">
            <label
              htmlFor="successPageURL"
              className="block text-sm font-medium text-gray-700"
            >
              Success Page URL
            </label>
            <input
              type="text"
              id="successPageURL"
              value={successPageURL}
              onChange={(e) => setSuccessPageURL(e.target.value)}
              className="mt-1 p-2 w-full border bg-slate-100 border-gray-300 rounded-md"
            />
            {/* Help icon */}
            <IoIosHelpCircleOutline
              className="absolute top-2/3 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => toggleHelp("successPageURL")}
            />
            {/* Tooltip for help message */}
            {showSuccessPageURLHelp && (
              <div className="absolute top-2 w-64 left-full ml-2 p-2 bg-white rounded shadow-md">
                Enter the URL of the page customers are redirected to after a
                successful transaction. This is usually the 'Thank You' or order
                confirmation page.
              </div>
            )}
          </div>
        </div>

        <div className="md:w-full flex justify-between mt-10">
          {/* Previous Button */}
          <button
            type="button"
            onClick={onGoToPreviousStep}
            className="bg-white border text-gray-500 py-2 px-4 rounded-md hover:text-gray-700"
          >
            Previous
          </button>
          {/* Save and Continue Button */}
          <button
            type="button"
            onClick={handleSaveAndContinueClick}
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ${
              websiteDomain.trim() === "" && "opacity-50 cursor-not-allowed"
            }`}
            disabled={websiteDomain.trim() === ""}
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default WebLinksForm;

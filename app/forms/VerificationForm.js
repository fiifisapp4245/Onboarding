import React, { useState } from "react";

const VerificationForm = ({ onGoToPreviousStep, onSaveAndContinue }) => {
  const [clientId, setClientId] = useState("");

  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  const handleVerifyClick = () => {
    // Add logic to verify the plugin using the client ID
    // You can perform API calls or other verification steps here
    console.log("Verifying with Client ID:", clientId);
  };

  return (
    <div className="md:h-screen flex flex-col bg-slate-50 py-6 overflow-x-hidden">
      <div className="flex-grow md:flex md:flex-col justify-center items-center">
        <div className="md:flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Verification</h2>
          <p className="text-sm md:text-base">
            You are almost there! help us verify the plugin
          </p>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/5 mx-auto mt-8">
          <div className=" bg-white py-6 px-6 rounded-lg mb-6">
            {/* Step 1 */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold">STEP 1:</h3>
              <p>Download the plugin:</p>
              <a href="recomaze-tracking.zip" className="border-4 text-blue-500 " download>
              
                recomaze-tracking.zip
              </a>
              <p>After downloading, follow the steps to install a plugin:</p>
              <a
                href="https://www.wpbeginner.com/beginners-guide/step-by-step-guide-to-install-a-wordpress-plugin-for-beginners/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install a Plugin using the WordPress Admin Plugin Upload
              </a>
            </div>

            {/* Step 2 */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold">STEP 2:</h3>
              <p>
                After installing the plugin, go to the &quot;plugins&quot; page
                and search for &quot;recomaze tracking,&quot; then click on
                settings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold">STEP 3:</h3>
              <p>
                Copy the client ID from the recomaze dashboard and put it here:
              </p>
              <input
                type="text"
                value={clientId}
                onChange={handleClientIdChange}
                className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              />
              <button
                onClick={handleVerifyClick}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>

            {/* Step 4 */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold">STEP 4:</h3>
              <p>After that, click on &quot;import products.&quot;</p>
            </div>

            {/* Step 5 */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-lg md:text-xl font-semibold">STEP 5:</h3>
              <p>
                After the import has been carried out, return to step 4 in the
                dashboard and click on &quot;Verify Plugin.&quot;
              </p>
            </div>
          </div>

          {/* Buttons */}
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
              onClick={onSaveAndContinue}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Verify Plugin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;

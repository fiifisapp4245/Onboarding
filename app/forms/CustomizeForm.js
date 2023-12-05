"use client";
import React, { useState } from "react";
import Modal from "react-modal";

const CustomizeForm = ({ onSaveAndContinue, onGoToPreviousStep }) => {
  const [popupColor, setPopupColor] = useState("#ffffff");
  const [borderColor, setBorderColor] = useState("#000000");
  const [engagementTeaser, setEngagementTeaser] = useState("");
  const [triggerMessage, setTriggerMessage] = useState("");
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState({
    buyNowButton: "",
    questChallenge: "",
    inStockStatus: "",
    likeButton: "",
    copiedLink: "",
    dislikeButton: "",
    endOfRecommendations: "",
    engagementTeaser: "",
    triggerMessage: "",
  });

  const handleSaveAndContinueClick = () => {
    onSaveAndContinue();
  };

  const openPreviewModal = () => {
    setPreviewContent({
      buyNowButton: document.getElementById("buyNowButton").value,
      questChallenge: document.getElementById("questChallenge").value,
      inStockStatus: document.getElementById("inStockStatus").value,
      likeButton: document.getElementById("likeButton").value,
      copiedLink: document.getElementById("copiedLink").value,
      dislikeButton: document.getElementById("dislikeButton").value,
      endOfRecommendations: document.getElementById("endOfRecommendations")
        .value,
      engagementTeaser,
      triggerMessage,
    });
    setPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setPreviewModalOpen(false);
  };

  return (
    <div className="md:h-full flex flex-col bg-slate-50 py-6">
      <div className="md:flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">
          Customize Product Recommendations
        </h2>
        <p>Have the ability to change the appearance of your recommendations</p>
      </div>

      <form className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-8">
        {/* Product recommendation pop-up messages */}
        <div className="bg-white py-6 px-6 rounded-lg mb-6">
          <h3 className="text-base font-semibold mb-7">
            Product recommendation pop-up messages
          </h3>

          <div className="mb-4">
            <fieldset>
              <legend>Position of Recommendation</legend>
              <div className="flex gap-6">
                <div className="flex gap-4">
                  <input
                    type="radio"
                    id="Choice1"
                    name="position"
                    value="bottomLeft"
                  />
                  <label htmlFor="Choice1">Bottom Left</label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="radio"
                    id="Choice2"
                    name="position"
                    value="bottomRight"
                  />
                  <label htmlFor="Choice2">Bottom Right</label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... (other input fields) */}
          </div>
        </div>

        {/* Minimized pop-up messages */}
        <div className="bg-white py-6 px-6 rounded-lg mb-6">
          <h3 className="text-base font-semibold mb-7">
            Minimized pop-up messages
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... (other input fields) */}
          </div>
        </div>

        {/* Color Settings */}
        <div className="bg-white py-6 px-6 rounded-lg mb-6">
          <h3 className="text-base font-semibold mb-7">Color Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ... (other input fields) */}
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isPreviewModalOpen}
          onRequestClose={closePreviewModal}
          contentLabel="Preview Modal"
          className="modal"
        >
          {/* Render the preview content in the modal */}
          <h2>Pop-up Message Preview</h2>
          {/* Display the preview content using the selected colors */}
          <div
            style={{
              backgroundColor: popupColor,
              borderColor: borderColor,
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {/* Display the preview text content */}
            {Object.entries(previewContent).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
          <button onClick={closePreviewModal}>Close Preview</button>
        </Modal>

        <div className="md:w-full flex justify-between mt-10">
          {/* ... (previous button) */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={openPreviewModal}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Preview
            </button>
            <button
              type="button"
              onClick={handleSaveAndContinueClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomizeForm;

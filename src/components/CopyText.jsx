import React, { useState } from "react";
import { toast } from "react-toastify";
const OPTIONS_TOAST = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
function CopyText({ text }) {
  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipBoard = async (copyMe) => {
    toast("🦄 Copied!", OPTIONS_TOAST);
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div
      className="text-item rounded-[6px] shadow p-[20px] text-justify cursor-pointer dark:text-white"
      onClick={() => copyToClipBoard(text)}
    >
      {text}
    </div>
  );
}

export default CopyText;

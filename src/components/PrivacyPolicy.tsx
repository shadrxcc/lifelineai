import React from "react";
import Modal from "./Modal";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="modal-card w-[600px] gap-y-5 m-auto">
        <p className="text-xl font-semibold leading-7 text-[#141414]">
          Privacy Policy
        </p>
        <p className="text-[#242424] text-base leading-4">
          By continuing to use our services, you agree to our{" "}
          <span className="gradient-text">Terms and conditions.</span>
        </p>

        <div className="flex justify-end w-full">
          <div className="flex items-center gap-x-2">
            <button
              id="agree"
              className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
            >
              Agree
            </button>
            <button id="cancel"
              onClick={props.onClose}
              className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]"
            >
              <p id="cancel-text">Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyPolicy;

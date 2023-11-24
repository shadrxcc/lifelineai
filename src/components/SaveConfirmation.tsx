import ModalCard from "./ModalCard";

const SaveConfirmation = () => {
  return (
    <ModalCard className="gap-y-3" heading="Save Confirmation">
      <p className="text-[#242424] text-base leading-6">
        You are about to save changes made to your medical history, Changes
        saved cannot be undone. Are you sure of this action?
      </p>

      <div className="flex justify-end w-full">
        <div className="flex items-center gap-x-2">
          <button
            id="agree"
            className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
          >
            Confirm
          </button>{" "}
          <button id="cancel" className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]">
            <p id="cancel-text">Cancel</p>
          </button>
        </div>
      </div>
    </ModalCard>
  );
};

export default SaveConfirmation;

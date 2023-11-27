import Modal from "./Modal";
import ModalCard from "./ModalCard";

interface ConfirmProps {
  onClose: () => void;
}

const SaveConfirmation = ({ onClose }: ConfirmProps) => {
  return (
    <Modal onClose={onClose}>
      <ModalCard className="gap-y-3" heading="Save Confirmation">
        <p className="text-[#242424] text-base leading-6">
          You are about to turn off all reminders previously set. This action
          can be undone at anytime. Are you sure?
        </p>

        <div className="flex justify-end w-full">
          <div className="flex items-center gap-x-2">
            <button
              onClick={onClose}
              id="agree"
              className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
            >
              Confirm
            </button>{" "}
            <button
              onClick={onClose}
              id="cancel"
              className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]"
            >
              <p id="cancel-text">Cancel</p>
            </button>
          </div>
        </div>
      </ModalCard>
    </Modal>
  );
};

export default SaveConfirmation;

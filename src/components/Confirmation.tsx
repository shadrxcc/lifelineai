import Modal from "./Modal";
import ModalCard from "./ModalCard";

const Confirmation = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal onClose={onClose}>
      <ModalCard className="gap-y-3" heading="Confirmation">
        <p className="text-[#242424] text-base leading-6">
          You are about to clear all your recent conversations. This action
          cannot be undone. Are you sure?
        </p>

        <div className="flex justify-end w-full">
          <div className="flex items-center gap-x-2">
            <button
              id="agree" onClick={onClose}
              className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
            >
              Confirm
            </button>{" "}
            <button onClick={onClose}
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

export default Confirmation;

import React from "react";
import Modal from "./Modal";
import ModalCard from "./ModalCard";

interface ReminderProps {
  onClose: () => void;
}

const Reminder = ({ onClose }: ReminderProps) => {
  const setReminder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <ModalCard className="gap-y-3" heading="Set Reminder">
        <form onSubmit={setReminder} className="flex flex-col gap-y-3 w-full">
          <span className="flex items-center gap-x-3.5">
            <input type="radio" name="" id="" />
            <p className="text-sm p-2 text-[#888]">Every morning (7am)</p>
          </span>
          <span className="flex items-center gap-x-3.5">
            <input type="radio" name="" id="" />
            <p className="text-sm p-2 text-[#888]">At Noon (12pm)</p>
          </span>
          <span className="flex items-center gap-x-3.5">
            <input type="radio" name="" id="" />
            <p className="text-sm p-2 text-[#888]">In the evening (7pm)</p>
          </span>
          <div className="flex justify-end w-full">
            <div className="flex items-center gap-x-2">
              <button
                onClick={onClose}
                id="cancel"
                className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]"
              >
                <p id="cancel-text">Cancel</p>
              </button>

              <button
                onClick={onClose}
                id="agree"
                className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
              >
                Set
              </button>
            </div>
          </div>
        </form>
      </ModalCard>
    </Modal>
  );
};

export default Reminder;

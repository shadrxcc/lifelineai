import ModalCard from "./ModalCard";

const Confirmation = () => {
  return (
    <ModalCard className="gap-y-3" heading="Confirmation">
      <p className="text-[#242424] text-base leading-6">
        You are about to clear all your recent conversations. This action cannot
        be undone. Are you sure?
      </p>

      <div className="flex justify-end w-full">
        <div className="flex items-center gap-x-2">
          <button
            id="agree"
            className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
          >
            Confirm
          </button>{" "}
          <button className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]">
            Cancel
          </button>
        </div>
      </div>
    </ModalCard>
  );
};

export default Confirmation;

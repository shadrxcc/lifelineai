import ModalCard from "./ModalCard";

const Reminder = () => {
  return (
    <ModalCard className="gap-y-3" heading="Set Reminder">
      <form className="flex flex-col gap-y-3 w-full">
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
            <button className="px-6 py-2 bg-[#EDF8FF] leading-4 text-xs font-semibold rounded-lg gradient-text text-[#EDF8FF]">
              Cancel
            </button>

            <button
              id="agree"
              className="px-6 rounded-lg text-white text-xs font-semibold leading-4 py-2"
            >
              Set
            </button>
          </div>
        </div>
      </form>
    </ModalCard>
  );
};

export default Reminder;

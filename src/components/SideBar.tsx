import CreditCard from "./CreditCard";

const SideBar = () => {
  return (
    <div
      id="sidebar"
      className="h-screen gap-y-8 flex flex-col justify-between w-[40%] lg:w-[286px] py-8 px-5"
    >
      <div>
        <div className="flex items-center gap-x-2">
          <h1 className="text-[#141414] text-2xl font-bold">Lifeline</h1>
          <img src="/heart-logo.svg" alt="" />
        </div>

        <div className="history flex flex-col gap-y-2">
          <p className="text-[#595959] text-sm leading-5">History</p>
          <div className="flex flex-col gap-y-2">
            <div className="period flex items-center gap-x-1 py-1 px-7">
              <img src="/clock.svg" alt="" />
              <p className="text-sm text-[#40A9FF]">This week</p>
            </div>
            <div className="prompts flex text-sm text-[#595959] leading-5 flex-col text-center items-end gap-y-3 px-3">
              <p>I have a headache and....</p>
              <p>I have a headache and....</p>
              <p>I have a headache and....</p>
            </div>
          </div>
        </div>
      </div>

      <CreditCard
        btnText="View article"
        heading="Malaria: The silent-killer"
        subHeading="Lorem ipsum dolor sit amet consectetur. Posuere in amet nulla urna nibh tempus. At id."
      />

      <div
        id="actions"
        className="text-sm flex flex-col gap-y-1 text-[#1C1C1C]"
      >
        <div id="flex-center" className="gap-x-3 p-3">
          <img src="/trash.svg" alt="" />
          <p>Clear conversations</p>
        </div>

        <div id="flex-center" className="gap-x-3 p-3">
          <img src="/logout.svg" alt="" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

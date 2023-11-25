import { useAuth } from "../context/AuthContext";
import CreditCard from "./CreditCard";
import TourDialog from "./TourDialog";

const SideBar = ({
  step2,
  finish,
  tour2,
  tour3,
  CloseTour,
  clearchat,
}: {
  step2: () => void;
  finish: () => void;
  tour2: Boolean;
  tour3: Boolean;
  CloseTour: () => void;
  clearchat: () => void;
}) => {
  const { logout } = useAuth();

  return (
    <div
      id="sidebar"
      className="h-screen gap-y-8 hidden sm:flex flex-col justify-between w-[30%] lg:w-[286px] py-8 px-5"
    >
      <div>
        <div className="flex items-center gap-x-2">
          <h1 className="text-[#141414] text-2xl font-bold">Lifeline</h1>
          <img src="/heart-logo.svg" alt="" />
        </div>

        <div className="history-wrapper relative">
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

          {tour2 ? (
            <TourDialog
              CloseTour={CloseTour}
              step={2}
              className="absolute z-10 top-7 right-[-27em]"
              heading="History"
              subHeading="View, copy, regenerate responses for all prompts from the past week"
              btnText="Next"
              Next={step2}
            />
          ) : null}
        </div>
      </div>

      <div className="relative">
        <CreditCard
          btnText="View article"
          heading="Malaria: The silent-killer"
          subHeading="Lorem ipsum dolor sit amet consectetur. Posuere in amet nulla urna nibh tempus. At id."
        />

        {tour3 ? (
          <TourDialog
            CloseTour={CloseTour}
            step={3}
            className="absolute top-11 right-[-25em] z-10"
            heading="Daily Articles"
            subHeading="Receive daily updates on articles related to your last searched symptom."
            btnText="Complete"
            Next={finish}
          />
        ) : null}
      </div>

      <div
        id="actions"
        className="text-sm flex flex-col gap-y-1 text-[#1C1C1C]"
      >
        <div
          onClick={clearchat}
          id="flex-center"
          className="gap-x-3 cursor-pointer p-3"
        >
          <img src="/trash.svg" alt="" />
          <p>Clear conversations</p>
        </div>

        <div
          onClick={logout}
          id="flex-center"
          className="gap-x-3 cursor-pointer p-3"
        >
          <img src="/logout.svg" alt="" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

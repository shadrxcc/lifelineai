import axios from "axios";
import { Journal } from "../@types/index.d";
import { useAuth } from "../context/AuthContext";
import CreditCard from "./CreditCard";
import TourDialog from "./TourDialog";
import { useEffect, useState } from "react";
import { shortenText } from "../utils/shortentext";

const SideBar = ({
  step2,
  finish,
  tour2,
  tour3,
  className,
  CloseTour,
  clearchat,
  closeMenu,
}: {
  step2?: () => void;
  finish?: () => void;
  tour2?: Boolean;
  tour3?: Boolean;
  className?: string;
  CloseTour?: () => void;
  clearchat?: () => void;
  closeMenu?: () => void;
}) => {
  const { logout } = useAuth();

  const [journals, setJournals] = useState<Journal[]>([]);

  const key = import.meta.env.VITE_RAPID_KEY;

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await axios.get(
          "https://medical-articles-live.p.rapidapi.com/journals/diabetes",
          {
            headers: {
              "X-RapidAPI-Key": `${key}`,
              "X-RapidAPI-Host": "medical-articles-live.p.rapidapi.com",
            },
          }
        );
        const fetchedJournals: Journal[] = response.data;

        setJournals(fetchedJournals);
      } catch (error) {
        console.error("Error fetching journals:", error);
      }
    };

    fetchJournals();
  }, []);

  return (
    <div
      id="sidebar"
      className={`h-screen ${className} gap-y-8 w-[30%] lg:w-[286px] py-8 px-5`}
    >
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <h1 className="text-[#141414] text-2xl font-bold">Lifeline</h1>
            <img src="/heart-logo.svg" alt="" />
          </div>

          <button onClick={closeMenu} className="sm:hidden">
            <img width={30} height={30} src="./close.svg" alt="" />
          </button>
        </div>

        <div className="history-wrapper relative">
          <div className="history flex flex-col gap-y-2">
            <p className="text-[#595959] text-sm leading-5">History</p>
            <div className="flex flex-col gap-y-2">
              <div className="period flex items-center gap-x-1 py-1 px-7">
                <img src="/clock.svg" alt="" />
                <p className="text-sm text-[#40A9FF]">This week</p>
              </div>
              <span>
                <p className="text-sm text-[#595959] text-center leading-5">
                  No search history
                </p>
              </span>
              <div className="prompts hidden text-sm text-[#595959] leading-5 flex-col text-center items-end gap-y-3 px-3">
                {/* <p className="cursor-pointer">I have a headache and....</p>
                <p className="cursor-pointer">I have a headache and....</p>
                <p className="cursor-pointer">I have a headache and....</p> */}
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
        {journals.slice(0, 1).map((journal, index) => (
          <CreditCard
            url={journal.url}
            id={index}
            btnText="View article"
            heading={journal.source}
            subHeading={shortenText(journal.title, 75)}
          />
        ))}

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

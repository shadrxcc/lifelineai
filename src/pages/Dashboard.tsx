import Conversation, { ChatMessage } from "../components/Conversation";
import { useState } from "react";
import SideBar from "../components/SideBar";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Confirmation from "../components/Confirmation";
import Reminder from "../components/Reminder";
import FeedBack from "../components/FeedBack";
import SaveConfirmation from "../components/SaveConfirmation";
import TurnOnConfirmation from "../components/TurnOnReminder";

// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// ... (existing imports)

const Dashboard = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(true);
  const [tour1, setTour1] = useState(false);
  const [tour2, setTour2] = useState(false);
  const [tour3, setTour3] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [feedback, setFeedBack] = useState(false);
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [menu, setMenu] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // Initially set to true

  const profileShow = () => {
    setShowProfile(!showProfile);
  };

  const [turnoff, setTurnOff] = useState(false);

  const closeConfirmation = () => {
    setTurnOff(false);
  };

  const [turnon, setTurnOn] = useState(false);
  const closeReminderConfirmation = () => {
    setTurnOn(false);
  };

  const handleSwitchChange = (isChecked: boolean): void => {
    setEnabled(isChecked);
    if (isChecked) {
      setTurnOn(true); // Show SaveConfirmation when enabled
    } else {
      setTurnOn(false); // You can optionally show TurnOnConfirmation when disabled
    }
  };

  const [clearChat, setClearChat] = useState(false);

  const clearModalOpen = () => {
    setClearChat(true);
    menuToggle();
  };

  const clearModalClose = () => {
    setClearChat(false);
  };

  const menuToggle = () => {
    setMenu(!menu);
  };

  const OpenFeedback = () => {
    setFeedBack(true);
  };

  const CloseFeedback = () => {
    setFeedBack(false);
  };

  const closePrivacy = () => {
    setPrivacyPolicy(false);
  };

  const clearConvo = () => {
    setChatLog([]);
    clearModalClose();
  };

  const openReminder = () => {
    setReminder(true);
  };

  const closeReminder = () => {
    setReminder(false);
  };

  const startGuide = () => {
    setPrivacyPolicy(false);
    setTour1(true);
  };

  const moveToStep2 = () => {
    setTour1(false);
    setTour2(true);
  };

  const moveToStep3 = () => {
    setTour2(false);
    setTour3(true);
  };

  const Finish = () => {
    setTour3(false);
  };

  const closeTour = () => {
    setTour1(false);
    setTour2(false);
    setTour3(false);
  };

  return (
    <>
      {turnon ? <SaveConfirmation onClose={closeConfirmation} /> : null}
      {turnoff ?  <TurnOnConfirmation onClose={closeReminderConfirmation} /> : null}

      {privacyPolicy && (
        <PrivacyPolicy startGuide={startGuide} onClose={closePrivacy} />
      )}

      {reminder ? <Reminder onClose={closeReminder} /> : null}

      {feedback ? <FeedBack onClose={CloseFeedback} /> : null}

      {clearChat ? (
        <Confirmation clearConvo={clearConvo} onClose={clearModalClose} />
      ) : null}
      <div className="flex w-full ">
        <SideBar
          className="hidden sm:flex sm:flex-col sm:justify-between"
          clearchat={clearModalOpen}
          CloseTour={closeTour}
          step2={moveToStep3}
          tour2={tour2}
          tour3={tour3}
          finish={Finish}
        />

        <div className="flex-1">
          <Conversation
            showProfile={showProfile} // Show profile only when not enabled
            profileShow={profileShow}
            enabled={enabled}
            handleSwitchChange={handleSwitchChange}
            clearModal={clearModalOpen}
            closeMenu={menuToggle}
            menu={menu}
            toggleMenu={menuToggle}
            chatLog={chatLog}
            setChatLog={setChatLog}
            like={OpenFeedback}
            dislike={OpenFeedback}
            setReminder={openReminder}
            CloseTour={closeTour}
            step1={moveToStep2}
            tour1={tour1}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// const Dashboard = () => {
//   const [privacyPolicy, setPrivacyPolicy] = useState(true);
//   const [tour1, setTour1] = useState(false);
//   const [tour2, setTour2] = useState(false);
//   const [tour3, setTour3] = useState(false);
//   const [reminder, setReminder] = useState(false);
//   const [feedback, setFeedBack] = useState(false);
//   const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
//   const [menu, setMenu] = useState(false);
//   const [enabled, setEnabled] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   const profileShow = () => {
//     setShowProfile(!showProfile);
//   };
//   const [turnoff, setTurnOff] = useState(false);

//   const closeConfirmation = () => {
//     setTurnOff(false);
//   };

//   const [clearChat, setClearChat] = useState(false);

//   const clearModalOpen = () => {
//     setClearChat(true);
//     menuToggle();
//   };

//   const clearModalClose = () => {
//     setClearChat(false);
//   };

//   const menuToggle = () => {
//     setMenu(!menu);
//   };

//   const OpenFeedback = () => {
//     setFeedBack(true);
//   };

//   const CloseFeedback = () => {
//     setFeedBack(false);
//   };

//   // const navigate = useNavigate()

//   // const {isLoggedIn} = useAuth()
//   // console.log(isLoggedIn)

//   // useEffect(() => {
//   //   if (!isLoggedIn) {
//   //     navigate('/login');
//   //   }
//   // }, [isLoggedIn, navigate]);

//   const closePrivacy = () => {
//     setPrivacyPolicy(false);
//   };

//   const clearConvo = () => {
//     setChatLog([]);
//     clearModalClose();
//   };

//   const openReminder = () => {
//     setReminder(true);
//   };

//   const closeReminder = () => {
//     setReminder(false);
//   };

//   const startGuide = () => {
//     setPrivacyPolicy(false);
//     setTour1(true);
//   };

//   const moveToStep2 = () => {
//     setTour1(false);
//     setTour2(true);
//   };

//   const moveToStep3 = () => {
//     setTour2(false);
//     setTour3(true);
//   };

//   const Finish = () => {
//     setTour3(false);
//   };

//   const closeTour = () => {
//     setTour1(false);
//     setTour2(false);
//     setTour3(false);
//   };

//   return (
//     <>
//       {enabled ? (
//         <SaveConfirmation onClose={closeConfirmation} />
//       ) : null}

//       {privacyPolicy && (
//         <PrivacyPolicy startGuide={startGuide} onClose={closePrivacy} />
//       )}

//       {reminder ? <Reminder onClose={closeReminder} /> : null}

//       {feedback ? <FeedBack onClose={CloseFeedback} /> : null}

//       {clearChat ? (
//         <Confirmation clearConvo={clearConvo} onClose={clearModalClose} />
//       ) : null}
//       <div className="flex w-full ">
//         <SideBar
//           className="hidden sm:flex sm:flex-col sm:justify-between"
//           clearchat={clearModalOpen}
//           CloseTour={closeTour}
//           step2={moveToStep3}
//           tour2={tour2}
//           tour3={tour3}
//           finish={Finish}
//         />

//         <div className="flex-1">
//           <Conversation showProfile={showProfile} profileShow={profileShow}
//             enabled={enabled}
//             setEnabled={setEnabled}
//             clearModal={clearModalOpen}
//             closeMenu={menuToggle}
//             menu={menu}
//             toggleMenu={menuToggle}
//             chatLog={chatLog}
//             setChatLog={setChatLog}
//             like={OpenFeedback}
//             dislike={OpenFeedback}
//             setReminder={openReminder}
//             CloseTour={closeTour}
//             step1={moveToStep2}
//             tour1={tour1}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

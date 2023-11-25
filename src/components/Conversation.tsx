// import Confirmation from "./Confirmation";
import ConversationHeader from "./ConversationHeader";
import InputMessage from "./InputMessage";
// import FeedBack from "./FeedBack";
// import SaveConfirmation from "./SaveConfirmation";
// import Reminder from "./Reminder";

interface ConversationProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
}

function Conversation({ tour1, step1, CloseTour }: ConversationProps) {
  return (
    <>
      <div id="convo" className="flex flex-col justify-between h-screen">
        <ConversationHeader CloseTour={CloseTour} step1={step1} tour1={tour1} />
        {/* <Confirmation/>
      <SaveConfirmation/>
      <FeedBack/> */}
        {/* <Reminder/> */}
        <InputMessage />
      </div>
    </>
  );
}

export default Conversation;

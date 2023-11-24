// import Confirmation from "./Confirmation";
import ConversationHeader from "./ConversationHeader";
import InputMessage from "./InputMessage";
// import FeedBack from "./FeedBack";
// import SaveConfirmation from "./SaveConfirmation";
// import Reminder from "./Reminder";

function Conversation() {
  return (
    <>
    <div className="flex flex-col justify-between h-screen">
      <ConversationHeader />
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

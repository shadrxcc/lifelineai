import { useContext } from "react";
import ConversationHeader from "./ConversationHeader";
import InputMessage from "./InputMessage";

import { UserChat } from "./UserChat";
import { BotChat } from "./BotChat";
import { ConversationContext } from "../context/conversationcontext";

interface ConversationProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
  setReminder: () => void;
  like: () => void;
  dislike: () => void;
  toggleMenu: () => void;
  menu: boolean;
  closeMenu: () => void;
  clearModal: () => void;
  showProfile: boolean;
  profileShow: () => void;
  offReminder?: () => void;
  onReminder?: () => void;
  turnon: boolean;
  turnoff: boolean;
}

export interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

function Conversation({
  tour1,
  step1,
  CloseTour,
  setReminder,
  like,
  dislike,
  // chatLog,
  clearModal,

  toggleMenu,
  menu,
  closeMenu,
  onReminder,
  offReminder,
  profileShow,
  showProfile,
  turnoff,
  turnon,
}: ConversationProps) {
  const {
    inputValue,
    setInputValue,
    isLoading,
    handleRegenerate,
    handleSubmit,
    chatLog,
  } = useContext(ConversationContext);

  return (
    <>
      <div id="convo" className="flex flex-col h-screen">
        <ConversationHeader
          turnoff={turnoff}
          turnon={turnon}
          onReminder={onReminder}
          offReminder={offReminder}
          profileShow={profileShow}
          showProfile={showProfile}
          clearModalOpen={clearModal}
          closeMenu={closeMenu}
          menu={menu}
          toggleMenu={toggleMenu}
          CloseTour={CloseTour}
          step1={step1}
          tour1={tour1}
        />

        <div className="flex-grow hide-scrollbar px-4 sm:px-6 lg:px-20 py-3 overflow-y-auto">
          {chatLog.map((message, index) => (
            <div className="flex flex-col my-6 mx-auto gap-y-6" key={index}>
              {message.type === "bot" ? (
                <>
                  <BotChat
                    like={like}
                    dislike={dislike}
                    message={message.message}
                  />
                  <div className="flex">
                    <div className="flex m-auto items-center gap-x-7">
                      <button
                        id="chat-actions"
                        onClick={handleRegenerate}
                        className="flex rounded-lg items-center gap-x-2 py-1 px-4 border hover:bg-[#1F53B9] hover:text-white text-[#92d1ff] border-[#18A1CC]"
                      >
                        <img src="/reload.svg" alt="" />
                        Regenerate response
                      </button>

                      <button
                        id="chat-actions"
                        onClick={setReminder}
                        className="flex rounded-lg text-[#92d1ff] hover:bg-[#1F53B9] hover:text-white items-center gap-x-2 py-1 px-4 border border-[#18A1CC]"
                      >
                        <img src="/alarm-blue.svg" alt="" />
                        Set reminder for treatment
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <UserChat message={message.message} />
              )}
            </div>
          ))}
        </div>
        <InputMessage
          isLoading={isLoading}
          onSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
}

export default Conversation;

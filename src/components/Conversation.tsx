// import Confirmation from "./Confirmation";
import { useState } from "react";
import ConversationHeader from "./ConversationHeader";
import InputMessage from "./InputMessage";
import axios from "axios";
import { UserChat } from "./UserChat";
import { BotChat } from "./BotChat";
// import translate from 'google-translate-api';

// import FeedBack from "./FeedBack";
// import SaveConfirmation from "./SaveConfirmation";
// import Reminder from "./Reminder";

interface ConversationProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
  setReminder: () => void;
  like: () => void;
  dislike: () => void;
  chatLog: ChatMessage[];
  setChatLog: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  toggleMenu: () => void;
  menu: boolean,
  closeMenu: () => void;
  clearModal: () => void;
  enabled: boolean;
  showProfile: boolean;
  profileShow: () => void;
  handleSwitchChange: (isChecked: boolean) => void;
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
  chatLog,
  clearModal,
  setChatLog,
  toggleMenu,
  menu,
  closeMenu,
  enabled,
  handleSwitchChange,
  profileShow,
  showProfile
}: ConversationProps) {
  const [inputValue, setInputValue] = useState("");
  // const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    // const lastUserMessage = chatLog.find((msg) => msg.type === 'user');
    // if (lastUserMessage) {
    //   try {
    //     const translation = await translate(lastUserMessage.message, {
    //       from: 'en', // Source language (English)
    //       to: 'es', // Replace 'es' with the user's preferred language code
    //     });
    //     setTranslatedMessage(translation.text);
    //   } catch (error) {
    //     console.error('Error translating message:', error);
    //   }
    // }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatLog((prev) => [...prev, { type: "user", message: inputValue }]);
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleRegenerate = () => {
    const lastUserMessage = chatLog.find((msg) => msg.type === "user");

    if (lastUserMessage) {
      const lastBotMessageIndex = chatLog
        .slice()
        .reverse()
        .findIndex((msg) => msg.type === "bot");

      if (lastBotMessageIndex !== -1) {
        const lastBotMessage =
          chatLog[chatLog.length - 1 - lastBotMessageIndex];
        sendMessage(
          lastUserMessage.message,
          lastBotMessageIndex,
          lastBotMessage.message
        );
      } else {
        sendMessage(lastUserMessage.message);
      }
    }
  };

  const sendMessage = (
    message: string,
    indexToUpdate?: number,
    existingMessage?: string
  ) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    };

    const data = {
      model: "gpt-3.5-turbo-1106",
      messages: [
        { role: "user", content: message },
        { role: "system", content: "You are a helpful assistant." },
      ],
    };

    if (indexToUpdate !== undefined && existingMessage !== undefined) {
      data.messages.push({ role: "assistant", content: existingMessage });
    }

    setIsLoading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);

        if (indexToUpdate !== undefined) {
          setChatLog((prevChat) =>
            prevChat.map((msg, index) =>
              index === prevChat.length - 1 - indexToUpdate
                ? { ...msg, message: response.data.choices[0].message.content }
                : msg
            )
          );
        } else {
          setChatLog((prevChat) => [
            ...prevChat,
            { type: "bot", message: response.data.choices[0].message.content },
          ]);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error sending message:", error);
      });
  };

  return (
    <>
      <div id="convo" className="flex flex-col h-screen">
        <ConversationHeader handleSwitchChange={handleSwitchChange} profileShow={profileShow} showProfile={showProfile} enabled={enabled} clearModalOpen={clearModal} closeMenu={closeMenu} menu={menu} toggleMenu={toggleMenu} CloseTour={CloseTour} step1={step1} tour1={tour1} />

        {/* <Confirmation/>
      <SaveConfirmation/>
      <FeedBack/> */}
        {/* <Reminder/> */}
        <div className="flex-grow hide-scrollbar px-4 sm:px-6 lg:px-20 py-3 overflow-y-auto">
          {chatLog.map((message, index) => (
            <div className="flex flex-col my-6 mx-auto gap-y-6" key={index}>
              {message.type === "user" ? (
                <UserChat message={message.message} />
              ) : (
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
              )}
            </div>
          ))}
        </div>
        <InputMessage
          translateText={handleTranslate}
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

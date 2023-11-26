// import Confirmation from "./Confirmation";
import { useState } from "react";
import ConversationHeader from "./ConversationHeader";
import InputMessage from "./InputMessage";
import axios from "axios";
import { UserChat } from "./UserChat";
import { BotChat } from "./BotChat";
// import FeedBack from "./FeedBack";
// import SaveConfirmation from "./SaveConfirmation";
// import Reminder from "./Reminder";

interface ConversationProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
}

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

function Conversation({ tour1, step1, CloseTour }: ConversationProps) {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatLog((prev) => [...prev, { type: "user", message: inputValue }]);
    sendMessage(inputValue);
    setInputValue("");
  };
  const sendMessage = (message: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    };

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        console.log(response);
        setChatLog((prevChat) => [
          ...prevChat,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
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
        <ConversationHeader CloseTour={CloseTour} step1={step1} tour1={tour1} />

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
                <BotChat message={message.message} />
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

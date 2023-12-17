import axios from "axios";
import React, { useState } from "react";

export const ConversationContext = React.createContext<ConvoContextType>({
  chatLog: [],
  setChatLog: () => {},
  inputValue: "",
  setInputValue: () => {},
  isLoading: false,
  setIsLoading: () => {},
  handleRegenerate: () => {},
  handleSubmit: () => {},
  history: [],
  setHistory: () => {},
});

interface HistoryItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

interface ConvoContextType {
  chatLog: ChatMessage[];
  setChatLog: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  isLoading: boolean;
  inputValue: string;
  history: HistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
  setInputValue: (value: string) => void;
  handleRegenerate?: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children: React.ReactNode;
};

const ConversationProvider: React.FC<Props> = ({ children }) => {
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [history, setHistory] = useState<HistoryItem[]>([]);

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
        setIsLoading(false);
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
          setIsLoading(false);
          setChatLog((prevChat) =>
            prevChat.map((msg, index) =>
              index === prevChat.length - 1 - indexToUpdate
                ? { ...msg, message: response.data.choices[0].message.content }
                : msg
            )
          );
        } else {
          setIsLoading(false);
          setChatLog((prevChat) => [
            ...prevChat,
            { type: "bot", message: response.data.choices[0].message.content },
          ]);
          setHistory((prevHistory) => [
            ...prevHistory,
            {
              question: message,
              answer: response.data.choices[0].message.content,
            },
          ]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error sending message:", error);
      });
  };
  return (
    <ConversationContext.Provider
      value={{
        chatLog,
        setChatLog,
        inputValue,
        setInputValue,
        isLoading,
        setIsLoading,
        handleSubmit,
        history,
        setHistory,
        handleRegenerate,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;

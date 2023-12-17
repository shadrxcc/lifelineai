import axios from "axios";
import React, { createContext, useState } from "react";
// import { ChatMessage } from "../components/Conversation";
// import axios from "axios";

export const ConversationContext = React.createContext<ConvoContextType>({
  chatLog: [],
  setChatLog: () => {},
  inputValue: "",
  setInputValue: () => {},
  isLoading: false,
  setIsLoading: () => {},
  handleRegenerate: () => {},
  messages: [],
  setMessages: () => {},
  handleSubmit: () => {},
  history: [],
  setHistory: () => {},
});

interface Message {
  role: string;
  content: string;
}

interface HistoryItem {
  question: string;
  answer: string;
}

interface ChatMessage {
  role: string;
  content: string;
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
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
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

  const handleRegenerate = () => {
    const lastUserMessage = messages.find((msg) => msg.role === "user");

    if (lastUserMessage) {
      const lastBotMessageIndex = messages
        .slice()
        .reverse()
        .findIndex((msg) => msg.role === "assistant");

      if (lastBotMessageIndex !== -1) {
        const lastBotMessage =
          messages[messages.length - 1 - lastBotMessageIndex];
        sendMessage(
          lastUserMessage.content,
          lastBotMessageIndex,
          lastBotMessage.content
        );
      } else {
        sendMessage(lastUserMessage.content);
      }
    }
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { role: "user", content: inputValue }]);
    sendMessage(inputValue);
    setInputValue("");
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

    const prompt: ChatMessage = {
      role: "user",
      content: message,
    };

    setMessages([...messages, prompt]);

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
      .then((response: any) => {
        console.log(response);

        if (indexToUpdate !== undefined) {
          setMessages((prevChat) =>
            prevChat.map((msg, index) =>
              index === prevChat.length - 1 - indexToUpdate
                ? { ...msg, message: response.data.choices[0].message.content }
                : msg
            )
          );
        } else {
          setMessages((prevChat) => [
            ...prevChat,
            {
              role: "assistant",
              content: response.data.choices[0].message.content,
            },
          ]);
          setHistory((prevHistory) => [
            ...prevHistory,
            {
              question: message,
              answer: response.data.choices[0].message.content,
            },
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
        messages,
        setMessages,
        handleRegenerate,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;

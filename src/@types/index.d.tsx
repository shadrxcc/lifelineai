export interface LoginDataType {
  email: string;
  password: string;
}

export interface userInfoType {
  country: string;
  email: string;
  full_name: string;
}

export interface UserChatProps {
  message: string;
}

export interface BotChatProps {
  message: string;
  like: () => void;
  dislike: () => void;
}

export interface InputMessageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  translateText?: () => void;
}

export interface Journal {
  title: string;
  url: string;
  source: string;
}

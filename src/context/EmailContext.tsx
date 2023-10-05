import * as React from "react";
import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface EmailState {
  email: string;
  setEmail: (email: string) => void;
}

const initialState = {
  email: "",
  setEmail: () => {},
};

export const EmailContext = createContext<EmailState>(initialState);

export const UseEmailContext = () => {
  const context = useContext(EmailContext);
  return context;
};

const EmailContextProvider = ({ children }: Props) => {
  const [email, setEmail] = useState("");

  const settingEmail = (email: string) => {
    return setEmail(email);
  };

  const value: EmailState = {
    email,
    setEmail: settingEmail,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};

export default EmailContextProvider;

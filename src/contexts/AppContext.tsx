import React, { createContext, useCallback, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  audioURL: string;
  changeAudioURL: (url: string) => void;
  transcriptedText: any;
  changeTranscriptedText: (text: any) => void;
  activeNavStep: number;
  changeNavStep: (step: number) => void;
}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [audioURL, setAudioURL] = useState("");

  const [transcriptedText, setTranscriptedText] = useState({});
  const [activeNavStep, setActiveNavStep] = useState(1);

  useEffect(() => {
    console.log(activeNavStep)
  }, [])

  const changeAudioURL = useCallback((url: string) => {
    setAudioURL(url);
  }, []);

  const changeTranscriptedText = useCallback((text: any) => {
    setTranscriptedText(text);
  }, []);

  const changeNavStep = useCallback((step: number) => {
    setActiveNavStep(step);
  }, []);

  return (
    <AppContext.Provider
      value={{
        audioURL,
        changeAudioURL,
        transcriptedText,
        changeTranscriptedText,
        activeNavStep,
        changeNavStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
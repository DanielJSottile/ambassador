import React, { createContext, useState, ReactNode, Dispatch, SetStateAction} from 'react';

type ContextProps = {
  children: ReactNode;
};

type AudioContextProps = {
  audioContext: any;
  isPlaying: boolean;
  isRecording: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
}

const AudioContextInitialValues = {
  audioContext: {},
  isPlaying: false,
  isRecording: false,
  setIsPlaying: () => null,
  setIsRecording: () => null
};

export const AudioReactContext = createContext<AudioContextProps>({
  ...AudioContextInitialValues,
});

const AudioReactContextProvider = ({ children }: ContextProps) => {
  const audioContext = new AudioContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  return (
    <AudioReactContext.Provider
      value={{
        audioContext,
        isPlaying,
        isRecording,
        setIsPlaying,
        setIsRecording,
      }}
    >
      {children}
    </AudioReactContext.Provider>
  );
};

export default AudioReactContextProvider;

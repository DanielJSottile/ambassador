import React, {
  useEffect,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type ContextProps = {
  children: ReactNode;
};

type AudioContextProps = {
  audioContext: any;
  isPlaying: boolean;
  isRecording: boolean;
  isPaused: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
};

const AudioContextInitialValues = {
  audioContext: {},
  isPlaying: false,
  isRecording: false,
  isPaused: true,
  setIsPlaying: () => null,
  setIsRecording: () => null,
  setIsPaused: () => null,
};

export const AudioReactContext = createContext<AudioContextProps>({
  ...AudioContextInitialValues,
});

const AudioReactContextProvider = ({ children }: ContextProps) => {
  const [audioContext, setAudioContext] = useState<
    AudioContext | (() => AudioContext)
  >();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    setAudioContext(new AudioContext());
  }, []);
  return (
    <AudioReactContext.Provider
      value={{
        audioContext,
        isPlaying,
        isRecording,
        isPaused,
        setIsPlaying,
        setIsRecording,
        setIsPaused,
      }}
    >
      {children}
    </AudioReactContext.Provider>
  );
};

export default AudioReactContextProvider;

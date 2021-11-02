import React, { createContext, useState, ReactNode} from 'react';

type ContextProps = {
  children: ReactNode;
};

const AudioContextInitialValues = {
 
};

export const AudioReactContext = createContext({
  ...AudioContextInitialValues,
 
});

const AudioReactContextProvider = ({ children }: ContextProps) => {
  const audioContext = new AudioContext();
  return (
    <AudioReactContext.Provider
      value={{
        audioContext
      }}
    >
      {children}
    </AudioReactContext.Provider>
  );
};

export default AudioReactContextProvider;

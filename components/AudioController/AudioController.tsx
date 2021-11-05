import React, { useContext } from 'react';
import AudioControllerButton from './AudioControllerButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AudioReactContext } from '../../contexts/AudioContext';
import {
  faPlay,
  faStop,
  faPause,
  faCircle,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';
import styles from './AudioController.module.scss'

const AudioController = () => {
  const {
    audioContext,
    isPlaying,
    setIsPlaying,
    isPaused,
    setIsPaused,
    isRecording,
    setIsRecording,
  } = useContext(AudioReactContext);
  return (
    <>
      <AudioControllerButton>
        <FontAwesomeIcon icon={faBackward} className={styles['back-forward']}/>
      </AudioControllerButton>
      <AudioControllerButton>
        <FontAwesomeIcon icon={faForward} className={styles['back-forward']}/>
      </AudioControllerButton>
      <AudioControllerButton
        onClickCallback={() => {
          setIsPlaying(false);
          setIsPaused(true);
        }}
      >
        <FontAwesomeIcon icon={faStop} className={styles['stop']}/>
      </AudioControllerButton>
      <AudioControllerButton
        controller={isPaused}
        onClickCallback={() => {
          setIsPlaying(isPaused);
          setIsPaused(!isPaused);
        }}
        secondaryIcon={<FontAwesomeIcon icon={faPause} className={styles['pause']}/>}
      >
        <FontAwesomeIcon icon={faPlay} className={styles['play']}/>
      </AudioControllerButton>
      <AudioControllerButton>
        <FontAwesomeIcon icon={faCircle} className={styles['record']}/>
      </AudioControllerButton>
    </>
  );
};

export default AudioController;

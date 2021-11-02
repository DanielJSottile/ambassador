import React, {useContext} from 'react';
import Button from '../Button';
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

const AudioController = () => {
  const {isPlaying, setIsPlaying, isRecording, setIsRecording} = useContext(AudioReactContext);
  return (
    <div>
      <Button>
        <FontAwesomeIcon icon={faBackward} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faForward} />
      </Button>
      <Button
        onClickCallback={() => {
          setIsPlaying(false)
        }}
      >
        <FontAwesomeIcon icon={faStop} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faPlay} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faCircle} />
      </Button>
    </div>
  );
};

export default AudioController;

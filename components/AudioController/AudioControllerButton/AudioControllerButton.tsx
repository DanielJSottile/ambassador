import React, { ReactNode, MouseEvent } from 'react';
import Button from '../../Button';
import styles from './AudioControllerButton.module.scss';

type AudioControllerButtonProps = {
  /** a boolean that controls main and secondary icons, or other styles */
  controller?: boolean;
  /** children of the button, usually an icon */
  children: ReactNode;
  /** if a controller is used, the secondary icon it shows */
  secondaryIcon?: ReactNode;
  /** function used for onChange for the input */
  onClickCallback?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const AudioControllerButton = ({
  controller,
  children,
  onClickCallback,
  secondaryIcon,
}: AudioControllerButtonProps) => {
  return (
    <Button onClickCallback={onClickCallback} buttonClass={styles['audio-controller-button']}>
      {controller ? children : secondaryIcon || children}
    </Button>
  );
};

export default AudioControllerButton;

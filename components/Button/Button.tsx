import React, {
  FunctionComponent,
  MouseEvent,
  KeyboardEvent,
  ReactNode,
  CSSProperties,
} from 'react';

type ButtonProps = {
  /** class for the button */
  buttonClass?: string;
  /** styles for the button */
  buttonStyles?: CSSProperties;
  /** string of input id */
  id?: string;
  /** boolean for whether the input is disabled */
  disabled?: boolean;
  /** function used for onChange for the input */
  onClickCallback?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** function used for onKeyPress for the input */
  onKeyPressCallback?: (e: KeyboardEvent<HTMLButtonElement>) => void;
  /** string of input type */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /** button children */
  children?: ReactNode | JSX.Element;
};

const Button: FunctionComponent<ButtonProps> = ({
  id = '',
  buttonClass = '',
  buttonStyles,
  onClickCallback = () => null,
  onKeyPressCallback = () => null,
  disabled,
  type,
  children,
}) => {
  return (
    <button
      id={id}
      style={buttonStyles}
      className={buttonClass}
      disabled={disabled}
      onClick={onClickCallback}
      onKeyPress={onKeyPressCallback}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

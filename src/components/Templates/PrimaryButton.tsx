import React from "react";

interface Props {
  text: string;
  action: Function;
}

const PrimaryButton: React.FC<Props> = ({ text, action }) => {
  return (
    <button className="primary-btn" onClick={() => action()}>
      {text}
    </button>
  );
};

export default PrimaryButton;

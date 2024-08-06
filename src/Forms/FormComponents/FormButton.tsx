import React from 'react';

const FormButton = (props: {
  text: string;
  type: string;
  isCompliment?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex flex-row justify-center rounded-md text-xl cursor-pointer m-4 py-2 ${
        props.isCompliment
          ? 'bg-secondary hover:bg-secondary-700'
          : 'bg-orange-500 hover:bg-orange-700'
      }`}
      onClick={() => props.onClick()}
    >
      {props.text}
    </div>
  );
};

export default FormButton;

import React from 'react';

const ErrorMessageBox = (props: { message: string; onClose?: () => void }) => {
  return (
    <div className="error-message-box flex flex-row bg-red-500 text-white p-2">
      <div className=" p-2 rounded-md">{props.message}</div>
      {props.onClose && (
        <div
          className="  hover:bg-red-200 rounded-full border-black border-1 cursor-pointer p-1 ml-auto h-10 w-10 p-auto"
          onClick={props.onClose}
        >
          <div className="text-2xl text-white m-auto w-full h-full  flex justify-center">
            ✘
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorMessageBox;

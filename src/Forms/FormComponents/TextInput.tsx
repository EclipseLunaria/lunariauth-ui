import React from 'react';

const TextInput = (props: {
  value: string;
  onChange: (type: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  icon?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="flex items-center border border-gray-300 bg-white rounded-md shadow-sm p-2 m-2">
      {props.icon && (
        <div className="mr-3 text-gray-500">
          <i className={`fas fa-${props.icon}`}></i>
        </div>
      )}
      <input
        className="flex-1 border-none outline-none bg-transparent placeholder-gray-400 text-gray-800"
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange(props.type, e);
        }}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TextInput;

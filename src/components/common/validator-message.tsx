import React from 'react';

interface Props {
  validator: any,
  name: string,
  value: any,
  rule: string;
}

const ValidatorMessage: React.FC<Props> = ({ validator, name, value, rule }): JSX.Element => {
  return (
    <div className="flex items-center justify-start truncate">
      {
        validator.current.message(name, value, rule)
          ?
          validator.current.message(name, value, rule)
          :
          <div className="w-full h-5" />
      }
    </div>
  );
};

export default ValidatorMessage;
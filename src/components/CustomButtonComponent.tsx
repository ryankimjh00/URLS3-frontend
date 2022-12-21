import React from 'react';

interface Props {
  id:string,
  onClick: () => void,
  border: string,
  color: string,
  height: string,
  width: string,
  type: string,
  display:string,
  boxSizing:string,
  radius:string,
  font: string,
  children?: React.ReactNode,
}

const Button: React.FC<Props> = ({
  id,
  border,
  color,
  children,
  onClick,
  height,
  width,
  font,
  radius,
  }) => {
  return (
  <button
    id={id}
    onClick={onClick}
    type='submit'
    style={{
       display: 'inline-block',
       boxSizing: 'content-box',
       backgroundColor: color,
       border,
       borderRadius: radius,
       fontSize: font,
       height,
       width,
    }}
    >
    {children}
    </button>
  );
}

export default Button;

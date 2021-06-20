import React from 'react';
import { CustomButton } from './styles';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <CustomButton type="button" onClick={onClick}>
      {children}
    </CustomButton>
  );
}

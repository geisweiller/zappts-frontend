import React from 'react';
import { Container, InputLabel, CustomInput } from './styles';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  nameError?: string;
  emailError?: string;
  passwordError?: string;
  hasError?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  label,
  type,
  placeholder,
  nameError,
  emailError,
  passwordError,
  hasError,
  onChange,
}: InputProps) {
  return (
    <Container>
      <InputLabel theme={hasError}>{label}</InputLabel>
      <CustomInput placeholder={placeholder} onChange={onChange} type={type} theme={hasError} />
      {type === 'password' ? (
        <strong>{passwordError}</strong>
      ) : type === 'email' ? (
        <strong>{emailError}</strong>
      ) : (
        <strong>{nameError}</strong>
      )}
    </Container>
  );
}

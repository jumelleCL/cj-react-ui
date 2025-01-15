import { ComponentProps, useId } from "react";
import styled from "styled-components";

type Props = ComponentProps<"input"> & {
  label?: string;
  type?: string;
  colorText?: string;
  color?: string;
  error?: string;
  placeholder?: string;
};

export default function InputLabel({
  colorText,
  type,
  placeholder,
  label,
  color,
  error,
  ...rest
}: Props) {
  const id = useId();
  return (
    <Input className="input-group" error={!!error}>
      <input
        required
        type={type}
        autoComplete="on"
        id={id}
        className="input"
        placeholder=""
        {...rest}
      />
      <label htmlFor={id} className="user-label">
        {label || placeholder || "Input"}
      </label>
      <span>{error || " "}</span>
    </Input>
  );
}

const Input = styled.div<{ error: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  .input {
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .user-label {
    position: absolute;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(1rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus,
  input:valid {
    outline: none;
    border: 1.5px solid #1a73e8;
  }

  .input:focus ~ .user-label,
  input:valid ~ .user-label {
    transform: translateY(-50%) scale(0.8);
    background-color: transparent;
    padding: 0 0.2em;
    color: #2196f3;
  }

  span {
    color: ${({ error }) => (error ? "red" : "transparent")};
    padding-left: 0.5rem;
    min-height: 1.5rem;
    font-size: 0.875rem;
  }
`;

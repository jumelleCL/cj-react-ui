import React, { ComponentProps, useId } from "react";
import styled from "styled-components";

type Props = ComponentProps<"input"> & {
  label?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
};

const CheckboxSimple = ({ 
  label, 
  color, 
  textColor, 
  borderColor, 
  ...rest 
}: Props) => {
  const id = useId();
  return (
    <Input 
      color={color || "#506eec"} 
      textColor={textColor || "#000"} 
      borderColor={borderColor || "#9098a9"}
    >
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id}>
        <span>
          <svg viewBox="0 0 12 10" height="10px" width="12px">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </Input>
  );
};

const Input = styled.div<{ color: string; textColor: string; borderColor: string }>`
  input {
    display: none;
    visibility: hidden;
  }

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    color: ${({ textColor }) => textColor};
  }

  label span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border: 1px solid ${({ borderColor }) => borderColor};
    transition: all 0.2s ease;

    svg {
      position: absolute;
      top: 3px;
      left: 2px;
      fill: none;
      stroke: #ffffff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease 0.1s;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: ${({ color }) => color};
      display: block;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
      transition: all 0.6s ease;
    }
  }

  label span:last-child {
    margin-left: 8px;
  }

  input:checked + label span:first-child {
    background: ${({ color }) => color};
    border-color: ${({ color }) => color};
    animation: wave-46 0.4s ease;

    svg {
      stroke-dashoffset: 0;
    }

    &::before {
      transform: scale(3.5);
      opacity: 0;
    }
  }

  label:hover span:first-child {
    border-color: ${({ color }) => color};
  }

  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }
`;

export default CheckboxSimple;

import React, { ComponentProps } from "react";
import styled from "styled-components";

type Props = ComponentProps<"button"> &{
  text: string;
  textColor?: string;
  backgroundColor?: string;
};
const SimpleButton = ({ text, textColor, backgroundColor , ...rest}: Props) => {
  return (
    <Button textColor={textColor} backgroundColor={backgroundColor} {...rest}>
      {text || "Button"}
    </Button>
  );
};

const Button = styled.button<{textColor?: string, backgroundColor?: string}>`
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor ||'#3b82f6'};
  color: ${(props) => props.textColor || 'white'};
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border-bottom: 4px solid #2563eb;

  transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px); 
    border-bottom-width: 6px; 
  }
  &:active {
    border-bottom-width: 2px;
    filter: brightness(0.9);
    transform: translateY(2px);
  }
`;

export default SimpleButton;

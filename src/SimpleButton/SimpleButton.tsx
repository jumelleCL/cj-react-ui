import React, { ComponentProps } from "react";
import styled from "styled-components";

type Props = ComponentProps<"button"> &{
  text?: string;
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

const Button = styled.button<{ textColor?: string; backgroundColor?: string }>`
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || "#3b82f6"};
  color: ${(props) => props.textColor || "white"};
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${(props) =>
      props.backgroundColor
        ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ${props.backgroundColor}`
        : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), #3b82f6`};
    transition: height 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), filter 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px); 
    &::after {
      height: 6px;
    }
  }

  &:active {
    filter: brightness(0.9);
    transform: translateY(2px);
    &::after {
      height: 2px;
    }
  }
`;


export default SimpleButton;

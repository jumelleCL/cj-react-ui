import React, { ComponentProps } from "react";
import { CiCircleInfo } from "react-icons/ci";
import styled from "styled-components";

type Props = ComponentProps<"div"> & {
    info?: string;
    color?: string;
    size?: number;
};
const ToolTip = ({ info, size, color, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <div className="relative">
        <div className="icon">
          <CiCircleInfo size={size || 30} color={color || 'black'}/>
        </div>
        <div className="tooltip">
          <p>{info || "Information...."}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  .icon {
    position: relative;
    z-index: 10;
    padding: 0.25rem;
    cursor: pointer;

    svg {
      transition: transform 0.5s;
    }

    &:hover svg {
      transform: rotate(360deg);
    }
  }

  .tooltip {
    position: absolute;
    left: 50%;
    width: 10rem;
    transform: translateX(-50%);
    background-color: #b8b8b8;
    padding: 0.75rem;
    font-size: 0.875rem;
    border-radius: 0.25rem;
    opacity: 0;
    bottom: 2rem;
    transition: bottom 0.5s ease, opacity 0.5s ease;

    &:before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      width: 1rem;
      height: 1rem;
      background-color: #b8b8b8;
      transform: translateX(-50%) rotate(45deg);
    }
  }

  .icon:hover + .tooltip {
    bottom: 3.3rem;
    opacity: 1;
  }
`;


export default ToolTip;

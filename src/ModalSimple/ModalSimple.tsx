import React, { ComponentProps, forwardRef } from "react";
import styled from "styled-components";
import SimpleButton from "../SimpleButton/SimpleButton";

type Props = ComponentProps<"dialog"> & {
  text?: string;
  buttonText?: string;
};

const ModalSimple = forwardRef<HTMLDialogElement, Props>(
  ({ text, buttonText, ...rest }, ref) => {
    return (
      <Modal ref={ref} {...rest}>
        <p>{text}</p>
        <SimpleButton onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()}>
          {buttonText || "Acept"}
        </SimpleButton>
      </Modal>
    );
  }
);

const Modal = styled.dialog`
  padding: 1rem;
  border-radius: 0.4rem;
`;

export default ModalSimple;

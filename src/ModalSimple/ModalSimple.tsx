import React, { ComponentProps, useRef } from "react";
import styled from "styled-components";
import SimpleButton from "../SimpleButton/SimpleButton";
type Props = ComponentProps<"dialog"> &{
  text?: string;
  buttonText?: string;
};

const ModalSimple= ({ text, buttonText, ...rest}: Props) => {

  const modalRef = useRef<HTMLDialogElement>(null);

  return (
      <Modal ref={modalRef} {...rest}>
        <p>{text}</p>
        <SimpleButton onClick={() => modalRef.current?.close()}>{buttonText || 'Acept'}</SimpleButton>
      </Modal>
  );
};


const Modal = styled.dialog`
padding: 1rem;
border-radius: 0.4rem;
`;

export default ModalSimple;
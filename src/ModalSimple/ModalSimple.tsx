import React, { ComponentProps, useEffect, useRef } from "react";
import styled from "styled-components";
import SimpleButton from "../SimpleButton/SimpleButton";

type Props = ComponentProps<"dialog"> & {
  text?: string;
  buttonText?: string;
  ref?: React.Ref<HTMLDialogElement>;
};

const ModalSimple = ({ text, buttonText, ref, ...rest }: Props) => {
  const internalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref && internalRef.current) {
      if (typeof ref === "function") {
        ref(internalRef.current);
      } else if ("current" in ref) {
        ref.current = internalRef.current;
      }
    }
  }, [ref]);

  return (
    <Modal ref={internalRef} {...rest}>
      <p>{text}</p>
      <SimpleButton onClick={() => internalRef.current?.close()}>
        {buttonText || "Accept"}
      </SimpleButton>
    </Modal>
  );
};

const Modal = styled.dialog`
  padding: 1rem;
  border-radius: 0.4rem;
`;

export default ModalSimple;

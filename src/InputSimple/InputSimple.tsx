import { ComponentProps, useId } from "react";
import styled from "styled-components";

type Props = ComponentProps<"input"> & {
  label?: string;
  placeholer?: string;
  type?: string;
  colorText?: string;
  color?: string;
};
export default function InputSimple({label, placeholder, type, colorText, color, ...rest}: Props) {
  const id = useId();

  return (
    <Input className="form">
      <input
        className="input"
        placeholder={label || placeholder || 'Input'}
        required
        id={id}
        type={type}
        {...rest}
      />
      <label htmlFor={id} className="input-border"></label>
    </Input>
  );
}

const Input = styled.div`
--width-of-input: 200px;
 --border-height: 1px;
 --border-before-color: rgba(221, 221, 221, 0.39);
 --border-after-color: #5891ff;
 --input-hovered-color: #4985e01f;
 position: relative;
 width: var(--width-of-input);
.input {
 color: #fff;
 font-size: 0.9rem;
 background-color: transparent;
 width: 100%;
 box-sizing: border-box;
 padding-inline: 0.5em;
 padding-block: 0.7em;
 border: none;
 border-bottom: var(--border-height) solid var(--border-before-color);
}
/* styling of animated border */
.input-border {
 position: absolute;
 background: var(--border-after-color);
 width: 0%;
 height: 2px;
 bottom: 0;
 left: 0;
 transition: 0.3s;
}
/* Hover on Input */
input:hover {
 background: var(--input-hovered-color);
}

input:focus {
 outline: none;
}
/* here is code of animated border */
input:focus ~ .input-border {
 width: 100%;
}
`
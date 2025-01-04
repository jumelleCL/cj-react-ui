import styled from "styled-components"
export default function InputLabel (){
  return (
    <Input className="input-group">
        <input required type="text" name="text" autoComplete="off" className="input" />
        <label className="user-label">First Name</label>
    </Input>
  )
}

const Input = styled.div`
 position: relative;


.input {
 border: solid 1.5px #9e9e9e;
 border-radius: 1rem;
 background: none;
 padding: 1rem;
 font-size: 1rem;
 color: #f5f5f5;
 transition: border 150ms cubic-bezier(0.4,0,0.2,1);
}

.user-label {
 position: absolute;
 left: 15px;
 color: #e8e8e8;
 pointer-events: none;
 transform: translateY(1rem);
 transition: 150ms cubic-bezier(0.4,0,0.2,1);
}

.input:focus, input:valid {
 outline: none;
 border: 1.5px solid #1a73e8;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-50%) scale(0.8);
 background-color: inherit;
 padding: 0 .2em;
 color: #2196f3;
}
`
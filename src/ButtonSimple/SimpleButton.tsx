import React from 'react';
type Props = {
    text: string;
}
const SimpleButton = ({text}: Props) => {    
  return (
    <button>
        {text}
    </button>
  );
}

export default SimpleButton;

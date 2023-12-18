import React from 'react';

const InputComp = ({children, ...props}) => {
    return ( 
        <input {...props}>
            {children}
        </input>
     );
}
 
export default InputComp;
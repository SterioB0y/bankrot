import React from 'react';

const ParagraphComp = ({children, ...props}) => {
    return ( 
        <div {...props}>
            {children}
        </div>
     );
}
 
export default ParagraphComp;
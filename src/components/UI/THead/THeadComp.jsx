import React from 'react';
import "../../../styles/Allstyle.css";

const THeadComp = ({children, ...props}) => {
    return ( 
        <thead>
            {children}
        </thead>
     );
}
 
export default THeadComp;
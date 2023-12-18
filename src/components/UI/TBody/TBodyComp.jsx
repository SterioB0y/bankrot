import React from 'react';
import "../../../styles/Allstyle.css";

const TBodyComp = ({children, ...props}) => {
    return (  
        <tbody>
            {children}
        </tbody>
    );
}
 
export default TBodyComp;
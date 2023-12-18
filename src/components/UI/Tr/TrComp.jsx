import React from 'react';
import "../../../styles/Allstyle.css";

const TrComp = ({children, ...props}) => {
    return ( 
        <tr>
            {children}
        </tr>
     );
}
 
export default TrComp;
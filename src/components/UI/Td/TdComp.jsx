import React from 'react';
import "../../../styles/Allstyle.css";

const TdComp = ({children, wd}) => {
    return ( 
        <td style={{width:wd}}>
            {children}
        </td>
     );
}
 
export default TdComp;
import React from 'react';
import "../../../styles/Allstyle.css";

const ThComp = ({children, nclass , wd, ...props}) => {
    return ( 
        <th {...props} className={nclass} style={{width: wd}}>
            {children}
        </th>
     );
}
 
export default ThComp;
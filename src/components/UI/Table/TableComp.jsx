import React from 'react';
import "../../../styles/Allstyle.css";

const TableComp = ({children, ...props}) => {
    return ( 
        <table className='table'>
            {children}
        </table>
     );
}
 
export default TableComp;
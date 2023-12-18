import React from 'react';
import "./dropList.css"
import arrow from '../../../util/rightArrow.png'

const DropDownList = ({children, ...props}) => {
    return ( 
        <div {...props} className='drop-down-list'>
            <div>
                {children}
            </div>
            <img className='arrow' src={arrow}/>
        </div>
     );
}
 
export default DropDownList;
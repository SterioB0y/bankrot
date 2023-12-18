import React, { useEffect, useState } from 'react';
import "./../../../styles/MainStyle.css"

const Characteristics = ({classname, vison, elements, array}) => {

    const [top, setTop] = useState("0px")
    const [left, setLeft] = useState("0px")
    const [arrays, setArrays] = useState([])
    
    

    useEffect(()=>{
        const elem = document.getElementById(`${classname}`).getBoundingClientRect();
        setTop(elem.top)
        setLeft(elem.left+290)
    }, [])

    useEffect(()=>{
        array(arrays)
    }, [arrays])

    function addOrdelete(el){
        if(document.getElementById(el).checked){
            setArrays([...arrays, el])
        }
        else{
            const newarrays = arrays.filter(item => item !== el)
            setArrays(newarrays)
        }
        
    }


    return ( 
        <div className='modal-container' style={{top: top, left: left, visibility:vison}}>
            
            {elements.map((element,i)=>
                <div className='no-wrap'>
                <input onChange={()=>addOrdelete(element)} style={{marginRight:"5px"}} type='checkbox' key={element} id={element}/> 
                <label htmlFor={element}>{element}</label>
                </div>
            )}
            
        </div>
     );
}
 
export default Characteristics;
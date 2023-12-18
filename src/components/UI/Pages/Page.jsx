import React from 'react';
import "./../../../styles/MainStyle.css"

const Page = ({countPage, page, pageNow}) => {

    let pages = []

    for(let i = 0; i < countPage;i++){
        pages.push(i+1)
    }

    function pageClick(pag){
        page(pag)
    }

    return ( 
        <div className='pages'>
            {pages.map(p => <div 
                onClick={() => pageClick(p)}
                key={p*22}
                className={p === pageNow ? 'page page_active' : 'page'}
                >
                {p}
            </div>)}
        </div>
     );
}
 
export default Page;
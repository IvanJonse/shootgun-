import React, {useState, useEffect} from 'react';
import s from './FindUsers.module.sass';
export default function Paginator ({onPageChanged, totalItemsCount, pageSize, currentPage, portionSize = 4}) {

    let pagesCount = Math.ceil(totalItemsCount / pageSize) 
 
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
       pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const[portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize 
   
    useEffect(()=> 
    setPortionNumber(Math.ceil(currentPage/portionSize)), 
    [currentPage]);

return (
    
        <div className={s.page} >

        {portionNumber > 1 && 
        <>
            <div onClick={() => setPortionNumber(portionNumber - 1)} className={s.pageStep}>{'<'}</div> 
            <div onClick={() => setPortionNumber(pages[0])} className={`${s.itemPage} ${s.itemPage__fz}`}>{'First'}</div>
        </>
        }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((e, index) => {
                return (

                <div key={index} className={ currentPage === e ? s.selectedPage : s.itemPage } onClick={ () => onPageChanged(e)}>
                    {e}
                </div>
                
                )
            })}

        {portionCount > portionNumber && <div onClick={() => setPortionNumber(portionNumber + 1)}  className={s.pageStep}>{'>'}</div>}
        
        </div>
    )
}
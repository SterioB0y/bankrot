import React, { useState } from 'react';
import TableComp from './UI/Table/TableComp';
import "./../styles/MainStyle.css"
import "./../styles/Allstyle.css"
import THeadComp from './UI/THead/THeadComp';
import TrComp from './UI/Tr/TrComp';
import ThComp from './UI/Th/ThComp';
import TBodyComp from './UI/TBody/TBodyComp';
import TdComp from './UI/Td/TdComp';


const TableDebtors = ({debtors, sort}) => {

    function converToNormalDate(date){
        const fullDate = new Date(date)
        const day = parseInt(fullDate.getDate(), 10)
        let correctDay = ""
        if(day >= 1 && day < 10){
            correctDay = "0"+day
        }
        else{
            correctDay += day
        }

        return correctDay+"."+fullDate.getMonth()+1+"."+fullDate.getFullYear()
    }

    function sortBy(itemSort){
        sort(itemSort)
    }

    

    return (
        <TableComp>
            <THeadComp>
                <TrComp>
                    <ThComp onClick={()=>sortBy("date")} wd={"90px"}>Дата</ThComp>
                    <ThComp onClick={()=>sortBy("name")} nclass={"indentation"}>Должник</ThComp>
                    <ThComp onClick={()=>sortBy("procedure")} wd={"90px"}>Процедура</ThComp>
                    <ThComp onClick={()=>sortBy("region")} wd={"90px"}>Регион</ThComp>
                    <ThComp onClick={()=>sortBy("manager")} wd={"300px"}>Управляющий</ThComp>
                    <ThComp onClick={()=>sortBy("percent")} wd={"320px"}>Доля государственной собственности, %</ThComp>
                </TrComp>
            </THeadComp>
            <TBodyComp>
                {debtors.length != 0 ? debtors.map(debtor =>
                    <TrComp key={debtor.id}>
                        <TdComp>{converToNormalDate(debtor.dateFrom)}</TdComp>
                        <TdComp>{debtor.nameDebtor}</TdComp>
                        <TdComp>{debtor.procedure}</TdComp>
                        <TdComp>{debtor.region}</TdComp>
                        <TdComp>{debtor.manager}</TdComp>
                        <TdComp>{debtor.shareOfStateOwnership}</TdComp>
                    </TrComp>
                ) : <h1 className='no-result'>Результатов нету</h1>}

            </TBodyComp>
        </TableComp>
    );
}

export default TableDebtors;
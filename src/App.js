import React, { useEffect, useState } from 'react';
import TableComp from './components/UI/Table/TableComp';
import THeadComp from './components/UI/THead/THeadComp';
import TdComp from './components/UI/Td/TdComp';
import ThComp from './components/UI/Th/ThComp';
import TrComp from './components/UI/Tr/TrComp';
import TBodyComp from './components/UI/TBody/TBodyComp';
import "./styles/MainStyle.css"
import filtImg from "./util/filter.png"
import FilterWindow from './components/FilterWindow';
import InputComp from './components/UI/Input/InputComp';
import TableDebtors from './components/TableDebtors';
import Page from './components/UI/Pages/Page';

function App() {
  const [debtors, setDebtors] = useState([
    { id: 0, nameDebtor: "Индивидуальный предприниматель Алексей Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2001-01-01", dateUntil: "2001-09-01", procedure: "Конкурсное производство", UPN: "123123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123mw4124n", shareOfStateOwnership: 0 },
    { id: 1, nameDebtor: "Юридическое лицо Сильвестр Сергееввич", manager: "Веретеньеков Иван Иванович", dateFrom: "2002-01-01", dateUntil: "2002-09-01", procedure: "Защитный период", UPN: "164123232", region: "Минская обл.", caseStatus: "Активное", category: "Юридическое лицо", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 20 },
    { id: 2, nameDebtor: "Индивидуальный предприниматель Ахматова Ольга", manager: "Рокосовский Иван Иванович", dateFrom: "2003-01-01", dateUntil: "2003-09-01", procedure: "Санация", UPN: "122573232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 30 },
    { id: 3, nameDebtor: "Открытое акционерное общество Свитанок", manager: "Октябарьский Иван Иванович", dateFrom: "2004-01-01", dateUntil: "2004-09-01", procedure: "Конкурсное производство", UPN: "1237575232", region: "Минская обл.", caseStatus: "Активное", category: "Открытое акционерное общество", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 30 },
    { id: 4, nameDebtor: "Индивидуальный предприниматель Андрей Алексеич", manager: "Мартовский Иван Иванович", dateFrom: "2005-01-01", dateUntil: "2005-09-01", procedure: "Защитный период", UPN: "1238783232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 30 },
    { id: 5, nameDebtor: "Индивидуальный предприниматель Максим Алексеич", manager: "Белов Иван Иванович", dateFrom: "2006-01-01", dateUntil: "2006-09-01", procedure: "Санация", UPN: "127993232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 60 },
    { id: 6, nameDebtor: "Индивидуальный предприниматель Генадий Алексеич", manager: "Гераськов Иван Иванович", dateFrom: "2007-01-01", dateUntil: "2007-09-01", procedure: "Конкурсное производство", UPN: "12379323232", region: "Минская обл.", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 46 },
    { id: 7, nameDebtor: "Индивидуальный предприниматель Тимофей Алексеич", manager: "Дулкин Иван Иванович", dateFrom: "2008-01-01", dateUntil: "2008-09-01", procedure: "Защитный период", UPN: "123758232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 70 },
    { id: 8, nameDebtor: "Индивидуальный предприниматель Евгений Алексеич", manager: "Зумерский Иван Иванович", dateFrom: "2009-01-01", dateUntil: "2009-09-01", procedure: "Санация", UPN: "46123232", region: "Минск", caseStatus: "Закрытое", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 10 },
    { id: 9, nameDebtor: "Индивидуальный предприниматель Аким Алексеич", manager: "Бусерский Иван Иванович", dateFrom: "2010-01-01", dateUntil: "2010-09-01", procedure: "Конкурсное производство", UPN: "983123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 5 },
    { id: 10, nameDebtor: "Индивидуальный предприниматель Мирослав Алексеич", manager: "Логойский Иван Иванович", dateFrom: "2011-01-01", dateUntil: "2011-09-01", procedure: "Защитный период", UPN: "003123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 7 },
    { id: 11, nameDebtor: "Индивидуальный предприниматель Ростислав Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2012-01-01", dateUntil: "2012-09-01", procedure: "Санация", UPN: "993123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 100 },
    { id: 12, nameDebtor: "Индивидуальный предприниматель Ярослав Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2013-01-01", dateUntil: "2013-09-01", procedure: "Конкурсное производство", UPN: "12773123232", region: "Минская обл.", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 33 },
    { id: 13, nameDebtor: "Индивидуальный предприниматель Захар Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2014-01-01", dateUntil: "2014-09-01", procedure: "Защитный период", UPN: "773123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 55 },
    { id: 14, nameDebtor: "Индивидуальный предприниматель Демьян Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2015-01-01", dateUntil: "2015-09-01", procedure: "Санация", UPN: "55123123232", region: "Минск", caseStatus: "Закрытое", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 99 },
    { id: 15, nameDebtor: "Индивидуальный предприниматель Владимир Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2016-01-01", dateUntil: "2016-09-01", procedure: "Конкурсное производство", UPN: "33123123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Банк", caseNumber: "123nw4124n", shareOfStateOwnership: 19 },
    { id: 16, nameDebtor: "Индивидуальный предприниматель Владислав Алексеич", manager: "Иванов Иван Иванович", dateFrom: "2017-01-01", dateUntil: "2017-09-01", procedure: "Защитный период", UPN: "22123123232", region: "Минск", caseStatus: "Активное", category: "Индивидуальный предприниматель", applicantType: "Должник", caseNumber: "123nw4124n", shareOfStateOwnership: 30 },
  ])
  const [debtorsWithFilter, setDebtorsWithFilter] = useState(debtors)
  const [filterProperties, setFilterProperties] = useState({
    sNameDebtor: "",
    sManager: "",
    sDataFrom: "",
    sDataUntil: "",
    sProcedure: [],
    sUPN: "",
    sRegion: [],
    sCaseStatus: "",
    sCategory: [],
    sApplicantType: [],
    sCaseNumber: "",
    sShareOfStateOwnershipMin: 0,
    sShareOfStateOwnershipMax: 0,
    sortBy: "",
    sPage: 1,
  })
  const [pageDebtors, setPageDebtors] = useState([])
  const [visible, setVisible] = useState("hidden")
  const [heig, setHeig] = useState("0px")
  const [serchNameDebtor, setSerchNameDebtor] = useState("")
  const [serchNameManager, setSerchNameManager] = useState("")
  const [positionFilter, setPositionFilter] = useState("fixed")
  const [positionMain, setPositionMain] = useState("relative")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [upd, setUpd] = useState({})
  const [sor, setSor] = useState("")
  const [countPage, setCountPage] = useState(getCountPage(limit))


  function openFilter() {
    setVisible("visible")
    setHeig(`${document.querySelector(".container-filter").getBoundingClientRect().height}px`)
    setPositionMain("fixed")
    setPositionFilter("relative")
    setUpd({})
  }

  function getCountPage(limit) {
    return Math.ceil(debtorsWithFilter.length / limit)
  }

  let pagedeb = []

  let pdp = []

  function updNameDebtor(){
    const updateFilter = {
      ...filterProperties,
      sNameDebtor: serchNameDebtor,
    }
    setFilterProperties(updateFilter)
  }

  useEffect(()=>{
    setFilterProperties((oldObj) => ({
      ...oldObj,
      ...upd,
    }))
  }, [upd])

  useEffect(()=>{
    setFilterProperties({...filterProperties, sortBy: sor})
  }, [sor])

  useEffect(() =>{
    updNameDebtor()
  }, [serchNameDebtor, serchNameManager])

  const Sorted = (sortItem) =>{
    setFilterProperties({...filterProperties, sortBy: sortItem})
    setSor(sortItem)
    
  }



  useEffect(() =>{
    let tempArray = []
    pdp = debtors.filter(item => item.nameDebtor.toLowerCase().includes(filterProperties.sNameDebtor.toLowerCase()))
    if(serchNameDebtor == ""){
      pdp = pdp.filter(item => item.nameDebtor.toLowerCase().includes(filterProperties.sNameDebtor.toLowerCase()))
    }
    if(serchNameManager != ""){
      pdp= pdp.filter(item => item.manager.toLowerCase().includes(filterProperties.sManager.toLowerCase()))
    }
    if(filterProperties.sUPN != ""){
      pdp = pdp.filter(item => item.UPN.toLowerCase().includes(filterProperties.sUPN.toLowerCase()))
    }
    if(filterProperties.sCaseStatus != ""){
      pdp = pdp.filter(item => item.caseStatus.toLowerCase().includes(filterProperties.sCaseStatus.toLowerCase()))
    }
    if(filterProperties.sCaseNumber != ""){
      pdp = pdp.filter(item => item.caseNumber.toLowerCase().includes(filterProperties.sCaseNumber.toLowerCase()))
    }
    if(filterProperties.sDataFrom != "" || filterProperties.sDataUntil != ""){
      if(filterProperties.sDataFrom != "" && filterProperties.sDataUntil != ""){
        const tempDateFrom = new Date(filterProperties.sDataFrom)
        const tempDateUntil = new Date(filterProperties.sDataUntil)
        for(let i = 0; i < pdp.length; i++){
          const tempDate = new Date(pdp[i].dateFrom)
          if(tempDate.getTime() >= tempDateFrom.getTime() && tempDate.getTime() <= tempDateUntil.getTime()){
            tempArray.push(pdp[i])
          }
        }
      }
      else if(filterProperties.sDataFrom != "" && filterProperties.sDataUntil == ""){
        const tempDateFrom = new Date(filterProperties.sDataFrom)
        for(let i = 0; i < pdp.length; i++){
          const tempDate = new Date(pdp[i].dateFrom)
          if(tempDate.getTime() >= tempDateFrom.getTime()){
            tempArray.push(pdp[i])
          }
        }
      }
      else if(filterProperties.sDataFrom == "" && filterProperties.sDataUntil != ""){
        const tempDateUntil = new Date(filterProperties.sDataUntil)
        for(let i = 0; i < pdp.length; i++){
          const tempDate = new Date(pdp[i].dateFrom)
          if(tempDate.getTime() <= tempDateUntil.getTime()){
            tempArray.push(pdp[i])
          }
        }
      }
      pdp = tempArray
      tempArray = []
    }

    if(filterProperties.sShareOfStateOwnershipMin != 0 || filterProperties.sShareOfStateOwnershipMax != 0){
      const smin = filterProperties.sShareOfStateOwnershipMin
      const smax = filterProperties.sShareOfStateOwnershipMax
      if(filterProperties.sShareOfStateOwnershipMin != NaN && filterProperties.sShareOfStateOwnershipMax != NaN){
        for(let i = 0; i < pdp.length; i++){
          const percent = pdp[i].shareOfStateOwnership
          if(smin <= percent && percent <= smax){
            tempArray.push(pdp[i])
          }
        }
      }
      if(filterProperties.sShareOfStateOwnershipMin == NaN && filterProperties.sShareOfStateOwnershipMax != NaN){
        for(let i = 0; i < pdp.length; i++){
          const percent = pdp[i].shareOfStateOwnership
          if(percent <= smax){
            tempArray.push(pdp[i])
          }
        }
      }
      if(filterProperties.sShareOfStateOwnershipMin != NaN && filterProperties.sShareOfStateOwnershipMax == NaN){
        for(let i = 0; i < pdp.length; i++){
          const percent = pdp[i].shareOfStateOwnership
          if(smin <= percent){
            tempArray.push(pdp[i])
          }
        }
      }
      pdp = tempArray
      tempArray = [] 
    }

    if(filterProperties.sProcedure.length != 0){
      for(let i = 0; i < filterProperties.sProcedure.length; i++){
        const proc = filterProperties.sProcedure[i]
        for(let j = 0; j < pdp.length; j++){
          const origProc = pdp[j].procedure
          if(origProc == proc){
            tempArray.push(pdp[j])
          }
        }
      }
      pdp = tempArray
      tempArray = []
    }

    if(filterProperties.sRegion.length != 0){
      for(let i = 0; i < filterProperties.sRegion.length; i++){
        const regi = filterProperties.sRegion[i]
        for(let j = 0; j < pdp.length; j++){
          const origRegi = pdp[j].region
          if(origRegi == regi){
            tempArray.push(pdp[j])
          }
        }
      }
      pdp = tempArray
      tempArray = []
    }

    if(filterProperties.sCategory.length != 0){
      for(let i = 0; i < filterProperties.sCategory.length; i++){
        const categ = filterProperties.sCategory[i]
        for(let j = 0; j < pdp.length; j++){
          const origcateg = pdp[j].category
          if(origcateg == categ){
            tempArray.push(pdp[j])
          }
        }
      }
      pdp = tempArray
      tempArray = []
    }

    if(filterProperties.sApplicantType.length != 0){
      for(let i = 0; i < filterProperties.sApplicantType.length; i++){
        const appType = filterProperties.sApplicantType[i]
        for(let j = 0; j < pdp.length; j++){
          const origAppType = pdp[j].applicantType
          if(origAppType == appType){
            tempArray.push(pdp[j])
          }
        }
      }
      pdp = tempArray
      tempArray = []
    }

    if(filterProperties.sortBy != ""){
      if(filterProperties.sortBy == "date"){
        tempArray = [...pdp].sort((item1, item2)=> (new Date(item1.dateFrom)).getTime() - (new Date(item2.dateFrom)).getTime())
      }
      else if(filterProperties.sortBy == "name"){
        tempArray = [...pdp].sort((item1, item2)=> item1.nameDebtor.localeCompare(item2.nameDebtor))
      }
      else if(filterProperties.sortBy == "procedure"){
        tempArray = [...pdp].sort((item1, item2)=> item1.procedure.localeCompare(item2.procedure))
      }
      else if(filterProperties.sortBy == "region"){
        tempArray = [...pdp].sort((item1, item2)=> item1.region.localeCompare(item2.region))
      }
      else if(filterProperties.sortBy == "manager"){
        tempArray = [...pdp].sort((item1, item2)=> item1.manager.localeCompare(item2.manager))
      }
      else if(filterProperties.sortBy == "percent"){
        tempArray = [...pdp].sort((item1, item2)=> item1.shareOfStateOwnership - item2.shareOfStateOwnership)
      }
      pdp = tempArray
      tempArray = []
    }
    
    setDebtorsWithFilter(pdp)
    setCountPage(getCountPage(limit))
    for (let i = (page - 1) * limit; i < limit * page; i++) {
      console.log("a")
      if(debtorsWithFilter.length == 0 || i == debtorsWithFilter.length){
        break;
      }
      else{
      if (i == debtorsWithFilter[debtorsWithFilter.length - 1].id+1) {
        break;
      }
      else {
        pagedeb.push(debtorsWithFilter[i])
      }
    }
  }
    setPageDebtors(pagedeb)
    // setPageDebtors(debtorsWithFilter)
    
    
  }, [filterProperties, upd, page, sor])

  useEffect(()=>{},[pageDebtors])

  


  function closeFilter() {
    setVisible("hidden")
    setPositionMain("relative")
    setPositionFilter("fixed")
    setFilterProperties((oldObj) => ({
      ...oldObj,
      ...upd,
    }))
    setCountPage(getCountPage(limit))
  }

  const nameValue = (e) => {
    const value = e.target.value
    setSerchNameDebtor(value)
    const updateFilter = {
      ...filterProperties,
      sNameDebtor: value,
    }
    setFilterProperties(updateFilter)
  }
  const managerValue = (e) => {
    const value = e.target.value
    setSerchNameManager(value)
    const updateFilter = {
      ...filterProperties,
      sManager: value,
    }
    setFilterProperties(updateFilter)
  }

  const updateFilter = (update) =>{
    setFilterProperties((oldObj) => ({
      ...oldObj,
      ...update,
    }))
    setUpd(update)
    
  }

  useEffect(()=>{
    setFilterProperties({...filterProperties, sPage:page})
  },[page])

  const updatePage = (pag) =>{
    setFilterProperties({...filterProperties, sPage:pag})
    setPage(pag)
  }

  return (
    <div className="App">
      <FilterWindow filter={updateFilter} position={positionFilter} close={closeFilter} height={heig} visible={visible} />
      <div className='main-container' style={{ position: positionMain }}>
        <div className='filter-main-container'>
          <img className='buttonFilter' onClick={openFilter} src={filtImg} />
          <div className='filter-childeren-conteiner'>
            <InputComp value={serchNameDebtor} onChange={nameValue} className='NameDebtors' placeholder='Наименование должника...' />
            <InputComp value={serchNameManager} onChange={managerValue} className='NameManager' placeholder='Управляющий...' />
          </div>
        </div>
        <div className='tableDol' style={{ overflowX: "auto" }}>
          <TableDebtors sort={Sorted} debtors={pageDebtors} />
        </div>
        <Page countPage={countPage} pageNow={page} page={updatePage}/>
      </div>
    </div>
  );
}

export default App;

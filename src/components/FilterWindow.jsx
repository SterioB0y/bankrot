import React, { useState } from 'react';
import "../styles/MainStyle.css";
import InputComp from './UI/Input/InputComp';
import closeImg from '../util/images.png'
import ParagraphComp from './UI/Paragraph/ParagraphComp';
import DropDownList from './UI/Selecter/DropDownList';
import Characteristics from './UI/ModalWindow/Characteristics';

const FilterWindow = ({visible, height, close, position, filter}) => {
    const [opClProcedure, setOpClProcedure] = useState("hidden")
    const [opClRegion, setOpClRegion] = useState("hidden")
    const [opClCategory, setOpClCategory] = useState("hidden")
    const [opClType, setOpClType] = useState("hidden")

    const [procedures, setProcedures] = useState(["Защитный период","Санация", "Ликвидационное производство", "Конкурсное производство"])
    const [regions, setRegions] = useState(["Минск", "Минская обл.", "Брестская обл.", "Витебская обл.", "Гомельская обл.", "Гродненская обл.", "Могилевская обл."])
    const [categorys, setCategorys] = useState(["Юридическое лицо", "Унитарное предприятие", "Полное товорищество", "Открытое акционерное общество", "Закрытое акционерное общество", "Общество с ограниченное ответсвенностью", "Фонд", "Учреждение", "Ассоциация", "Союз", "Индивидуальный предприниматель"])
    const [types, setTypes] = useState(["Налогавый орган", "Банк", "Должник"])

    const [dateFrom, setDateFrom] = useState("")
    const [dateUntil, setDateUntil] = useState("")
    const [procedure, setProcedure] = useState([])
    const [UPN, setUPN] = useState("");
    const [region, setRegion] = useState([])
    const [caseStatus, setCaseStatus] = useState("")
    const [category, setCategory] = useState([])
    const [appliacantType, setApplicantType] = useState([])
    const [caseNumber, setCaseNumber] = useState("")
    const [shareOfStateOwnershipMin, setShareOfStateOwnershipMin] = useState("")
    const [shareOfStateOwnershipMax,setShareOfStateOwnershipMax] = useState("")

    const [activeButton, setActiveButton] = useState(false)
    const [unactiveButton, setUnactiveButton] = useState(false)

    const [filterProperties, setFilterProperties] = useState({
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
        sPage: 1,
      })

    function updateFilter(){
        const update = {
            ...filterProperties,
            sDataFrom: dateFrom, //do
            sDataUntil: dateUntil,//do
            sProcedure: procedure,
            sUPN: UPN, //do
            sRegion: region,
            sCaseStatus: caseStatus,
            sCategory: category,
            sApplicantType: appliacantType,
            sCaseNumber: caseNumber,
            sShareOfStateOwnershipMin: shareOfStateOwnershipMin == "" ? 0 : parseInt(shareOfStateOwnershipMin, 10),
            sShareOfStateOwnershipMax: shareOfStateOwnershipMax == "" ? 0 : parseInt(shareOfStateOwnershipMax,10),
            sPage: 1
        }
        filter(update)
        setFilterProperties(update)
        close()
        setOpClCategory("hidden")
        setOpClProcedure("hidden")
        setOpClRegion("hidden")
        setOpClType("hidden")
    }

    function activOrUnactive(typeButton){
        const active = document.getElementById("activ")
        const unactive = document.getElementById("unactiv")
        if(typeButton == "activ"){
            if(activeButton == false && unactiveButton == false){
                active.className = "inp__current"
                setActiveButton(true)
                setCaseStatus("Активное")
            }
            else if(activeButton == false && unactiveButton == true){
                active.className = "inp__current"
                unactive.className = "inp"
                setActiveButton(true)
                setUnactiveButton(false)
                setCaseStatus("Активное")
            }
            else{
                active.className = "inp"
                setActiveButton(false)
                setUnactiveButton(false)
                setCaseStatus("")
            }
        }
        else{
            if(activeButton == false && unactiveButton == false){
                unactive.className = "inp__current"
                setUnactiveButton(true)
                setCaseStatus("Закрытое")
            }
            else if(activeButton == true && unactiveButton == false){
                unactive.className = "inp__current"
                active.className = "inp"
                setUnactiveButton(true)
                setActiveButton(false)
                setCaseStatus("Закрытое")
            }
            else{
                unactive.className = "inp"
                setUnactiveButton(false)
                setActiveButton(false)
                setCaseStatus("")
            }
        }
    }
    const updateProcedure = (update) =>{
        setProcedure(update)
    }
    const updateRegion = (update) =>{
        setRegion(update)
    }
    const updateCategory = (update) =>{
        setCategory(update)
    }
    const updateType = (update) =>{
        setApplicantType(update)
    }
    //c чекбоксами сделать тоже самое как с фильтром и арр
    return (
        <div className="container-for-filter" style={{ visibility: visible, position:position }}>
            
            <div className='container-filter'>
                <div className='close-container' onClick={() => updateFilter()}>
                    <img src={closeImg} style={{ width: '30px', margin: "5px 5px 0px 0px" }} />
                </div>
                <div className='filter'>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Дата:</ParagraphComp>
                    </div>
                    <div style={{ justifyContent: "space-between" }} className='paragraph-container'>
                        <ParagraphComp className='paragraph'>от:</ParagraphComp>
                        <ParagraphComp className='paragraph' style={{ marginRight: "109px" }}>до:</ParagraphComp>
                    </div>
                    <div className='flex-container'>
                        <InputComp className='inp' type='date' value={dateFrom} onChange={e =>setDateFrom(e.target.value)}/> {/*дата от(тип дата)*/}
                        <InputComp className='inp' type='date' value={dateUntil} onChange={e =>setDateUntil(e.target.value)}/> {/*дата до(тип дата)*/}
                    </div>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Процедура:</ParagraphComp>
                    </div>
                    <DropDownList id={"procedure"} onClick={() => opClProcedure == "hidden" ? setOpClProcedure("visible") : setOpClProcedure("hidden")}>Процедура</DropDownList> {/*Процедура(тип выподающий список)*/}
                    <Characteristics array={updateProcedure} elements={procedures} classname={"procedure"} vison={opClProcedure}/>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>УПН:</ParagraphComp>
                    </div>
                    <InputComp className='inp' placeholder='УПН...' value={UPN} onChange={e =>setUPN(e.target.value)}/> {/*УПН(тип текстовое поле)*/}
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Регион:</ParagraphComp>
                    </div>
                    <DropDownList id={"region"} onClick={() => opClRegion == "hidden" ? setOpClRegion("visible") : setOpClRegion("hidden")}>Регион</DropDownList> {/*Регион(тип выподающий список)*/}
                    <Characteristics array={updateRegion} elements={regions} classname={"region"} vison={opClRegion}/>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Статус дела:</ParagraphComp>
                    </div>
                    <div className='flex-container' style={{ justifyContent: "space-around" }}>
                        <InputComp className='inp' id={"activ"} onClick={() => activOrUnactive("activ")} type='button' value='Активное' /> {/*Статус дела(Кнопки закрытое и активное)*/}
                        <InputComp className='inp' id={"unactiv"} onClick={() => activOrUnactive("unactiv")} type='button' value='Закрытое' /> {/*Статус дела(Кнопки закрытое и активное)*/}
                    </div>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Категории:</ParagraphComp>
                    </div>
                    <DropDownList id={"category"} onClick={() => opClCategory == "hidden" ? setOpClCategory("visible") : setOpClCategory("hidden")}>Категории</DropDownList> {/*Категории(тип выподающий список)*/}
                    <Characteristics array={updateCategory} elements={categorys} classname={"category"} vison={opClCategory}/>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Тип заявителя:</ParagraphComp>
                    </div>
                    <DropDownList id={"type"} onClick={() => opClType == "hidden" ? setOpClType("visible") : setOpClType("hidden")}>Тип заявителя</DropDownList> {/*Тип заявителя(тип выподающий список)*/}
                    <Characteristics array={updateType} elements={types} classname={"type"} vison={opClType}/>
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Номер дела:</ParagraphComp>
                    </div>
                    <InputComp className='inp' value={caseNumber} onChange={e => setCaseNumber(e.target.value)} placeholder='Номер дела...' /> {/*Номер дела(тип текстовое поле)*/}
                    <div className='paragraph-container'>
                        <ParagraphComp className='paragraph'>Доля государственной собственности:</ParagraphComp>
                    </div>
                    <div className='flex-container' style={{ marginLeft: "-20px" }}>
                        <InputComp value={shareOfStateOwnershipMin} onChange={e=>setShareOfStateOwnershipMin(e.target.value)} className='inp' placeholder='от...' /> {/*доля государственной собственности от, %(тип текстовое поле)*/}
                        <InputComp value={shareOfStateOwnershipMax} onChange={e=>setShareOfStateOwnershipMax(e.target.value)} className='inp' placeholder='до...' /> {/*доля государственной собственности до, %(тип текстовое поле)*/}
                    </div>
                </div>
            </div>
            <div className='black-area-for-close' onClick={() => updateFilter()} style={{height:height}}>

            </div>
        </div>
    );
    
}

export default FilterWindow;
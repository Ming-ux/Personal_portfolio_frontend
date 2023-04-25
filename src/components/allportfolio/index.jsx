import React, { useEffect,useRef,useState,useContext } from 'react'
import StaticSinglePort from './singlePort/index_static'
import AllSinglePortInfo from '../../portfolioInfo/all_info.json'
import {lanPass } from '../../App'


export default function AllPortfolio() {
    const programs = AllSinglePortInfo.projects
    const preLan = useContext(lanPass)
    const [selectedValues, setSelectedValues] = useState([]);//初始化需要筛选的作品类型，初始化为0，不筛选，全呈现
    const select1 = useRef()
    const select2 = useRef()
    const select3 = useRef()
    const select4 = useRef()
    const all = useRef()
    const label1 = useRef()
    const label2 = useRef()
    const label3 = useRef()
    const label4 = useRef()


    //作品类型筛选
    function isRender(program){
        let n = selectedValues.length
        let count = 0
        for(let i = 0;i<n;i++){
            if(program.type.indexOf(selectedValues[i]) !== -1){
                count ++
            }
        }
        return count === n
    }
    //筛选后确定需要渲染的renderprograms数组
    let renderprograms = programs.filter(isRender)

    //作品类型多选功能
    useEffect(() => {
        console.log(selectedValues); // 打印被选中的复选框的值
    }, [selectedValues]);

    //复选框修改作品类型筛选
    const handleCheckboxChange = (event) => {
        if(all.current.classList.value.indexOf("box__selelcted") !== -1){
            all.current.classList.remove("box__selelcted")
        }
        // console.log(all.current.classList.value)
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedValues((selectedValues) => [...selectedValues, value]);
        } else {
            setSelectedValues((selectedValues) =>
            selectedValues.filter((selectedValue) => selectedValue !== value)
            );
        }
    };

    function reset(e){
        let selectarr = [select1,select2,select3,select4]
        selectarr.forEach((item)=>{
            item.current.checked =false
        })
        setSelectedValues([])
        e.target.classList.toggle("box__selelcted")
        Array.from(document.getElementsByClassName("AllPortfolio__selectbox")).forEach((item)=>{
            if(item.classList.value.indexOf("box__selelcted") !== -1){
                item.classList.remove("box__selelcted")
            }

        })
        console.log(document.getElementsByClassName("AllPortfolio__selectbox") instanceof Object)
        
    }

    function selected(e){
        e.target.classList.toggle("box__selelcted")

    }
    

  return (
    <section className="portfolio section" id="portfolio">
    <div className="container grid">
    <h2 className="section__title">{preLan.allportfolio__title}</h2>
    <span className="section__subtitle">{preLan.allportfolio__subtitle}</span>
    <div className="AllPortfolio__select">
        <div ref={all} className="AllPortfolio__selectall" onClick={(e)=>reset(e)}>All</div>
        <div className="AllPortfolio__selectboxs" onChange={(e)=>handleCheckboxChange(e)} onClick={(e)=>selected(e)}>
            <label className="AllPortfolio__selectbox checkbox1"><input className="selectbox" ref={select1} type="checkbox" name="checkbox1" value="Frontend" />Frontend</label>
            <label className="AllPortfolio__selectbox checkbox2"><input className="selectbox" ref={select2} type="checkbox" name="checkbox2" value="UIUX" />UIUX</label>
            <label className="AllPortfolio__selectbox checkbox3"><input className="selectbox" ref={select3} type="checkbox" name="checkbox3" value="product"/>Product</label>
            <label className="AllPortfolio__selectbox checkbox4"><input className="selectbox" ref={select4} type="checkbox" name="checkbox4" value="Branding&Graphic"/>Branding&Graphic</label>
        </div>
    </div>
    <div className="allportfolio__container container">

        {
            renderprograms.map((program,index)=>{
                return(
                    
                    <StaticSinglePort program={program} key={index}/>
                    
                )
            })
        }
    </div>
        

    </div>
    </section>  






    

    
  )
}

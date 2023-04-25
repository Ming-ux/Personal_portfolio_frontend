import React from 'react'
import Info from '../../../portfolioInfo/info.json'
import { BrowserRouter,Routes,Route,NavLink,Outlet } from 'react-router-dom';

export default function SinglePort(props) {
    const {program} = props
    //选中高度增加\
    function show(e){
        e.target.classList.add('over')
    }
    function hidden(e){
        e.target.classList.remove('over')
    }

    //阻止冒泡
    function stopshow(e){
        e.stopPropagation()
    }
    function stophidden(e){
        e.stopPropagation()
    }

  return (

    <article className="singleport__content" onMouseOver={(e)=>show(e)} onMouseLeave={(e)=>hidden(e)}>
        <NavLink to={`/detailportfolio/${Number(program.num)}`}>
        <div  onMouseOver={(e)=>stopshow(e)} onMouseLeave={(e)=>stophidden(e)}>
        <header id="singleport__header" className="singleport__header">
            <div>
                <h1 className="singleport__num">{program.num}</h1>
                <div>
                    {
                        program.isTeam? 
                        <span className="singleport__tag team">团队</span>
                        :
                        <span className="singleport__tag individual">个人</span>
                    }
                                        {
                        program.isIntern? 
                        <span className="singleport__tag intern">实习项目</span>
                        :
                        <span className="singleport__tag notintern">课余项目</span>
                    }

                    {
                        program.type.map((tag,index)=>{
                            return(
                                <span key={index} className="singleport__tag">{tag}</span>
                            )
                        })
                    }
                    
                </div>
            </div>

        </header>
        <section>
            <img className="singleport__img" src={program.bigImage} ></img>
        </section>
        <section className="singleport__section">
            <div className="gap">
                <h2 className="singleport__title1 ">{program.bigTitle1}</h2>
                <h2 className="singleport__title2">{program.bigTitle2}</h2>
            </div>
            <div className="show_hidden">
                <p className="singleport__desc gap"> {program.simpleTitle}</p>
                <p className="singleport__time gap">{program.createdTime}</p>
            </div>
        </section>
    </div>
    </NavLink>

</article>

  )
}

import React,{useContext,useState} from 'react'
import {lanPass } from '../../../App'

export default function Skill() {
  const preLan = useContext(lanPass)


    //阻止content内容冒泡事件
    function stopBubble(e){
        e.stopPropagation()
    }

                
  //修改扩展的版块
  const content = document.getElementsByClassName('skills__content')
  function contentOpen(e){
    let index = Number(e.target.classList[1][9])
    if(index !== NaN){
        if(content[index].classList.value.indexOf('skills__open') !== -1){//点击的本身是open
            content[index].classList.remove('skills__open')//去掉open
            content[index].classList.add('skills__close')//增加close
            content[(index+4)%3].classList.remove('skills__close')//循环的下一位去掉close
            content[(index+4)%3].classList.add('skills__open')//循环的下一位增加open
        }else{//点击的本身是close，先找出open的内容
            for(let i = 0;i<3;i++){
                if(content[i].classList.value.indexOf('skills__open') !== -1){
                    content[i].classList.remove('skills__open')//去掉open
                    content[i].classList.add('skills__close')//增加close
                }
            }
            content[index].classList.remove('skills__close')//去掉close
            content[index].classList.add('skills__open')//增加open
        }
    }
  }
  

  return (
    <section className="skills section" id="skills">
        <div className ="container grid">
            <h2 className="section__title" i18n="skills__title">{preLan.skills__title}</h2>
            <span className="section__subtitle" i18n="skills__subtitle">
                {preLan.skills__subtitle}
            </span>
                <div className="skills__container container " onClick={(e)=>{contentOpen(e)}}>
                    {/* 前端技能 */}
                    <div className="skills__content content__0 skills__close ">
                        <div  onClick={(e)=>stopBubble(e)}>
                            <div className="skills__header">
                                <div className="skills__headertext">
                                    <h1 className="skills__title">
                                        {preLan.skills__title1}
                                    </h1>
                                    <span className="skills__subtitle">
                                        {preLan.skills__years1}
                                    </span>
                                </div>
                                <div>
                                    <svg t="1681651181201" className="skills__openicon icon__open" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" width="14" height="14"><path d="M326.9 67l446.6 447.7-446.6 447.5-76.2-76.3 370.5-371.2-370.5-371.4L326.9 67z m0 0" 
                                        fill="#606060" p-id="2659"></path>
                                    </svg>
                                </div>

                            </div>

                            <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">HTML</h3>
                                <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__html"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__css"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__js"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">React</h3>
                                <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__React"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* 后端技能 */}
                    <div className="skills__content content__1 skills__close ">
                        <div onClick={(e)=>stopBubble(e)}>
                            <div className="skills__header">
                                <div div className="skills__headertext">
                                    <h1 className="skills__title" i18n="skills__title2">
                                    {preLan.skills__title2}
                                    </h1>
                                    <span className="skills__subtitle" i18n="skills__years2">
                                    {preLan.skills__years2}
                                    </span>
                                </div>

                                <div>
                                    <svg t="1681651181201" className="skills__openicon icon__open" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" width="14" height="14"><path d="M326.9 67l446.6 447.7-446.6 447.5-76.2-76.3 370.5-371.2-370.5-371.4L326.9 67z m0 0" 
                                        fill="#606060" p-id="2659"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">Node-Express</h3>
                                <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__node"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                        {/* 设计技能 */}
                    <div className="skills__content content__2 skills__open ">
                        <div onClick={(e)=>stopBubble(e)}>
                            <div className="skills__header">
                                <div div className="skills__headertext">
                                    <h1 className="skills__title" i18n="skills__title2">
                                    {preLan.skills__title3}
                                    </h1>
                                    <span className="skills__subtitle" i18n="skills__years2">
                                    {preLan.skills__years3}
                                    </span>
                                    
                                </div>

                                <div>
                                    <svg t="1681651181201" className="skills__openicon icon__open" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" width="14" height="14"><path d="M326.9 67l446.6 447.7-446.6 447.5-76.2-76.3 370.5-371.2-370.5-371.4L326.9 67z m0 0" 
                                        fill="#606060" p-id="2659"></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">Sketch,Ps,Ai</h3>
                                <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__Sketch"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">Ae,Pr</h3>
                                <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__Ae"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                <h3 className="skills__name">Blender</h3>
                                <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                <div className="skills__percentage skills__Blender"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    </section>

  )
}

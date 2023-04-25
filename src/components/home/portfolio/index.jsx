import React,{useContext} from 'react'
import SinglePort from '../../allportfolio/singlePort'
import Info from '../../../portfolioInfo/info.json'
import {lanPass } from '../../../App'

export default function Porfolio() {
    let programs = Info.projects
    const preLan = useContext(lanPass)
  return (
    <section className="portfolio section" id="portfolio">
        <div className="container grid">
            <h2 className="section__title" >{preLan.portfolio__title}</h2>
            <span className="section__subtitle">{preLan.portfolio__subtitle}</span>

            <div className="portfolio__container container">
                {
                    programs.map((program,index)=>{
                        return (

                            
                                <SinglePort program={program} key={index}/>
                            
                                

                    )})
                }
            </div>
                

        </div>
    </section>
  )
}

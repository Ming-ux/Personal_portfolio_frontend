import React,{useContext} from 'react'
import {lanPass } from '../../../App'

export default function Qualification() {
  const preLan = useContext(lanPass)
  return (
    <section className="qualification section" id="qualification">
      <div className="container grid">
        <h2 className="section__title">
        {preLan.qualification__title}
        </h2>
        <span className="section__subtitle">
        {preLan.qualification__subtitle}
        </span>
    
        <div className="qualification__container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <span>{preLan.education}</span>
            </div>
            <div className="qualification__button button--flex">
              <span>{preLan.work}</span>
            </div>
          </div>
          <div className="qualification__sections">
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                  {preLan.qualification1__school}
                  </h3>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__college}
                  </span>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__major}
                  </span>
                  <div className="qualification__calendar">
                    2021 - 2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    {preLan.qualification1__compony}
                  </h3>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__department}
                  </span>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__job}
                  </span>
                  
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021.07-2021.09
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    {preLan.qualification1__school2}
                  </h3>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__college2}
                  </span>
                  <span className="qualification__subtitle">
                    {preLan.qualification1__major2}
                  </span>
                  <div className="qualification__calendar">
                    2017.09 - 2021.07
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

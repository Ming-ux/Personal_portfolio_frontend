import React,{useContext} from 'react'
import { lanPass } from '../../../App'

export default function Footer(){
  const preLan = useContext(lanPass)
  return (
    <footer className="footer section" id="contact">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <div >
              <h1 className="footer__title">{preLan.contact__title}</h1>
            </div>
            <div className="footer__empty"></div>

            <div className="footer__links">
              <span>{preLan.Wechat__name}{preLan.Wechat}</span>
            </div>
            <div className="footer__links">
                <span>{preLan.Email__name}{preLan.Email}</span>
            </div>
          </div>
          <p className="footer__copy">&#169; Ming.Copy from 
            <a
              className="footer__copy"
              href="https://www.youtube.com/c/Bedimcode"
              target="_blank">
              Bedimcode
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}

import React,{useState,useContext, createContext} from 'react'
import './css/style.css';
import 'animate.css';//动效
import Header from './components/header';
import Home from './components/home';
import AllPortfolio from './components/allportfolio'
import DetailPortfolio from './components/detailportfolio'
import cn from './language/cn.json'
import en from './language/en.json'

//路由
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';

export const lanThemePass = createContext(null)
export const lanNamePass = createContext(null)
export const lanPass = createContext(null)

function App() {
  const [preLan,setPreLan] = useState(cn)
  let languageName = preLan.language__theme
  function languageTheme(){ 
    setPreLan((preLan)=>{
      return preLan = preLan === cn? en:cn
    })

  


  }

  return (
    <div className="App">
      <lanThemePass.Provider value={languageTheme}>
        <lanNamePass.Provider value={languageName}>
          <lanPass.Provider value={preLan}>
            <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/allportfolio" element={<AllPortfolio/>}></Route>
                <Route path="/detailportfolio/:id" element={<DetailPortfolio/>}></Route>
                
              </Routes>
            </BrowserRouter>
          </lanPass.Provider>
        </lanNamePass.Provider>
      </lanThemePass.Provider>
      

    </div>
  );
}

export default App;

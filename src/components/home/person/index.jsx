import React,{useContext,useEffect,useState,useRef} from 'react'
import {lanPass } from '../../../App'
import axios from 'axios';
import { NavLink} from 'react-router-dom';

export default function Person() {
    const preLan = useContext(lanPass)
    const [weblike,setWeblike] = useState(0)
    const [webseen,setWebseen] = useState(0)
    const didMountRef = useRef(0)

    //自动加载点赞量和浏览记录
    useEffect(()=>{
        axios({
            method:"get",
            // url:`http://localhost:8000/`,//http://localhost:8000替换成远端服务器即可
            url:`http://54.151.228.224:8000/`,
        }).then(res=>{
            // console.log("请求成功1",res)
            setWeblike(res.data.webLikeNum)
            setWebseen(res.data.webSeenNum)
        })
        .catch(err=>{
            console.log('请求失败1',err)
        })
    },[])



    //点赞-------------
    function addLike(){
        setWeblike(weblike+1)//异步，不能马上取到值
    }


    useEffect(()=>{
        if(didMountRef.current === 2){//避免首次渲染时更新点赞数量
            axios({
                method:"post",
                // url:`http://localhost:8000/addHomeLike`,//http://localhost:8000替换成远端服务器即可
                url:`http://54.151.228.224:8000/addHomeLike`,
                data:{
                    weblike:weblike
                }
            }).then(res=>{
                // console.log("增加点赞成功2",res)
            })
            .catch(err=>{
                console.log('增加点赞失败2',err)
            })
        }else{
            didMountRef.current ++
        }
    },[weblike])

    
    



  return (
    <section className ="home section" id="AboutMe">
        <div className ="home__container container grid">
            <div className ="home__content grid">
            <div className ="home__social">
                    <div className="home__social-icon">
                        <svg t="1681621682870" className="theme__icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7668" width="200" height="200">
                            <path d="M511.978667 149.312c85.717333 0 164.202667 32.384 224.810666 86.058667l7.616 6.848c43.413333 39.552 111.936 110.229333 205.525334 212.053333a85.333333 85.333333 0 0 1 3.136 111.893333l-3.093334 3.562667-33.770666 36.586667c-82.133333 88.533333-142.229333 149.546667-180.352 183.061333-60.48 53.205333-138.581333 85.269333-223.872 85.269333-85.802667 0-164.352-32.448-224.981334-86.229333l-7.594666-6.826667c-43.370667-39.552-111.808-110.165333-205.333334-211.84a85.333333 85.333333 0 0 1-3.093333-111.978666l3.114667-3.562667 41.706666-45.098667c77.610667-83.328 134.677333-141.162667 171.157334-173.546666C347.584 181.76 426.154667 149.312 512 149.312z m0 64c-67.712 0-131.712 25.024-182.549334 70.122667l-7.253333 6.528c-37.674667 34.389333-96.725333 94.933333-176.384 180.906666l-24.597333 26.666667a21.333333 21.333333 0 0 0 0 28.885333L153.6 561.493333c80.938667 87.168 139.818667 147.072 175.850667 179.029334 50.837333 45.077333 114.794667 70.101333 182.506666 70.101333 67.285333 0 130.901333-24.725333 181.610667-69.333333l7.296-6.506667c37.952-34.389333 97.28-95.146667 177.237333-181.546667l24.704-26.816a21.333333 21.333333 0 0 0 0-28.864l-40.234666-43.498666c-77.013333-82.730667-133.333333-139.882667-168.256-170.794667-50.816-45.013333-114.730667-69.973333-182.357334-69.973333zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 42.666667a85.333333 85.333333 0 1 1-85.226667 89.6L426.666667 512h64a21.333333 21.333333 0 0 0 21.184-18.837333L512 490.666667v-64z" 
                             p-id="7669"></path>
                        </svg>
                        <span className="home__social-icon-text">{webseen}</span>
                    </div>

                    <div className="home__social-icon" onClick={()=>addLike()}>
                        <svg t="1681632905890" className="theme__icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767" width="200" height="200"><path d="M707.11296 102.4l7.5776 0.1024c65.536 1.80224 130.56 27.0336 181.6576 75.69408l5.85728 5.71392 4.97664 5.14048c99.5328 105.5744 101.13024 270.62272 4.75136 378.10176l-4.8128 5.24288-4.9152 5.05856-306.5856 309.20704-3.80928 3.66592a117.78048 117.78048 0 0 1-159.6416 0l-3.7888-3.66592-306.5856-309.20704-4.34176-4.42368-4.85376-5.24288C15.70816 460.32896 17.1008 294.85056 116.79744 189.07136l4.99712-5.16096 5.09952-5.0176A274.2272 274.2272 0 0 1 480.4608 156.52864l5.5296 4.23936 2.9696 2.12992c15.09376 9.91232 34.59072 9.216 49.02912-2.12992a273.6128 273.6128 0 0 1 161.32096-58.24512l7.7824-0.12288zM450.1504 210.65728l-2.048-1.55648c-81.42848-63.85664-197.07904-59.74016-273.48992 9.29792l-4.62848 4.3008-4.56704 4.48512C85.6064 307.6096 81.34656 436.4288 153.6 521.40032l4.096 4.66944 3.584 3.93216 310.70208 313.40544c20.41856 20.60288 52.98176 22.13888 74.32192 5.14048l2.82624-2.43712 2.82624-2.70336 306.176-308.77696 4.28032-4.4032c77.4144-82.06336 78.86848-210.5344 4.85376-293.7856l-4.28032-4.66944-4.44416-4.608a212.0704 212.0704 0 0 0-137.74848-62.91456l-6.98368-0.3072-7.0656-0.12288-7.10656 0.14336a212.15232 212.15232 0 0 0-117.71904 40.59136l-6.02112 4.54656a103.17824 103.17824 0 0 1-116.5312 7.74144l-4.15744-2.60096-5.07904-3.584z" 
                             p-id="2768"></path>
                        </svg>
                        <span className="home__social-icon-text">{weblike}</span>
                    </div>

                    <a
                    href="https://github.com/Ming-ux"
                    target="_blank"
                    className ="home__social-icon"
                    >
                    <svg t="1681574563673" className="theme__icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6409" width="200" height="200"><path d="M850.346667 155.008a42.666667 42.666667 0 0 0-22.741334-23.509333c-8.704-3.754667-85.717333-33.322667-200.32 39.168H396.714667c-114.773333-72.618667-191.701333-42.922667-200.32-39.168a42.88 42.88 0 0 0-22.741334 23.466666c-26.197333 66.218667-18.048 136.448-7.850666 176.896C134.272 374.016 128 413.098667 128 469.333333c0 177.877333 127.104 227.882667 226.730667 246.272a189.568 189.568 0 0 0-13.013334 46.549334A44.373333 44.373333 0 0 0 341.333333 768v38.613333c-19.498667-4.138667-41.002667-11.946667-55.168-26.112C238.08 732.416 188.330667 682.666667 128 682.666667v85.333333c25.002667 0 65.365333 40.362667 97.834667 72.832 51.029333 51.029333 129.066667 55.253333 153.386666 55.253333 3.114667 0 5.376-0.085333 6.528-0.128A42.666667 42.666667 0 0 0 426.666667 853.333333v-82.090666c4.266667-24.746667 20.224-49.621333 27.946666-56.362667a42.666667 42.666667 0 0 0-23.125333-74.581333C293.333333 624.554667 213.333333 591.488 213.333333 469.333333c0-53.12 5.632-70.741333 31.573334-99.285333 11.008-12.117333 14.08-29.568 7.978666-44.8-4.821333-11.904-18.773333-65.450667-6.485333-117.546667 20.650667-1.578667 59.904 4.565333 113.706667 40.96C367.104 253.44 375.466667 256 384 256h256a42.666667 42.666667 0 0 0 23.936-7.338667c54.016-36.522667 92.970667-41.770667 113.664-41.130666 12.330667 52.224-1.578667 105.770667-6.4 117.674666a42.666667 42.666667 0 0 0 8.021333 44.928C805.077333 398.464 810.666667 416.085333 810.666667 469.333333c0 122.581333-79.957333 155.52-218.069334 170.922667a42.666667 42.666667 0 0 0-23.125333 74.709333c19.797333 17.066667 27.861333 32.469333 27.861333 53.034667v128h85.333334v-128c0-20.437333-3.925333-38.101333-9.770667-53.12C769.92 695.765333 896 643.712 896 469.333333c0-56.362667-6.272-95.530667-37.76-137.514666 10.197333-40.405333 18.261333-110.506667-7.893333-176.810667z" 
                         p-id="6410"></path>
                    </svg>
                    </a>

                    <a
                    href="https://ming-ux.github.io/my_book/#"
                    target="_blank"
                    className ="home__social-icon"
                    >
                    <svg t="1681574467056" className="theme__icon icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5452" width="200" height="200">
                        <path d="M512.219429 208.365714c-33.005714-41.142857-114.011429-77.586286-204.013715-77.586285-119.131429 0-215.131429 61.293714-238.701714 118.729142v598.710858c0 32.566857 21.430857 44.982857 44.562286 44.982857 18.870857 0 29.568-5.558857 41.142857-14.555429 24.429714-21.010286 73.728-49.298286 152.996571-49.298286 78.866286 0 134.144 27.428571 155.574857 46.72 11.154286 8.996571 24.868571 17.152 48.438858 17.152 23.131429 0 36.425143-8.996571 48-17.152 22.710857-17.993143 76.708571-46.701714 155.574857-46.701714 79.268571 0 128.987429 28.708571 152.996571 49.28 11.574857 8.996571 22.290286 14.573714 41.142857 14.573714 23.149714 0 44.562286-12.434286 44.562286-45.001142V249.508571c-23.570286-57.435429-119.570286-118.729143-238.701714-118.729142-90.002286 0-171.008 36.443429-203.574857 77.586285zM138.496 270.08c9.874286-26.587429 72.009143-74.587429 169.709714-74.587429 97.28 0 160.731429 48.438857 169.289143 74.587429v542.134857c-40.704-30.427429-102.857143-47.579429-169.289143-47.579428-66.852571 0-128.987429 17.152-169.691428 49.298285z m747.008 0v543.853714c-40.722286-32.146286-102.857143-49.298286-169.709714-49.298285-66.432 0-128.585143 17.152-169.289143 47.579428V270.08c8.557714-26.148571 71.990857-74.587429 169.289143-74.587429 97.700571 0 159.853714 48 169.691428 74.587429z" 
                         p-id="5453"></path>
                    </svg>
                    </a>
                </div>
                <div className ="home__img">
                        <img className ="home__img__content" src="/img/homeimg.png"></img>
                        <img className ="home__img__shadow" src="/img/homeimg2.png"></img>
                </div>

                <div className ="home__data">
                    <h1 className ="home__title">
                        {preLan.home__title}
                    </h1>
                    <h3 className ="home__subtitle">
                        {preLan.home__subtitle}
                    </h3>
                    <p className ="home__description">
                        {preLan.home__description}
                    </p>
                    <div className="home__detailbtn">
                        <NavLink to="/allportfolio" className="portfolio__a">
                            <div className="portfolio__detailtext">{preLan.allportfolio}</div>
                        </NavLink>
                    </div>
                </div>



            </div>
        </div>
    </section>
    
  )
}

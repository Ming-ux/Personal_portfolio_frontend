import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comment from './comment/comment';
import LongimgLoad from './longimgLoad'










export default function DetailPortfolio() {
    const params = useParams()//{id:"04"}
    const [programdata,setProgramdata] = useState(null)
    const [likenum,setLikenum] = useState()
    const [seennum,setSeennum] = useState()
    


    //向后端发送作品编号id，查询数据库中的符合id的项目信息
    useEffect(()=>{
        axios({
            method:"get",
            // url:`http://localhost:8000/detailportfolio/${params.id}`,//http://localhost:8000替换成远端服务器即可
            url:`http://54.151.228.224:8000/detailportfolio/${params.id}`
        }).then(res=>{
            console.log("请求成功",res)
            setProgramdata(res.data)//请求成功后设置programdata，引起组件渲染
            setLikenum(res.data.like)
            setSeennum(res.data.seen)
        })
        .catch(err=>{
            console.log('请求失败',err)
        })
    },[params.id])




    //增加喜爱
    function addLike(){
        let newlikenum = likenum+1
        setLikenum(newlikenum)
        
        
    }
    useEffect(()=>{
        axios({
            method:"post",
            // url:'http://localhost:8000/addlike',//http://localhost:8000替换成远端服务器即可
            url:'http://54.151.228.224:8000/addlike',
            data:{
                projectId:Number(params.id),
                likenum:likenum
            }
        }).then(res=>{
            console.log("detail点赞成功",res.data.like)
            
        }).catch(err=>{
            console.log('请求失败',err)
        })

    },[likenum])





    
  return (
    <>
    {
        programdata &&  
        <article className="Detail__Portfolio__content container section">
            <div>
                <h1 className="Detail__Portfolio__num">作品{programdata.num}:</h1>
                <h2 className="Detail__Portfolio__title">{programdata.bigTitle1}{programdata.bigTitle2}</h2>
                <div className="Detail__Portfolio__subtitle">{programdata.simpleTitle}</div>
                
                <header id="singleport__header" className="singleport__header">
                    <div>
                        <div>
                            {
                                programdata.isTeam? 
                                <span className="singleport__tag team">团队</span>
                                :
                                <span className="singleport__tag individual">个人</span>
                            }
                            {
                                programdata.isIntern? 
                                <span className="singleport__tag intern">实习项目</span>
                                :
                                <span className="singleport__tag notintern">课余项目</span>
                            }
                            
                            {
                                programdata.type.map((tag,index)=>{
                                    return(
                                        <span key={index} className="singleport__tag">{tag}</span>
                                    )
                                })
                            }
                            
                        </div>
                        
                    </div>

                </header>

                <section>
                    {
                        programdata.longImages.map((longImage,index)=>{
                            return (
                                <LongimgLoad key={index} longImage={longImage}/>
                            )

                        })
                    }
                    
                    <span className="singleport__time gap">{programdata.createdTime}</span>
                </section>
                <section className="Detail__Portfolio__comment" id="comments">
                    <Comment comments={programdata.comments} projectId={programdata.num}/>


                </section>
            </div>
            <div className="singleport__iconboxs commentbox">
                <a href="#comments" className="singleport__iconbox">
                    <svg t="1682254927791" className="singleport__icon " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2699">
                        <path d="M157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z m145.994667-70.773334a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z" 
                         p-id="2700">
                            
                        </path>
                    </svg>
                    <span className="singleport__iconnum">{programdata.comments.length}</span>
                </a>
                <div className="singleport__iconbox likebox" onClick={addLike}>
                    
                    <svg t="1681632905890" className="singleport__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2767"><path d="M707.11296 102.4l7.5776 0.1024c65.536 1.80224 130.56 27.0336 181.6576 75.69408l5.85728 5.71392 4.97664 5.14048c99.5328 105.5744 101.13024 270.62272 4.75136 378.10176l-4.8128 5.24288-4.9152 5.05856-306.5856 309.20704-3.80928 3.66592a117.78048 117.78048 0 0 1-159.6416 0l-3.7888-3.66592-306.5856-309.20704-4.34176-4.42368-4.85376-5.24288C15.70816 460.32896 17.1008 294.85056 116.79744 189.07136l4.99712-5.16096 5.09952-5.0176A274.2272 274.2272 0 0 1 480.4608 156.52864l5.5296 4.23936 2.9696 2.12992c15.09376 9.91232 34.59072 9.216 49.02912-2.12992a273.6128 273.6128 0 0 1 161.32096-58.24512l7.7824-0.12288zM450.1504 210.65728l-2.048-1.55648c-81.42848-63.85664-197.07904-59.74016-273.48992 9.29792l-4.62848 4.3008-4.56704 4.48512C85.6064 307.6096 81.34656 436.4288 153.6 521.40032l4.096 4.66944 3.584 3.93216 310.70208 313.40544c20.41856 20.60288 52.98176 22.13888 74.32192 5.14048l2.82624-2.43712 2.82624-2.70336 306.176-308.77696 4.28032-4.4032c77.4144-82.06336 78.86848-210.5344 4.85376-293.7856l-4.28032-4.66944-4.44416-4.608a212.0704 212.0704 0 0 0-137.74848-62.91456l-6.98368-0.3072-7.0656-0.12288-7.10656 0.14336a212.15232 212.15232 0 0 0-117.71904 40.59136l-6.02112 4.54656a103.17824 103.17824 0 0 1-116.5312 7.74144l-4.15744-2.60096-5.07904-3.584z" 
                         p-id="2768"></path>
                    </svg>
                    <span className="singleport__iconnum">{likenum}</span>
                    
                </div>
                <div className="singleport__iconbox seenbox">
                    <svg t="1681621682870" className="singleport__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7668" width="200" height="200">
                        <path d="M511.978667 149.312c85.717333 0 164.202667 32.384 224.810666 86.058667l7.616 6.848c43.413333 39.552 111.936 110.229333 205.525334 212.053333a85.333333 85.333333 0 0 1 3.136 111.893333l-3.093334 3.562667-33.770666 36.586667c-82.133333 88.533333-142.229333 149.546667-180.352 183.061333-60.48 53.205333-138.581333 85.269333-223.872 85.269333-85.802667 0-164.352-32.448-224.981334-86.229333l-7.594666-6.826667c-43.370667-39.552-111.808-110.165333-205.333334-211.84a85.333333 85.333333 0 0 1-3.093333-111.978666l3.114667-3.562667 41.706666-45.098667c77.610667-83.328 134.677333-141.162667 171.157334-173.546666C347.584 181.76 426.154667 149.312 512 149.312z m0 64c-67.712 0-131.712 25.024-182.549334 70.122667l-7.253333 6.528c-37.674667 34.389333-96.725333 94.933333-176.384 180.906666l-24.597333 26.666667a21.333333 21.333333 0 0 0 0 28.885333L153.6 561.493333c80.938667 87.168 139.818667 147.072 175.850667 179.029334 50.837333 45.077333 114.794667 70.101333 182.506666 70.101333 67.285333 0 130.901333-24.725333 181.610667-69.333333l7.296-6.506667c37.952-34.389333 97.28-95.146667 177.237333-181.546667l24.704-26.816a21.333333 21.333333 0 0 0 0-28.864l-40.234666-43.498666c-77.013333-82.730667-133.333333-139.882667-168.256-170.794667-50.816-45.013333-114.730667-69.973333-182.357334-69.973333zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 42.666667a85.333333 85.333333 0 1 1-85.226667 89.6L426.666667 512h64a21.333333 21.333333 0 0 0 21.184-18.837333L512 490.666667v-64z" 
                         p-id="7669"></path>
                    </svg>
                    <span className="singleport__iconnum seennum">{seennum}</span>
                </div>
            </div>
        </article>
    }
    </>
        
        

  )
}

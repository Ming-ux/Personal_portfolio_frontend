import React,{useState,useRef,useEffect} from 'react'
import Select, { components } from 'react-select';
import axios from 'axios';




export default function Comment(props) {
    const {comments,projectId} = props
    const [theComments,setTheComments] = useState(comments) 
    const [selectedOption, setSelectedOption] = useState(null);
    const formRef = useRef()
    const avatorIndexSelect = useRef()
    const commentValue = useRef()
    const avatorIndexSelect__warn = useRef()
    const commentValue__warn = useRef()
    const [warnState,setWarnState] = useState(false)

    //添加评论后，刷新发送网络请求获得最新的comments
    useEffect(()=>{
        axios({
            method:"get",
            // url:'http://localhost:8000/comments',//http://localhost:8000替换成远端服务器即可
            url:'http://54.151.228.224:8000/comments',
            params:{
                projectId:projectId
            }
        }).then(res=>{
            setTheComments(res.data)
            console.log("get请求评论成功",res)
        }).catch(err=>{
            console.log('get请求评论失败',err)
        })
    },[projectId])

    //添加评论前检验空值
    function checked(formNode){
        if(!formNode.avatorindex.value){
            alert("头像不可为空")
            formNode.avatorindex.focus()
            setWarnState(true)
            return false
        }else if(!formNode.commentcontent.value){
            alert("留言不可为空")
            formNode.commentcontent.focus()
            setWarnState(true)
            return false
        }else{
            return true
        }
    }
    //添加评论
    function addComment(e){
        e.preventDefault()
        if(!checked(e.target)){
            return
        }
        const theTime = new Date()
        const newComment = {
            avatorIndex: avatorIndexSelect.current.props.value.value,
            commentContent: commentValue.current.value,
            commentTime:theTime.toString(),
        }
        let newComments=[newComment,...theComments]
        setTheComments(newComments)
        commentValue.current.value=''

        // 将新的评论发送给后端
        
    }
    // 评论数量改变后发送网络请求更新comments
    useEffect(()=>{
        axios({
            method:"post",
            // url:'http://localhost:8000/addcomment',//http://localhost:8000替换成远端服务器即可
            url:'http://54.151.228.224:8000/addcomment',
            data:{
                num:projectId,
                comments:theComments
            }
        }).then(res=>{
            console.log("添加评论成功",res)
        }).catch(err=>{
            console.log('添加评论',err)
        })
    },[theComments])



    //头像选择
    const avatorsoptions = [
        {   
            value:0,
            img:"/img/avators/family.png",
            label:"家人er"
        },
        {
            value:1,
            img:"/img/avators/classmate.png",
            label:"同学er"
        },
        {
            value:2,
            img:"/img/avators/friend.png",
            label:"好友er"
        },
        {
            value:3,
            img:"/img/avators/passer.png",
            label:"路人甲er"
        },
        {
            value:4,
            img:"/img/avators/anything.png",
            label:"啥也不是er"
        }
    
    ]
    
    function Option ({ data, ...props }){
        return (
          <components.Option {...props}>
            <img src={data.img} alt={data.label} className="optionImg"/>
            <label className="optionLabel">{data.label}</label>
          </components.Option>
        );
    };

    //留言区填写
    function writeChange(){
        setWarnState(false)
    }


    


        
    
    
  return (
    <div  className='comment__area'>
        <article>
            <span className="comment__title">评论</span>
            <form  ref={formRef} action="" className='comment__send' method="post" onSubmit={(e)=>addComment(e)}>
                <Select ref={avatorIndexSelect} className='comment__avators__select' name="avatorindex"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={avatorsoptions}
                    components={{ Option }}
                />
                <textarea ref={commentValue} type="text" name="commentcontent" className="comment__write" placeholder='喜欢他的作品吗，留言夸夸Ta吧' onChange={writeChange}></textarea>
                <input type="submit" className="comment__submit" />
            </form>
            <div ref={commentValue__warn} className="warning__write" style={{opacity:warnState? "1":"0"}}>提示：请选择头像和填写留言。</div>

        </article>

        <article className='comment__list'></article>
        <ul>
            {
                theComments.map((comment,index)=>{
                    return (
                        <li key={index} className="comment__li">
                            <div className="comment__avator">
                                <img className="comment__avatorImg" src={avatorsoptions[comment.avatorIndex].img}></img><span>{avatorsoptions[comment.avatorIndex].label}:</span>
                            </div>
                            
                            <div className="comment__text">
                                <span className="comment__word">{comment.commentContent}</span>
                                <span className="comment__time">{new Date(comment.commentTime).toLocaleString()}</span>
                            </div>
                        </li>
                    )
                })
            }

            
        </ul>
    </div>

  )
}

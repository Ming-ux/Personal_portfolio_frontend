import React,{useState} from 'react'

export default function LongimgLoad(props) {
    const {longImage} = props
    const [imgUrl,setImgUrl] = useState(["/img/loading2.gif"])////长图加载先呈现默认图片，图片加载完后呈现目标图片
    
    //异步加载图片
    function AsyncImg(url) {
        return new Promise(function(resolve, reject) {
            const image = new Image();
            image.src = url;
            image.onload = function() {
                resolve(url);  // 也可返回 url 地址
            };
            image.onerror = function() {
                reject(new Error('Could not load image at ' + url));
            };
        });
    }
    
    AsyncImg(longImage).then(res => {
        setImgUrl(res)
    }).catch(err => {
        console.log("错误",err);
    })

  return (
    <img src={imgUrl}></img>
  )
}

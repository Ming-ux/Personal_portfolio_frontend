

//异步加载图片函数
export default function AsyncImg(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();
        image.src = url;
        image.onload = function() {
        //   resolve(image);  // 返回 img 对象
          resolve(url);  // 也可返回 url 地址
        };
        image.onerror = function() {
          reject(new Error('Could not load image at ' + url));
        };
    });
}



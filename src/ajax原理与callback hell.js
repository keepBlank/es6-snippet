// // 1. 创建XMLHttpRequest对象
// var xtmlhttp
// var url = 'http://jsonplaceholder.typicode.com/users'
// if(window.XMLHttpRequest) {
//     xmlhttp = new XMLHttpRequest()
// // 兼容早期浏览器
// } else {
//     xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
// }
// // 2. 发送请求
// xmlhttp.open('GET',url,true)
// xmlhttp.send()
// // 3. 接收服务端相应
// xmlhttp.onreadystatechange = function() {
//     if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
//         var obj = JSON.parse(xmlhttp.responseText)
//         console.log(obj);
//     }
// }

// function ajax(url,callback) {
//     // 1. 创建XMLHttpRequest对象
//     var xtmlhttp
//     if(window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest()
//     // 兼容早期浏览器
//     } else {
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // 2. 发送请求
//     xmlhttp.open('GET',url,true)
//     xmlhttp.send()
//     // 3. 接收服务端相应
//     xmlhttp.onreadystatechange = function() {
//         if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
//             var obj = JSON.parse(xmlhttp.responseText)
//             callback(obj);
//         }
//     }
    
// }

// var url = 'http://jsonplaceholder.typicode.com/users'
// ajax(url,res => console.log(res))

function ajax(url,callback) {
    // 1. 创建XMLHttpRequest对象
    var xmlhttp
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    // 兼容早期浏览器
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2. 发送请求
    xmlhttp.open('GET',url,true)
    xmlhttp.send()
    // 3. 接收服务端相应
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var obj = JSON.parse(xmlhttp.responseText)
            callback(obj);
        }
    }
    
}
// 1 -> 2 -> 3
ajax('static/a.json',res =>{
    console.log(res)           // {a: '我是A'}
    ajax('static/b.json',res => {
        console.log(res);     // {b: '我是B'}
        ajax('static/c.json',res => {
            console.log(res); // {c: '我是C'}
        })
    })
})
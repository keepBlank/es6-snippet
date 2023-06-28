// function foo() {
//     for(let i=0; i< 3; i++) {
//         console.log(i);                     // 0 1 2
//     }
// }
// foo()

// function* foo() {
//     for(let i = 0; i < 3; i++){
//         yield i
//     }
// }
// let f = foo()
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// function* foo(args) {
//     args.forEach(item => {
//         yield item + 1
//     })
// }

// function* gen(x) {
//     let y = 2 * (yield(x + 1))
//     let z = yield(y / 3)
//     return x + y + z
// }

// let g = gen(5)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function* gen(x) {
//     let y = 2 * (yield(x + 1))
//     let z = yield(y / 3)
//     return x + y + z
// }

// let g = gen(5)
// console.log(g.next())
// console.log(g.next(12))
// console.log(g.next(13))

// function* count(x = 1){
//     while (true) {
//         if(x % 7 === 0){
//             yield x
//         }
//         x++
//     }
// }

// let n = count()
// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);


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

function request(url) {
    ajax(url,(res) => {
        // 下面这句很难理解
        getData.next(res) // next参数代表上一次yield的返回值，这样就把请求的结果返回到了generator函数中yield的request的请求结果
    })
}

function* gen(){
    let res1 = yield request('static/a.json')
    console.log(res1);
    let res2 = yield request('static/b.json')
    console.log(res2);
    let res3 = yield request('static/c.json')
    console.log(res3);
}
let getData = gen()
getData.next()
// resolve 成功
// reject  失败
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('ES6之Promise');
//         // resolve()
//         // reject()
//         // if(){
//         //     resolve()
//         // } else {
//         //     reject()
//         // }
//         // resolve('成功的结果')
//         reject('失败的结果')
//     }, 1000);
// }).then(success => {
//     console.log(success);
// }, fail => {
//     console.log(fail);
// })

// let p = new Promise((resolve,reject) => {
//     console.log(1)
//     resolve()     // 如果想进入then，必须手动调用then/reject
// })
// console.log(2);
// p.then(res => {
//     console.log(3);
// })

// let p1 = new Promise((resolve,reject)=>{
//     resolve(1)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(2)  
//     }, 1000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject(3)  
//     }, 1000);
// })
// console.log(p1);                 // resolved
// console.log(p2);                 // pending
// console.log(p3);                 // pending
// setTimeout(() => {
//     console.log(p2);                 

// }, 2000);
// setTimeout(() => {
//     console.log(p3);                 

// }, 2000);
// p1.then(res => {
//     console.log(res);
// })
// p2.then(res => {
//     console.log(res);
// })
// p3.catch(err => {
//     console.log(err);
// })

// let p = new Promise((resolve, reject) => {
//     resolve(1)
//     reject(2)
// })

// p.then(success => {
//     console.log(success);
// },err => {
//     console.log(err);
// })

// p.then(success => {
//     console.log(success);
// }).catch(err => {
//     console.log(err);
// })

// function ajax(url, callback) {
//     // 1. 创建XMLHttpRequest对象
//     var xtmlhttp
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest()
//         // 兼容早期浏览器
//     } else {
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // 2. 发送请求
//     xmlhttp.open('GET', url, true)
//     xmlhttp.send()
//     // 3. 接收服务端相应
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//             var obj = JSON.parse(xmlhttp.responseText)
//             callback(obj);
//         }
//     }

// }

// new Promise((resolve,reject) => {
//     ajax('static/a.json',res => {
//         console.log(res);
//         resolve()
//     })
// }).then(res => {
//     console.log('a读取成功');
//     return new Promise((resolve,reject)=>{
//         ajax('static/b.json',res => {
//             console.log(res);
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('b读取成功');
//     return new Promise((resolve,reject)=>{
//         ajax('static/c.json',res => {
//             console.log(res);
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('c读取成功');
// })

// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => {
//             resolve(res)
//         })
//     })
// }
// getPromise('static/a.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('static/b.json')
//     }).then(res => {
//         console.log(res);
//         return getPromise('static/c.json')
//     }).then(res => {
//         console.log(res);
//     })

// function ajax(url, successCallback, failCallback) {
//     // 1. 创建XMLHttpRequest对象
//     var xtmlhttp
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest()
//         // 兼容早期浏览器
//     } else {
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // 2. 发送请求
//     xmlhttp.open('GET', url, true)
//     xmlhttp.send()
//     // 3. 接收服务端相应
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//             var obj = JSON.parse(xmlhttp.responseText)
//             successCallback && successCallback(obj);
//         } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
//             failCallback && failCallback(xmlhttp.statusText)
//         }
//     }

// }
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => {
//             resolve(res)
//         }, err => {
//             reject(err)
//         })
//     })
// }
// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('static/b.json')
//     }, err => {
//         console.log(err);
//         return getPromise('static/b.json')
//     }).then(res => {
//         console.log(res);
//         return getPromise('static/c.json')
//     }).then(res => {
//         console.log(res);
//     })

// function ajax(url, successCallback, failCallback) {
//     // 1. 创建XMLHttpRequest对象
//     var xtmlhttp
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest()
//         // 兼容早期浏览器
//     } else {
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     // 2. 发送请求
//     xmlhttp.open('GET', url, true)
//     xmlhttp.send()
//     // 3. 接收服务端相应
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//             var obj = JSON.parse(xmlhttp.responseText)
//             successCallback && successCallback(obj);
//         } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
//             failCallback && failCallback(xmlhttp.statusText)
//         }
//     }

// }
// function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         ajax(url, res => {
//             resolve(res)
//         }, err => {
//             reject(err)
//         })
//     })
// }
// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res);
//         return getPromise('static/b.json')
//     }).then(res => {
//         console.log(res);
//         return getPromise('static/c.json')
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     })

// let p1 = Promise.resolve('success')
// console.log(p1);
// p1.then(res => {
//     console.log(res);
// })

// let p2 = Promise.reject('fail')
// console.log(p2);
// p2.catch(err => {
//     console.log(err);
// })

// function foo(flag) {
//     if(flag) {
//         return new Promise(resolve => {
//             // 异步操作
//             resolve('success')
//         })
//     } else {
//         // return 'fail'   
//         return Promise.reject('fail')

//     }
// }

// foo(false).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);      // fail
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(1);
//         resolve('1成功')
//     }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(2);
//         reject('2失败')
//     }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(3);
//         resolve('3成功')
//     }, 3000);
// })
// Promise.all([p1,p2,p3]).then(res => {
//     console.log(res);
// },err => {
//     console.log(err);
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(1);
//         resolve('1成功')
//     }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(2);
//         reject('2失败')
//     }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(3);
//         resolve('3成功')
//     }, 3000);
// })
// Promise.race([p1,p2,p3]).then(res => {
//     console.log(res);
// },err => {
//     console.log(err);
// })

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(1);
//         reject('1失败')
//     }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(2);
//         resolve('2成功')
//     }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(3);
//         resolve('3成功')
//     }, 3000);
// })
// Promise.race([p1,p2,p3]).then(res => {
//     console.log(res);
// },err => {
//     console.log(err);
// })

// let imgArr = ['1.jpg','2.jpg','3.jpg']
// let promiseArr = []
// imgArr.forEach(item => {
//     promiseArr.push(new Promise((resolve,reject) => {
//         // 图片上传的异步操作
//         resolve()
//     }))
// })
// Promise.all(promiseArr).then(res => {
//     console.log('图片全部上传完成');
// })

// function getImge() {
//     return new Promise((resolve, reject) => {
//         let img = new Image()
//         img.src = 'https://www.imooc.com/static/img/index/logo2020.png'
//         img.onload = function () {
//             resolve(img.src)
//         }
//     })
// }
// function timeout() {
//     return new Promise((res, reject) => {
//         setTimeout(() => {
//             reject('图片加载超时')
//         }, 6000);
//     })
// }

// Promise.race([getImge(),timeout()]).then(res => {
//     console.log(res);
// },err => {
//     console.log(err);
// })
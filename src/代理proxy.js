// let obj = {}
// let newValue = ''
// // 参数1：拦截的对象；参数2:拦截的对象的属性,参数3：是个对象，配置拦截的方法
// Object.defineProperty(obj,'name',{
//     get(){
//         console.log('get')
//         return newValue
//     },
//     // 不能这样写，obj.name = 'ES6'时调用set，set的时候this.name = val，给name赋值的时候又会调用set，进入死循环
//     // set(val){
//     //     console.log('set');
//     //     this.name = val
//     // }
//     set(val){
//         console.log('set');
//         newValue = val
//     }
// })
// // 存 ==> 调用set方法
// obj.name = 'ES6'
// // 取 ==> 调用get方法
// console.log(obj.name);

// let obj = {}
// let  p = new Proxy(obj,{})
// p.name = "ES6"
// console.log(obj.name);                              // ES6
// for(let key in obj){
//     console.log(key);                              // name
// }

// let arr = [1,2,3,4]
// arr = new Proxy(arr,{
//     get(target,prop){
//         return prop in target ? target[prop] : '下标没有对应的值'
//     }
// })

// console.log(arr[1]);        

// let dict = {
//     'hello' : '你好',
//     'world' : '世界'
// }
// dict = new Proxy(dict,{
//     get(target,prop){
//         return prop in target ? target[prop] : '当前词典无此词汇'
//     }
// })

// console.log(dict['hello']);                    // 你好


// let arr = []
// arr = new Proxy(arr, {
//     set(target, prop, val) {
//         if (typeof val === 'number') {
//             target[prop] = val
//             return true
//         } else {
//             return false
//         }
//     }
// })

// arr.push(5)
// arr.push(6)
// console.log(arr[0]);                    // 5
// console.log(arr[1]);                    // 6

// let range = {
//     start: 1,
//     end: 5
// }
// range = new Proxy(range,{
//     has(target, prop) {
//        return  prop>=target.start && prop<=target.end
//     }
// })
// console.log(2 in range);                 // true
// console.log(9 in range);                 // false

// let obj = {
//     name: 'lee',
//     [Symbol('es')]: 'ES6'
// }
// // 用于遍历key不是synmol类型的key
// console.log(Object.getOwnPropertyNames(obj));       // ['name']
// // 只能遍历symbol类型的key
// console.log(Object.getOwnPropertySymbols(obj));    // [Symbol(es)]
// console.log(Object.keys(obj));                     // ['name']
// for(let key in obj){
//     console.log(key);                             // name
// }

// let userInfo = {
//     username: 'lee',
//     age: 32,
//     _password: '****'
// }

// userInfo = new Proxy(userInfo,{
//     ownKeys(target) {
//         return Object.keys(target).filter( key => !key.startsWith('_'))
//     }
// })

// for(let key in userInfo) {
//     console.log(key);                      //  username  age
// }
// console.log(Object.keys(userInfo));         // ['username', 'age']

// let user = {
//     name: 'lee',
//     age: 32,
//     _password: 'xxx'
// }
// user = new Proxy(user, {
//     get(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('私有属性不可访问')
//         } else {
//             return target[prop]
//         }
//     },
//     // 对于set一定要范围布尔类型的值
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('私有属性不可访问')
//         } else {
//             target[prop] = val
//             return true
//         }
//     },
//     deleteProperty(target,prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可删除')
//         } else {
//             delete target[prop]
//             return true
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(item => !item.startsWith('_'))
//     }
// })
// console.log(user._password);   // 私有属性不可访问
// console.log(user.name);        // lee
// user.age = 18
// console.log(user.age);           // 18
// try {
//     user._password = 8888 
// } catch (e) {
//     console.log(e.message);    // 私有属性不可访问
// }

// try {
//     delete user.age
// } catch (e) {
//     console.log(e.message);    
// }
// console.log(user.age);           // undefined    

// try {
//     delete user._password
// } catch (e) {
//     console.log(e.message);     // 不可删除
// }
// for(key in user) {
//     console.log(key);             // name age
// }

// let sum = (...args) => {
//     let num = 0
//     args.forEach( item =>{
//         num += item
//     })
//     return num
// }

// sum = new Proxy(sum,{
//     apply(target,ctx,args) {
//         return target(...args) * 2
//     }
// })

// console.log(sum(1,2));                             // 6
// console.log(sum.call(null,1,2,3));                 // 12
// console.log(sum.apply(null,[1,2,3]));              // 12
 
let User = class {
    constructor(name){
        this.name = name
    }
}
User = new Proxy(User,{
    construct(target,args,newTarget) {
        return new target(...args)
    }   
})

console.log(new User('lee'));    // {name: 'lee'}
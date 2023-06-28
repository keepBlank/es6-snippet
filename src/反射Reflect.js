// let obj = {}
// let newValue = ''
// Reflect.defineProperty(obj,'name',{
//     get(){
//         console.log('get')
//         return newValue
//     },
//     set(val){
//         console.log('set');
//         newValue = val
//     }
// })
// obj.name = 'ES6'
// console.log(obj.name);

// console.log('assign' in Object);                     // true
// console.log(Reflect.has(Object,'assign'));           // true


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
//             // return target[prop]
//             return Reflect.get(target, prop)
//         }
//     },
//     // 对于set一定要范围布尔类型的值
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('私有属性不可访问')
//         } else {
//             // target[prop] = val
//             Reflect.set(target,prop,val)
//             return true
//         }
//     },
//     deleteProperty(target,prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可删除')
//         } else {
//             // delete target[prop]
//             Reflect.deleteProperty(target,prop)
//             return true
//         }
//     },
//     ownKeys(target) {
//         // return Object.keys(target).filter(item => !item.startsWith('_'))
//         return Reflect.ownKeys(target).filter(item => !item.startsWith('_'))
//     }
// })
//console.log(user._password);   // 私有属性不可访问
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
// for(key in user) {
//     console.log(key);             // name age _password是被保护的属性
// }

let sum = (...args) => {
    let num = 0
    args.forEach( item =>{
        num += item
    })
    return num
}

sum = new Proxy(sum,{
    apply(target,ctx,args) {
        // return target(...args) * 2
        return Reflect.apply(target,target,[...args])*2
    }
})

console.log(sum(1,2));                             // 6
console.log(sum.call(null,1,2,3));                 // 12
console.log(sum.apply(null,[1,2,3]));              // 12
 
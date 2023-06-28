// let m = new Map()
// let obj = {
//     name: 'lee'
// }
// m.set(obj,'Ecma')
// console.log(m);

// let m = new Map()
// let obj = {
//     name: 'lee'
// }
// m.set(obj,'Ecma')
// console.log(m.get(obj));                  // Ecma


// let m = new Map()
// let obj = {
//     name: 'lee'
// }
// m.set(obj,'Ecma')
// // console.log(m.get(obj));                  
// m.delete(obj)
// console.log(m);                    //   {}

// let m = new Map()
// let obj = {
//     name: 'lee'
// }
// m.set(obj,'Ecma')
// console.log(m.has(obj));            // true

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])
// console.log(map);

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])
// console.log(map.size);                     // 2
// console.log(map.has('name'));              // true
// console.log(map.get('age'));               // 18
// console.log(map.set('name','zhangsan'));   // [{name:'zhangsan'},{age:18}]

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])
// //  注意参数value在前，key在后
// map.forEach((value,key) => {console.log(value,key);})   //  lee name  18 'age'

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])
// //  注意参数value在前，key在后
// for(let [key,value] of map){
//     console.log(key,value);                            // name lee age 18
// }

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])

// for(let key of map.keys()){
//     console.log(key);               // name age
// }

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])

// for(let value of map.values()){
//     console.log(value);               // lee 18
// }

// let map = new Map([
//     ['name','lee'],
//     ['age',18]
// ])

// for(let [key,value] of map.entries()){
//     console.log(key,value);               // lee 18
// }

// let map = new Map()
// map.set('school','Beida')
// console.log(map.has('school'));
// console.log(map.size);

// let wm = new WeakMap()
// wm.set('name','lee')          // Ivalid value used as weak map key

// let wm = new WeakMap()
// wm.set([1],2)  
// console.log(wm);   

// let wm = new WeakMap()
// wm.set([1],2)  
// wm.set({
//     name:'lee'
// },'ecma')
// console.log(wm);        
 

let wm = new WeakMap()
let ele = document.getElementsByTagName('h1')
wm.set(ele,'info')
console.log(wm.get(ele));            // info
 
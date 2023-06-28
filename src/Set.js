// let s = new Set()
// console.log(s);                         // []

// let s = new Set([1,2,3])
// console.log(s);

// let s = new Set([1,2,3,2])
// console.log(s);                      // [1,2,3]

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// console.log(s);                      //  [1, 2, 3, 'lee', 'ES6']

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// s.delete(2)
// console.log(s);                      //  [1, 3, 'lee', 'ES6']

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// s.delete(2)
// s.clear()
// console.log(s);                      //  []

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// s.delete(2)
// console.log(s.has('lee'));          //  true

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// s.delete(2)
// console.log(s.size);                //  4

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// s.forEach(item => console.log(item))       

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// for(let item of s) {
//     console.log(item);
// }   

// let s = new Set([1,2,3,2])
// s.add('lee').add('ES6')
// for(let item of s.keys()) {
//     console.log(item);
// }   
// for(let item of s.values()) {
//     console.log(item);
// }   
// for(let item of s.entries()) {
//     console.log(item);
// } 

// let arr = [1,2,3,4,2,3]
// let s = new Set(arr)
// console.log(s);            // [1,2,3,4]

// let arr1 = [1,2,3,4]
// let arr2 = [2,3,4,5,6]
// let s = new Set([...arr1,...arr2])
// console.log([...s]);                            // [1,2,3,4,5,6]
// console.log(Array.from(s));                     // [1,2,3,4,5,6]

// let arr1 = [1,2,3,4]
// let arr2 = [2,3,4,5,6]

// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let result = new Set(arr1.filter(item => s2.has(item)))
// console.log([...result]);                      // [2, 3, 4]

// let arr1 = [1,2,3,4]
// let arr2 = [2,3,4,5,6]

// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let r1 = new Set(arr1.filter(item => !s2.has(item)))
// let r2 = new Set(arr2.filter(item => !s1.has(item)))
// let r3 = [...r1,...r2]
// console.log(r3);                                 // [1,5,6]

// let ws = new WeakSet()
// console.log(ws.add(2));                             // Ivalid value used in weak set

// let ws = new WeakSet()

// ws.add({
//     name: 'lee'
// })
// ws.add({
//     age:5
// })
// ws.delete({
//     name: 'lee'
// })
// console.log(ws);

// let ws = new WeakSet()
// let obj1 = {
//     name: 'lee'
// }
// let obj2 = {
//     age:5
// }
// ws.add(obj1)
// ws.add(obj2)
// ws.delete(obj1 )
// console.log(ws.has(obj2));       // true

let ws = new WeakSet()
let obj1 = {
    name: 'lee'
}
let obj2 = {
    age:5
}
ws.add(obj1)
ws.add(obj2)
// ws.delete(obj1 )
// console.log(ws.has(obj2));       // true
ws.forEach( item => console.log(item))    // ws.forEach is not a function
 
 
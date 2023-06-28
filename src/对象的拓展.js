// let name = "lee"
// let age = 32
// let s = "school"
// let obj = {
//     name,
//     age,
//     s: 'BeiDa'
// }
// console.log(obj);


// let name = "lee"
// let age = 32
// let s = "school"
// let obj = {
//     name,
//     age,
//     [s]: 'BeiDa'
// }
// console.log(obj);

// console.log(Object.is(NaN,NaN));
// console.log(NaN === NaN);

// let x = {
//     a: 3,
//     b: 4
// }

// let y = {...x}
// console.log(y);

// let x = {
//     a: 3,
//     b: 4
// }

// let y = {}
// Object.assign(y,x)
// console.log(y);

// let x = {
//     a: 3,
//     b: 4
// }
// console.log('a' in x);

// let arr = [1,2,3]
// console.log(3 in arr);

// let obj = {
//     name: 'lee',
//     age: 18,
//     school: 'BeiDa'
// }

// for(let key in obj){
//     console.log(key,obj[key]);
// }

// let obj = {
//     name: 'lee',
//     age: 18,
//     school: 'BeiDa'
// }

// Object.keys(obj).forEach(key => {
//     console.log(key,obj[key]);
// })

// let obj = {
//     name: 'lee',
//     age: 18,
//     school: 'BeiDa'
// }

// Object.getOwnPropertyNames(obj).forEach(key=>{
//     console.log(key,obj[key]);
// })

let obj = {
    name: 'lee',
    age: 18,
    school: 'BeiDa'
}

Reflect.ownKeys(obj).forEach(key=>{
    console.log(key,obj[key]);
})
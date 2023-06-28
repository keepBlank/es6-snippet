// let [a,b,c] = [1,2,3]
// console.log(a,b,c);

// let [a,b,c] = [1,2,[3,4]]
// console.log(a,b,c);

// let [a,b,[c,d]] = [1,2,[3,4]]
// console.log(a,b,c,d);

// let [a,b,[c]] = [1,2,[3,4]]
// console.log(a,b,c);

// let [a,b,c] = [1,2,[3,4]]
// console.log(a,b,c);

// let [a,b,c,d] = [1,2,[3,4]]
// console.log(a,b,c,d);

// let user = {
//     名字: 'lee',
//     年龄:18,
//     名族: "汉"
// }

// let {名字,年龄} = user
// console.log(名字,年龄);

// let user = {
//     名字: 'lee',
//     年龄:18,
//     名族: "汉"
// }

// let {名字: 乳名,年龄:芳龄} = user
// console.log(乳名,芳龄);

// let str = "EcmaScropt"
// let [a,b,c,d,e,f,g] = str
// console.log(a,b,c,d,e,f,g);

// let [a,b,c = 8] = [1,2]
// console.log(a,b,c);

// let {name,age=18} = {name: 'lee'}
// console.log(name,age);

// function foo(){
//     console.log(123);
// }

// let [a = foo()] = [1]

// function foo(){
//     console.log(123);
// }

// let [a = foo()] = []

// function foo([a,b,c]){
//     console.log(a,b,c);
// }

// foo([1,2,3])

// function foo({name,age,school="BeiDa"}){
//     console.log(name,age,school);
// }

// foo({name:'lee',age:18})

// function foo({name,age,school="BeiDa"}){
//     console.log(name,age,school);
// }

// foo({name:'lee',age:18,school:"QingHua"})

// function foo(){
//     let obj = {
//         name:'lee',
//         age:18,
//         school:"QingHua"
//     }
//     return obj
// }
// let {name,age,school} = foo()
// console.log(name,age,school)

let json = '{"a": "Ecma","b":"Script"}'
let {a,b} = JSON.parse(json)
console.log(a,b)
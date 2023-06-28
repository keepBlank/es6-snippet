// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1);             // Symbol()  
// console.log(s2);             // Symbol()  
// console.log(s1 === s2);      // false

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1);               // Symbol(foo)
// console.log(s2);               // Symbol(bar)
// console.log(s1 === s2);        // false

// let obj = {
//     name: 'lee'
// }

// let s = Symbol(obj)
// console.log(s);        // Symbol([object Object])

// let obj = {
//     name: 'lee',
//     toString(){
//         return this.name
//     }
// }

// let s = Symbol(obj)
// console.log(s);                            // Symbol(lee)

// let s = Symbol()
// s.name = 'lee'
// console.log(s);                          // Symbol()

// let s = new Symbol()                    // Symbol is not a constructor

// let s1 = Symbol.for('foo')
// console.log(s1);                        // Symbol(foo)

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2);                // true          

// function foo() {
//     return Symbol.for('foo')
// }

// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y);                 // true

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1));      // undefined

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2));      // foo

// const grade = {
//     张三: {address:'xxx', tel: '183xxx'},
//     李四: {address:'yyy', tel: '151xxx'},
//     李四: {address:'zzz', tel: '135xxx'}
// }
// console.log(grade);                 // {张三: {address:'xxx', tel: '183xxx'},李四: {address:'zzz', tel: '135xxx'}}

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//     [stu1]: { address: 'yyy', tel: '151xxx' },
//     [stu2]: { address: 'zzz', tel: '135xxx' }
// }
// console.log(grade);   // { address: 'zzz', tel: '135xxx' }

// const stu1 = Symbol('李四') 
// const stu2 = Symbol('李四') 
// const grade = {
//     [stu1]: { address: 'yyy', tel: '151xxx' },
//     [stu2]: { address: 'zzz', tel: '135xxx' }
// }
// console.log(grade);   // { address: 'zzz', tel: '135xxx' }

// const sym = Symbol('symbol')
// class User {
//     constructor(name) {
//         this.name = name
//         this[sym] = 'symbol'
//     }
//     getName() {
//         return this.name + this[sym]
//     }
// }

// const user = new User('lee')
// console.log(user.getName());           // lee symbol

// for(let key in user){
//     console.log(key);                 // name
// }

// for(let key of Object.keys(user)){
//     console.log(key);                // name
// }

// for(let key of Object.getOwnPropertySymbols(user)){
//     console.log(key);                // Symbol(symbol)
// }

// for(let key of Reflect.ownKeys(user)){
//     console.log(key);                // name Symbol(symbol)
// }

// function getArea(){
//     let area = 0
//     switch(shape) {
//         case 'Triangle':
//             area = 1
//             break
//         case 'Circel':
//             area = 2
//             break
//     }
//     return area
// }

// console.log(getArea('Triangle')); 

// const shapeType = {
//     triangle: 'Triangle',
//     circle: 'Circle'
// }
// function getArea(shape){
//     let area = 0
//     switch(shape) {
//         case shapeType.triangle:
//             area = 1
//             break
//         case shapeType.circle:
//             area = 2
//             break
//     }
//     return area
// }

// console.log(getArea(shapeType.triangle)); 

const shapeType = {
    triangle: Symbol(),
    circle: Symbol()
}
function getArea(shape){
    let area = 0
    switch(shape) {
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}

console.log(getArea(shapeType.triangle)); 
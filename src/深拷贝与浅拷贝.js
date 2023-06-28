// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 4,
//         f: 5,
//         g: 6
//     }
// }

// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 2,
//         f: 3
//     }
// }

// console.log(Object.assign(target,source));

// let a = 5
// let b = a
// a = 6
// console.log(a,b);

// let obj1 = {
//     name: 'lee',
//     age: '32'
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1);
// console.log(obj2);

// let obj1 = {
//     name: 'lee',
//     age: '32'
// }

// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 18
// console.log(obj2);        

// let checkType = data =>{
//   return Object.prototype.toString.call(data).slice(8,-1); 
// }
// checkType([])

let checkType = data => {
    return Object.prototype.toString.call(data).slice(8, -1);
}

let deepClone = source => {
    let sourceType = checkType(source)
    let result
    if(sourceType === 'Object'){
        result = {}
    }else if(sourceType === 'Array'){
        result = []
    }else{
       return source
    }
    for(let i in source){
        let value = source[i]
        let valueType = checkType(value)
        if(valueType === 'Object' || valueType === 'Array'){
            // 递归
            result[i] = deepClone(value)
        }else{
            result[i] = value
        }
    }
    return result
}

let arr1 = [1,2,{age:18}]
let arr2 = deepClone(arr1)
arr1[2].age = '32'
console.log(arr1);                  // {name: 'lee', age: '32'}
console.log(arr2);                  // {name: 'lee', age: 18}

let obj1 = {
    name: 'lee',
    like:['读书','打游戏']
}
let obj2 = deepClone(obj1)
obj1.like[0] = '跑步'
console.log(obj1);              // {name:'lee',like:['跑步','打游戏']}
console.log(obj2);              // {name:'lee',like:['读书','打游戏']}
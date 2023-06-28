let arr = [1,2,3]
let arr2 = [1,2,2,3,4]
// for
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])                             
// }

//forEach
// arr.forEach(function(ele,index,array){
//     console.log(ele,index,array);
// })

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 2){
//         break
//     }
//     console.log(arr[i])                             
// }

// arr.forEach(function(ele,index,array){
//     if(arr[i] === 2){
//         break
//     }
//     console.log(ele,index,array);
// })

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 2){
//         continue
//     }
//     console.log(arr[i])                             
// }

// arr.forEach(function(ele,index,array){
//     if(arr[i] === 2){
//         continue
//     }
//     console.log(ele,index,array);
// })

// arr.map(function(value){
//     console.log(value);
// })

// let result = arr.map(function(value){
//         value +=1
//         return value;
//     })
// console.log(arr,result);

// let result = arr.filter(function(value){
//     return value === 2
// })
// console.log(arr,result)

// arr.some(function(value){
//     console.log(value);
// })

// let result = arr.some(function(value){
//     return value === 2
// })
// console.log(arr,result);

// let result = arr.every(function(value){
//     return value === 2
// })
// console.log(arr,result);

// let sum = arr.reduce(function(pre,cur,index,array){
//     return pre + cur
// })
// console.log(sum,arr);

// let result = arr.reduce(function(pre,cur){
//         return Math.max(pre,cur)
// })
// console.log(result);

// let arr2 = [1,2,2,3,4]

// let res = arr2.reduce(function(prev,cur){
//     prev.indexOf(cur) === -1 && prev.push(cur)
//     return prev
// },[])
// console.log(res);

// Array.prototype.foo = function(){
//     console.log('foo')
// }
// for(let index in arr){
//     console.log(arr[index])
// }

// let result = arr2.find(function(value){
//     return value === 2
// })
// console.log(arr2,result);

// let result = arr2.findIndex(function(value){
//     return value === 2
// })
// console.log(arr2,result);

// for(let item of arr2){
//     console.log(item)
// }

// for(let item of arr2.values()){
//     console.log(item)
// }

// for(let item of arr2.keys()){
//     console.log(item)
// }

// for(let [index,item] of arr2.entries()){
//     console.log(index +'==>' + item)
// }
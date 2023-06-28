// let div = document.getElementsByTagName('div')
// console.log(div);                   // HTMLCollection

// let div2 = document.getElementsByClassName('div')
// console.log(div2);                  // HTMLCollection

// let div3 = document.querySelectorAll('div')
// console.log(div3);                  // NodeList

// console.log(div3 instanceof(Array));
// console.log(div3.push(1));

// let arr = Array.prototype.slice.call(div3)
// arr.push(123)
// console.log(arr);

// function foo(){
//     console.log(arguments);
// }
// foo(1,'lee',true)

// let fakeArray = {
//     0: '张三',
//     1: '李四',
//     2: '花满楼',
//     length: 3
// }
// let arr = Array.from(fakeArray)
// arr.push('push的数据')
// console.log(arr);
// console.log(arr[2]);

// let arr = new Array(1,2)
// console.log(arr);

// let arr = new Array(3)
// console.log(arr);

// let arr = Array.of(3)
// console.log(arr);

// let arr = Array.of(1,true,'lee',[1,2,3],{
//     name: 'wang'
// })
// console.log(arr);

// let arr = [1,2,3,4,5]
// console.log(arr.copyWithin(1,3));  //  [1, 4, 5, 4, 5]

// let arr = new Array(3).fill(7)
// console.log(arr);                    // [7,7,7]

// let arr = [1,2,3,4,5]
// arr.fill('hello',1,3)
// console.log(arr);

// let arr = [1,2,3,NaN]
// console.log(arr.indexOf(NaN)); 

let arr = [1,2,3,NaN]
console.log(arr.includes(NaN));

// for(let item of 'immoc') {
//     console.log(item);
// }

// const str1 = '据央视\n'
// +'习近平总书记12日在河北省石家庄市考察了中国电科产业基础研究院。\n'
// +'中国电科产业基础研究院自1956年从事半导体研究，\n'
// +'先后创造了60多项国内第一，是中国半导体、传感器与微系统、集成电路原创技术策源地。'
// console.log(str1);

// const str1 = `据央视
// 习近平总书记12日在河北省石家庄市考察了中国电科产业基础研究院。
// 中国电科产业基础研究院自1956年从事半导体研究，
// 先后创造了60多项国内第一，是中国半导体、传感器与微系统、集成电路原创技术策源地。`
// console.log(str1);

// const str2 = `
// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
// </ul>
// `
// console.log(str2);

// const a = 20
// const b = 12
// const c = 'ES6'
// const str2 = '我的年龄是:' + a + b + ',我在学' + c
// const str3 = '我的年龄是:' + (a + b )+ ',我在学' + c
// console.log(str3);

// const a = 20
// const b = 12
// const c = 'ES6'
// const str5 = `我的年龄是${a+b},我在学${c}`
// console.log(str5);

// // ES5
// const isLargeScreen = () => {
//     return true
// }
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big' : ' icon-small'
// console.log(class1);

// // ES6

// let class2 = `icon icon-${isLargeScreen() ? 'big' : 'small'}`
// console.log(class2);

// const foo = (a,b,c,d) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// const name = 'lee'
// const age = 18
// const school = 'BeiDa'
// foo`我的名字是${name},我的年龄是${age},毕业于${school}学校`

// console.log(String.fromCharCode(0x20BB7));     // ஷ
// console.log(String.fromCodePoint(0x20BB7));     // 𠮷

const str = 'ES6 '
const newStr = str.repeat(10)
console.log(newStr);

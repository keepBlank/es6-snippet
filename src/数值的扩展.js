// const a = 5
// console.log(a.toString(2));  // 101

// const b = 101
// console.log(parseInt(b,2));  // 5

// const a = 0101    // Legacy octal literals are not allowed in strict mode
// const a = 0B0101
// console.log(a);

// const b = 0o777
// console.log(b);

// console.log(Number.isFinite(5));
// console.log(Number.isFinite(0.5));
// console.log(Number.isFinite(Infinity));  // 判断无限的是不是有限的
// console.log(Number.isFinite('lee'));  
// console.log(Number.isFinite(true));  

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));

// console.log(Number.parseInt(5.5));    // 5
// console.log(Number.parseFloat(5.5))   // 5.5
// console.log(parseInt(5.5));    // 5    相当于调用window.parseInt(5.5)
// console.log(parseFloat(5.5))   // 5.5  相当于调用window.parseInt(5.5)

// console.log(Number.isInteger(5));      // true
// console.log(Number.isInteger(5.2));    // false

// console.log(0.1 + 0.2);
// let a = 35
// let b = 0.375
// console.log(a.toString(2));
// console.log(b.toString(2));

// console.log(0.1000000000000001);            // 小数点后面14个0     结果：0.1000000000000001
// console.log(0.10000000000000001);           // 小数点后面15个0    结果：0.1
// console.log(0.10000000000000001 === 0.1);  // true

// const max = Math.pow(2,53)             
// console.log(max);                        // 9007199254740992
// console.log(max + 1);                   // 9007199254740992
// console.log(Number.MAX_SAFE_INTEGER === max -1);    // true

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));  // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));  // false
// console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);          // true

// console.log(Math.trunc(true));          // 1
// console.log(Number.parseInt(true));     // NaN
// console.log(Math.trunc(false));          // 0
// console.log(Number.parseInt(false));     // NaN
// console.log(Math.trunc(NaN));     // NaN

// console.log(Math.sign(6));               // 1
// console.log(Math.sign(-6));              // -1
// console.log(Math.sign(0));               // 0
// console.log(Math.sign(NaN));             // NaN
// console.log(Math.sign(true));             // 1
// console.log(Math.sign(false));             // 0

// console.log(Math.cbrt(8));                 // 2
// console.log(Math.cbrt('leee'));            // NaN

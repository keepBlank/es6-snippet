// export const a = 5
// export const b = 'ES6'
// export const sum = (x, y) => x + y
// export  const obj = {
//   name: 'lee'
// }

// const a = 5
// const b = 'ES6'
// const sum = (x, y) => x + y
// const obj = {
//   name: 'lee'
// }
// class People {
//   constructor(name) {
//     this.name = name
//   }
//   sayName() {
//     console.log(this.name);
//   }
// }

// export { a, b, sum, obj, People }

// 导出
// const a = 5
// export default a
// const b = 6
// export default b

// export default const a = 5

// export const str = 'lee'
// const sum = (x,y) => x + y

// export default sum

const a = 5
const b = 'ES6'
const sum = (x, y) => x + y
const obj = {
  name: 'lee'
}
class People {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name);
  }
}

export default { a, b, sum, obj, People }
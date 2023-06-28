// function makeIterator(arr) {
//   let nextIndex = 0
//   return {
//     next() {
//       return nextIndex < arr.length ? {
//         value: arr[nextIndex++],
//         down: false
//       } : {
//         value: false,
//         down: true
//       }
//     }
//   }
// }
// makeIterator(['a', 'b', 'c'])
// let it = makeIterator(['a', 'b', 'c'])
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let courses = {
//   allCourse: {
//     frontend:['ES6','Vue','React','小程序'],
//     backend: ['Java','Go','Python','Spring boot'],
//     webapp: ['Android','ios']
//   }
// }
// for(let item of courses) {
//   console.log(item);
// }

// let arr = ['a','b','c']
// console.log(arr);
// let it = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let map = new Map()
// map.set('name','es6')
// map.set('age','18')
// map.set('school','Beida')
// // console.log(map);
// let it = map[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let courses = {
//   allCourse: {
//     frontend:['ES6','Vue','React','小程序'],
//     backend: ['Java','Go','Python','Spring boot'],
//     webapp: ['Android','ios']
//   }
// }
// for(let item of courses) {
//   console.log(item);
// }

// let courses = {
//   allCourse: {
//     frontend:['ES6','Vue','React','小程序'],
//     backend: ['Java','Go','Python','Spring boot'],
//     webapp: ['Android','ios']
//   }
// }

// courses[Symbol.iterator] = function() {
//   let allCourse = this.allCourse
//   let keys = Reflect.ownKeys(allCourse)
//   let values = []
//   return {
//     next() {
//       // 保证values是空数组
//       if(!values.length){
//         // 保证 allCourse 中还有属性
//         if(keys.length) {
//           // 每次值取第一个属性，这样能保证每次取的都不一样
//           values = allCourse[keys[0]]
//           // 取完就删除第一个属性，删除数组第一个元素，并返回删除的结果
//           keys.shift()
//         }
//       }
//       return {
//         // vlues中没有值的时候说明allCourse的属性被取完了
//         done: !values.length,
//         // 每次next的只取第一个
//         value: values.shift()
//       }
//     }
//   }
// }
// for(let item of courses) {
//   console.log(item);
// }

let courses = {
  allCourse: {
    frontend: ['ES6', 'Vue', 'React', '小程序'],
    backend: ['Java', 'Go', 'Python', 'Spring boot'],
    webapp: ['Android', 'ios']
  }
}

courses[Symbol.iterator] = function * () {
  let allCourse = this.allCourse
  let keys = Reflect.ownKeys(allCourse)
  let values = []
  while (true) {
    // 如果values是空的并且allCourse中有属性那么就存
    if (!values.length) {
      if (keys.length) {
        values = allCourse[keys[0]]
        keys.shift()
        yield values.shift()
      } else {
        return false
      }
      // 如果values不是空的就输出被删除的第一个元素
    } else {
      yield values.shift()
    }
  }
}

for(let item of courses) {
  console.log(item);
}
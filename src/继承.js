// // 父类
// function Animal(name){
//     this.name = name 
// }
// Animal.prototype.showName = function(){
//     console.log('动物的名字是:' + this.name);
// }

// // 子类

// function Dog(name,color){
//     this.color = color
//     // 继承父类属性
//     Animal.call(this,name)
// }

// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog

// let d1 = new Dog('wangcai','black')
// console.log(d1);           // {color: 'black', name: 'wangcai'} 此处的name是继承自Animal的name
// d1.showName()              // 动物的名字是:wangcai

// // 父类
// class People{
//     // 属性定义在constructor中
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     // 方法直接定义在类的顶级作用域中
//     showName(){
//         console.log(this.name);
//     }
// }

// // 子类
// class Coder extends People{
//     // name,age为父类中的属性,company为子类的属性
//     constructor(name,age,company){
//     // 通过super关键字继承父类的属性
//         super(name,age)    
//         this.company = company
//     }
//     showCompany(){
//         console.log(this.company);
//     }
// }

// let c1 = new Coder('zhangsan',18,'Alibaba')
// console.log(c1);
// c1.showName()
// c1.showCompany()

// class People{
//     // 属性定义在constructor中
//     constructor(name,age){
//         this.name = name
//         this.age = age
//         this._gender = -1
//     }
//     get gender(){  // 属性
//         return this._gender
//     }
//     set gender(val){  // 属性
//         this._gender = val
//     }
//     // 方法直接定义在类的顶级作用域中
//     showName(){
//         console.log(this.name);
//     }
// }

// // 子类
// class Coder extends People{
//     // name,age为父类中的属性,company为子类的属性
//     constructor(name,age,company){
//     // 通过super关键字继承父类的属性
//         super(name,age)    
//         this.company = company
//     }
//     showCompany(){
//         console.log(this.company);
//     }
// }

// let p1 = new People()
// p1.gender = 'femail'        
// console.log(p1.gender);     //female

class People{
    // 属性定义在constructor中
    constructor(name,age){
        this.name = name
        this.age = age
        this._gender = -1
    }
    get gender(){  // 属性
        if(this._gender === 1){
            return 'male'
        }else if(this._gender === 0){
            return 'female'
        }else{
            return 'Error: "传入非法的gender属性值"'
        }
        
    }
    set gender(val){  // 属性
        if(val === 0 || val === 1){
            this._gender = val
        }
    }
    // 方法直接定义在类的顶级作用域中
    showName(){
        console.log(this.name);
    }
    // 定义静态方法(不能被示例调用)
    static getount(){
        return 5
    }
}

// 子类
class Coder extends People{
    // name,age为父类中的属性,company为子类的属性
    constructor(name,age,company){
    // 通过super关键字继承父类的属性
        super(name,age)    
        this.company = company
    }
    showCompany(){
        console.log(this.company);
    }
}

let p1 = new People()
// 设置属性值触发set
p1.gender = 1    
// 获取属性触发get    
console.log(p1.gender);     // male
console.log(People.getount());  // 5

let c1 = new Coder('zhangsan',18,'Alibaba')
c1.gender = 0              // female
console.log(c1.gender);
console.log(Coder.getount());  // 5

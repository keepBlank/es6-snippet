// function foo(x,y){
//     y = y || 'world'
//     console.log(x,y);
// }

// foo('hello',0)

// function foo(x,y = 'world'){
//     console.log(x,y);
// }
// foo('hello',0)

// function foo(x = 5){
//     let x = 1
// }
// foo()

// function foo(x, y = 5, z){
//     console.log(x,y,z);
// }
// foo(1,3)

// function foo(x, z, y = 5){
//     console.log(x,y,z);
// }
// foo(1,3)

// function foo({x, y = 5}){
//     console.log(x,y);
// }

// foo()

// function ajax(url,{
//     body =  '',
//     method = 'GET',
//     headers = {}
// } = {}){
//     console.log(method);
// }
// ajax('http://www.baidu.com',{method: 'Post'})


// function foo(x = 1, y = 2, z = 3){
//     console.log(x,y,z);
// }

// console.log(foo.length);

// let x = 1
// function foo(x, y = x){
//     console.log(y);
// }
// foo(2)

// let x = 1
// function foo(y = x){
//     let x = 2
//     console.log(y);
// }
// foo()


// function foo(y = x){
//     let x = 2
//     console.log(y);
// }
// foo()

// console.log((new Function).name)   // anonymous

function foo(x, y){
    console.log(this, x, y);
}
foo.bind({name:'lee'},1,2)()
console.log((foo.bind({}).name)); 
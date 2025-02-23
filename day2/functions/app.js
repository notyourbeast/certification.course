// //functions

// // function sum(a,b){
// //     let sum= a+b;
// //     // console.log("this is my sum function");
// //     return(`my sm is $(sum)`);
// // }
// // console.log(sum(2,4));

// //way2
// let ans= function print(){
//     return(" print function")
// }
// console.log(ans);

let person={
    name:'sai',
    age:20,
    favColor:'blue',
    fun:function print(){
        return(`my name is$(this.name) and i am $(this.age) years old`);
    },
    newObj:{
        gender:"male",
        address:"nipani"
    }
}
// console.log(person.fun());
console.log(person.newObj.address);
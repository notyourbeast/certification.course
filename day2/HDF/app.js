//case1 

// function a(b)
// {
//     console.log("I am inside function a");
//     b();
// }

// function b(){
//     console.log("I am Inside function b")
// }

console.log(a(b));

//case2

function a()
{
    console.log("I am inside function a");


function b(a){
    console.log("I am Inside function b")
}
return b;
}

let ans= a();
console.log(ans());
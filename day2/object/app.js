//object

let person={
    name:'Sai',
    age:25,
    favColor:'blue'

}

//console.log(person);
// console.log(person.name);  
// console.log(person.age);
//  console.log(person.favColor);
// console.log(person['name']);

//CHANGE PROPERTIES IN OBJECT
person.name='Sai';
    console.log(person);

    //addin new property
    person.gender= 'male'
    console.log(person);

//delete property
delete person.favColor;
console.log(person);
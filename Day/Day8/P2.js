// JS Variables: JS is Dynamically Typed
// Var | let | const

// 1 var
var x = 10;
var x = 20;
console.log(x)
// Scope behaviour: var is not block-scoped
if(true){
    var message = "Hi";
}
console.log(message);

// 2 let 
let name="Sushmitha";
// let name="Sushmitha"; not allowed to re create with the same name
name="Sanjana" // cannot recreat but reassign 
console.log(name)

// //   // Scope behaviour: let is  block-scoped
if(true){
    let message = "Hi";
}
console.log(message);  // cannot acedd outside of the scope

// 3 const
const pi=3.1415
pi = 1.315 // reassignment is not posswible
const pi=3.1415 // not allowed to redeclare with the same name
console.log(pi)

// //   // Scope behaviour: const is  block-scoped
if(true){
    const x = 65;
}
console.log(x); // cannot access outside of the scope
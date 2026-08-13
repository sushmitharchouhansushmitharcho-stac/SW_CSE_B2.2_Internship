// Arrays : Arrays is an ordered collection 
// Creating arrays (arr not directly holdes the value)
// Array literal:
const numbers = [1, 2, 3, 4, 5];
const mixed = [ 1, "hello", true, null, {name:"asha"}];

console.log(numbers);
console.log(mixed);

// using Array constructors
const arr1 = new Array(1,2,3);
const arr2 = new Array(5);


console.log(arr1);
console.log(arr2);

//Empty array:
const newArray = [];
console.log(newArray);

// Accessing elements
const fruits= ["apple","banana","cherry"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[-1]);

// Updating elements
const nums=[10,20,30];
nums[1]=25;
console.log(nums);
const arr=[1,2,3];
arr[0]=99;
console.log(arr)
// arr=[4,5,6] not allowed

// Array length
console.log("Array length:");
const arr3=[100,200,300];
console.log(arr3.length);
arr3.length=2;
console.log(arr3);
console.log(arr3.length);
arr3.length=5;
console.log(arr3);
console.log(arr3.length);

console.log("Adding/removing");
// push(),pop()
// unshift(), shift()
// splice()
const colors=["red","green","blue","yellow"];
colors.splice(2,1);
console.log(colors);
colors.splice(1,0,"orange","purple");
console.log(colors);

console.log("slice() and spread(...)");
const nums1=[10,20,30,40,50];
console.log(nums1);
const part=nums1.slice(1,4);
console.log(part)
const copy=nums1.slice();
console.log(copy);

console.log("Spread operator");
const a=[1,2];
console.log(a);
const b=[...a,3,4]; //shallow copy
console.log(b);
const copy2=[...a];
console.log(copy2);

console.log("Looping over Arrays");
const arr5 = [111,222,333,444,555,666];

// Looping
// for loop
for (let i = 0; i < arr5.length; i++){
    console.log(i,arr5[i]);
}

// for ... of(creat a var naming value)
console.log("for...of");
for(const value of  arr5){
    console.log(value)
}

// for Each
console.log("for Each");
arr5.forEach((ramesh, suresh)=>{
    console.log(suresh,ramesh);
})

// searching in arrays 
console.log("Searching in arrays")
const myArray = [99,88,77,66,55];
console.log(myArray.indexOf(66));
console.log(myArray.lastIndexOf(66));
console.log(myArray.includes(555)); // includes()


//find(): searching within a object
//findIndex()
const users = [
    {id:1, name:"Sushmitha"},
    {id:2, name:"Sanjana"}
];

const user = users.find(Student=>Student.id === 2);
console.log(user);
const index = users.findIndex(Student=>Student.name === "Sanjana");
console.log(index);

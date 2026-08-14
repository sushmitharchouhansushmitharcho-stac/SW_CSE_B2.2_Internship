// Checking Conditions in Arrays
const nums = [2,4,6,7];
const hasOdd = nums.some(n=>n%2!==0); // % = modulus (if it is not equal to zero then it hass some odd number)
console.log(hasOdd);

const hasEven = nums.some(n=>n%2===0); // % = modulus (if it is equal to zero then it hass some even number)
console.log(hasEven);

// Sorting and reversing
// sort
const nums2 = [10,2,5,20];
const names = ["Sushmitha","Sanjana","Sinchana","Samreen","Suraksha"];
// const names = ["Sushmitha","Sanjana","sinchana","Samreen","Suraksha"]; // this out put depends on uooercase and lower case also
console.log(names)
console.log(names.sort());
nums2.sort();
console.log(nums2);
console.log(nums2.sort(( a, b ) => a-b));
console.log(nums2.sort(( a, b ) => b-a));

// Joining and splitting
// join - array to string
const arr = ["a","b","c"];
const str1 = arr.join();
console.log(str1);
const str2 = arr.join(" - ");
console.log(str2);

// split - string to array
const text = "apple,banana,cherry";
const fruits = text.split(",");
console.log(fruits);

// Flattening nested arrays
//flat
 const nested = [1,[2,3],[4,[5,6]]];
 const flat1 = nested.flat();
 console.log(flat1);
 const flat2 = nested.flat(2);
 console.log(flat2);

//  flatMap - map then flatten one level
 const sentences = ["hello world","good morning"];
 const words = sentences.flatMap(s => s.split(" "));
 console.log(words); 

//  skip values
const[x, , z] = [1, 2, 3];
// rest element
const [head, ...rest] = [1,2,3,4];
// default values
const [p, q = 99] = [5];

// spread and rest with arrays
//spread - expand array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined);

// Useful in function calls:
function sum(x, y, z){
    return x + y + z;
    // return( x + y + z);
}
const nums3 = [1, 2, 3];
console.log(sum(...nums3));
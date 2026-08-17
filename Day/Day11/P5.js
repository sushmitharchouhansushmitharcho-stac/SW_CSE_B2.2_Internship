// Synchronous: code runs in order, one line after another,
//  and each line must finsh before the nxt one starts

// By default the JS is Synchronous: it blocks following code from executing
// Queue to purchase movie ticket: 
// BookMyShow: Movie123 -> XYZ Theater -> 4pm today -> H5 to H10 seats
// Arun & Sagar: milliseconds 


console.log("A");
console.log("B");
console.log("M");

// Asynchronous: (non blocking approach) Code can start a task and continue runnig without waiting 
// for the task to finish. 
console.log("start");

// setTimeout: It is a built-in function that lets you schedule a
//  piece of code to run after a delay. By default it ia asynchronous
setTimeout(() => {
    console.log("Inside timeout");
},10000);

console.log("end");
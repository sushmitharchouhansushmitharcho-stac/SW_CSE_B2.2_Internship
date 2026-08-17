// Promise: is an object that represents a future value.
// It stands for a result that is not available yet but
//  will be available later.

// Movie : Day 1 Show 1 : Theater in ticket disbursal.
// 30.08.2026 : 2 tickets: 1000rs
// Promise by RBI: Rs.500/- 

// When a Promise is created: one of three states:
// 1. Pending: not finished yet 
// 2. Fulfilled (resolve): it has completed successfully with a value 
// 3.Rejected: failed with an error
// Basic Promise creation 
const promise = new Promise(function(resolve,reject){
    // SOme functionality 
    // some computation / data fetch

    const success = true;
    if (success){
        resolve("Data Loaded");
        console.log("Promise Resolved");
    }
    else{
        console.log("Promise Rejected")
        reject(new Error("Failed to load"));

    }
});

// Promise chaining
// ATM: 1.Insert card -> 2.enter PIN -> 3.Show menu -> 4.Withdraw -> 5.Savings/Current -> 6.enter amt ->
// 7.Rs.10,000/- -> 8.Checks if have valid amt.
fetchData()
.then(function(data){
    return Process(data);
})
.then(function(processed){
    console.log("Final Result",processed);
})

// for error condition 
.catch(function(err){
    console.log("Error:" ,err);
})
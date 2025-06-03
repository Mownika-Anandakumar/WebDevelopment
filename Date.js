// Create a date object
let dateNow = new Date();

console.log(dateNow.toDateString());
console.log(dateNow.toDateString()); // Fixed: previously `date` was undefined

console.log(dateNow.toISOString());
console.log(dateNow.toUTCString());
console.log(dateNow.toLocaleString());
console.log(dateNow.toLocaleDateString());
console.log(dateNow.toLocaleTimeString());

// Extract date info one by one
dateNow = new Date("1997-03-01T10:20:22");

console.log(dateNow.getFullYear());   // 1997
console.log(dateNow.getMonth());      // 2 (March, since Jan = 0)
console.log(dateNow.getDay());        // 6 (Saturday)
console.log(dateNow.getHours());

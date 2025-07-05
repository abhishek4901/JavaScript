// Create two objects
const obj1 = {
    name: "Alice",
    age: 30
};

const obj2 = {
    city: "Mumbai",
    country: "India" 
};

// Merge the objects using Object.assign
const mergedObj1 = Object.assign({}, obj1, obj2);
console.log("Merged using Object.assign:", mergedObj1);

// Merge the objects using spread operator(...)
const mergedObj2 = { ...obj1, ...obj2 };
console.log("Merged using spread operator:", mergedObj2); 
var myMap = new Map();
myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");
myMap.set(6, "Six");
myMap.set(7, "Seven");
console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key: ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value: ${value}`);
}

for(let [key, value] of myMap.entries()){
    console.log(`Key: ${key}, Value: ${value}`);
}

myMap.forEach((key) => {
    console.log(`Key: ${key}`);
});

myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
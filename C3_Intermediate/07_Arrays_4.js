// Copying methods and mutating methods
// Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so by first constructing a new array and then populating it with elements. The copy always happens shallowly — the method never copies anything beyond the initially created array. Elements of the original array(s) are copied into the new array as follows:

// Objects: the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
// Primitive types such as strings, numbers and booleans (not String, Number, and Boolean objects): their values are copied into the new array.

// Other methods mutate the array that the method was called on, in which case their return value differs depending on the method: sometimes a reference to the same array, sometimes the length of the new array.

//The following methods create new arrays by accessing this.constructor[Symbol.species] to determine the constructor to use: concat(), filter(), flat(), flatMap(), map(), slice(), and splice() (to construct the array of removed elements that's returned).

//The following methods always create new arrays with the Array base constructor: toReversed(), toSorted(), toSpliced(), and with().

const arr = [10, 20, 30, 40];


arr.copyWithin(3, 0, 2); // mutates arr
console.log(arr);

const arr2 = arr.slice().copyWithin(0, 1, 3); // does not mutate arr
console.log(arr2); // [20, 30, 30, 40]

const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
console.log(arr3); // [20, 30, 30, 40]

const array = ["a", "b", "c", "d", "e"];
array.copyWithin(0, 3); // mutates array
console.log(array); // ['d', 'e', 'c', 'd', 'e']

// The copyWithin() method copies part of an array to another location in the same array and returns it, without modifying its length.
// It takes three arguments: target, start, and end. The target is the index at which to copy the elements, start is the index from which to start copying, and end is the index at which to stop copying (not included).
// If start or end are negative, they are treated as offsets from the end of the array.

const array2 = ["a", "b", "c", "d", "e"];
array2.copyWithin(1,2,5); // mutates array
console.log(array2); // ['a', 'c', 'd', 'd', 'e']

// The copyWithin() method can also be used to fill an array with a specific value by using the same index for both start and end.
const array3 = ["a", "b", "c", "d", "e"];
array3.copyWithin(0, 2, 5); // mutates array
console.log(array3); // ['c', 'b', 'c', 'd', 'e']



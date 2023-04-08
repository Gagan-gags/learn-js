//One of the most common tasks when working with an array is to 
//create a new array that contains a subset of elements of the original array.



// let cities = [
//     {name: 'Los Angeles', population: 300},
//     {name: 'New York', population: 400},
//     {name: 'Chicago', population: 500},
//     {name: 'Houston', population: 600},
//     {name: 'Philadelphia', population: 700}
// ];

// let bigCities = cities.filter(city => city.population > 200);
// arrayObject.filter(callback, contextObject);
// The filter() method creates a new array with all the elements that pass the test implemented by the callback() function.
// Internally, the filter() method iterates over each element of the array and passes each element to the callback function. 
// If the callback function returns true, it includes the element in the return array.

// console.log(bigCities);

// map function 
// const arr = [5, 1, 3, 2, 6];

// const output = arr.map((x) => x.toString(2));
// console.log(output); // the ouput will comes in binary code

//filter function
const arr = [5, 1, 3, 2, 6];

// filter odd value 
const output = arr.filter((x) => x < 4 );

console.log(output);

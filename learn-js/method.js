/// Higher order function episode

// forEach
// filter
// map
// sort
// reduce
//===============================//

const companies= [
    {name: "Google", Category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", Category: "Product Based", start: 1981, end: 2004},
    {name: "Paytm", Category: "Product Based", start: 1981, end: 2004},
    {name: "Cofrage", Category: "Product Based", start: 1981, end: 2004},
    {name: "Mindtree", Category: "Product Based", start: 1981, end: 2004},
    {name: "Tata Consultant", Category: "Product Based", start: 1981, end: 2004},
    {name: "Microsoft", Category: "Product Based", start: 1981, end: 2004},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// The forEach() method calls a function and iterates over the elements of an array.
// array.forEach(function(currentValue, index, arr), thisValue)


// for(let i =0; i<companies.length; i++ ){
//     console.log(companies[i].end);
// }

// using forEach
// companies.forEach(function(company, index){
//     console.log(company.name);
// });

// using arrow funtion
companies.forEach((company, index) => (
    console.log(company.name)
));

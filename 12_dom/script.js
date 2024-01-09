//Arrays High order funcs

const arr = ['rajat','sansu','sarthak','🙌'];


//forEach function ->doesnot return anything
function print(n)
{
    console.log(n);
}

arr.forEach(print)


arr.forEach( (n) => console.log(n) );


//map function -> returns an array
const newArr = arr.map( (n) => n.toUpperCase() );

console.log(newArr);


//find functions

console.log(arr.find( (n) => n === 'rajat'));

console.log(arr.findIndex( (n) => n === '🙌'));

//filter function

const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter((n) => n % 2 ==0);
console.log(even);


//slice 

console.log(numbers.slice(1,3));
console.log(numbers.slice(5));

//splice -> delete elements from array and forms a new array with those elements

console.log(numbers);

const newarr = numbers.splice(5,10);
console.log(numbers);
console.log(newarr);


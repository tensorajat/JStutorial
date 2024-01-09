//Logical Operators
// AND operator

const age = 20;
const gender = 'male';

if (age >= 18 && gender =='male') {
    console.log('You are adult male');
} else {
    console.log('You are not adult male');
}

// OR operator

if (age >= 18 || gender =='male') {
    console.log('You are adult or male');
} else {
    console.log('You are either male or 18');
}

// NOT operator

if (!(age >= 18 || gender =='male')) {
    console.log('You are not adult or male');
} else {
    console.log('You are either male or 18');
}
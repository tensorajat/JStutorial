//Conditional Statements
    //if-else
const age = 170;

if(age>=18 && age<100)
{
    console.log("Can Vote");
}
else if(age>=100)
{
    console.log("Cannot Vote, you're dead");
}
else{
    console.log("Cannot Vote");
}

    //ternary operator
const age2 = 90;

age2 >=18 ? console.log("Can vote", age2) : console.log("Cannot vote", age2);


//Switch

const gender = "test";

switch(gender)
{
    case "Male":
        console.log("Male");
        break;
    case "Female":
        console.log("Female");
        break;
    default:
        console.log("Other");
        break;
}
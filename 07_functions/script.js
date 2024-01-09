//Functions


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(add(11,12));



//Using arguments
function addnumbers()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}

console.log("Sum: ",addnumbers(1,2,3,4,5,6,7,8,));



//Using ... (Spread operator)
function addnumbers2(...nums){

    let ans=0;
    for(let i=0; i<nums.length; i++)
    {
        ans+=nums[i];
    }
    return ans;

}

console.log("Sum: ",addnumbers2(1,2,3,4,5,6,7,8,));
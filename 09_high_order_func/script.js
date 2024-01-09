//High Order Functions and Callback
    //Using function as arguements
function add(a,b,cb){
    let re = a+b;
    cb(re);

    return () => console.log(re);
}

add(10,20,function(re){
    console.log(re);
});

add(20,30, (val) => console.log(val));



let resultFunction = add(2,4, () => {})

resultFunction();


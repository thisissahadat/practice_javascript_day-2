//function= function value. every function represent it's value and that value and carrying function equal to each other. 
function function0(){
    return "Shahadat Hossain";
}

function function01(){
    return function0(); // even a function can return another function like other int/str/other value.
}

function function1(){
    return 20;
}

function function2(){
    return 30;
}

function function3(){
    return "Shahadat"
}

function function4(){
    return "Sabikun"
}


console.log( function0());
console.log( function1());
console.log( function2());
console.log( function3());
console.log( function4());
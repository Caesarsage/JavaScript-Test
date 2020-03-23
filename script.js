var names ="Destiny Erhabor";
var courses =["HTML","CSS","JAVASCRIPT","PYTHON","NODEJS"];

console.log("My name is " + names);
console.log("My courses are " + courses);

if (courses.length %2 !==0) {
    for (let i = 0; i <= 200; i++){
        if (i % 2 !== 0) {
            console.log(i);
        }    
    }
}

//FOR BOTH CASE
/*
if (courses.length % 2 === 0) {
    for (let i = 0; i <=200; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}else{
    for (let i = 0; i <=200; i++){
        if (i % 2 !== 0) {
            console.log(i);
        } 
    }
} 
*/  

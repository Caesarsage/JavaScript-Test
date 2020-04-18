var num;
var list = []

//write a function that takes a parameter as whole number
function parameter(num) {
    //looping through:
    for (var i = 1; i <= num; i++) {
      //  condition 1
        if (i%2 === 0) {
            j = "yu";

        }
        else if (i%3 === 0) {
            j = "gi";
    
        }
        else if (i%5 === 0) {
            j = "oh";
    
        }
        else{
            j= i
        }
        //condition 2 :  
        if ( i%2 === 0 && i%3 === 0) {
            j = "yu-gi";
        }
        else if (i%2 ===0 && i%5 === 0) {
            j = "yu-oh";
        }
        else if (i %3 === 0 && i%5 === 0) {
            j = "gi-oh";
        }
        else if (i%2 === 0 && i%3 === 0 && i%5 === 0){
            j ="yu-gi-oh";
        }
    // push to empty array above
       list.push(j);
    };
    //return array containing all numbers from 1 to the passed argument
    return list
};
//call the function and pass 100 as an argument
parameter(100);
//call the function and pass it a random number of your choice
parameter(20);

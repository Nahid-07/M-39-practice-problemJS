/* 
3) Write an arrow function that will take a parameter and will check if the
parameter is a number or not by using isNaN(). And return true or false.
*/
const check = a =>{
    if(typeof a === 'number'){
        console.log(true)
    }else{
        console.log(false)
    }
}
check(5)
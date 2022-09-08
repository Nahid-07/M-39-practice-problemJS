/* 
Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
parameter will be a string) that will perform arithmetic operation depending on the third parameter and
will print the result. For example:
*/

const param3 = (num1,num2,string)=>{
    if(string === 'add'){
        console.log(num1+num2)
    }else if(string === 'sub'){
        console.log(num1 -num2)
    }else if(string === 'multiply'){
        console.log(num1 * num2)
    }else if(string === 'devide'){
        console.log(num1/num2)
    }else if(string === 'modulus'){
        console.log(num1 % num2)
    }else{
        console.log('invalid operation')
    }
}
param3(10,3,'modulus')
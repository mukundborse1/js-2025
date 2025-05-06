let data = (num1,num2,fnToCall) => {
    result = num1 + num2;
    fnToCall(result)
};

const displayResult = () => {
    console.log(`The sum of two digits is ${result}`);
    
}
console.log(34,45,);


setTimeout(() => {
    console.log('Good Morning');
}, 3000)

setInterval(() => {
    console.log('Hey Bala');
    
}, 2000);
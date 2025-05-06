function data(){
    console.log("Hello");   
};

// use when we want to perform operation after specific time.

setTimeout(
    data, 3000
)

// use when we want to perform operation at specific time interval.

setInterval(
    data,2000
)

let ans = 0;
for(let i=1; i<= 50; i++){
    ans = ans + i;
};

console.log(ans);
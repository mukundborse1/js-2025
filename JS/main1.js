let num = [2,3,4,5,7,8];
num.map((i) => {
    console.log(i * 2);
    
})

// give me even number from the  array.

function filterData (n){
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const ans = num.filter(filterData);
console.log(ans);

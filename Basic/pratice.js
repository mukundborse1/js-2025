// find largest number in array.

let num = [23,24,45,56,67,89,77,898,888,999,5656];
let maxnum = num[0];
for(let i =1; i< num.length; i++){
    if(num[i] > maxnum){
        maxnum = num[i];
    }
}
console.log(maxnum);

// Reverse a string.
let sen = "Rohit is best opener of India";
let ans = sen.split('').reverse().splice(" ").join('')
let words = sen.split(' ');
const revWords = words.map((word) => {
    let reversed = "";
    for(let i=word.length -1; i>=0; i--){
        reversed += word[i];
    }
    return reversed;
})

let answer = revWords.join(" ");
console.log(ans);
console.log(answer);

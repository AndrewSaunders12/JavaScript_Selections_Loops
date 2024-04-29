console.log("Hello World!\n==========\n");

// Exercise 1 Section

for (startNumber = 1; startNumber <= 100; startNumber++) {

    if(startNumber % 2 != 0){
        console.log(startNumber);

    }



}
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
for(let startNumber = 1; startNumber <= 100; startNumber++){
    let answer = "";
    if(startNumber % 3 == 0){
        answer = "FIZZ";
        console.log(answer);
    }
    if(startNumber % 5 == 0){
        answer += "BUZZ";
        console.log(answer);
    }
    if(startNumber % 5 == 0 && startNumber % 3 == 0){
        console.log(startNumber);
    }
}
console.log("EXERCISE 2:\n==========\n");


// Exercise 3 section

startNumber = 1;
while(startNumber <= 100){
    if(startNumber % 2 != 0){
        console.log(startNumber);
    }
    startNumber++;
}

startNumber = 1;
do{
    if(startNumber % 5 == 0 && startNumber % 3 == 0){
        answer = "FIZZBUZZ";
        console.log(answer);
        startNumber++;
    }
    else if(startNumber % 3 == 0){
        answer = "FIZZ";
        console.log(answer);
        startNumber++;
    }
    if(startNumber % 5 == 0){
        answer = "BUZZ";
        console.log(answer);
        startNumber++;
    }
    else{
        console.log(startNumber)
        startNumber++;
    }
}while(startNumber <= 100);

console.log("EXERCISE 3:\n==========\n");
//Exercise 4 section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(let startNumber = 1; startNumber <= n; startNumber++){
    if(startNumber == value){
        answer = "Found value!";
        console.log(answer);
        break;
    }
    else{
        answer = "Did not find value";
        console.log(answer);
    }
}

console.log("EXERCISE 4:\n==========\n");
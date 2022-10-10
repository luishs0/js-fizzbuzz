let fizzBuzz = "";

for (let i = 1; i < 101; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = "FizzBuzz";
    } else if (i % 3 === 0) {
        fizzBuzz = "Fizz;"
    } else if (i % 5 === 0) {
        fizzBuzz = "Buzz";
    } else {
        fizzBuzz = "";
    }

    console.log(i, fizzBuzz);

}
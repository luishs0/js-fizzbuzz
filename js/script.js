let fizzBuzz = "";
let row = document.getElementById("row");

for (let i = 1; i < 101; i++) {
    
    let number = i;

    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = "FizzBuzz";
        number = fizzBuzz;
    } else if (i % 3 === 0) {
        fizzBuzz = "Fizz";
        number = fizzBuzz;
    } else if (i % 5 === 0) {
        fizzBuzz = "Buzz";
        number = fizzBuzz;
    } else {
        fizzBuzz = "";
        number = i;
    }


    console.log(number);

    const item = `<div class="itemstyle col ${fizzBuzz}">${number}</div>`;
    row.innerHTML += item;
    
}




console.log("This is index file");

let primaryNumber = Math.floor(Math.random() * 11);
document.querySelector("#primary-number").innerHTML = primaryNumber;

let secondaryNumber = Math.floor(Math.random() * 11);
document.querySelector("#secondary-number").innerHTML = secondaryNumber;

let mathSignArray = ['+', '-', '*', '/'];
let index = Math.floor(Math.random() * mathSignArray.length);
document.querySelector("#sign").innerHTML = mathSignArray[index];

document.querySelector("#btn").addEventListener("click", (e) => {
    let mathSign = mathSignArray[index];
    console.log(mathSign);
    let output = eval(`${primaryNumber}${mathSign}${secondaryNumber}`);
    let userInput = document.querySelector("#guess").value;
    if (output == userInput) {
        alert("correct");
        window.location.reload();
    }
    else {
        alert(`wrong answer correct answer is ${output}`);
    }
    window.location.reload();

})

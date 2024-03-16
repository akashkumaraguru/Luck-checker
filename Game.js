var guessNumber = document.getElementById("guessnumber")
var show = document.getElementById("show")
var randomNumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10
var score = document.getElementById("score")


function guess() {
    var enteredNumber = guessNumber.value
    if (enteredNumber > 10) {
        alert("Read the description :) Give the number between 1 to 10")
    }
    if (randomNumber == enteredNumber) {
        score.textContent = "Attempt : " + totalscore
        alert("Today is Your day!!")
    }
    else {

        totalscore = totalscore - 1;
        while (totalscore <= 0) {
            score.textContent = "0"
            alert("Today turn over!! come 'Tomorrow' ")
        }
        score.textContent = "Attempt :" + totalscore
        show.textContent = "No Luck"
        guessNumber.value = "";

    }

}
function clearInput() {
    guessNumber.value = "";
}
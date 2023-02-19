var actualLineValues = [];
function makeScore() {
    document.getElementById("scores").innerHTML = "";
    if(actualNumberOfSweets !== 0)
    {
        makeActualLine(actualNumberOfSweets)
        for (var i = 0; i < guesses.length; i++) {
            var val = guesses[0].higher;
            val = calculateCloseness(actualNumberOfSweets, guesses[i].min, guesses[i].max);
            const score = document.createElement("span");
            score.innerHTML =  val;
            score.style.margin = '30px';
            document.getElementById("scores").appendChild(score);
        }
    }
}

function makeActualLine(amount)
{
    for(var i = 0; i<guesses.length; i++)
    {
      actualLineValues.push(amount);
      console.log("amount: "+ amount)
    }
}

function calculateCloseness(actualValue, lowerGuess, higherGuess)
{
    var value =""
    if (lowerGuess < actualValue && higherGuess > actualValue) {
        value = higherGuess - lowerGuess;
    }
    else
    {
        value = 500
    }
    return "Score: " + value;
}

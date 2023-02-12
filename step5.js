//step 5 
//enable score calculation by change calculateScore from false to true
var calculateScore = false;

function calculateCloseness(actualValue, lowerGuess, higherGuess)
{
    var value =""
    if(calculateScore === true)
    {
        if (lowerGuess < actualValue && higherGuess > actualValue) {
            value = higherGuess - lowerGuess;
        }
        else
        {
            value = 500
        }
    }
    return "Score: " + value;
}
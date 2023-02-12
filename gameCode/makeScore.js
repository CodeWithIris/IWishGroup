function makeScore() {
    document.getElementById("scores").innerHTML = "";
    if(calculateScore === true)
    {
        for (var i = 0; i < xyValues.length; i++) {
            var val = 500;
            val = calculateCloseness(actualLineValues[0], xyValues[i].lower, xyValues[i].higher);
            const score = document.createElement("span");
            score.innerHTML =  val;
            score.style.margin = '30px';
            document.getElementById("scores").appendChild(score);
        }
    }
}
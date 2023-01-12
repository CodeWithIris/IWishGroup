var lowerValues = []
var lowerCounts = []
makeChart();

function makeChart(){

    for(var i = 0; i<500; i=i+10)
    {
        lowerValues.push(i);
        lowerCounts.push(0);
    }
    for(var i = 0; i<xyValues.length; i++)
    {
        var round = Math.round(xyValues[i].lower/10);
        console.log(round);
        lowerCounts[round] = lowerCounts[round] + 1;
    }
}

function showChart(){
    myLine = new Chart("myLine", {
        type: "line",
        data: {
          labels: lowerValues,
          datasets: [{
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.1)",
            data: lowerCounts
          }]
        },
        options:{}
      });
}

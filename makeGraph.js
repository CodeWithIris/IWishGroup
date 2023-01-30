var chartMade = false;
var lowerDictionary = {};
var higherDictionary = {};
var averagDictionary = {};
//step 2 - remove the // before makeChart()
//makeChart();

function makeChart(){
    for(var i = 0; i<xyValues.length; i++)
    {
        lowerDictionary[i] = xyValues[i].lower;
        higherDictionary[i] = xyValues[i].higher;
        console.log("lower "+lowerDictionary[i]+ ", higher "+higherDictionary[i])
        var average = ((xyValues[i].higher - xyValues[i].lower)/2) + xyValues[i].lower
       averagDictionary[i] =  average; //someone change this if there is an obviously more elegant way of doing this pls
       console.log("lower "+lowerDictionary[i]+ ", higher "+higherDictionary[i]+ ", average "+averagDictionary)
      }
    chartMade = true;
}

function showChart(){

  var lowerX = Object.values(lowerDictionary)
  var lowerY = Object.keys(lowerDictionary)

  var higherX = Object.values(higherDictionary)
  var higherY = Object.keys(higherDictionary)

  var averageX = Object.values(averagDictionary)
  var averageY = Object.keys(averagDictionary)

  myLine = new Chart("myLine", {
    type: "line",
    data: {
      labels: lowerY, higherY,
      datasets: [
        {
          label: "lower guesses",
          backgroundColor: "blue",
          borderColor: "blue",
          fill: false,
          data: lowerX, lowerY
        },
        {
          label: "higher guesses",
          backgroundColor: "red",
          borderColor: "red",
          fill: false,
          data: higherX, higherY
        },
        {
          label: "avg guesses",
          backgroundColor: "grey",
          borderColor: "grey",
          borderDash: [10],
          fill: false,
          data: averageX, averageY
        },
      ]
    },
    fill: false,
    options:{
      legend: {
        display: true
      },
      tooltips: {
        enabled: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          gridLines: {
            display: true,
            offSet: true
          }
        }],
        x: {
          ticks: {
              autoSkip: false
          }
        }
      }
    }
  });
}

function refreshGraph()
{
  makeChart();
  showChart();
}
var chartMade = false;
var lowerDictionary = {};
var higherDictionary = {};
//step 2 - remove the // before makeChart()
makeChart();

function makeChart(){
    for(var i = 0; i<xyValues.length; i++)
    {
        lowerDictionary[i] = xyValues[i].lower;
        higherDictionary[i] = xyValues[i].higher;
    }
    chartMade = true;
}

function showChart(){

  var lowerX = Object.values(lowerDictionary)
  var lowerY = Object.keys(lowerDictionary)

  var higherX = Object.values(higherDictionary)
  var higherY = Object.keys(higherDictionary)

  myLine = new Chart("myLine", {
    type: "line",
    data: {
      labels: lowerY, higherY,
      datasets: [
        {
          label: "lower guesses",
          backgroundColor: "#3e95cd",
          fill: false,
          data: lowerX, lowerY
        },
        {
          label: "higher guesses",
          fill: false,
          data: higherX, higherY
        }
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
  alert("In future this will add new Slider")
}
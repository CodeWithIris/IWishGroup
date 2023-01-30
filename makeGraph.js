var chartMade = false;
var lowerDictionary = {};
var higherDictionary = {};
var averagDictionary = {};
var colorFlag = false;
//step 2 - remove the // before makeChart()
//makeChart();

function makeChart(){
    for(var i = 0; i<xyValues.length; i++)
    {
        lowerDictionary[i] = xyValues[i].lower;
        higherDictionary[i] = xyValues[i].higher;
       averagDictionary[i] = ((xyValues[i].higher - xyValues[i].lower)/2) + xyValues[i].lower; //someone change this if there is an obviously more elegant way of doing this pls
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

  var d = {
    labels: lowerY, higherY, averageY,
    datasets: [
      {
        label: "lower guesses",
        //backgroundColor: "#3e95cd",
        borderColor: "Green",
        fill: false,
        data: lowerX, lowerY
      },
      {
        label: "higher guesses",
        fill: false,
        //borderColor: "Red",
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
  }

  myLine = new Chart("myLine", {
    type: "line",
    data: d,
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
  if(d.datasets[0].borderColor != null && d.datasets[1].borderColor != null )
	{
		colorFlag = true;
	}
}

function refreshGraph()
{
  makeChart();
  showChart();
}
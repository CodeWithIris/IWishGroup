var colorFlag = false;

function showChart(){
  var yValues = [];
  var lowerXValues = [];
  var higherXValues = [];
  var averageXValues = [];
  for(var i = 0; i<xyValues.length; i++)
  {
    yValues.push(i);
    lowerXValues.push(xyValues[i].lower);
    higherXValues.push(xyValues[i].higher);
    averageXValues.push(((xyValues[i].higher - xyValues[i].lower)/2) + xyValues[i].lower);
  }
  var d = {
    labels: yValues,
    datasets: [
      {
        label: "lower guesses",
        backgroundColor: "#3e95cd",
        borderColor: "Green",
        fill: false,
        data: lowerXValues, yValues
      },
      {
        label: "higher guesses",
        fill: false,
        borderColor: "Red",
        data: higherXValues, yValues
      },
      {
        label: "avg guesses",
        backgroundColor: "grey",
        borderColor: "grey",
        borderDash: [10],
        fill: false,
        data: averageXValues, yValues
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
  document.getElementById("AddNewSlider").style.visibility = hidden;
}
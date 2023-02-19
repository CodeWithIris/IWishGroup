function showChart(){
  var yValues = [];
  var lowerXValues = [];
  var higherXValues = [];
  for(var i = 0; i<guesses.length; i++)
  {
    yValues.push(i);
    lowerXValues.push(guesses[i].min);
    higherXValues.push(guesses[i].max);
  }
  var d = {
    labels: yValues,
    datasets: [
      {
        label: "min guesses",
        backgroundColor: minLineColour,
        borderColor: minLineColour,
        fill: false,
        data: lowerXValues, yValues
      },
      {
        label: "max guesses",
        fill: false,
        borderColor: maxLineColour,
        backgroundColor: maxLineColour,
        data: higherXValues, yValues
      },
      {
        label: "actual number",
        borderColor: "#ADD8E6",
        borderDash: [10],
        fill: false,
        data: actualLineValues, yValues
      }
    ]
  }

  myLine = new Chart("graph", {
    type: "line",
    data: d,
    fillStyle: "white",
    options:{
      legend: {
        display: true
      },
      events: [],
      tooltips: {enabled: false},
      hover: {mode: null},
      interactivityEnabled: false,
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
    },
  });
  makeScore();
  document.getElementById("graph").style.width= "70%";
  document.getElementById("graph").style.margin= "auto";
}
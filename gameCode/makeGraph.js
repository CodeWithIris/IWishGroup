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
        backgroundColor: lowerColour,
        borderColor: lowerColour,
        fill: false,
        data: lowerXValues, yValues
      },
      {
        label: "higher guesses",
        fill: false,
        borderColor: higherColour,
        backgroundColor: higherColour,
        data: higherXValues, yValues
      },
      {
        label: "avg guesses",
        borderColor: "grey",
        borderDash: [10],
        fill: false,
        data: averageXValues, yValues
      },
      {
        label: "actual value",
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
    },
  });
  document.getElementById("start").style.display = "none";
  document.getElementById("addNewSlider").style.display = "inline-block";
  document.getElementById("refresh").style.display = "inline-block";
  document.getElementById("graph").style.width= "70%";
  document.getElementById("graph").style.margin= "auto";
}
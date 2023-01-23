var lowerDictionary = {};
var higherDictionary = {};
//makeChart();

function makeChart(){
  // for(var i = 0; i<=500; i=i+10)
  // {
  //   lowerDictionary[i]=0;
  //   higherDictionary[i]=0;
  // }
    for(var i = 0; i<xyValues.length; i++)
    {
      var round = Math.round(xyValues[i].lower/10)*10;
      if(lowerDictionary[round])
      {
        lowerDictionary[round] = lowerDictionary[round] + 1;
      }
      else
      {
        lowerDictionary[round] = 1;
      }

      round = Math.round(xyValues[i].higher/10)*10;
      if(higherDictionary[round])
      {
        higherDictionary[round] = higherDictionary[round] + 1;
      }
      else
      {
        higherDictionary[round] = 1;
      }
    }

    for(var i = 0; i<=500; i=i+10)
    {
      if(lowerDictionary[i] && !higherDictionary[i])
      {
        higherDictionary[i] = 0;
      }
      else if(!lowerDictionary[i] && higherDictionary[i])
      {
        lowerDictionary[i] = 0;
      }
    }
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

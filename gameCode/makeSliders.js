var chartMade = false
function makeSliders() {
  if(!chartMade)
  {
    for (var index = 0; index < xyValues.length; index++) {
      updateSliders(index)
    }
  }
  chartMade == true;
}

function addNewSlider() {
  var previousLength = xyValues.length;
  xyValues.push({ lower: xyValues[previousLength - 1].lower, higher: xyValues[previousLength - 1].higher })
  updateSliders(previousLength)
  showChart();
}

function updateSliders(index) {
  const title = document.createElement("span");
  title.innerHTML = "Player " + index + ":";
  title.style.margin = '30px';
  document.getElementById("players").appendChild(title);
  const slider = document.createElement("div");
  document.getElementById("ranges").appendChild(slider);
  let sliderUI = noUiSlider.create(slider, {
    start: [parseInt(xyValues[index].lower), parseInt(xyValues[index].higher)],
    connect: true,
    animate: false,
    range: {
      'min': 0,
      'max': 500
    },
    direction: 'rtl',
    orientation: 'vertical',
    behaviour: 'tap-drag',
    tooltips: true,
    pips: {
      mode: 'steps',
      stepped: true,
      density: 4
    },
  });
  sliderUI.id = index;
  sliderUI.on('update', (positions) => {
    xyValues[sliderUI.id].lower = parseInt(positions[0]);
    xyValues[sliderUI.id].higher = parseInt(positions[1]);
  });
  slider.style.margin = '50px';
  slider.style.height = '400px';
  slider.style.display = "inline-block";
}
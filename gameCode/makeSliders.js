function makeSliders() {
    for (var index = 0; index < guesses.length; index++) {
      updateSliders(index)
    }
}

function addNewSlider() {
  var previousLength = guesses.length;
  guesses.push({ min: guesses[previousLength - 1].min, max: guesses[previousLength - 1].max })
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
    start: [parseInt(guesses[index].min), parseInt(guesses[index].max)],
    connect: true,
    animate: false,
    range: {
      'min': 0,
      'max': guesses[0].max
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
    guesses[sliderUI.id].min = parseInt(positions[0]);
    guesses[sliderUI.id].max = parseInt(positions[1]);
  });
  slider.style.margin = '50px';
  slider.style.height = '400px';
  slider.style.display = "inline-block";
}
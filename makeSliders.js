function makeSliders()
{
  for (var c=0; c <  xyValues.length; c++) {
    const slider = document.createElement("div");
    document.body.appendChild(slider);
    let sliderUI = noUiSlider.create(slider, {
      start: [parseInt(xyValues[c].lower), parseInt(xyValues[c].higher)],
      connect: false,
      animate: false,
      range: {
        'min': 0,
        'max': 500
      },
      connect: true,
          direction: 'ltr',
          orientation: 'horizontal',
          behaviour: 'tap-drag',
          tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
    });
    slider.setAttribute('disabled', true);
    slider.style.margin = '30px';
  }
}

function AddNewSlider() 
{
  console.log("AddNewSlider has been called");
  var previousLength = xyValues.length; 
  xyValues.push({lower: xyValues[previousLength-1].lower, higher: xyValues[previousLength-1].higher})
  const slider = document.createElement("div");
      document.body.appendChild(slider);
      let sliderUI = noUiSlider.create(slider, {
        start: [xyValues[previousLength-1].lower, xyValues[previousLength-1].higher],
        connect: false,
        animate: false,
        range: {
          'min': 0,
          'max': 500
        },
        connect: true,
            direction: 'ltr',
            orientation: 'horizontal',
            behaviour: 'tap-drag',
            tooltips: true,
        pips: {
          mode: 'steps',
          stepped: true,
          density: 4
        }
      });

      sliderUI.on('update', (positions) => {
      if(positions[0]<lowerDictionary[previousLength-1] || positions[1]>higherDictionary[previousLength-1])
      {
        document.getElementById("narrowOrTrade").innerHTML="Show graph trade";
      }
      else
      {
        document.getElementById("narrowOrTrade").innerHTML="Show graph narrow";
      }
      xyValues[previousLength].lower = parseInt(positions[0]);
      xyValues[previousLength].higher = parseInt(positions[1]);
      });

      slider.style.margin = '30px';
}


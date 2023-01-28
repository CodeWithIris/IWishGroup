var slider = null
function makeSliders()
{
  for (var c=0; c <  xyValues.length; c++) {
    slider = document.createElement("div");
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
    if(c<xyValues.length-1)
    {
      slider.setAttribute('disabled', true);
    }
    else{
      let node = document.createElement('div');
      node.classList.add('fake-fill');
      slider.appendChild(node);
      sliderUI.on('update', (positions) => {
      if(positions[0]<lowerDictionary[xyValues.length-1] || positions[1]>higherDictionary[xyValues.length-1])
      {
        document.getElementById("narrowOrTrade").innerHTML="trade";
      }
      else
      {
        document.getElementById("narrowOrTrade").innerHTML="narrow";
      }
      xyValues[xyValues.length-1].lower = positions[0];
      xyValues[xyValues.length-1].higher = positions[1];
    });
    }
    slider.style.margin = '30px';
  }
}
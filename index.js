function startGame(){
  if(xyValues.length==4)
  {
    alert("Fill in your lower and higher guess in the lowerHigherGuesses.js file")
  }
  else
  {
    removeButton = document.getElementById("start");
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
            direction: 'rtl',
            orientation: 'horizontal',
            behaviour: 'tap-drag',
            tooltips: true,
        pips: {
          mode: 'steps',
          stepped: true,
          density: 4
      }
      });

      let node = document.createElement('div');
      node.classList.add('fake-fill');
      slider.appendChild(node);

      sliderUI.on('update', (values, handle, unencoded, tap, positions) => {

        var pos = positions[0];

        if (pos >= 50) {
          node.style.left = '50%';
          node.style.right = 'auto';
          node.style.width = (pos - 50) + '%';
        } else {
          node.style.left = 'auto';
          node.style.right = '50%';
          node.style.width = (50 - pos) + '%';
        }
      });

      slider.style.margin = '30px';
    }
    
  setTimeout(() => {processStep2()}, 1000);
  }

function processStep2()
{
  if( lowerValues.length==0)
  {
    alert("uncomment code in makeGraph.js file")
  }
  else
  {
    showChart();
    alert("Well done you've completed the demo")
  }  
}
  
}



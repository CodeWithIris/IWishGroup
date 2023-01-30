function startStep1(){
    if(xyValues.length==4)
    {
      alert("Fill in your lower and higher guess in the lowerHigherGuesses.js file")
    }
    else
    {
      makeSliders()
      setTimeout(() => {processStep2()}, 1000);
    }
  }
  
  function processStep2()
  {
    if(!chartMade)
    {
      alert("uncomment code in makeGraph.js file") //next step after this is displayed - option to change graph colours
    }
    else
    {
      showChart()
      setTimeout(() => {processStep3()}, 1000);//this "successMessage should actually be calling step 3"
    }  
  }

  function processStep3()
  {
    if(!colorFlag)
    {
		alert("Try to change color of the line in makeGraph.js file")
		setTimeout(() => {processStep3()}, 1000*5);
    }
    else
    {
		setTimeout(() => {successMessage()}, 1000);
    }  
  }
    
  function successMessage(){
    alert("Well done you've completed the demo")
  }
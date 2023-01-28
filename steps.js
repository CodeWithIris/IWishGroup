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
      alert("uncomment code in makeGraph.js file")
    }
    else
    {
      showChart()
      setTimeout(() => {successMessage()}, 1000);
    }  
  }
    
  function successMessage(){
    alert("Well done you've completed the demo")
  }
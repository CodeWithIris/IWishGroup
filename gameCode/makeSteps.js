function startStep1(){
  document.getElementById("start").style.display = "none";
  document.getElementById("addNewSlider").style.display = "inline-block";
  document.getElementById("refresh").style.display = "inline-block";
    if(xyValues.length==4)
    {
      alert("Fill in a new lower and higher guess in step1.js file")
      setTimeout(() => {processStep1()}, 1000*5);
    }
    else
    {
      makeSliders()
      setTimeout(() => {processStep2()}, 1000);
    }
  }
  

  function processStep2()
  {
    if(lowerColour == "yellow" || higherColour == "yellow")
    {
		alert("Try to change color of the line in step2.js file")
		setTimeout(() => {processStep2()}, 1000*5);
    }
    else
    {
      showChart()
		  setTimeout(() => {processStep3()}, 1000);
    }  
  }

  function processStep3()
  {
    if(actualLineValues.length===0)
    {
      alert("Try to set the actual amount in step3.js file")
      setTimeout(() => {processStep3()}, 1000*5);
    }
    else
    {
		  setTimeout(() => {processStep4()}, 1000);
    }  
  }

  function processStep4()
  {
    if(getComputedStyle(document.getElementById("players")).fontSize === "8px")
    {
      alert("Make font size of players bigger in step4.css file")
      setTimeout(() => {processStep4()}, 1000*5);
    }
    else
    {
		  setTimeout(() => {successMessage()}, 1000);
    }  
  }
    
  function successMessage(){
    alert("Well done you've completed the demo")
  }
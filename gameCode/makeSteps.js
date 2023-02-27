var chartMade = false;
function startStep1(){
    if(guesses.length<=1)
    {
      showChart();
      setTimeout(() => {alert("Fill in some guesses for the amount of sweets in step1.js file")}, 700);
    }
    else
    {
      if(!chartMade)
      {
        chartMade = true;
        makeSliders()
      }
      processStep2();
    }
  }

function processStep2()
{
  if(minLineColour == "yellow" || maxLineColour == "yellow")
  {
    showChart();
    setTimeout(() => {alert("Try to change color of the line in step2.js file")}, 700);
  }
  else
  {
    processStep3();
  }  
}

function processStep3()
{    
  if(actualNumberOfSweets === 0)
  {
    showChart();
    setTimeout(() => {alert("Set actual number of sweets to calculate scores in step3.js file")}, 1000);
  }
  else
  {
    makeScore();
    successMessage()
  }  
}
  
function successMessage(){
  showChart();
  document.getElementById("start").style.display = "none";
  document.getElementById("addNewSlider").style.display = "inline-block";
  document.getElementById("refresh").style.display = "inline-block";
  setTimeout(() => {alert("Well done you've made the sweet game")}, 1000);
}
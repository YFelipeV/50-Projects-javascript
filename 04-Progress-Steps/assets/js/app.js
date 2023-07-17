const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");
console.log(circles);
let currentStep = 1;
const updateSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
  console.log(currentStep);
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  progress.style.width=`${((currentStep -1)/(circles.length -1)) * 100}%`

  if(currentStep === circles.length){
    buttons[1].disabled=true
  }else if(currentStep ===1){
    buttons[0].disabled=true
  }else{
    buttons.forEach(button=>button.disabled =false)
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});

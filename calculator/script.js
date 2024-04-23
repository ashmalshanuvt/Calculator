let display = document.querySelector("#display");
let backSpace = document.querySelector("#backspace");
let clear = document.querySelector("#delete");
let zoomButton = document.querySelectorAll(".button");

displayFirstValue = "";

function viewdisplay(value) {
  displayFirstValue = displayFirstValue + value;

  display.value = displayFirstValue;

  if (displayFirstValue !== "") {
    backSpace.style = "visibility:visible";
    clear.style = "visibility:visible";
  }
}

function expression(index) {
    zoom(index)
  try {
    let answer = eval(displayFirstValue);
    console.log(answer);
    display.value = answer;
    displayFirstValue = answer.toString();
  } catch (e) {
    display.value = "Error";
    displayFirstValue = "";
  }
}

backspace.addEventListener("click", () => {
   
  displayFirstValue = displayFirstValue.slice(0, displayFirstValue.length - 1);
  display.value = displayFirstValue;

  display.value = displayFirstValue;
  if (displayFirstValue === "") {
    backSpace.style = "visibility:hidden";
    clear.style = "visibility:hidden";
  }
});

clear.addEventListener("click", () => {
   
  displayFirstValue = "";
  display.value = displayFirstValue;
  if (displayFirstValue === "") {
    backSpace.style = "visibility:hidden";
    clear.style = "visibility:hidden";
  }
});

zoom = (index) => {
  zoomButton[index].classList.add("zoom");
  setTimeout(() => {
    zoomButton[index].classList.remove("zoom");
  }, 300);
};

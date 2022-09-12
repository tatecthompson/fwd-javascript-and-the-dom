const firstdiv = document.querySelector(".first-div");
const seconddiv = document.querySelector(".second-div");
const h2 = document.getElementById("secondtext")

firstdiv.addEventListener('click', () => {
    firstdiv.style.backgroundColor = "#00cd23";
  });

seconddiv.addEventListener('mouseenter', () => {
    seconddiv.style.backgroundColor = "#0000ff";
    h2.innerText = "Text Hovered!";
  });

  seconddiv.addEventListener('mouseleave', () => {
    seconddiv.style.backgroundColor = "#ff0000";
    h2.innerText = "Hover this Text";
  });
  
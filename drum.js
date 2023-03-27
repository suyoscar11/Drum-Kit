var t = document.querySelectorAll("button").length;
while (t--) {
  document.querySelectorAll("button")[t].addEventListener("click", handleClick);
  function handleClick() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
}

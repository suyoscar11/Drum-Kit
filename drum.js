var t = document.querySelectorAll("button").length;
while (t--) {
  document.querySelectorAll("button")[t].addEventListener("click", handleClick);
  function handleClick() {
    alert("Drum bajauni ho?");
  }
}

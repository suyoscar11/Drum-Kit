var t = document.querySelectorAll(".drum").length;
for (var i = 0; i <= t; i++) {
  document.querySelectorAll(".drum")[t].addEventListener("click", function () {
    var innerhtml = this.innerHTML;
    switch (innerhtml) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var tom5 = new Audio("sounds/kick-bass.mp3");
        tom5.play();
        break;

      case "k":
        var audi = new Audio("sounds/snare.mp3");
        audi.play();
        break;

      case "l":
        var audioo = new Audio("sounds/crash.mp3");
        audioo.play();
        break;
      default:
        console.log(innerhtml);
    }
  });
}

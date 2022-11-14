let share = document.getElementById("share");
let flex = document.getElementsByClassName("flex");
let modal = document.getElementsByClassName("modal");
share.addEventListener("click", show);
function show(e) {
  console.log(flex[0]);
  if (window.screen.width > 767) {
    modal[0].style.display = "block";

    return;
  }
  flex[0].style.display = "none";
  modal[0].style.display = "block";
}

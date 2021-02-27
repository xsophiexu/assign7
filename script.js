var pos = scrollY;

window.onscroll = function() {
  var pos2 = scrollY;
  if (pos > pos2) {
    document.getElementById("scroll").hide();
  } else {
    document.getElementById("scroll").style.top = "-30px";
  }
  pos = pos2;
}

function calcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.getElementById("bg1").setAttribute("style", "height:" + vH + "px;");
}
calcVH();
window.addEventListener('onorientationchange', calcVH, true);

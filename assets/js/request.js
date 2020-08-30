function next() {
  document.getElementsByClassName("details")[0].style.transition = ".3s";
  document.getElementsByClassName("details")[0].style.opacity = 0;
  setTimeout(function(){
    document.getElementsByClassName("details")[0].style.display = "none";
    document.getElementsByClassName("areas")[0].style.display = "table-cell";
    // document.getElementsByClassName("areas")[0].style.opacity = 0;
    // document.getElementsByClassName("areas")[0].style.transition = ".3s";
    document.getElementsByClassName("areas")[0].style.opacity = 1;
  },300)
  // document.getElementsByClassName("details")[0].style.display = "none";
}

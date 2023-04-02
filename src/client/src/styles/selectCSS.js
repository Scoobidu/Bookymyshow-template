var header = document.getElementById("movie");
var btns = header.getElementsByClassName("movie-selection");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("movie-column-selected");
    current[0].className = current[0].className.replace(
      " movie-column-selected",
      ""
    );
    this.className += " movie-column-selected";
  });
}

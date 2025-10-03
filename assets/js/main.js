function expand(x, y) {
  x.classList.toggle("hamburger");
  document
    .querySelectorAll(".${y}")
    .forEach(label => label.classList.toggle("showlabel"));
}











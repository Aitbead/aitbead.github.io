function expand(x, y) {
  x.classList.toggle("hamburger");
  document
    .querySelectorAll(`.${y}`)
    .forEach(showtext);
    function showtext(z) {
      z.classList.toggle('showlabel');
    }
}
















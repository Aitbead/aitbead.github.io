function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll('.hidelabel, .showlabel').forEach(label => {
  label.classList.toggle('hidelabel');
  label.classList.toggle('showlabel');
  });
}




















function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll(".hidelabel, .showlabel").forEach(label => {
  label.classList.toggle("hidelabel");
  label.classList.toggle("showlabel");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll(".autolink").forEach(link => {
    let text = link.textContent.trim().normalize("NFD");
    text = text.replace(/[\u0300-\u036f]/g, '');
    let slug = text
      .toLowerCase()
      .replace(/[\s\W]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/^home$/, "");
    link.href = "/" + slug;
    if (link.href === currentPath) {
      link.classList.add('active');
  });
});



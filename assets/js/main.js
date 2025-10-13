function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll(".hidelabel, .showlabel").forEach(label => {
  label.classList.toggle("hidelabel");
  label.classList.toggle("showlabel");
  });
}

const slugCounts = {};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".autolink").forEach(link => {
    let text = link.textContent.trim().normalize("NFD");
    text = text.replace(/[\u0300-\u036f]/g, '');
    let slug = text
        .toLowerCase()
        .replace(/[\s\W]+/g, "-")
        .replace(/^-+|-+$/g, "");
    link.href = "/" + slug;
  });
});


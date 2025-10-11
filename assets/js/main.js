function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll(".hidelabel, .showlabel").forEach(label => {
  label.classList.toggle("hidelabel");
  label.classList.toggle("showlabel");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".auto-link").forEach(link => {
    let text = link.textContent.trim();
    let slug = text
        .toLowerCase()
        .replace(/[\s\W]+/g, "-")
        .replace(/^-+|-+$/g, "");
    link.href = "/" + slug + "/index.html";
  });
});

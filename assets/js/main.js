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
    function uniqueSlug(text) {
      const base = slugify(text);
      const count = slugCounts[base] || 0;
      slugCounts[base] = count + 1;
    return count === 0 ? base : `${base}-${count + 1}`;
    link.href = "/" + slug + "/index.html";
  });
});




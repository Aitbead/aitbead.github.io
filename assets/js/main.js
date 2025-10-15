function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll(".hidelabel, .showlabel").forEach(label => {
  label.classList.toggle("hidelabel");
  label.classList.toggle("showlabel");
  });
}

const slugCounts = {};

function slugify(text) {
  let normalized = text.trim().normalize('NFD');
  normalized = normalized.replace(/[\u0300-\u036f]/g, '');
  return normalized
    .toLowerCase()
    .replace(/[\s\W]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^home$/, "");
}

function uniqueSlug(text) {
  const base = slugify(text);
  const count = slugCounts[base] || 0;
  slugCounts[base] = count + 1;
  return count === 0 ? base : `${base}-${count + 1}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.auto-link').forEach(link => {
    const slug = uniqueSlug(link.textContent);
    link.setAttribute('href', `/${slug}`);
  });
});


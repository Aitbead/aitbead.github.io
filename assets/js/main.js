function expand(x) {
  x.classList.toggle("hamburger");
  document.querySelectorAll(".hidelabel, .showlabel").forEach(label => {
  label.classList.toggle("hidelabel");
  label.classList.toggle("showlabel");
  });
}

//const slugCounts = {};
//document.addEventListener("DOMContentLoaded", () => {
//  document.querySelectorAll(".autolink").forEach(link => {
//    let text = link.textContent.trim().normalize("NFD");
//    text = text.replace(/[\u0300-\u036f]/g, '');
//    let slug = text
//      .toLowerCase()
//      .replace(/[\s\W]+/g, "-")
//      .replace(/^-+|-+$/g, "")
//      .replace(/^home$/, "");
//    link.href = "/" + slug;
//  });
//});

// main.js

// Track how many times each base slug has been used
const slugCounts = {};

/**
 * Convert any string into a URL-friendly slug:
 * 1. Trim and normalize Unicode (NFD)
 * 2. Strip diacritics (accents)
 * 3. Lowercase, collapse non-word/whitespace to hyphens
 * 4. Trim leading/trailing hyphens
 */
function slugify(text) {
  // 1. Trim + decompose accented characters (NFD)
  let normalized = text.trim().normalize('NFD');

  // 2. Remove combining diacritical marks
  normalized = normalized.replace(/[\u0300-\u036f]/g, '');

  // 3. Slugify
  return normalized
    .toLowerCase()
    .replace(/[\s\W]+/g, '-')   // collapse spaces/punctuation to “-”
    .replace(/^-+|-+$/g, '');   // trim leading/trailing hyphens
}

/**
 * Generate a unique slug by appending a numeric suffix
 * if the same base slug has already been used.
 */
function uniqueSlug(text) {
  const base = slugify(text);
  const count = slugCounts[base] || 0;
  slugCounts[base] = count + 1;

  // First time: just the base; thereafter: base-2, base-3, etc.
  return count === 0 ? base : `${base}-${count + 1}`;
}

// Wait for the DOM, then auto-link all <a class="auto-link">
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.auto-link').forEach(link => {
    const slug = uniqueSlug(link.textContent);
    link.setAttribute('href', `/${slug}`);
  });
});

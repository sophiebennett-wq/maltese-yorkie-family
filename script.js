document.addEventListener("DOMContentLoaded", () => {
  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        // close navbar on mobile
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // contact form basic validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
      }
      alert('Thanks! Your message has been received. Sophie will contact you shortly.');
      form.reset();
    });
  }

  // set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

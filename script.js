// Highlight active nav link on scroll
const sections = ['proposal', 'motivation', 'process', 'product', 'reflection'];
const navLinks = document.querySelectorAll('nav a:not(.logo)');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`nav a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});

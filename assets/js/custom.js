const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0');
      entry.target.classList.add('opacity-100');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Select the sections to observe
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
});

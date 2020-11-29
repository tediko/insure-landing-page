const aboutSection = document.querySelector('.about');
const sections = document.querySelectorAll('[data-observer]');

const options = {
    rootMargin: '0px',
    threshold: 0.3
  }

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}, options)

export default sections.forEach(section => {
    observer.observe(section);
})
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

function goPage(page) {
  alert("Страница '" + page + "' скоро будет 🔥");
}

// анимация появления
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
});

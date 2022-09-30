// Theme START

const body = document.querySelector('body');
const themeBtn = document.querySelector('.theme-toggle');
const themeBtnText = document.querySelector('.theme-toggle span');

const setLightTheme = () => {
  body.classList.remove('dark');
  body.classList.add('light');
  themeBtnText.innerText = 'Dark';
  localStorage.setItem('devfinder-theme', 'light');
};

const setDarkTheme = () => {
  body.classList.remove('light');
  body.classList.add('dark');
  themeBtnText.innerText = 'Light';
  localStorage.setItem('devfinder-theme', 'dark');
};

const initTheme = () => {
  const currentTheme = localStorage.getItem('devfinder-theme');

  if (currentTheme === null || currentTheme === 'light') {
    setLightTheme();
  } else if (currentTheme === 'dark') {
    setDarkTheme();
  }
};

initTheme();

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    setDarkTheme();
  } else if (body.classList.contains('dark')) {
    setLightTheme();
  }
});

// Theme END

// Form START

const form = document.querySelector('form');
const input = document.querySelector('.text');

input.addEventListener('input', () => {
  if (input.value === '') {
    input.classList.remove('not-empty');
  } else {
    input.classList.add('not-empty');
  }
});

// Form END

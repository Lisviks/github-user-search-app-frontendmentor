const body = document.querySelector('body');
const themeBtn = document.querySelector('.theme-toggle');
const themeBtnText = document.querySelector('.theme-toggle span');

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    themeBtnText.innerText = 'Light';
  } else if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    themeBtnText.innerText = 'Dark';
  }
});

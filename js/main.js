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

const avatarElement = document.querySelector('.avatar img');
const nameElement = document.querySelector('.name');
const dateElement = document.querySelector('.date');
const bioElement = document.querySelector('.bio');
const reposElement = document.querySelector('.repos-stat');
const followersElement = document.querySelector('.followers-stat');
const followingElement = document.querySelector('.following-stat');
const locationElement = document.querySelector('.location p');
const websiteElement = document.querySelector('.website p');
const twitterElement = document.querySelector('.twitter p');
const companyElement = document.querySelector('.company p');

input.addEventListener('input', () => {
  if (input.value === '') {
    input.classList.remove('not-empty');
  } else {
    input.classList.add('not-empty');
  }
});

const getUser = async (user) => {
  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();

  return data;
};

const updateContactInfo = (contact, element) => {
  if (!contact) {
    element.parentElement.classList.add('not-available');
    element.innerText = 'Not Available';
  } else {
    element.parentElement.classList.remove('not-available');
    element.innerText = contact;
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = await getUser(input.value);
  console.log(user);

  avatarElement.src = user.avatar_url;
  nameElement.innerText = user.login;
  bioElement.innerText = user.bio === null ? 'This profile has no bio' : user.bio;
  reposElement.innerText = user.public_repos;
  followersElement.innerText = user.followers;
  followingElement.innerText = user.following;

  updateContactInfo(user.location, locationElement);
  updateContactInfo(user.blog, websiteElement);
  updateContactInfo(user.twitter_username, twitterElement);
  updateContactInfo(user.company, companyElement);
});

// Form END

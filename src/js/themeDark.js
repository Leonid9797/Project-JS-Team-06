'use strict';

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // Додаємо клас "darkmode" до body з плавним ефектом
  // setTimeout(() => {
  document.body.classList.add('darkmode');
  // }, 300); // Затримка 300 мс (0.3 секунди)

  // Оновлюємо значення "darkMode" у localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // Видаляємо клас "darkmode" з body з плавним ефектом
  // setTimeout(() => {
  document.body.classList.remove('darkmode');
  // }, 300); // Затримка 300 мс (0.3 секунди)

  // Оновлюємо значення "darkMode" у localStorage
  localStorage.setItem('darkMode', null);
};

// Перевіряємо, чи включений темний режим
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Додаємо обробник події "click" на кнопку перемикача теми
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

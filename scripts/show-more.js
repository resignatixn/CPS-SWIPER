const hiddenItems = document.querySelectorAll(
  '.swiper-slide:nth-last-child(-n + 5)'
);
const toggleButton = document.getElementById('toggle-button');
const expandButton = document.querySelector('.brands__button::before');

let isHidden = true;

toggleButton.addEventListener('click', () => {
  if (isHidden) {
    hiddenItems.forEach((el) => (el.style.display = 'block'));
    toggleButton.textContent = 'Скрыть';
    toggleButton.classList.toggle('rotate');
    isHidden = false;
  } else {
    hiddenItems.forEach((el) => (el.style.display = ''));
    toggleButton.textContent = 'Показать все';
    toggleButton.classList.toggle('rotate');
    isHidden = true;
  }
});

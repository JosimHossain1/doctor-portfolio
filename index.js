const open = document.getElementById('open');
const close = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');

open.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('block');
});

close.addEventListener('click', function () {
  mobileMenu.classList.add('hidden');
});

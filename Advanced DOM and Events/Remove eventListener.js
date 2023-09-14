const h1 = document.querySelector('h1');
const alertH1 = function () {
  alert('Great You are reading!');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
const message = document.createElement('div');
message.classList.add('Cookie-message');
message.innerHTML =
  'Hello I am Cookie <button class="btn btn--close--cookie">Got It!</button>';
header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
header.after(message);
// header.before(message);
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });
//Styles
message.style.backgroundColor = 'yellow';
message.style.width = '150%';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
document.documentElement.style.setProperty('--color-primary', 'orangered');
//Attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'Beautiful minimal Logo';
console.log(logo.src);
console.log(logo.alt);
//Classes
//logo.classList.add/remove/toggle/contains
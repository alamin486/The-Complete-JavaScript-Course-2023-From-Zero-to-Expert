const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';
h1.closest('h1').style.background = 'var(--gradient-primary)';
//Going sideway:Siblings
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement);
console.log(h1.parentElement.children);
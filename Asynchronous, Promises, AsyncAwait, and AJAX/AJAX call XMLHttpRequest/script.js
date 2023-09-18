'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    if (this.status === 200) {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 10000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
      </div>
    </article>`;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    } else {
      console.error('Error loading country data');
    }
  });

  request.addEventListener('error', function () {
    console.error('Request failed');
  });
};
getCountryData('bangladesh');
getCountryData('india');

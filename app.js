'use strict';
const hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

const seattle = {
  storeName: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
  cookiesEachHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
  totalDailyCookies: 875,
  getCustomers: function () {
    const customerperhour =
      randomCustomers(this.minCustPerHour, this.maxCustPerHour) + ' people';
    console.log(customerperhour);
  },
  render: function () {
    const article = document.createElement('article');
    const parentElement = document.getElementById('kittenProfiles');
    parentElement.appendChild(article);
    const h3 = document.createElement('h3');
    article.appendChild(h3);
    const ul = document.createElement('ul');
    article.appendChild(ul);
    for (let i = 0; i < hours.length; i++) {
      const li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(li);
    }
    const li = document.createElement('li')
    ul.appendChild(li);
    // <p>Total: 875 cookies</p>
    li.textContent = 'Total: ' + this.totalDailyCookies + ' cookies'
  },
};

function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
seattle.getCustomers();
seattle.render();

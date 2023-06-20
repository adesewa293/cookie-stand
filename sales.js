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

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// CompanyLocation
function CompanyLocation(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerHour,
) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.generateData();
  this.render();
}

CompanyLocation.prototype.generateData = function () {
  this.generateCustomersPerHour();
  this.generateCookiesPerHour();
  this.calculateTotalDailyCookies();
};

CompanyLocation.prototype.generateCustomersPerHour = function () {
  for (let i=0; i < hours.length; i++){
    const num = getRandomNumber(this.minCustPerHour, this.maxCustPerHour)
    this.customersEachHour.push(num)
  };
};


CompanyLocation.prototype.generateCookiesPerHour = function () {
  for (let i=0; i < hours.length; i++){
    const cookieCount = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(cookieCount)
  }
};

CompanyLocation.prototype.calculateTotalDailyCookies = function () {
  for (let i = 0; i < this.cookiesEachHour.length; i++){
    this.totalDailyCookies += this.cookiesEachHour[i]
  }
};

CompanyLocation.prototype.render = function (){
  const article = document.createElement('article');
    const parentElement = document.getElementById('cookieData');
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
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
}


const seattle = new CompanyLocation('Seattle', 23, 65, 2.3); 
const tokyo = new CompanyLocation('Tokyo' ,3, 24, 1.2);
console.log(tokyo)
const Dubai = new CompanyLocation('Dubai', 11, 38, 3.7);
const Paris = new CompanyLocation('Paris', 20, 38, 2.3);
const Lima = new CompanyLocation('Lima', 2, 16, 4.6);
// 'use strict';
// const hours = [
//   '6am',
//   '7am',
//   '8am',
//   '9am',
//   '10am',
//   '11am',
//   '12pm',
//   '1pm',
//   '2pm',
//   '3pm',
//   '4pm',
//   '5pm',
//   '6pm',
//   '7pm',
// ];

// const seattle = {
//   storeName: 'seattle',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesPerHour: 6.3,
//   customersEachHour: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
//   cookiesEachHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
//   totalDailyCookies: 875,
//   generateCustomersPerHour: function () {
//     const customerperhour =
//       getRandomNumber(this.minCustPerHour, this.maxCustPerHour) + ' people';
//     console.log(customerperhour);
//   },
//   render: function () {
//     const article = document.createElement('article');
//     const parentElement = document.getElementById('cookieData');
//     parentElement.appendChild(article);
//     const h3 = document.createElement('h3');
//     article.appendChild(h3);
//     const ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i = 0; i < hours.length; i++) {
//       const li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//   },
// };

// function randomCustomers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// seattle.generateCustomersPerHour();
// seattle.render();

function storeLocations(storename, openHours, ContactInfo, AdditionalInfo) {
  this.storename = storename;
  this.openHours = openHours;
  this.ContactInfo = ContactInfo;
  this.AdditionalInfo = AdditionalInfo;
  this.render();
}

storeLocations.prototype.render = function () {
  const containerElement = document.getElementById("storeLocationContainer");
  const article = document.createElement("article");
  containerElement.appendChild(article);
  const h3 = document.createElement("h3");
  h3.textContent = this.storename;
  article.appendChild(h3);
  const p = document.createElement("p");
  p.textContent = this.openHours;
  article.appendChild(p);
  const p2 = document.createElement("p");
  p2.textContent = this.ContactInfo;
  article.appendChild(p2);
  const p3 = document.createElement("p");
  p3.textContent = this.AdditionalInfo;
  article.appendChild(p3);
};

const seattle = new storeLocations(
  "Seattle",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "Main Street City, State ZIP"
);
const tokyo = new storeLocations(
  "Tokyo",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);
const dubai = new storeLocations(
  "Dubai",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);

const paris = new storeLocations(
  "Paris",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);

const lima = new storeLocations(
  "Lima",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);


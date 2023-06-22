"use strict";

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// CompanyLocation
function CompanyLocation(
  storeName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerHour
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
  for (let i = 0; i < hours.length; i++) {
    const num = getRandomNumber(this.minCustPerHour, this.maxCustPerHour);
    this.customersEachHour.push(num);
  }
};

CompanyLocation.prototype.generateCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    const cookieCount = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerHour
    );
    this.cookiesEachHour.push(cookieCount);
  }
};

CompanyLocation.prototype.calculateTotalDailyCookies = function () {
  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    this.totalDailyCookies += this.cookiesEachHour[i];
  }
};

CompanyLocation.prototype.render = function () {
  const parentElement = document.getElementById("cookieTable");
  const tableRow = document.createElement("tr");
  parentElement.appendChild(tableRow);
  const tableData = document.createElement("td");
  tableRow.appendChild(tableData);
  tableData.textContent = this.storeName;

  for (let i = 0; i < this.cookiesEachHour.length; i++) {
    const element = this.cookiesEachHour[i];
    const tableData2 = document.createElement("td");
    tableRow.appendChild(tableData2);
    tableData2.textContent = element;
  }
  const tableData3 = document.createElement("td");
  tableRow.appendChild(tableData3);
  tableData3.textContent = this.totalDailyCookies;
};

function createTableStructure() {
  const parentContainer = document.getElementById("cookieContainer");
  const table = document.createElement("table");
  table.id = "cookieTable";
  parentContainer.appendChild(table);
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  const tableData1 = document.createElement("th");
  tableRow.appendChild(tableData1);
  tableData1.textContent = "";
  for (let i = 0; i < hours.length; i++) {
    const hour = hours[i];
    const tableData = document.createElement("th");
    tableRow.appendChild(tableData);
    tableData.textContent = hour;
  }
  const tableData2 = document.createElement("th");
  tableRow.appendChild(tableData2);
  tableData2.textContent = "Daily Location Total";
}

createTableStructure();

const seattle = new CompanyLocation("Seattle", 23, 65, 2.3);
const tokyo = new CompanyLocation("Tokyo", 3, 24, 1.2);
const dubai = new CompanyLocation("Dubai", 11, 38, 3.7);
const paris = new CompanyLocation("Paris", 20, 38, 2.3);
const lima = new CompanyLocation("Lima", 2, 16, 4.6);

const tableContainer = document.getElementById("cookieTable");
const tableRow2 = document.createElement("tr");
tableContainer.appendChild(tableRow2);
const Totals = document.createElement("td");
tableRow2.appendChild(Totals);
Totals.textContent = "Totals";
for (let i = 0; i < hours.length; i++) {
  const totals =
    seattle.cookiesEachHour[i] +
    tokyo.cookiesEachHour[i] +
    dubai.cookiesEachHour[i] +
    paris.cookiesEachHour[i] +
    lima.cookiesEachHour[i];

  const tableData4 = document.createElement("td");
  tableRow2.appendChild(tableData4);
  tableData4.textContent = totals;
}
const totalCount = document.createElement("td");
  tableRow2.appendChild(totalCount);
  totalCount.textContent =
  seattle.totalDailyCookies +
  tokyo.totalDailyCookies +
  dubai.totalDailyCookies +
  paris.totalDailyCookies +
  lima.totalDailyCookies;


addLocationForm.addEventListener("submit", function (event) {
    event.preventDefault();
   
    const location = event.target.name.value;
    const minCustPerHour = event.target.minCustPerHour.value;
    const maxCustPerHour = event.target.maxCustPerHour.value;
    const avgCookiesPerHour = event.target.avgCookieSoldPerCust.value;

    const newStoreLocation = new CompanyLocation(location, minCustPerHour, maxCustPerHour, avgCookiesPerHour)
    addLocationForm.reset();
  })
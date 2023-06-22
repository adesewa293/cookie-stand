function StoreLocations(storename, openHours, ContactInfo, AdditionalInfo) {
  this.storename = storename;
  this.openHours = openHours;
  this.ContactInfo = ContactInfo;
  this.AdditionalInfo = AdditionalInfo;
  this.render();
}

StoreLocations.prototype.render = function () {
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

const seattle = new StoreLocations(
  "Seattle",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "Main Street City, State ZIP"
);
const tokyo = new StoreLocations(
  "Tokyo",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);
const dubai = new StoreLocations(
  "Dubai",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);

const paris = new StoreLocations(
  "Paris",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);

const lima = new StoreLocations(
  "Lima",
  "Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed",
  "123-456-7890 Email: store1@example.com",
  "456 Oak AvenueCity, State ZIP"
);


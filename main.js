const entryPoint = document.querySelector(".customerContainer");

function customerToHTML(customer) {
  let customerName = customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1) + " " + customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1);
  return `<div class="customerCard">
    <img src="${customer.picture.large}" class="customerPicture">
    <h2 class="customerName">${customerName}</h2>
    <a href="mailto:${customer.emaiil}" class="email">${customer.email}</a>
    <ul class="customerInfo">
    <li class="addressLine1">${customer.location.street.number} ${customer.location.street.name}</li>
    <li class="addressLine2">${customer.location.city},${nameToAbbr(customer.location.state)} ${customer.location.postcode}</li>
    <li class="dob">DOB: ${moment(customer.dob.date).format("MMM D, YYYY")}</li>
    <li class="customerSince">Customer since: ${moment(customer.registered.date).format("MMM D, YYYY")}</li>
    </ul>
    </div>`;
}

let allCustomers = customers.map((customer) => customerToHTML(customer)).join("\n");

entryPoint.innerHTML = allCustomers;

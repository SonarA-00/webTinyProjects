// Contact Management System
const prompt = require("prompt-sync")();
console.log("Contact Management System:");
console.log("1.Add Contacts");
console.log("2. Delete Contacts");
console.log("3. List Contacts");
console.log("4. Search Contacts");
console.log("5. Exit");

function addContact() {
  const name = prompt(`Enter your name: `);
  const email = prompt(`Enter your Email: `);
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
}

function deleteContact() {
  console.log("Contact IDs:");
  for (let i = 0; i <= contacts.length; i++) {
    const contact = contacts[i];
    console.log((i + 1).toString() + " :" + contact.name);
  }
  const number = parseInt(prompt("Enter ID to delete: "));
  if (number != contacts.length || isNaN(number)) {
    console.log("Invalid!!");
  }
  contacts.splice(number - 1, 1);
  console.log("Removed");
}
function listContact(contacts) {
  for (let contact of contacts) {
    console.log("#############");
    console.log(contact.name);
    console.log(contact.email);
  }
}
function searchContact() {
  const searchName = prompt(`Enter name of Contact: `).toLowerCase();
  result = [];
  for (let contact of contacts) {
    if (contact.name.toLowerCase().includes(searchName)) result.push(contact);
    listContact(result);
  }
}
const contacts = [];
let running = true;
while (running) {
  const numberContact = prompt(`Enter a Operation (1-5): `);
  switch (numberContact) {
    case "1":
      addContact();
      break;

    case "2":
      deleteContact();
      break;

    case "3":
      listContact(contacts);
      break;

    case "4":
      searchContact();
      break;

    case "5":
      console.log("Exited");
      running = false;
      break;
    default:
      console.log("Unknown");
      break;
  }
}

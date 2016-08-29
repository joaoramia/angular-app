'use strict';

//Although we are not making any $http requests to a server, requesting the 50 items array data from a data base, the following factory is created to clean up space in the controller and simulate having the data from a different source
app.factory('ContactsFactory', function () {

  var ContactsFactory = {};

  ContactsFactory.allContacts = [
    {
      name: "John",
      phone: "(541) 754-3010",
      email: "john1@gmail.com",
      fx: "USD"
    },
    {
      name: "Karl",
      phone: "(531) 752-3010",
      email: "karl2@gmail.com",
      fx: "USD"
    },
    {
      name: "Juan",
      phone: "(541) 755-3010",
      email: "juan3@gmail.com",
      fx: "USD"
    },
    {
      name: "Matt",
      phone: "(542) 726-3010",
      email: "matt4@gmail.com",
      fx: "USD"
    },
    {
      name: "James",
      phone: "(521) 724-3010",
      email: "james@gmail.com",
      fx: "USD"
    },
    {
      name: "Stewart",
      phone: "(541) 754-3815",
      email: "stewart6@gmail.com",
      fx: "USD"
    },
    {
      name: "John K",
      phone: "(541) 754-1020",
      email: "john7@gmail.com",
      fx: "USD"
    },
    {
      name: "Jonathan",
      phone: "(541) 724-1010",
      email: "jon8@gmail.com",
      fx: "USD"
    },
    {
      name: "David",
      phone: "(541) 554-6010",
      email: "david9@gmail.com",
      fx: "USD"
    },
    {
      name: "Bennet",
      phone: "(541) 754-3330",
      email: "bennet10@gmail.com",
      fx: "USD"
    },
    {
      name: "Benjamin",
      phone: "(541) 754-3513",
      email: "ben11@gmail.com",
      fx: "USD"
    },
    {
      name: "Ani",
      phone: "(541) 754-3517",
      email: "ani12@gmail.com",
      fx: "USD"
    },
    {
      name: "Sofia",
      phone: "(541) 754-1110",
      email: "sofia13@gmail.com",
      fx: "USD"
    },
    {
      name: "Maria",
      phone: "(541) 754-1016",
      email: "maria14@gmail.com",
      fx: "BRL"
    },
    {
      name: "Edward",
      phone: "(541) 754-9999",
      email: "edward15@gmail.com",
      fx: "BRL"
    },
    {
      name: "Valentina",
      phone: "(541) 949-3010",
      email: "valentina16@gmail.com",
      fx: "BRL"
    },
    {
      name: "Heather",
      phone: "(541) 402-3010",
      email: "heather17@gmail.com",
      fx: "BRL"
    },
    {
      name: "Benjamin",
      phone: "(541) 249-3010",
      email: "ben18@gmail.com",
      fx: "BRL"
    },
    {
      name: "Francis",
      phone: "(541) 754-3125",
      email: "franci@gmail.com",
      fx: "BRL"
    },
    {
      name: "Franklin",
      phone: "(541) 754-3423",
      email: "franklin20@gmail.com",
      fx: "BRL"
    },
    {
      name: "Sarah",
      phone: "(541) 754-3543",
      email: "sarha21@gmail.com",
      fx: "BRL"
    },
    {
      name: "Antony",
      phone: "(541) 703-3010",
      email: "antony22@gmail.com",
      fx: "BRL"
    },
    {
      name: "Sean",
      phone: "(541) 753-3210",
      email: "sean23@gmail.com",
      fx: "BRL"
    },
    {
      name: "Gabriel",
      phone: "(541) 754-3012",
      email: "gabriel24@gmail.com",
      fx: "BRL"
    },
    {
      name: "Juan",
      phone: "(601) 754-3010",
      email: "juan25@gmail.com",
      fx: "BRL"
    },
    {
      name: "Joseph",
      phone: "(523) 754-3010",
      email: "joseph26@gmail.com",
      fx: "BRL"
    },
    {
      name: "Eddy",
      phone: "(647) 754-3010",
      email: "eddy27@gmail.com",
      fx: "EUR"
    },
    {
      name: "Carl",
      phone: "(801) 754-3010",
      email: "carl212@gmail.com",
      fx: "EUR"
    },
    {
      name: "Charles",
      phone: "(523) 724-3230",
      email: "charles@gmail.com",
      fx: "EUR"
    },
    {
      name: "Homer",
      phone: "(501) 754-3110",
      email: "homer30@gmail.com",
      fx: "EUR"
    },
    {
      name: "John Paul",
      phone: "(549) 752-3010",
      email: "johnp31@gmail.com",
      fx: "EUR"
    },
    {
      name: "Esther",
      phone: "(302) 754-3210",
      email: "esther32@gmail.com",
      fx: "EUR"
    },
    {
      name: "Sabrina",
      phone: "(231) 753-3010",
      email: "sabrina33@gmail.com",
      fx: "EUR"
    },
    {
      name: "Sophie",
      phone: "(102) 754-3020",
      email: "sophie34@gmail.com",
      fx: "EUR"
    },
    {
      name: "Agatha",
      phone: "(902) 754-3030",
      email: "agatha12@gmail.com",
      fx: "EUR"
    },
    {
      name: "Nikki",
      phone: "(421) 754-3010",
      email: "nikki36@gmail.com",
      fx: "EUR"
    },
    {
      name: "Caroline",
      phone: "(309) 754-3010",
      email: "caroline37@gmail.com",
      fx: "EUR"
    },
    {
      name: "Eduardo",
      phone: "(205) 754-3010",
      email: "eduardo38@gmail.com",
      fx: "EUR"
    },
    {
      name: "Joao",
      phone: "(306) 754-3010",
      email: "joao39@gmail.com",
      fx: "EUR"
    },
    {
      name: "Carlos",
      phone: "(512) 723-3010",
      email: "carlos40@gmail.com",
      fx: "EUR"
    },
    {
      name: "Chase",
      phone: "(707) 754-3010",
      email: "chase41@gmail.com",
      fx: "EUR"
    },
    {
      name: "Taryn",
      phone: "(808) 754-3010",
      email: "taryn42@gmail.com",
      fx: "EUR"
    },
    {
      name: "Marissa",
      phone: "(303) 754-3010",
      email: "marissa43@gmail.com",
      fx: "EUR"
    },
    {
      name: "Taylor",
      phone: "(205) 753-3010",
      email: "taylor44@gmail.com",
      fx: "EUR"
    },
    {
      name: "Dylan",
      phone: "(703) 754-3220",
      email: "dylan45@gmail.com",
      fx: "EUR"
    },
    {
      name: "Chris",
      phone: "(221) 754-3010",
      email: "chris46@gmail.com",
      fx: "EUR"
    },
    {
      name: "Amanda",
      phone: "(331) 754-3010",
      email: "amanda47@gmail.com",
      fx: "EUR"
    },
    {
      name: "Ashley",
      phone: "(502) 754-3111",
      email: "ashley48@gmail.com",
      fx: "EUR"
    },
    {
      name: "Elizabeth",
      phone: "(523) 754-2310",
      email: "elizabeth49@gmail.com",
      fx: "EUR"
    },
    {
      name: "John",
      phone: "(232) 754-3150",
      email: "john50@gmail.com",
      fx: "EUR"
    }
  ]

  return ContactsFactory;

});

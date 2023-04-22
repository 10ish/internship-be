//Getting the database
const db = require("./model");
const User = db.user;
const Address = db.address;
const GeoCoordinate = db.geoCoordinate;
const Company = db.company;
module.exports = () => {
    //Companies
    const sampleCompany = [
      {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
      {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      
      },
      {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
   
      },
      {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
       
      },
      {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      
      },
      {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      
      },
      {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
     
      },
      {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
       
      },
      {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
       
      },
      {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models"
      },
    ];
    //adding sample companies to db
    Company.bulkCreate(sampleCompany)
      .then(() => {
        console.log("Successfully initialized companies for user");
      })
      .catch((err) => {
        console.log("Unable to initialize company for user");
      });
  //Creating the user entry
  const sampleUser = [
    {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      companyId:"1"
    },
    {
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      companyId:"2"
    },
    {
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
      companyId:"3"
    },
    {
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
      companyId:"4"
    },
    {
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
      companyId:"5"
    },
    {
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      companyId:"6"
    },
    {
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      website: "elvis.io",
      companyId:"7"
    },
    {
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "abc@gmail.com",
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      companyId:"8"
    },
    {
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      companyId:"9"
    },
    {
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      website: "ambrose.net",
      companyId:"10"
    },
  ];
  //Creating the sample User
  User.bulkCreate(sampleUser)
    .then(() => {
      console.log("Successfully initialized user");
    })
    .catch((err) => {
      console.log(`Unable to initialise user due to ${err}`);
    });
//Addresses
  const sampleAddress = [
    {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      userId: 1,
    },
    {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      userId: 2,
    },
    {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      userId: 3,
    },
    {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      userId: 4,
    },
    {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      userId: 5,
    },
    {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      userId: 6,
    },
    {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      userId: 7,
    },
    {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      userId: 8,
    },
    {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      userId: 9,
    },
    {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      userId: 10,
    },
  ];
  //Adding sample address to db
  Address.bulkCreate(sampleAddress)
    .then(() => {
      console.log("Successfully initialised address");
    })
    .catch((err) => {
      console.log("Unable to initialize address due to " + err);
    });
    //Geocoordinates
  const sampleGeoCoordinate = [
    {
      lat: "-37.3159",
      lng: "81.1496",
      addressId: 1,
    },
    {
      lat: "-43.9509",
      lng: "-34.4618",
      addressId: 2,
    },
    {
      lat: "-68.6102",
      lng: "-47.0653",
      addressId: 3,
    },
    {
      lat: "29.4572",
      lng: "-164.2990",
      addressId: 4,
    },
    {
      lat: "-31.8129",
      lng: "62.5342",
      addressId: 5,
    },
    {
      lat: "-71.4197",
      lng: "71.7478",
      addressId: 6,
    },
    {
      lat: "24.8918",
      lng: "21.8984",
      addressId: 7,
    },
    {
      lat: "-14.3990",
      lng: "-120.7677",
      addressId: 8,
    },
    {
      lat: "24.6463",
      lng: "-168.8889",
      addressId: 9,
    },
    {
      lat: "-38.2386",
      lng: "57.2232",
      addressId: 10,
    },
  ];
  //Adding sample coordinates to db
  GeoCoordinate.bulkCreate(sampleGeoCoordinate)
    .then(() => {
      console.log("Successfully Initialised geo location");
    })
    .catch((err) => {
      console.log("Unable to initialize geolocation due to " + err);
    });


};

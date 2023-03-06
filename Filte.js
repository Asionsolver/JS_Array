const phone = [
  {
    name: "Samsung s5",
    price: 45000,
    camera: 10,
    rom: 32,
    ram: 8,
    battery: 3600,
    iPX: "IPX7",
  },
  {
    name: "Walton m32",
    price: 15000,
    camera: 8,
    rom: 16,
    ram: 8,
    battery: 3500,
    iPX: "No",
  },
  {
    name: "Xiaomi m3",
    price: 25000,
    camera: 12,
    rom: 32,
    ram: 4,
    battery: 4000,
    iPX: "IPX5",
  },
  {
    name: "Nokia n95",
    price: 8000,
    camera: 8,
    rome: 4,
    ram: 8,
    battery: 4500,
    iPX: "IPX7",
  },
  {
    name: "Htc h81",
    price: 18000,
    camera: 8,
    rom: 16,
    ram: 8,
    battery: 3000,
    iPX: "IPX7",
  },
  {
    name: "Oppo a2",
    price: 17000,
    camera: 8,
    rom: 16,
    ram: 6,
    battery: 3800,
    iPX: "IPX5",
  },
  {
    name: "Vivo v9",
    price: 19000,
    camera: 8,
    rom: 16,
    ram: 4,
    battery: 3900,
    iPX: "No",
  },
  {
    name: "Iphone 7",
    price: 65000,
    camera: 12,
    rom: 32,
    ram: 2,
    battery: 2800,
    iPX: "IPX7",
  },
];


// ! now we want to filter out all the phone which has price less than 20000

const filteredPhone = phone.filter((value) => value.price < 20000);
// console.log(filteredPhone);

// ! and we want to filter out all the phone which has camera less than 10

const filteredPhone2 = phone.filter((value) => value.camera < 12 && value.iPX === "IPX7");
// console.log(filteredPhone2);
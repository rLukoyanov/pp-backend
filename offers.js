let index = 0;
const offers = [
  {
    id: index++,
    salary: 45000,
    title: "Сборщик-грузчик",
    shortDescription:
      "В обязанности входят: внутрискладская переработка грузов ( разбор заказов по маршрутам доставки), а так же сортировка, укладка, перенос товара и т.д.",
    advantages: ["Без опыта", "Сменный график", "Полная занятость"],
  },
  {
    id: index++,
    salary: 50000,
    title: "Аниме дизайнер",
    shortDescription:
      "В обязанности входят: внутрискладская переработка грузов ( разбор заказов по маршрутам доставки), а так же сортировка, укладка, перенос товара и т.д.",
    advantages: ["Без опыта", "Сменный график", "Полная занятость"],
  },
  {
    id: index++,
    salary: 60000,
    title: "Сборщик",
    shortDescription:
      "В обязанности входят: внутрискладская переработка грузов ( разбор заказов по маршрутам доставки), а так же сортировка, укладка, перенос товара и т.д.",
    advantages: ["Без опыта", "Сменный график", "Полная занятость"],
  },
  {
    id: index++,
    salary: 75000,
    title: "Мусорщик",
    shortDescription:
      "В обязанности входят: внутрискладская переработка грузов ( разбор заказов по маршрутам доставки), а так же сортировка, укладка, перенос товара и т.д.",
    advantages: ["Без опыта", "Сменный график", "Полная занятость"],
  },
];

exports.sendOffers = (req, res) => {
  res.send(offers);
};

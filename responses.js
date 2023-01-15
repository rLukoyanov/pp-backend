let index = 0;

const responses = [
  {
    id: index++,
    title: "Курьер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "viwed",
  },
  {
    id: index++,
    title: "Менеджер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "unviwed",
  },
  {
    id: index++,
    title: "Старший курьер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "invite",
  },
  {
    id: index++,
    title: "Курьер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "viwed",
  },
  {
    id: index++,
    title: "Менеджер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "unviwed",
  },
  {
    id: index++,
    title: "Старший курьер",
    companyName: "Мэйджор Экспресс",
    city: "Нижнекамск",
    status: "invite",
  },
];

exports.sendResponses = (req, res) => {
  res.send(responses);
};

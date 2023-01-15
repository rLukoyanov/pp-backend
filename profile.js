const profile = {
  id: 0,
  name: "Мария",
  surName: "Иванова",

  contacts: {
    email: "example343@gmail.com",
    phoneNumber: "+79080888877",
    city: "Екатеринбург",
    university: "Уральский федеральный университет",
  },

  advantages: ["Figma", "Illustrator", "Product design", "Workflow", "ux/ui"],
};

const workExpireance = [
  {
    title: "React developer",
    place: "Volonteria",
    date: "Cентябрь 2020 - Май 2021",
    content: `
    Полная реализация сайта и сайта администраторов.
    - Адаптивная верстка.
    - Работа с WordPress
    - Работа с RestAPI
    - Реализация ssr на Next.js
    - Реализация проксирования
    
    Стек:
    - ReactJS
    - Next.js
    - Axios
    - date-fns
    - antd
    - sass`,
  },
  {
    title: "React developer",
    place: "Volonteria",
    date: "Cентябрь 2020 - Май 2021",
    content: `
    Полная реализация сайта и сайта администраторов.
    - Адаптивная верстка.
    - Работа с WordPress
    - Работа с RestAPI
    - Реализация ssr на Next.js
    - Реализация проксирования
    
    Стек:
    - ReactJS
    - Next.js
    - Axios
    - date-fns
    - antd
    - sass`,
  },
  {
    title: "React developer",
    place: "Volonteria",
    date: "Cентябрь 2020 - Май 2021",
    content: `
    Полная реализация сайта и сайта администраторов.
    - Адаптивная верстка.
    - Работа с WordPress
    - Работа с RestAPI
    - Реализация ssr на Next.js
    - Реализация проксирования
    
    Стек:
    - ReactJS
    - Next.js
    - Axios
    - date-fns
    - antd
    - sass`,
  },
];

const achievements = [
  {
    img: "",
    content:
      "Диплом призера муниципального этапа всероссийской олимпида школьников по оществознанию среди 8 классов 2019 года.",
  },
  {
    img: "",
    content:
      "Диплом призера муниципального этапа всероссийской олимпида школьников по оществознанию среди 8 классов 2019 года.",
  },
  {
    img: "",
    content:
      "Диплом призера муниципального этапа всероссийской олимпида школьников по оществознанию среди 8 классов 2019 года.",
  },
];

exports.sendProfile = (req, res) => {
  res.send(profile);
};

exports.sendWorkExp = (req, res) => {
  res.send(workExpireance);
};

exports.sendAchieves = (req, res) => {
  res.send(achievements);
};

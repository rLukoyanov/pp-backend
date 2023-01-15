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

exports.sendProfile = (req, res) => {
  res.send(profile);
};

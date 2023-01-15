"use strict";

const companyRating = [
  {
    pos: 1,
    name: "iPlast",
    industry: "Промышленность",
    studentsCount: 30,
  },
  {
    pos: 2,
    name: "iPlast",
    industry: "Промышленность",
    studentsCount: 20,
  },
  {
    pos: 3,
    name: "iPlast",
    industry: "Промышленность",
    studentsCount: 15,
  },
  {
    pos: 4,
    name: "iPlast",
    industry: "Промышленность",
    studentsCount: 5,
  },
  {
    pos: 5,
    name: "iPlast",
    industry: "Промышленность",
    studentsCount: 1,
  },
];

exports.sendRating = (req, res) => {
  res.send(companyRating);
};

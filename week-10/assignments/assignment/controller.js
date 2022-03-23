const peopleConstant = require("./people.json");

const getAll = ({ id, fname, lname, email, gender, ipAddress }) =>
  new Promise((resolve) => {
    let people = peopleConstant;

    if (id) {
      people = people.filter((item) => item.id === Number(id));
    }

    if (fname) {
      people = people.filter((item) => item.first_name === fname);
    }

    if (lname) {
      people = people.filter((item) => item.last_name === lname);
    }

    if (email) {
      people = people.filter((item) => item.email === email);
    }

    if (gender) {
      people = people.filter((item) => item.gender === gender);
    }

    if (ipAddress) {
      people = people.filter((item) => item.ip_address === ipAddress);
    }

    resolve({ code: 200, data: JSON.stringify(people) });
  });

const getById = (peopleId) =>
  new Promise((resolve) => {
    const people = peopleConstant.find((item) => item.id === Number(peopleId));

    if (people) {
      resolve({ code: 200, data: JSON.stringify(people) });
    } else {
      resolve({
        code: 404,
        data: JSON.stringify({ message: `No Person found for id ${peopleId}` }),
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

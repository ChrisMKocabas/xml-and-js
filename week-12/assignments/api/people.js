const people = require("../data/people.json");

const getAll = ({
  id,
  first_name,
  last_name,
  email,
  phone_number,
  gender,
  family,
  ip_address,
  favourite_color,
  best_friend,
  car_make,
  car_model,
  car_color,
  address,
  bitcoin_wallet,
}) =>
  new Promise((resolve) => {
    let result = Array.from(people);

    if (id) {
      result = result.filter((person) => person.id === id);
    }

    if (first_name) {
      result = result.filter((person) => person.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((person) => person.last_name === last_name);
    }

    if (email) {
      result = result.filter((person) => person.email === email);
    }
    if (phone_number) {
      result = result.filter((person) => person.phone_number === phone_number);
    }
    if (family) {
      result = result.filter((person) => person.family === family);
    }
    if (ip_address) {
      result = result.filter((person) => person.ip_address === ip_address);
    }
    if (favourite_color) {
      result = result.filter(
        (person) => person.favourite_color === favourite_color
      );
    }
    if (best_friend) {
      result = result.filter((person) => person.best_friend === best_friend);
    }
    if (car_make) {
      result = result.filter((person) => person.car_make === car_make);
    }
    if (car_model) {
      result = result.filter((person) => person.car_model === car_model);
    }
    if (car_color) {
      result = result.filter((person) => person.car_color === car_color);
    }
    if (address) {
      result = result.filter((person) => person.address === address);
    }
    if (bitcoin_wallet) {
      result = result.filter(
        (person) => person.bitcoin_wallet === bitcoin_wallet
      );
    }

    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = people.find((p) => Number(p.id) === Number(id));

    if (person) {
      resolve({ code: 200, data: person });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

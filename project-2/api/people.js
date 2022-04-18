const people = require("../data/people.json");

const getAll = ({
  id,
  name,
  occupation,
  email,
  phone,
  gender,
  married, //
  has_children, //
  criminal_record, //
  blackmailed_by,
  blackmailed_through,
  ransom_paid,
  committed_suicide, //
  murdered_blackmailer_on,
  iq_level,
} = {}) => {
  return new Promise((resolve) => {
    let result = Array.from(people);

    if (id) {
      result = result.filter((person) => person.id === id);
    }

    if (name) {
      result = result.filter((person) => person.name === name);
    }

    if (occupation) {
      result = result.filter((person) => person.occupation === occupation);
    }

    if (email) {
      result = result.filter((person) => person.email === email);
    }
    if (phone) {
      result = result.filter((person) => person.phone === phone);
    }
    if (gender) {
      result = result.filter((person) => person.gender === gender);
    }
    if (married) {
      result = result.filter((person) => person.married === married);
    }
    if (has_children) {
      result = result.filter((person) => person.has_children === has_children);
    }
    if (criminal_record) {
      result = result.filter(
        (person) => person.criminal_record === criminal_record
      );
    }
    if (blackmailed_by) {
      result = result.filter(
        (person) => person.blackmailed_by === blackmailed_by
      );
    }
    if (blackmailed_through) {
      result = result.filter(
        (person) => person.blackmailed_through === blackmailed_through
      );
    }
    if (ransom_paid) {
      result = result.filter((person) => person.ransom_paid === ransom_paid);
    }
    if (committed_suicide) {
      result = result.filter(
        (person) => person.committed_suicide === committed_suicide
      );
    }
    if (murdered_blackmailer_on) {
      result = result.filter(
        (person) => person.murdered_blackmailer_on === murdered_blackmailer_on
      );
    }
    if (iq_level) {
      result = result.filter((person) => person.iq_level === iq_level);
    }

    resolve({ code: 200, data: result });
  });
};
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

//convert to promise
const timeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const inc = async (a) => {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a + 1)));
};

const sum = async (a, b) => {
  return new Promise((resolve) => timeout(3000).then(() => resolve(a + b)));
};

const max = async (a, b) => {
  return new Promise((resolve) =>
    timeout(3000).then(() => resolve(a > b ? a : b))
  );
};

const avg = async (a, b) => {
  return new Promise((resolve) =>
    timeout(3000)
      .then(() => sum(a, b))
      .then((s) => resolve(s / 2))
  );
};

const obj = {
  name: "Marcus Aurelius",
  split(name)
};

const split = async (sep = " ") => {
  return new Promise((resolve) =>
    timeout(3000).then(() => resolve(this.name.split(sep)))
  );
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

const main = async () => {
  console.log("inc(5) =", await inc(5));
  console.log("sum(1, 3) =", await sum(1, 3));
  console.log("max(8, 6) =", await max(8, 6));
  console.log("avg(8, 6) =", await avg(8, 6));
  console.log("obj.split() =", await obj.split());
  console.log("person.split() =", await person.split());
};

main();

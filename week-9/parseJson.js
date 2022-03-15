const fs = require("fs");
let filename = `./quiz-data.json `;

fs.exists(filename, (exists) => {
  if (exists) {
    fs.stat(filename, (err, stats) => {
      if (err) {
        throw err;
      }
      if (stats.isFile()) {
        fs.readFile(filename, null, (err, data) => {
          if (err) {
            throw err;
          }
          var testdata = JSON.parse(data);
          console.log(JSON.parse(data));
        });
      } else {
        throw new Error("This location contains not a file");
      }
    });
  } else {
    throw new Error("404: file not found");
  }
});

const activeAccounts = data.filter((item) => item.isActive === true);

const highestBalance = toString(
  data.reduce((a, b) => {
    return Math.max(a, b);
  })
);

const { HobbsMacdonald, NeldaSykes, ShawWalls, BoyerRiley, GeorgeSnider } =
  data.reduce(
    (accum, account) => {
      if (account.name === "Hobbs Macdonald") {
        accum.HobbsMacdonald.push(account.friends.name);
      } else if (account.name === "Nelda Sykes") {
        accum.NeldaSykes.push(account.friends.name);
      } else if (account.name === "Shaw Walls") {
        accum.ShawWalls.push(account.friends.name);
      } else if (account.name === "Boyer Riley") {
        accum.BoyerRiley.push(account.friends.name);
      } else if (account.name === "George Snider") {
        accum.GeorgeSnider.push(account.friends);
      }

      return accum;
    },
    {
      HobbsMacdonald: [],
      NeldaSykes: [],
      ShawWalls: [],
      BoyerRiley: [],
      GeorgeSnider: [],
    }
  );

var accountHolderName = data.map(
  ((account) => {
    return account.name;
  }).join(", ")
);

console.log(activeAccounts());

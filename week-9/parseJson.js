const data = require(`./quiz-data.json`);

const getActiveAccounts = (data) =>
  data.filter(({ isActive }) => isActive === true);
console.log(getActiveAccounts(data));

const highestBalance = (data) =>
  data
    .map(({ balance }) => balance.replace(`$`, ``).replace(",", ``))
    .reduce((max, current) => (max >= current ? max : current), 0);

console.log(highestBalance(data));

const getFriends = (data) => data.map(({ friends }) => friends).flat();
console.log(getFriends(data));

// const { HobbsMacdonald, NeldaSykes, ShawWalls, BoyerRiley, GeorgeSnider } =
//   data.reduce(
//     (accum, account) => {
//       if (account.name === "Hobbs Macdonald") {
//         accum.HobbsMacdonald.push(account.friends.name);
//       } else if (account.name === "Nelda Sykes") {
//         accum.NeldaSykes.push(account.friends.name);
//       } else if (account.name === "Shaw Walls") {
//         accum.ShawWalls.push(account.friends.name);
//       } else if (account.name === "Boyer Riley") {
//         accum.BoyerRiley.push(account.friends.name);
//       } else if (account.name === "George Snider") {
//         accum.GeorgeSnider.push(account.friends);
//       }

//       return accum;
//     },
//     {
//       HobbsMacdonald: [],
//       NeldaSykes: [],
//       ShawWalls: [],
//       BoyerRiley: [],
//       GeorgeSnider: [],
//     }
//   );

const getNames = (data) => data.map(({ name }) => name).join(", ");
console.log(getNames(data));

// var accountHolderName = data.map(
//   ((account) => {
//     return account.name;
//   }).join(", ")
// );

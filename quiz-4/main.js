const { default: axios } = require("axios");

const getAllStates = require("./questions/1");
const getActiveUsers = require("./questions/2");
const getUserNameAndVehicleAge = require("./questions/3");
const getByVIN = require("./questions/4");
const getEmailDomains = require("./questions/5");

const loadData = () =>
  axios
    .get(`https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`)
    .then(({ data }) => data);

const main = async () => {
  const data = await loadData();

  console.log(`-----------------------------`);
  console.log(`Question 1: getAllStates`);
  console.log(`-----------------------------`);
  const states = await getAllStates(data);
  console.log(states);

  console.log(`-----------------------------`);
  console.log(`Question 2: getActiveUsers`);
  console.log(`-----------------------------`);
  const activeUsers = await getActiveUsers(data);
  console.log(activeUsers.length);

  console.log(`-----------------------------`);
  console.log(`Question 3: getUserNameAndVehicleAge`);
  console.log(`-----------------------------`);
  const userWithVehicleAge = await getUserNameAndVehicleAge(data);
  console.log(userWithVehicleAge);

  console.log(`-----------------------------`);
  console.log(`Question 4: getByVIN`);
  console.log(`-----------------------------`);
  const vehicle = await getByVIN(data, `XVHR864VB5CL27070`);
  console.log(vehicle);

  console.log(`-----------------------------`);
  console.log(`Question 5: getEmailDomains`);
  console.log(`-----------------------------`);
  const domains = await getEmailDomains(data);
  console.log(domains);
};

main();

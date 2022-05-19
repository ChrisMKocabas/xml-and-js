/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserNameAndVehicleAge = (data) => {
  return new Promise((resolve) => {
    let usernameAndVehicle = data;
    usernameAndVehicle = usernameAndVehicle.map((item) => ({
      userName: item.userName,
      totalAge: item.vehicle.reduce((acc, { age }) => acc + age, 0),
    }));
    resolve(usernameAndVehicle);
  });
};
module.exports = getUserNameAndVehicleAge;

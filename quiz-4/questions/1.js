/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
  return new Promise((resolve) => {
    let state = data;

    state = state.map((item) => item.address.state);

    resolve(JSON.stringify(state));
  });
};

module.exports = getAllStates;

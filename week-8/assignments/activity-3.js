const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 40);
};

const generateData = async () => {
  await timeout(1000, () => {});
  const data = Array.from({ length: 20 }, generateRandomNumber);
  return data;
};

const convertToFeet = async (meters) => {
  await timeout(3500, () => {});
  const feet = await meters.map((value) => {
    return value * 3.2808;
  });
  return feet;
};

const processData = async (data) => {
  return await data.map((value) => {
    return value;
  });
};

const logResult = async (meters, feet) => {
  console.log(`Converted ${meters}m to ${feet}ft`);
};

const main = async () => {
  console.log("Start");
  let data = await generateData();
  let meters = await processData(data);
  let feet = await convertToFeet(meters);
  let index = 0;
  meters.forEach(async (element) => {
    logResult(element, feet[index]);
    await timeout(1000, () => {});
    index += 1;
  });
  await timeout(1000, () => {});
  console.log("Finish");
};

main();

const users = [
  { username: `user1`, email: `user1@email.com` },

  { username: `user2`, email: `user2@email.com` },
];

const getUser = (username) => {
  return new Promise((resolve) =>
    resolve(
      // get user data by username from users array
      users.filter((user) => user.username === username)
    )
  );
};
const getUsers = (usernames) => {
  return new Promise((resolve) =>
    resolve(users.filter((user) => usernames.includes(user.username)))
  );
};
const main = () => {
  const userNames = [`user1`, `user2`];

  const users = getUsers(userNames);

  console.log(users);
};

main();

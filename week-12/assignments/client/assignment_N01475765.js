const loadData = (
  path // use radio buttons to filter by family and gender. Then use color picker to filter by favourite name
) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;
  console.log(nameTerm);

  if (nameTerm && nameTerm[0]) {
    source = source.filter(
      ({
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
        last_name.toLowerCase().includes(nameTerm[0]) ||
        first_name.toLowerCase().includes(nameTerm[0]) ||
        email.toLowerCase().includes(nameTerm[0]) ||
        phone_number.includes(nameTerm[0]) ||
        gender.toLowerCase() === nameTerm[0] ||
        String(family) === nameTerm[0] ||
        ip_address.includes(nameTerm[0]) ||
        favourite_color.toLowerCase().concat(".color").includes(nameTerm[0]) ||
        best_friend.toLowerCase().includes(nameTerm[0]) ||
        car_make.toLowerCase().includes(nameTerm[0]) ||
        car_model.toLowerCase().includes(nameTerm[0]) ||
        car_color.toLowerCase().includes(nameTerm[0]) ||
        address.toLowerCase().includes(nameTerm[0]) ||
        bitcoin_wallet.toLowerCase().includes(nameTerm[0])
    );
  }

  if (nameTerm && nameTerm[1]) {
    source = source.filter(
      ({
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
        last_name.toLowerCase().includes(nameTerm[1]) ||
        first_name.toLowerCase().includes(nameTerm[1]) ||
        email.toLowerCase().includes(nameTerm[1]) ||
        phone_number.includes(nameTerm[1]) ||
        gender.toLowerCase() === nameTerm[1] ||
        String(family) === nameTerm[1] ||
        ip_address.includes(nameTerm[1]) ||
        favourite_color.toLowerCase().concat(".color").includes(nameTerm[1]) ||
        best_friend.toLowerCase().includes(nameTerm[1]) ||
        car_make.toLowerCase().includes(nameTerm[1]) ||
        car_model.toLowerCase().includes(nameTerm[1]) ||
        car_color.toLowerCase().includes(nameTerm[1]) ||
        address.toLowerCase().includes(nameTerm[1]) ||
        bitcoin_wallet.toLowerCase().includes(nameTerm[1])
    );
  }

  if (nameTerm && nameTerm[2]) {
    source = source.filter(
      ({
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
        last_name.toLowerCase().includes(nameTerm[2]) ||
        first_name.toLowerCase().includes(nameTerm[2]) ||
        email.toLowerCase().includes(nameTerm[2]) ||
        phone_number.includes(nameTerm[2]) ||
        gender.toLowerCase() === nameTerm[2] ||
        String(family) === nameTerm[2] ||
        ip_address.includes(nameTerm[2]) ||
        favourite_color.toLowerCase().concat(".color").includes(nameTerm[2]) ||
        best_friend.toLowerCase().includes(nameTerm[2]) ||
        car_make.toLowerCase().includes(nameTerm[2]) ||
        car_model.toLowerCase().includes(nameTerm[2]) ||
        car_color.toLowerCase().includes(nameTerm[2]) ||
        address.toLowerCase().includes(nameTerm[2]) ||
        bitcoin_wallet.toLowerCase().includes(nameTerm[2])
    );
  }

  if (nameTerm && nameTerm[3]) {
    source = source.filter(
      ({
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
        last_name.toLowerCase().includes(nameTerm[3]) ||
        first_name.toLowerCase().includes(nameTerm[3]) ||
        email.toLowerCase().includes(nameTerm[3]) ||
        phone_number.includes(nameTerm[3]) ||
        gender.toLowerCase() === nameTerm[3] ||
        String(family) === nameTerm[3] ||
        ip_address.includes(nameTerm[3]) ||
        favourite_color.toLowerCase().concat(".color").includes(nameTerm[3]) ||
        best_friend.toLowerCase().includes(nameTerm[3]) ||
        car_make.toLowerCase().includes(nameTerm[3]) ||
        car_model.toLowerCase().includes(nameTerm[3]) ||
        car_color.toLowerCase().includes(nameTerm[3]) ||
        address.toLowerCase().includes(nameTerm[3]) ||
        bitcoin_wallet.toLowerCase().includes(nameTerm[3])
    );
  }

  const rows = source.reduce(
    (
      acc,
      {
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
      }
    ) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${phone_number}</td>
      <td>${gender}</td><td>${family}</td><td>${ip_address}</td><td>${favourite_color}</td><td>${best_friend}</td><td>${car_make}</td>
      <td>${car_model}</td><td>${car_color}</td><td>${address}</td><td>${bitcoin_wallet}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`./people.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = [];
  if (event.target.name.value) {
    term.push(event.target.name.value.toLowerCase());
  }
  if (document.querySelector('input[name="gender"]:checked') !== null) {
    term.push(document.querySelector('input[name="gender"]:checked').value);
  }

  if (document.querySelector('input[name="marital_status"]:checked') !== null) {
    term.push(
      document.querySelector('input[name="marital_status"]:checked').value ===
        "married"
        ? "true"
        : "false"
    );
  }

  if (document.getElementById("colors").value) {
    term.push(document.getElementById("colors").value + `.color`);
  }

  loadData(`./people.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
  loadData(`./people.json`).then((data) => renderTable(data));
};

// const renderTable = () => {
//   const table = document.getElementById("my-table");

//   if (!table) {
//     throw new Error("No table element found");
//   }

//   const withFilters = Boolean(window.location.search);

//   if (withFilters) {
//     const params = new URLSearchParams(window.location.search);
//     const nameTerm = params.get(`name`).toLowerCase();
//     const inputControl = document.getElementById(`input-name-term`);
//     inputControl.value = nameTerm;

//     data = data.filter(
//       ({ first_name, last_name, email, gender, ip_address }) =>
//         last_name.toLowerCase().includes(nameTerm) ||
//         first_name.toLowerCase().includes(nameTerm) ||
//         email.toLowerCase().includes(nameTerm) ||
//         gender.toLowerCase().includes(nameTerm) ||
//         ip_address.includes(nameTerm)
//     );
//   }

//   const rows = data.map(
//     ({ id, first_name, last_name, email, gender, ip_address }) =>
//       table.appendChild(
//         htmlToElement(
//           `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`
//         )
//       )
//   );
// };

// renderTable();

// const onReset = () => {
//   window.location.replace(window.location.pathname);
// };

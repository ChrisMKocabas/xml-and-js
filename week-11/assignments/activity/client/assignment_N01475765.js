const loadData = (path) =>
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

  if (nameTerm) {
    source = source.filter(
      ({ first_name, last_name, email, gender, ip_address }) =>
        last_name.toLowerCase().includes(nameTerm) ||
        first_name.toLowerCase().includes(nameTerm) ||
        email.toLowerCase().includes(nameTerm) ||
        gender.toLowerCase().includes(nameTerm) ||
        ip_address.includes(nameTerm)
    );
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, gender, ip_address }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`./people.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value.toLowerCase();

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

const { getAll } = require("./api/people.js");

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
        name,
        occupation,
        email,
        phone,
        gender,
        married,
        has_children,
        criminal_record,
        blackmailed_by,
        blackmailed_through,
        ransom_paid,
        committed_suicide,
        murdered_blackmailer_on,
        iq_level,
      }) =>
        name.toLowerCase().includes(nameTerm[0]) ||
        occupation.toLowerCase().includes(nameTerm[0]) ||
        email.toLowerCase().includes(nameTerm[0]) ||
        phone.includes(nameTerm[0]) ||
        gender.toLowerCase() === nameTerm[0] ||
        String(married) === nameTerm[0] ||
        has_children.toLowerCase().concat(".children").includes(nameTerm[0]) ||
        criminal_record
          .toLowerCase()
          .concat(".criminal")
          .includes(nameTerm[0]) ||
        blackmailed_by.toLowerCase().includes(nameTerm[0]) ||
        blackmailed_through.toLowerCase().includes(nameTerm[0]) ||
        ransom_paid.includes(nameTerm[0]) ||
        committed_suicide
          .toLowerCase()
          .concat(".suicide")
          .includes(nameTerm[0]) ||
        murdered_blackmailer_on.includes(nameTerm[0]) ||
        iq_level === nameTerm[0]
    );
  }

  if (nameTerm && nameTerm[1]) {
    source = source.filter(
      ({
        name,
        occupation,
        email,
        phone,
        gender,
        married,
        has_children,
        criminal_record,
        blackmailed_by,
        blackmailed_through,
        ransom_paid,
        committed_suicide,
        murdered_blackmailer_on,
        iq_level,
      }) =>
        name.toLowerCase().includes(nameTerm[1]) ||
        occupation.toLowerCase().includes(nameTerm[1]) ||
        email.toLowerCase().includes(nameTerm[1]) ||
        phone.includes(nameTerm[1]) ||
        gender.toLowerCase() === nameTerm[1] ||
        String(married) === nameTerm[1] ||
        has_children.toLowerCase().concat(".children").includes(nameTerm[1]) ||
        criminal_record
          .toLowerCase()
          .concat(".criminal")
          .includes(nameTerm[1]) ||
        blackmailed_by.toLowerCase().includes(nameTerm[1]) ||
        blackmailed_through.toLowerCase().includes(nameTerm[1]) ||
        ransom_paid.includes(nameTerm[1]) ||
        committed_suicide
          .toLowerCase()
          .concat(".suicide")
          .includes(nameTerm[1]) ||
        murdered_blackmailer_on.includes(nameTerm[1]) ||
        iq_level === nameTerm[1]
    );
  }

  if (nameTerm && nameTerm[2]) {
    source = source.filter(
      ({
        name,
        occupation,
        email,
        phone,
        gender,
        married,
        has_children,
        criminal_record,
        blackmailed_by,
        blackmailed_through,
        ransom_paid,
        committed_suicide,
        murdered_blackmailer_on,
        iq_level,
      }) =>
        name.toLowerCase().includes(nameTerm[2]) ||
        occupation.toLowerCase().includes(nameTerm[2]) ||
        email.toLowerCase().includes(nameTerm[2]) ||
        phone.includes(nameTerm[2]) ||
        gender.toLowerCase() === nameTerm[2] ||
        String(married) === nameTerm[2] ||
        has_children.toLowerCase().concat(".children").includes(nameTerm[2]) ||
        criminal_record
          .toLowerCase()
          .concat(".criminal")
          .includes(nameTerm[2]) ||
        blackmailed_by.toLowerCase().includes(nameTerm[2]) ||
        blackmailed_through.toLowerCase().includes(nameTerm[2]) ||
        ransom_paid.includes(nameTerm[2]) ||
        committed_suicide
          .toLowerCase()
          .concat(".suicide")
          .includes(nameTerm[2]) ||
        murdered_blackmailer_on.includes(nameTerm[2]) ||
        iq_level === nameTerm[2]
    );
  }

  if (nameTerm && nameTerm[3]) {
    source = source.filter(
      ({
        name,
        occupation,
        email,
        phone,
        gender,
        married,
        has_children,
        criminal_record,
        blackmailed_by,
        blackmailed_through,
        ransom_paid,
        committed_suicide,
        murdered_blackmailer_on,
        iq_level,
      }) =>
        name.toLowerCase().includes(nameTerm[3]) ||
        occupation.toLowerCase().includes(nameTerm[3]) ||
        email.toLowerCase().includes(nameTerm[3]) ||
        phone.includes(nameTerm[3]) ||
        gender.toLowerCase() === nameTerm[3] ||
        String(married) === nameTerm[3] ||
        has_children.toLowerCase().concat(".children").includes(nameTerm[3]) ||
        criminal_record
          .toLowerCase()
          .concat(".criminal")
          .includes(nameTerm[3]) ||
        blackmailed_by.toLowerCase().includes(nameTerm[3]) ||
        blackmailed_through.toLowerCase().includes(nameTerm[3]) ||
        ransom_paid.includes(nameTerm[3]) ||
        committed_suicide
          .toLowerCase()
          .concat(".suicide")
          .includes(nameTerm[3]) ||
        murdered_blackmailer_on.includes(nameTerm[3]) ||
        iq_level === nameTerm[3]
    );
  }

  const rows = source.reduce(
    (
      acc,
      {
        id,
        name,
        occupation,
        email,
        phone,
        gender,
        married, //
        has_children, //
        criminal_record, //
        blackmailed_by,
        blackmailed_through,
        ransom_paid,
        committed_suicide, //
        murdered_blackmailer_on,
        iq_level,
      }
    ) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${name}</td><td>${occupation}</td><td>${email}</td><td>${phone}</td>
      <td>${gender}</td><td>${married}</td><td>${has_children}</td><td>${criminal_record}</td><td>${blackmailed_by}</td><td>${blackmailed_through}</td>
      <td>${ransom_paid}</td><td>${committed_suicide}</td><td>${murdered_blackmailer_on}</td><td>${iq_level}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

// loadData(`./people.json`).then((data) => renderTable(data));
getAll().then(({ data }) => renderTable(data));

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
  if (document.querySelector('input[name="children"]:checked') !== null) {
    term.push(
      document.querySelector('input[name="children"]:checked').value ===
        "has-kids"
        ? "true.kids"
        : "false.kids"
    );
  }
  if (
    document.querySelector('input[name="criminal-record"]:checked') !== null
  ) {
    term.push(
      document.querySelector('input[name="criminal-record"]:checked').value ===
        "has-record"
        ? "true.criminal"
        : "false.criminal"
    );
  }

  if (document.querySelector('input[name="suicide"]:checked') !== null) {
    term.push(
      document.querySelector('input[name="suicide"]:checked').value ===
        "committed-suicide"
        ? "true.suicide"
        : "false.suicide"
    );
  }

  // loadData(`./people.json`).then((data) => renderTable(data, term));
  getAll().then(({ data }) => renderTable(data, term));
};

const form = document.getElementById(`myForm`);

form.onReset = () => {
  // loadData(`./people.json`).then((data) => renderTable(data));
  getAll().then(({ data }) => renderTable(data));
};

const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};

const loadData = (path) => {
  return new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });
};

const generateTableRow = (item) => {
  const id = Array.from(item.getElementsByTagName(`id`))[0];
  const firstname = Array.from(item.getElementsByTagName(`firstname`))[0];
  const lastname = Array.from(item.getElementsByTagName(`lastname`))[0];
  const email = Array.from(item.getElementsByTagName(`email`))[0];
  const gender = Array.from(item.getElementsByTagName(`gender`))[0];
  const ip = Array.from(item.getElementsByTagName(`ip`))[0];

  return `<tr>
          <td>${id.textContent}</td>
          <td>${firstname.textContent} ${lastname.textContent}</td>
          <td>${email.textContent}</td>
          <td>${gender.textContent}</td>
          <td>${ip.textContent}</td>
      </tr>`;
};

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let nodes = Array.from(data.documentElement.childNodes).filter(
    ({ nodeName }) => nodeName === `person`
  );

  if (nameTerm) {
    nodes = nodes.filter(
      (node) =>
        Array.from(node.getElementsByTagName(`firstname`))[0]
          .textContent.toLowerCase()
          .includes(nameTerm) ||
        Array.from(node.getElementsByTagName(`lastname`))[0]
          .textContent.toLowerCase()
          .includes(nameTerm)
    );
  }

  tableBody.innerHTML = " ";

  nodes.map((personNode) =>
    tableBody.appendChild(htmlToElement(generateTableRow(personNode)))
  );
};

loadData(`./people.xml`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const nameTerm = event.target.name.value.toLowerCase();
  console.log(nameTerm);

  loadData(`./people.xml`).then((data) => renderTable(data, nameTerm));
};

const onReset = () => {
  loadData(`./people.xml`).then((data) => renderTable(data));
};

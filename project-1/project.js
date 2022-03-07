const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

const loadData = (path, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = ({ target }) => {
    if (target.readyState == 4 && target.status == 200) {
      callback(target.responseXML);
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
};

const generateTableRow = (item) => {
  const id = item.getAttribute(`id`);
  const author = Array.from(item.getElementsByTagName(`author`))[0];
  const sex = author.attributes[0].textContent;
  const title = Array.from(item.getElementsByTagName(`title`))[0];
  const lang = title.attributes[0].textContent;
  const genre = Array.from(item.getElementsByTagName(`genre`))[0];
  const price = Array.from(item.getElementsByTagName(`price`))[0];
  const publish_date = Array.from(item.getElementsByTagName(`publish_date`))[0];

  return `<tr>
    <td>${id}</td>
    <td>${author.textContent}</td>
    <td>${sex}</td>
    <td>${title.textContent}</td>
    <td>${lang}</td>
    <td>${genre.textContent}</td>
    <td>${price.textContent}</td>
    <td>${publish_date.textContent}</td>

  </tr>`;
};

const renderTable = (xmlData) => {
  const table = document.getElementById("project-table");

  if (!table) {
    throw new Error("No table element found");
  }

  const nodes = Array.from(xmlData.documentElement.childNodes).filter(
    ({ nodeName }) => nodeName === `book`
  );

  let filteredForm;
  const filterMe = Boolean(window.location.search);

  // Filter the xml nodes and display according to search parameters
  if (filterMe) {
    //As the form reloads the input & check boxes values are lost so set them back
    const params = new URLSearchParams(window.location.search);

    //Input search term
    const search_term = params.get(`search`).toLowerCase();

    const input = document.getElementById(`input-search-data`);
    input.value = search_term;

    //Here are the gender checboxes
    let genders = [];

    if (params.get(`gender1`)) {
      genders.push(params.get(`gender1`).toLowerCase());
      document.getElementById(`gender1`).checked = true;
    }
    if (params.get(`gender2`)) {
      genders.push(params.get(`gender2`).toLowerCase());
      document.getElementById(`gender2`).checked = true;
    }

    if (genders.length == 0) {
      //If gender isnt selected filter by search term only
      filteredForm = nodes.filter(
        (obj) =>
          //add search capability to all text fields
          obj
            .getElementsByTagName("author")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
          obj
            .getElementsByTagName("title")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
          obj
            .getElementsByTagName("title")[0]
            .attributes[0].textContent.toLowerCase()
            .includes(search_term) ||
          obj
            .getElementsByTagName("genre")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
          obj
            .getElementsByTagName("price")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
          obj
            .getElementsByTagName("publish_date")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
          obj.getAttribute("id").toLowerCase().includes(search_term)
      );
    } else {
      //If gender checkboxes are selected fitlter by search+gender
      filteredForm = nodes.filter(
        (obj) =>
          //add search capability to all text fields
          (obj
            .getElementsByTagName("author")[0]
            .textContent.toLowerCase()
            .includes(search_term) ||
            obj
              .getElementsByTagName("title")[0]
              .textContent.toLowerCase()
              .includes(search_term) ||
            obj
              .getElementsByTagName("title")[0]
              .attributes[0].textContent.toLowerCase()
              .includes(search_term) ||
            obj
              .getElementsByTagName("genre")[0]
              .textContent.toLowerCase()
              .includes(search_term) ||
            obj
              .getElementsByTagName("price")[0]
              .textContent.toLowerCase()
              .includes(search_term) ||
            obj
              .getElementsByTagName("publish_date")[0]
              .textContent.toLowerCase()
              .includes(search_term) ||
            obj.getAttribute("id").toLowerCase().includes(search_term)) &&
          genders.find(
            (element) =>
              element ==
              obj
                .getElementsByTagName(`author`)[0]
                .attributes[0].textContent.toLowerCase()
          )
      );
    }
  } else {
    // If no filter input is present, display all nodes
    filteredForm = nodes;
  }

  filteredForm.map((booknode) =>
    table.appendChild(htmlToElement(generateTableRow(booknode)))
  );
};

loadData("./project.xml", renderTable);

const onReset = () => {
  window.location.replace(window.location.pathname);
};

//just duplicate and reuse submit button when checkboxes are selected
function checkBoxSelect() {
  document.getElementById("searchBook").submit();
}

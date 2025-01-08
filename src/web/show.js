const GAS_API_URL = "Enter your gas web app url";
const SHEET_NAME = "Enter your sheet name";

fetch(GAS_API_URL)
  .then((res) => res.json())
  .then(
    (cont) => (document.getElementById(SHEET_NAME).textContent = cont.status),
  )
  .then((show) => {});

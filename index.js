import { Filters, Table } from "./components";

const root = document.getElementById("root");

function render() {
  root.innerHTML = `
    ${Filters()}
    ${Table()}
  `;
}

render();

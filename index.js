//

import { Filters, Table } from "./components";
import { catalog } from "./lib";
import store from "./store";

const root = document.getElementById("root");

function render() {
  root.innerHTML = `
  ${Filters()}
  ${Table()}
  `;
}

store.setData(catalog);

render();

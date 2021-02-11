// Must DESTRUCTURE NAMED COMPONENTS
import { Filters, Table } from "./components";
import { catalog } from "./lib";
import store from "./store";

const root = document.getElementById("root");

function render() {
  root.innerHTML = `
  ${Filters()}
  ${Table()}
  `;

  root
    .querySelector("#in-stock")
    .addEventListener("change", function handleChange() {
      if (store.getDataFilters().inStock) {
        store.setDataFilters(this.dataset.filter, null);
      } else {
        store.setDataFilters(this.dataset.filter, ({ stocked }) => stocked);
      }
      render();
    });
}

store.setData(catalog);

// This takes care of the 'view'
render();

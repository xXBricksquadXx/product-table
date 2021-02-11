import store from "~/store";

// TODO: Apply checked attribute if there is an 'inStock' Filter in store.getFilters
export default () => `<div>
  <label for="in-stock">In Stock Only?</label
  ><input type="checkbox" id="in-stock" data-filter="inStock" ${
    store.getDataFilters().inStock ? "checked" : ""
  } />
</div>
`;

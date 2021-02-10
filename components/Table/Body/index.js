// TODO: Avoid pulling data in directly to a component.

import store from "~/store";

function renderTableRows() {
  return store
    .getData()
    .map(
      (product) => `<tr>
  <td>${product.category}</td>
  <td>${product.name}</td>
  <td>${product.price}</td>
</tr>
`
    )
    .join("\n");
}

export default () => `
  <tbody>
    ${renderTableRows()}
  </tbody>
`;

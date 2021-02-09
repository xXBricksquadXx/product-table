// TODO: Avoid pulling data in directly to a component.
import { catalog } from "~/lib";
import TRow from "./Row";

console.log(TRow);

function renderTableRows() {
  return catalog
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

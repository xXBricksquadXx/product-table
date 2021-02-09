import TBody from "./Body";
import THead from "./Head";

export default () => `<table>
  ${THead()}
  ${TBody()}
</table>`;

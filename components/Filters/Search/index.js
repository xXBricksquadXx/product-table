import store from "~/store";

export default () => `<div>
  <label for="search" class="screen-reader-text">Product Search</label
  ><input type="search" id="search" placeholder="🔍" value="${store.getCurrentSearchTerm()}"/>
</div>
`;

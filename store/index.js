// TODO: Create a data store for 'single source of truth' and 'uni-direction data flow' pattern(s)
export default {
  // This will end up keeping the whole catalog
  data: [],
  getData() {
    // TODO: Apply appropriate filters to get the filtered product list
    return this.data;
  },

  setData(newData) {
    // 'concat' is 'non-mutating'
    this.data = this.data.concat(newData);
  },
};

export default {
  // This will end up keeping the whole catalog
  data: [],
  dataFilters: {},
  getData() {
    return Object.values(this.dataFilters)
      .filter((dataFilter) => dataFilter)
      .reduce(
        // Keep filtering the data using as many filters as there are
        (filteredData, currentFilter) => filteredData.filter(currentFilter),
        // Initialize with the full set of data
        this.data
      );
  },
  getDataFilters() {
    return this.dataFilters;
  },
  setData(newData) {
    // 'concat' is 'non-mutating'
    this.data = this.data.concat(newData);
  },

  // TODO: Consider filing a GH issue for this failed linting
  setDataFilters(filterName, cb) {
    this.dataFilters = { ...this.dataFilters, [filterName]: cb };
  },
};

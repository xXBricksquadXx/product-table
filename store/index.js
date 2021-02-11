export default {
  // This is the 'state'
  currentSearchTerm: "",
  data: [],
  dataFilters: {},
  // These are our 'store actions'
  getCurrentSearchTerm() {
    return this.currentSearchTerm;
  },
  getData() {
    return Object.values(this.dataFilters)
      .filter((dataFilter) => dataFilter)
      .reduce(
        // Keep filtering the data one filter at a time
        (filteredData, currentFilter) => filteredData.filter(currentFilter),
        // Initialize with the full array of the catalog items
        this.data
      );
  },
  getDataFilters() {
    return this.dataFilters;
  },
  setCurrentSearchTerm(newSearchTerm) {
    this.currentSearchTerm = newSearchTerm;
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

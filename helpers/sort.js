const sort = (arr, comparer) => arr.sort(comparer);
const sortAsc = arr => arr.sort((a, b) => a - b);
const sortDesc = arr => arr.sort((a, b) => b - a);
 
module.exports = {sort, sortAsc, sortDesc}

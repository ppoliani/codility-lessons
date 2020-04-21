const sum = list => list.reduce((s, item) => s + item, 0);
const sumAbs = list => list.reduce((s, item) => s + Math.abs(item), 0);
const max = list => list.reduce((max, i) => i > max ? i : max);
const avg = list => sum(list) / list.length;

module.exports = {sum, sumAbs, max, avg}

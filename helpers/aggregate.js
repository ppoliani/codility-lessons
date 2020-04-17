const sum = list => list.reduce((s, item) => s + item, 0);
const sumAbs = list => list.reduce((s, item) => s + Math.abs(item), 0);

module.exports = {sum, sumAbs}

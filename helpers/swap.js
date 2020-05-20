const swap = (list, a, b) => {
  let tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;

  return list;
}

const swap2 = (list, a, b) => {
  [list[a], list[b]] = [list[b], list[a]]
  return list;
}

module.exports = swap;

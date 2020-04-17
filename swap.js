const swap = (list, a, b) => {
  let tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;

  return list;
}

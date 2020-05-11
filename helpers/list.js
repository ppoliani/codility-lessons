const list = arr => {
  const iterator = {
    *[Symbol.iterator]() {
      for (let i = 0; i < arr.length; i++) {
        yield arr[i];
      }
    }
  }

  return iterator;
}

module.exports = {list}

const cache = {};

const memoize  = (func, paramSelector) => (...args) => {     
  const key = JSON.stringify(paramSelector(args));

  if (cache[key]){
   return cache[key];
  }
  else{
    const val = func(...args);
    cache[key] = val;
    return val;
  }
}

module.exports = memoize;

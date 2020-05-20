
const swap = require('./swap');

const permute = (list, startIndex, endIndex, func) => {
  if(startIndex === endIndex) {
    func(list);
  }
  else {
    for (let i = startIndex; i <= endIndex; i++)  {  
      list = swap(list, startIndex, i);  
      permute(list, startIndex + 1, endIndex);  
      list = swap(list, startIndex, i);  
    }
  }
}

module.exports = {permute}

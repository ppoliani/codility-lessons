
const permute = (list, startIndex, endIndex) => {
  if(startIndex === endIndex) {
    const copy = list.slice();
    execTimes.push(findTime(copy, copy.splice(0, 1)[0]));
  }
  else {
    for (let i = startIndex; i <= endIndex; i++)  {  
        list = swap(list, startIndex, i);  
        permute(list, startIndex+1, endIndex);  
        list = swap(list, startIndex, i);  
    }
  }
}

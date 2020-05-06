const catepillar = (A, s) => {
  const n = A.length;
  let front = 0;
  let total = 0;

  for (let back = 0; back < n; back++) {
    while(front < n && total + A[front] <= s) {
      total += A[front];
      front += 1;
    }

    if(total === s) return true;
    total -= A[back];
  }
}


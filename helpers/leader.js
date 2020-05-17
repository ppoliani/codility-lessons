const leader = A => {
  const N = A.length;
  const stack = [A[0]];
  const push = item => stack.push(item);
  const pop = () => stack.pop();

  for (let i = 1; i < N; i++) {
    push(A[i]);

    if(stack.length >= 2) {
      const top1 = pop();
      const top2 = pop();

      if(top1 === top2) {
        push(top2);
        push(top1);
      }
    }
  }

  const candidate = stack[0];
  let count = 0;

  for (let i = 0; i < N; i++) {
    if(A[i] === candidate) count += 1;
  }

  return count > N / 2 ? candidate : -1;
}


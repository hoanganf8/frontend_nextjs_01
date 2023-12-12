export const fibonaci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
};

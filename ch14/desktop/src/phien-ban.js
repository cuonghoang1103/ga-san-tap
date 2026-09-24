// Desktop: so sanh hai phien ban x.y.z.
export const moiHon = (a, b) => {
  const [x, y] = [a, b].map((s) => s.split('.').map(Number));
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
};

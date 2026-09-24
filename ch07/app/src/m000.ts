export interface T0 { id: number; ten: string; con: T0[]; the: Record<string, number> }
export type U0<K extends keyof T0> = { [P in K]: T0[P] extends number ? string : T0[P] };
export function f0(x: T0, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f0(c, 1);
  
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g0 = <K extends keyof T0>(o: T0, k: K): U0<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U0<K>[K];

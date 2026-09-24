import { f77, T77 } from './m077';
import { f30, T30 } from './m030';
import { f104, T104 } from './m104';
export interface T319 { id: number; ten: string; con: T319[]; the: Record<string, number> }
export type U319<K extends keyof T319> = { [P in K]: T319[P] extends number ? string : T319[P] };
export function f319(x: T319, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f319(c, 1);
  s += f77({ id: s, ten: 'a', con: [], the: {} } as T77);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g319 = <K extends keyof T319>(o: T319, k: K): U319<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U319<K>[K];

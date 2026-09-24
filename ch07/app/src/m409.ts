import { f133, T133 } from './m133';
import { f188, T188 } from './m188';
import { f65, T65 } from './m065';
export interface T409 { id: number; ten: string; con: T409[]; the: Record<string, number> }
export type U409<K extends keyof T409> = { [P in K]: T409[P] extends number ? string : T409[P] };
export function f409(x: T409, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f409(c, 1);
  s += f133({ id: s, ten: 'a', con: [], the: {} } as T133);s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);s += f65({ id: s, ten: 'a', con: [], the: {} } as T65);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g409 = <K extends keyof T409>(o: T409, k: K): U409<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U409<K>[K];

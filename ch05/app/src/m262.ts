import { f226, T226 } from './m226';
import { f10, T10 } from './m010';
import { f84, T84 } from './m084';
export interface T262 { id: number; ten: string; con: T262[]; the: Record<string, number> }
export type U262<K extends keyof T262> = { [P in K]: T262[P] extends number ? string : T262[P] };
export function f262(x: T262, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f262(c, 1);
  s += f226({ id: s, ten: 'a', con: [], the: {} } as T226);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f84({ id: s, ten: 'a', con: [], the: {} } as T84);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g262 = <K extends keyof T262>(o: T262, k: K): U262<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U262<K>[K];

import { f145, T145 } from './m145';
import { f184, T184 } from './m184';
import { f13, T13 } from './m013';
export interface T186 { id: number; ten: string; con: T186[]; the: Record<string, number> }
export type U186<K extends keyof T186> = { [P in K]: T186[P] extends number ? string : T186[P] };
export function f186(x: T186, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f186(c, 1);
  s += f145({ id: s, ten: 'a', con: [], the: {} } as T145);s += f184({ id: s, ten: 'a', con: [], the: {} } as T184);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g186 = <K extends keyof T186>(o: T186, k: K): U186<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U186<K>[K];

import { f373, T373 } from './m373';
import { f13, T13 } from './m013';
import { f52, T52 } from './m052';
export interface T419 { id: number; ten: string; con: T419[]; the: Record<string, number> }
export type U419<K extends keyof T419> = { [P in K]: T419[P] extends number ? string : T419[P] };
export function f419(x: T419, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f419(c, 1);
  s += f373({ id: s, ten: 'a', con: [], the: {} } as T373);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g419 = <K extends keyof T419>(o: T419, k: K): U419<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U419<K>[K];

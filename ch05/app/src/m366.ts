import { f365, T365 } from './m365';
import { f54, T54 } from './m054';
import { f104, T104 } from './m104';
export interface T366 { id: number; ten: string; con: T366[]; the: Record<string, number> }
export type U366<K extends keyof T366> = { [P in K]: T366[P] extends number ? string : T366[P] };
export function f366(x: T366, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f366(c, 1);
  s += f365({ id: s, ten: 'a', con: [], the: {} } as T365);s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g366 = <K extends keyof T366>(o: T366, k: K): U366<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U366<K>[K];

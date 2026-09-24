import { f62, T62 } from './m062';
import { f66, T66 } from './m066';
import { f52, T52 } from './m052';
export interface T207 { id: number; ten: string; con: T207[]; the: Record<string, number> }
export type U207<K extends keyof T207> = { [P in K]: T207[P] extends number ? string : T207[P] };
export function f207(x: T207, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f207(c, 1);
  s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g207 = <K extends keyof T207>(o: T207, k: K): U207<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U207<K>[K];

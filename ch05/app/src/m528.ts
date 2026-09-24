import { f135, T135 } from './m135';
import { f388, T388 } from './m388';
import { f103, T103 } from './m103';
export interface T528 { id: number; ten: string; con: T528[]; the: Record<string, number> }
export type U528<K extends keyof T528> = { [P in K]: T528[P] extends number ? string : T528[P] };
export function f528(x: T528, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f528(c, 1);
  s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);s += f388({ id: s, ten: 'a', con: [], the: {} } as T388);s += f103({ id: s, ten: 'a', con: [], the: {} } as T103);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g528 = <K extends keyof T528>(o: T528, k: K): U528<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U528<K>[K];

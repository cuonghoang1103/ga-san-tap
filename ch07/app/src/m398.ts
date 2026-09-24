import { f289, T289 } from './m289';
import { f18, T18 } from './m018';
import { f188, T188 } from './m188';
export interface T398 { id: number; ten: string; con: T398[]; the: Record<string, number> }
export type U398<K extends keyof T398> = { [P in K]: T398[P] extends number ? string : T398[P] };
export function f398(x: T398, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f398(c, 1);
  s += f289({ id: s, ten: 'a', con: [], the: {} } as T289);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g398 = <K extends keyof T398>(o: T398, k: K): U398<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U398<K>[K];

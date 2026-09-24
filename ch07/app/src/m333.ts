import { f257, T257 } from './m257';
import { f285, T285 } from './m285';
import { f105, T105 } from './m105';
export interface T333 { id: number; ten: string; con: T333[]; the: Record<string, number> }
export type U333<K extends keyof T333> = { [P in K]: T333[P] extends number ? string : T333[P] };
export function f333(x: T333, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f333(c, 1);
  s += f257({ id: s, ten: 'a', con: [], the: {} } as T257);s += f285({ id: s, ten: 'a', con: [], the: {} } as T285);s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g333 = <K extends keyof T333>(o: T333, k: K): U333<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U333<K>[K];

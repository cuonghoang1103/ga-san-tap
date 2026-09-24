import { f50, T50 } from './m050';
import { f41, T41 } from './m041';
import { f54, T54 } from './m054';
export interface T70 { id: number; ten: string; con: T70[]; the: Record<string, number> }
export type U70<K extends keyof T70> = { [P in K]: T70[P] extends number ? string : T70[P] };
export function f70(x: T70, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f70(c, 1);
  s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g70 = <K extends keyof T70>(o: T70, k: K): U70<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U70<K>[K];

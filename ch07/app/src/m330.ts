import { f160, T160 } from './m160';
import { f66, T66 } from './m066';
import { f133, T133 } from './m133';
export interface T330 { id: number; ten: string; con: T330[]; the: Record<string, number> }
export type U330<K extends keyof T330> = { [P in K]: T330[P] extends number ? string : T330[P] };
export function f330(x: T330, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f330(c, 1);
  s += f160({ id: s, ten: 'a', con: [], the: {} } as T160);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f133({ id: s, ten: 'a', con: [], the: {} } as T133);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g330 = <K extends keyof T330>(o: T330, k: K): U330<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U330<K>[K];

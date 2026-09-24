import { f156, T156 } from './m156';
import { f58, T58 } from './m058';
import { f30, T30 } from './m030';
export interface T593 { id: number; ten: string; con: T593[]; the: Record<string, number> }
export type U593<K extends keyof T593> = { [P in K]: T593[P] extends number ? string : T593[P] };
export function f593(x: T593, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f593(c, 1);
  s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);s += f58({ id: s, ten: 'a', con: [], the: {} } as T58);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g593 = <K extends keyof T593>(o: T593, k: K): U593<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U593<K>[K];

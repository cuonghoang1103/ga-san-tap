import { f52, T52 } from './m052';
import { f36, T36 } from './m036';
import { f139, T139 } from './m139';
export interface T152 { id: number; ten: string; con: T152[]; the: Record<string, number> }
export type U152<K extends keyof T152> = { [P in K]: T152[P] extends number ? string : T152[P] };
export function f152(x: T152, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f152(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f36({ id: s, ten: 'a', con: [], the: {} } as T36);s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g152 = <K extends keyof T152>(o: T152, k: K): U152<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U152<K>[K];

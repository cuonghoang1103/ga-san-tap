import { f337, T337 } from './m337';
import { f384, T384 } from './m384';
import { f342, T342 } from './m342';
export interface T400 { id: number; ten: string; con: T400[]; the: Record<string, number> }
export type U400<K extends keyof T400> = { [P in K]: T400[P] extends number ? string : T400[P] };
export function f400(x: T400, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f400(c, 1);
  s += f337({ id: s, ten: 'a', con: [], the: {} } as T337);s += f384({ id: s, ten: 'a', con: [], the: {} } as T384);s += f342({ id: s, ten: 'a', con: [], the: {} } as T342);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g400 = <K extends keyof T400>(o: T400, k: K): U400<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U400<K>[K];

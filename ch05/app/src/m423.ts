import { f1, T1 } from './m001';
import { f45, T45 } from './m045';
import { f218, T218 } from './m218';
export interface T423 { id: number; ten: string; con: T423[]; the: Record<string, number> }
export type U423<K extends keyof T423> = { [P in K]: T423[P] extends number ? string : T423[P] };
export function f423(x: T423, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f423(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f218({ id: s, ten: 'a', con: [], the: {} } as T218);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g423 = <K extends keyof T423>(o: T423, k: K): U423<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U423<K>[K];

import { f79, T79 } from './m079';
import { f149, T149 } from './m149';
import { f193, T193 } from './m193';
export interface T210 { id: number; ten: string; con: T210[]; the: Record<string, number> }
export type U210<K extends keyof T210> = { [P in K]: T210[P] extends number ? string : T210[P] };
export function f210(x: T210, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f210(c, 1);
  s += f79({ id: s, ten: 'a', con: [], the: {} } as T79);s += f149({ id: s, ten: 'a', con: [], the: {} } as T149);s += f193({ id: s, ten: 'a', con: [], the: {} } as T193);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g210 = <K extends keyof T210>(o: T210, k: K): U210<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U210<K>[K];

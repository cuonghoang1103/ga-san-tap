import { f23, T23 } from './m023';
import { f36, T36 } from './m036';
import { f35, T35 } from './m035';
export interface T41 { id: number; ten: string; con: T41[]; the: Record<string, number> }
export type U41<K extends keyof T41> = { [P in K]: T41[P] extends number ? string : T41[P] };
export function f41(x: T41, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f41(c, 1);
  s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f36({ id: s, ten: 'a', con: [], the: {} } as T36);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g41 = <K extends keyof T41>(o: T41, k: K): U41<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U41<K>[K];

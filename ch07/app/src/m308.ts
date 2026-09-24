import { f142, T142 } from './m142';
import { f98, T98 } from './m098';
import { f229, T229 } from './m229';
export interface T308 { id: number; ten: string; con: T308[]; the: Record<string, number> }
export type U308<K extends keyof T308> = { [P in K]: T308[P] extends number ? string : T308[P] };
export function f308(x: T308, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f308(c, 1);
  s += f142({ id: s, ten: 'a', con: [], the: {} } as T142);s += f98({ id: s, ten: 'a', con: [], the: {} } as T98);s += f229({ id: s, ten: 'a', con: [], the: {} } as T229);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g308 = <K extends keyof T308>(o: T308, k: K): U308<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U308<K>[K];

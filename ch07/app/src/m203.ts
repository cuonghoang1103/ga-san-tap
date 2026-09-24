import { f96, T96 } from './m096';
import { f191, T191 } from './m191';
import { f143, T143 } from './m143';
export interface T203 { id: number; ten: string; con: T203[]; the: Record<string, number> }
export type U203<K extends keyof T203> = { [P in K]: T203[P] extends number ? string : T203[P] };
export function f203(x: T203, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f203(c, 1);
  s += f96({ id: s, ten: 'a', con: [], the: {} } as T96);s += f191({ id: s, ten: 'a', con: [], the: {} } as T191);s += f143({ id: s, ten: 'a', con: [], the: {} } as T143);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g203 = <K extends keyof T203>(o: T203, k: K): U203<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U203<K>[K];

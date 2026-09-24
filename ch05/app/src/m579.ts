import { f404, T404 } from './m404';
import { f398, T398 } from './m398';
import { f205, T205 } from './m205';
export interface T579 { id: number; ten: string; con: T579[]; the: Record<string, number> }
export type U579<K extends keyof T579> = { [P in K]: T579[P] extends number ? string : T579[P] };
export function f579(x: T579, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f579(c, 1);
  s += f404({ id: s, ten: 'a', con: [], the: {} } as T404);s += f398({ id: s, ten: 'a', con: [], the: {} } as T398);s += f205({ id: s, ten: 'a', con: [], the: {} } as T205);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g579 = <K extends keyof T579>(o: T579, k: K): U579<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U579<K>[K];

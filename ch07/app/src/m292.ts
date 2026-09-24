import { f199, T199 } from './m199';
import { f108, T108 } from './m108';
import { f231, T231 } from './m231';
export interface T292 { id: number; ten: string; con: T292[]; the: Record<string, number> }
export type U292<K extends keyof T292> = { [P in K]: T292[P] extends number ? string : T292[P] };
export function f292(x: T292, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f292(c, 1);
  s += f199({ id: s, ten: 'a', con: [], the: {} } as T199);s += f108({ id: s, ten: 'a', con: [], the: {} } as T108);s += f231({ id: s, ten: 'a', con: [], the: {} } as T231);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g292 = <K extends keyof T292>(o: T292, k: K): U292<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U292<K>[K];

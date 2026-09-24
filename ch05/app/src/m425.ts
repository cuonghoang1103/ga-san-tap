import { f111, T111 } from './m111';
import { f273, T273 } from './m273';
import { f216, T216 } from './m216';
export interface T425 { id: number; ten: string; con: T425[]; the: Record<string, number> }
export type U425<K extends keyof T425> = { [P in K]: T425[P] extends number ? string : T425[P] };
export function f425(x: T425, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f425(c, 1);
  s += f111({ id: s, ten: 'a', con: [], the: {} } as T111);s += f273({ id: s, ten: 'a', con: [], the: {} } as T273);s += f216({ id: s, ten: 'a', con: [], the: {} } as T216);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g425 = <K extends keyof T425>(o: T425, k: K): U425<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U425<K>[K];

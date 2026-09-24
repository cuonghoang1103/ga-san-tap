import { f200, T200 } from './m200';
import { f204, T204 } from './m204';
import { f88, T88 } from './m088';
export interface T270 { id: number; ten: string; con: T270[]; the: Record<string, number> }
export type U270<K extends keyof T270> = { [P in K]: T270[P] extends number ? string : T270[P] };
export function f270(x: T270, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f270(c, 1);
  s += f200({ id: s, ten: 'a', con: [], the: {} } as T200);s += f204({ id: s, ten: 'a', con: [], the: {} } as T204);s += f88({ id: s, ten: 'a', con: [], the: {} } as T88);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g270 = <K extends keyof T270>(o: T270, k: K): U270<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U270<K>[K];

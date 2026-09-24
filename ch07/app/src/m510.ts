import { f295, T295 } from './m295';
import { f317, T317 } from './m317';
import { f371, T371 } from './m371';
export interface T510 { id: number; ten: string; con: T510[]; the: Record<string, number> }
export type U510<K extends keyof T510> = { [P in K]: T510[P] extends number ? string : T510[P] };
export function f510(x: T510, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f510(c, 1);
  s += f295({ id: s, ten: 'a', con: [], the: {} } as T295);s += f317({ id: s, ten: 'a', con: [], the: {} } as T317);s += f371({ id: s, ten: 'a', con: [], the: {} } as T371);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g510 = <K extends keyof T510>(o: T510, k: K): U510<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U510<K>[K];

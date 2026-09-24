import { f86, T86 } from './m086';
import { f118, T118 } from './m118';
import { f120, T120 } from './m120';
export interface T290 { id: number; ten: string; con: T290[]; the: Record<string, number> }
export type U290<K extends keyof T290> = { [P in K]: T290[P] extends number ? string : T290[P] };
export function f290(x: T290, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f290(c, 1);
  s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f118({ id: s, ten: 'a', con: [], the: {} } as T118);s += f120({ id: s, ten: 'a', con: [], the: {} } as T120);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g290 = <K extends keyof T290>(o: T290, k: K): U290<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U290<K>[K];

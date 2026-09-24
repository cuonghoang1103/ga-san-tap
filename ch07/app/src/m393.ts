import { f231, T231 } from './m231';
import { f154, T154 } from './m154';
import { f67, T67 } from './m067';
export interface T393 { id: number; ten: string; con: T393[]; the: Record<string, number> }
export type U393<K extends keyof T393> = { [P in K]: T393[P] extends number ? string : T393[P] };
export function f393(x: T393, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f393(c, 1);
  s += f231({ id: s, ten: 'a', con: [], the: {} } as T231);s += f154({ id: s, ten: 'a', con: [], the: {} } as T154);s += f67({ id: s, ten: 'a', con: [], the: {} } as T67);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g393 = <K extends keyof T393>(o: T393, k: K): U393<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U393<K>[K];

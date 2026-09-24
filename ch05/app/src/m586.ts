import { f579, T579 } from './m579';
import { f478, T478 } from './m478';
import { f13, T13 } from './m013';
export interface T586 { id: number; ten: string; con: T586[]; the: Record<string, number> }
export type U586<K extends keyof T586> = { [P in K]: T586[P] extends number ? string : T586[P] };
export function f586(x: T586, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f586(c, 1);
  s += f579({ id: s, ten: 'a', con: [], the: {} } as T579);s += f478({ id: s, ten: 'a', con: [], the: {} } as T478);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g586 = <K extends keyof T586>(o: T586, k: K): U586<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U586<K>[K];

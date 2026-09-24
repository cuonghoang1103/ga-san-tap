import { f130, T130 } from './m130';
import { f50, T50 } from './m050';
import { f118, T118 } from './m118';
export interface T236 { id: number; ten: string; con: T236[]; the: Record<string, number> }
export type U236<K extends keyof T236> = { [P in K]: T236[P] extends number ? string : T236[P] };
export function f236(x: T236, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f236(c, 1);
  s += f130({ id: s, ten: 'a', con: [], the: {} } as T130);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f118({ id: s, ten: 'a', con: [], the: {} } as T118);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g236 = <K extends keyof T236>(o: T236, k: K): U236<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U236<K>[K];

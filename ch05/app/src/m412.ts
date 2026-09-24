import { f147, T147 } from './m147';
import { f378, T378 } from './m378';
import { f215, T215 } from './m215';
export interface T412 { id: number; ten: string; con: T412[]; the: Record<string, number> }
export type U412<K extends keyof T412> = { [P in K]: T412[P] extends number ? string : T412[P] };
export function f412(x: T412, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f412(c, 1);
  s += f147({ id: s, ten: 'a', con: [], the: {} } as T147);s += f378({ id: s, ten: 'a', con: [], the: {} } as T378);s += f215({ id: s, ten: 'a', con: [], the: {} } as T215);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g412 = <K extends keyof T412>(o: T412, k: K): U412<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U412<K>[K];

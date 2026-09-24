import { f301, T301 } from './m301';
import { f402, T402 } from './m402';
import { f147, T147 } from './m147';
export interface T410 { id: number; ten: string; con: T410[]; the: Record<string, number> }
export type U410<K extends keyof T410> = { [P in K]: T410[P] extends number ? string : T410[P] };
export function f410(x: T410, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f410(c, 1);
  s += f301({ id: s, ten: 'a', con: [], the: {} } as T301);s += f402({ id: s, ten: 'a', con: [], the: {} } as T402);s += f147({ id: s, ten: 'a', con: [], the: {} } as T147);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g410 = <K extends keyof T410>(o: T410, k: K): U410<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U410<K>[K];

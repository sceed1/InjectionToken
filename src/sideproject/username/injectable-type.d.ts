import { InjectionToken } from '@angular/core';

export type InjectableType<T extends InjectionToken<any>> =
  T extends InjectionToken<infer U> ? U : never;

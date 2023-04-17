import { InjectionToken } from "@angular/core";

export const USER_NAME = new InjectionToken<() => string>('myuser');
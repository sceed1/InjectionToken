import 'zone.js/dist/zone';

import { bootstrapApplication } from '@angular/platform-browser';

import { ParentComponent } from './parentproject/parent-component';
import { ParentModule } from './parentproject/parent-module';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(ParentComponent, {
  providers: [importProvidersFrom(ParentModule)],
});

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserNameComponent } from '../sideproject/api';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserNameComponent],

  template: `
    lib username:
    <lib-username></lib-username>
  `,
})
export class ParentComponent {
  name = 'Angular';
}

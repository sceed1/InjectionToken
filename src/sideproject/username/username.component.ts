import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InjectableType } from './injectable-type';
import { USER_NAME } from './token';

//downside: you have to recreate the type in the submodule 🤔


@Component({
  selector: 'lib-username',
  templateUrl: './username.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class UserNameComponent implements OnInit {
  public username$ = this.store.select(this.userNameSelector);

  constructor(
    @Inject(USER_NAME)
    private readonly userNameSelector: InjectableType<typeof USER_NAME>,
    private readonly store: Store
  ) {
    debugger;
  }

  ngOnInit() {}
}

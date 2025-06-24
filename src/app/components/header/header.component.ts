import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngxs/store';
import { UserState } from '../../state/user.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userEmail$;

  constructor(private store: Store) {
    this.userEmail$ = this.store.select(UserState.getUser);
  }
}

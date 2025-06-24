import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface User {
  userId: string;
  email: string;
}

export class SetUser {
  static readonly type = '[Auth] Set User';
  constructor(public user: User) {}
}

export class ClearUser {
  static readonly type = '[Auth] Clear User';
}

@State<User | null>({
  name: 'user',
  defaults: null,
})
export class UserState {
  @Selector()
  static getUser(state: User | null) {
    return state;
  }

  @Action(SetUser)
  setUser(ctx: StateContext<User | null>, action: SetUser) {
    ctx.setState(action.user);
  }

  @Action(ClearUser)
  clearUser(ctx: StateContext<User | null>) {
    ctx.setState(null);
  }
}

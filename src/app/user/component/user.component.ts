import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/user.reducers';
import * as UserActions from '../store/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public followersState: Observable<fromUser.State>;

  constructor(private store: Store<fromUser.FeatureState>) {}

  ngOnInit() {
    this.store.dispatch(new UserActions.fetchUserFollowers());
  }

  private getUserFollowers(): void {
    this.followersState = this.store.select('followers');
    console.log(this.followersState);
  }
}

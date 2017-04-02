import {Component, OnInit} from '@angular/core';
import {GlobalState} from '../../authentication/globalState';
import {Store} from '@ngrx/store';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  authentication;
  constructor(private _store: Store<GlobalState>, private _service: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    this._store.select('auth').subscribe(authentication => this.authentication = authentication);
  }

  logout() {
    this._service.logout();
    this._router.navigate(['/home']);
    event.preventDefault();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseApi } from '../entities/response-api';
import { User } from '../entities/user';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [];
  public prefijo: string = "/user";
  public logueado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public _http: EndpointService) {
    this.loadUsers();
    this.loginUser();
  }

  loginUser(){
    this.logueado.next(false);
  }

  loginAdmin(){
    this.logueado.next(true);
  }

  list() {
    return this._http.GET(this.prefijo).toPromise<User[] | ResponseApi>();
  }

  loadUsers() {
    this.list().then(
      (_users: User[] | ResponseApi) => {
        if (!Array.isArray(_users)) {
          console.log("ERROR!", _users.mensaje);
        } else {
          this.users = _users;
        }
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    );
  }
}

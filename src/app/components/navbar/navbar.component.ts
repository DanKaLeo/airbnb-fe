import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  _flag: boolean;

  constructor(public servUsuario: UserService) {
    this._flag = false;
    this.servUsuario.logueado.subscribe(
      (_log: boolean) => {
        console.log(_log);
        this._flag = _log;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }
}

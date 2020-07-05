import { Component } from "@angular/core";


import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // title = 'mdb-angular-free';
  constructor(public auth: AuthenticationService) {}
}

import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { first, last } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

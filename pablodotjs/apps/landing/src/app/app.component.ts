import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainApi } from './shared/api/main.abstraction.service';
import { AppItem } from '@pablodotjs/shared';

@Component({
  selector: 'pablodotjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'landing';

  apps$: Observable<AppItem[]>;

  constructor(
    private mainApi: MainApi
  ) {}

  ngOnInit() {
    this.apps$ = this.mainApi.getAllApps();
  }
}

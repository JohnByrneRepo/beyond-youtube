import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { App } from './models/app.model';
import * as AppActions from './actions/app.actions';

interface AppState {
  app: App;
}

const playlistIdDictionary = {
  MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
  Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <h1 class="page-title">Beyond Youtube</h1>
      <div href="/" class="return-to-listing" *ngIf="!navbarVisibile">
        <a (click)="enableNavbar()" routerLink="/">< Back to list of videos</a>
      </div>
      <div class="page-links" *ngIf="navbarVisibile">
        <a (click)="viewList()" class="page-link active-link" id="list-link">List</a>
        <a (click)="viewAbout()" class="page-link" id="about-link">About</a>
        <mat-form-field *ngIf="viewingList">
          <mat-select [(ngModel)]="selectedOption" (ngModelChange)="updatePlaylistSelection($event)">
            <mat-option *ngFor="let playlistName of playlistNames; let i = index" [value]="i">
              {{playlistName}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div *ngIf="viewingList">
      <router-outlet></router-outlet>
      </div>
      <div *ngIf="!viewingList">
        <div class="about">
          A simple universal Angular 4 application that uses the youtube api.
          The app uses RxJS for Observables and NgRx for redux actions, with a moel and reducer.
          The code can be found here: <a>http://johnbyrne/universal-angular-5-youtube/</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  app: Observable<App>;
  navbarVisibile: boolean = true;
  playlistNames = ['MassiveAttack', 'Portishead'];
  selectedOption = 0;
  viewingList :boolean = true;

  constructor(
    private store: Store<AppState>,
  ) {
    this.app = this.store.select('app');
  }

  ngOnInit() {
    this.app.subscribe(app => {
      this.navbarVisibile = app.navbarStatus === 'FULL_WIDTH';
    });
  }

  enableNavbar() {
    this.store.dispatch(new AppActions.SetNavbarStatus('FULL_WIDTH'));
  }

  viewList() {
    this.viewingList = true;
    document.getElementById('list-link').className += ' active-link';
    document.getElementById('about-link').classList.remove('active-link');
  }

  viewAbout() {
    this.viewingList = false;
    document.getElementById('about-link').className += ' active-link';
    document.getElementById('list-link').classList.remove('active-link');
  }

  updatePlaylistSelection($event) {
    this.store.dispatch(new AppActions.SetPlaylistId(
      playlistIdDictionary[this.playlistNames[$event]]
    ));
  }
}
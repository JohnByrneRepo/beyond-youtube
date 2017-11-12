webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.videos = [];
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about',
            template: "\n    <div class=\"about\">\n      A simple universal Angular 4 application that uses the youtube api.\n      The app uses RxJS for Observables and NgRx for redux actions, with a model and reducer.\n      The code can be found here: <a>http://johnbyrne/universal-angular-5-youtube/</a>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/about/about.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/actions/app.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_PLAYLIST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_NAVBAR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SetPlaylistId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetNavbarStatus; });
/* unused harmony export Reset */
var SET_PLAYLIST_ID = 'SET_PLAYLIST_ID';
var SET_NAVBAR_STATUS = 'SET_NAVBAR_STATUS';
var RESET = 'Reset';
var SetPlaylistId = (function () {
    function SetPlaylistId(payload) {
        this.payload = payload;
        this.type = SET_PLAYLIST_ID;
    }
    return SetPlaylistId;
}());

var SetNavbarStatus = (function () {
    function SetNavbarStatus(payload) {
        this.payload = payload;
        this.type = SET_NAVBAR_STATUS;
    }
    return SetNavbarStatus;
}());

var Reset = (function () {
    function Reset() {
        this.type = RESET;
    }
    return Reset;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_app_actions__ = __webpack_require__("../../../../../src/app/actions/app.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var playlistIdDictionary = {
    MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
    Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
};
var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.navbarVisibile = true;
        this.playlistNames = ['MassiveAttack', 'Portishead'];
        this.selectedOption = 0;
        this.viewingList = true;
        this.app = this.store.select('app');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.subscribe(function (app) {
            _this.navbarVisibile = app.navbarStatus === 'FULL_WIDTH';
        });
    };
    AppComponent.prototype.enableNavbar = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_app_actions__["d" /* SetNavbarStatus */]('FULL_WIDTH'));
    };
    AppComponent.prototype.viewList = function () {
        this.viewingList = true;
        document.getElementById('list-link').className += ' active-link';
        document.getElementById('about-link').classList.remove('active-link');
    };
    AppComponent.prototype.viewAbout = function () {
        this.viewingList = false;
        document.getElementById('about-link').className += ' active-link';
        document.getElementById('list-link').classList.remove('active-link');
    };
    AppComponent.prototype.updatePlaylistSelection = function ($event) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_app_actions__["e" /* SetPlaylistId */](playlistIdDictionary[this.playlistNames[$event]]));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n    <div class=\"app-root\">\n      <h1 class=\"page-title\">Beyond Youtube</h1>\n      <div href=\"/\" class=\"return-to-listing\" *ngIf=\"!navbarVisibile\">\n        <a (click)=\"enableNavbar()\" routerLink=\"/\">< Back to list of videos</a>\n      </div>\n      <div class=\"page-links\" *ngIf=\"navbarVisibile\">\n        <a (click)=\"viewList()\" class=\"page-link active-link\" id=\"list-link\">List</a>\n        <a (click)=\"viewAbout()\" class=\"page-link\" id=\"about-link\">About</a>\n        <mat-form-field *ngIf=\"viewingList\">\n          <mat-select [(ngModel)]=\"selectedOption\" (ngModelChange)=\"updatePlaylistSelection($event)\">\n            <mat-option *ngFor=\"let playlistName of playlistNames; let i = index\" [value]=\"i\">\n              {{playlistName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div *ngIf=\"viewingList\">\n      <router-outlet></router-outlet>\n      </div>\n      <div *ngIf=\"!viewingList\">\n        <div class=\"about\">\n          A simple universal Angular 4 application that uses the youtube api.\n          The app uses RxJS for Observables and NgRx for redux actions, with a moel and reducer.\n          The code can be found here: <a>http://johnbyrne/universal-angular-5-youtube/</a>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/app.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducers_app_reducer__ = __webpack_require__("../../../../../src/app/reducers/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'my-app' }),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */], pathMatch: 'full' },
                    { path: '**', redirectTo: '', pathMatch: 'full' },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */], pathMatch: 'full' },
                ]),
                __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["b" /* StoreModule */].forRoot({
                    app: __WEBPACK_IMPORTED_MODULE_13__reducers_app_reducer__["a" /* appReducer */],
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-root h1.page-title {\n  background: #eee;\n  padding: 10px; }\n\n.app-root div.return-to-listing {\n  background: #f00;\n  padding: 12px;\n  height: 12px;\n  width: 100%;\n  cursor: pointer; }\n  .app-root div.return-to-listing a {\n    color: #fff; }\n\n.app-root div.page-links {\n  background: #f00;\n  padding: 10px;\n  width: 100%; }\n  .app-root div.page-links a.page-link {\n    padding: 8px 12px;\n    color: #fff;\n    font-size: 14px; }\n    .app-root div.page-links a.page-link.active-link {\n      font-weight: 700;\n      border-bottom: 2px solid white;\n      padding-bottom: 8px; }\n  .app-root div.page-links mat-form-field {\n    float: right;\n    padding-right: 28px;\n    display: inherit;\n    position: relative;\n    bottom: 10px; }\n\n.about {\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_app_actions__ = __webpack_require__("../../../../../src/app/actions/app.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = (function () {
    function DetailsComponent(youtubeService, route, store) {
        this.youtubeService = youtubeService;
        this.route = route;
        this.store = store;
        this.app = this.store.select('app');
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.youtubeService.getVideoById(params['id'])
                .subscribe(function (video) {
                return _this.video = video;
            });
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_app_actions__["d" /* SetNavbarStatus */]('HIDDEN'));
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'details-view',
            template: "\n    <div *ngIf=\"video\">\n      <div class=\"details\">\n        <div class=\"video-container\">\n          <div class=\"video\">\n            <iframe width=\"560\" height=\"349\" [src]=\"video.id | sanitizeUrl\"></iframe>\n          </div>\n        </div>\n        <div class=\"details-container\">\n          <h2 class=\"title\">{{ video.snippet.title }}</h2>\n          <h3 class=\"published-at\">{{ video.snippet.publishedAt | formatDate }}</h3>\n          <h5 class=\"description\">{{ video.snippet.description }}</h5>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_youtube_service__["a" /* YoutubeService */]],
            styles: [__webpack_require__("../../../../../src/app/details/details.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], DetailsComponent);
    return DetailsComponent;
}());

// @NgModule({
//   declarations: [DetailsComponent],
//   imports: [
//     CommonModule,
//     RouterModule.forChild([
//       { path: '', component: DetailsComponent, pathMatch: 'full' }
//     ]),
//     PipesModule
//   ]
// })
// export class DetailsModule {
// } 


/***/ }),

/***/ "../../../../../src/app/details/details.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 10px;\n  padding-left: 10px;\n  width: 100%; }\n  .details .video-container {\n    width: 50%; }\n    .details .video-container .video {\n      position: relative;\n      padding-bottom: 56.25%;\n      /* 16:9 */\n      padding-top: 25px;\n      height: 0; }\n      .details .video-container .video iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%; }\n  .details .details-container {\n    width: 50%; }\n    .details .details-container h2.title {\n      padding: 0px 10px;\n      margin-bottom: 8px; }\n    .details .details-container h3.published-at {\n      color: #555;\n      padding: 0 10px;\n      margin-bottom: 20px; }\n    .details .details-container h5.description {\n      color: #999;\n      padding: 0 10px;\n      margin-bottom: 20px;\n      display: block;\n      /* Fallback for non-webkit */\n      display: -webkit-box;\n      max-width: 400px;\n      height: 84px;\n      /* Fallback for non-webkit */\n      margin: 0 auto;\n      font-size: 10px;\n      line-height: 1.4;\n      -webkit-line-clamp: 6;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: pre-wrap; }\n\n@media (max-width: 480px) {\n  .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 10px;\n    padding-left: 10px; }\n    .details .details-container {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      width: 100%; }\n      .details .details-container h2.title {\n        padding: 0px 2px;\n        margin-bottom: 8px; }\n      .details .details-container h3.published-at {\n        color: #555;\n        padding: 0 2px;\n        margin-bottom: 20px; }\n      .details .details-container h5.description {\n        display: none; }\n    .details .video-container {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      width: 96%; }\n      .details .video-container .video {\n        position: relative;\n        padding-bottom: 56.25%;\n        /* 16:9 */\n        padding-top: 25px;\n        height: 0; }\n        .details .video-container .video iframe {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_app_actions__ = __webpack_require__("../../../../../src/app/actions/app.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ListComponent = (function () {
    function ListComponent(document, youtubeService, store) {
        this.document = document;
        this.youtubeService = youtubeService;
        this.store = store;
        this.videos = [];
        this.numItems = 3;
        this.pageSize = 3;
        this.playlistId = '';
        this.viewingDetails = false;
        this.app = this.store.select('app');
    }
    ListComponent.prototype.onWindowScroll = function () {
        var _this = this;
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var list = document.getElementsByClassName('list')[0];
        if (list.scrollHeight === list.scrollTop + list.clientHeight) {
            this.numItems += 3;
            if (this.numItems <= 10) {
                this.youtubeService.getPlaylistById(this.playlistId, this.numItems)
                    .subscribe(function (videos) {
                    return _this.videos = videos;
                });
            }
        }
    };
    ListComponent.prototype.getPlaylist = function () {
        var _this = this;
        this.app.subscribe(function (app) {
            _this.playlistId = app.playlistId;
            _this.numItems = _this.pageSize;
            _this.viewingDetails = app.navbarStatus === "HIDDEN";
            _this.youtubeService.getPlaylistById(app.playlistId, _this.numItems)
                .subscribe(function (videos) {
                return _this.videos = videos;
            });
        });
    };
    ListComponent.prototype.disableNavbar = function (videoId) {
        var _this = this;
        this.videoId = videoId;
        this.viewingDetails = true;
        this.youtubeService.getVideoById(this.videoId)
            .subscribe(function (video) {
            return _this.video = video;
        });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_app_actions__["d" /* SetNavbarStatus */]('HIDDEN'));
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getPlaylist();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_app_actions__["d" /* SetNavbarStatus */]('FULL_WIDTH'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ListComponent.prototype, "onWindowScroll", null);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list',
            template: "\n    <div *ngIf=\"!viewingDetails\">\n      <div class=\"list\">\n        <li *ngFor=\"let video of videos; let idx = index\">\n          <a (click)=\"disableNavbar(video.contentDetails.videoId)\" class=\"listing-image\">\n            <div class=\"thumbnail\">\n              <img src=\"{{ video.snippet.thumbnails.high.url }}\">\n            </div>\n          </a>\n          <div class=\"listing-data\">\n            <a (click)=\"disableNavbar(video.contentDetails.videoId)\">\n              <h2 class=\"title\">{{ video.snippet.title }}</h2>\n            </a>\n            <h3 class=\"published-at\">{{ video.contentDetails.videoPublishedAt | formatDate }}</h3>\n            <h5 class=\"description\" [innerHTML]=\"video.snippet.description | preserveUrls\"></h5>\n          </div>\n        </li>\n      </div>\n    </div>\n    <div *ngIf=\"viewingDetails\">\n      <div *ngIf=\"video\" class=\"details\">\n        <div class=\"video-container\">\n          <div class=\"video\">\n            <iframe width=\"560\" height=\"349\" [src]=\"video.id | sanitizeUrl\"></iframe>\n          </div>\n        </div>\n        <div class=\"details-container\">\n          <h2 class=\"title\">{{ video.snippet.title }}</h2>\n          <h3 class=\"published-at\">{{ video.snippet.publishedAt | formatDate }}</h3>\n          <h5 class=\"description\" [innerHTML]=\"video.snippet.description | preserveUrls\"></h5>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_youtube_service__["a" /* YoutubeService */]],
            styles: [__webpack_require__("../../../../../src/app/list/list.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document,
            __WEBPACK_IMPORTED_MODULE_2__services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\n  padding-top: 7px; }\n  .list li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 10px;\n    padding-left: 10px; }\n    .list li a.listing-image {\n      width: 50%; }\n      .list li a.listing-image div.thumbnail img {\n        width: 100%; }\n    .list li div.listing-data {\n      width: 50%; }\n      .list li div.listing-data a h2.title {\n        padding: 0px 10px;\n        margin-bottom: 8px; }\n      .list li div.listing-data h3.published-at {\n        color: #555;\n        padding: 0px 10px;\n        margin-bottom: 20px; }\n      .list li div.listing-data h5.description {\n        color: #999;\n        padding: 0 10px;\n        margin-bottom: 20px;\n        display: block;\n        /* Fallback for non-webkit */\n        display: -webkit-box;\n        max-width: 400px;\n        font-size: 10px;\n        white-space: pre-wrap; }\n\n@media (max-width: 768px) {\n  li div.listing-data h5.description {\n    height: 84px;\n    /* Fallback for non-webkit */\n    font-size: 10px;\n    line-height: 1.4;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis; } }\n\n@media (max-width: 480px) {\n  .list li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 10px;\n    padding-left: 10px; }\n    .list li div.listing-data {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      width: 100%; }\n      .list li div.listing-data a h2.title {\n        padding: 0px 0px;\n        margin-bottom: 8px; }\n      .list li div.listing-data h3.published-at {\n        color: #555;\n        padding: 0px 0px;\n        margin-bottom: 5px; }\n      .list li div.listing-data h5.description {\n        display: none; }\n    .list li a.listing-image {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      width: 96%; }\n      .list li a.listing-image div.thumbnail img {\n        width: 100%; } }\n\n.details {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 10px;\n  padding-left: 10px;\n  width: 100%; }\n  .details .video-container {\n    width: 50%; }\n    .details .video-container .video {\n      position: relative;\n      padding-bottom: 56.25%;\n      /* 16:9 */\n      padding-top: 25px;\n      height: 0; }\n      .details .video-container .video iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%; }\n  .details .details-container {\n    width: 50%; }\n    .details .details-container h2.title {\n      padding: 0px 10px;\n      margin-bottom: 8px; }\n    .details .details-container h3.published-at {\n      color: #555;\n      padding: 0 10px;\n      margin-bottom: 20px; }\n    .details .details-container h5.description {\n      color: #999;\n      padding: 0 10px;\n      margin-bottom: 20px;\n      display: block;\n      /* Fallback for non-webkit */\n      display: -webkit-box;\n      margin: 0 auto;\n      font-size: 10px;\n      white-space: pre-wrap; }\n\n@media (max-width: 480px) {\n  .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 10px;\n    padding-left: 10px; }\n    .details .details-container {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1;\n      width: 100%; }\n      .details .details-container h2.title {\n        padding: 0px 2px;\n        margin-bottom: 8px; }\n      .details .details-container h3.published-at {\n        color: #555;\n        padding: 0 2px;\n        margin-bottom: 20px; }\n      .details .details-container h5.description {\n        display: none; }\n    .details .video-container {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2;\n      width: 96%; }\n      .details .video-container .video {\n        position: relative;\n        padding-bottom: 56.25%;\n        /* 16:9 */\n        padding-top: 25px;\n        height: 0; }\n        .details .video-container .video iframe {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pipes/format-date.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatDatePipe = (function () {
    function FormatDatePipe() {
    }
    FormatDatePipe.prototype.transform = function (rawDate) {
        var date = new Date(rawDate);
        var locale = 'en-us';
        var month = date.toLocaleString(locale, { month: 'long' }).slice(0, 3);
        var day = date.getDate();
        var year = date.getFullYear();
        return "Published on " + month + " " + day + ", " + year;
    };
    FormatDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'formatDate'
        })
    ], FormatDatePipe);
    return FormatDatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_date__ = __webpack_require__("../../../../../src/app/pipes/format-date.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preserve_urls__ = __webpack_require__("../../../../../src/app/pipes/preserve-urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanitize_url__ = __webpack_require__("../../../../../src/app/pipes/sanitize-url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__format_date__["a" /* FormatDatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__preserve_urls__["a" /* PreserveUrlsPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sanitize_url__["a" /* SanitizeUrlPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__format_date__["a" /* FormatDatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__preserve_urls__["a" /* PreserveUrlsPipe */],
                __WEBPACK_IMPORTED_MODULE_3__sanitize_url__["a" /* SanitizeUrlPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/preserve-urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreserveUrlsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreserveUrlsPipe = (function () {
    function PreserveUrlsPipe() {
    }
    PreserveUrlsPipe.prototype.transform = function (htmlString) {
        return htmlString.replace(/(?:(https?\:\/\/[^\s]+))/m, '<a href="$1">$1</a>');
    };
    PreserveUrlsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'preserveUrls'
        })
    ], PreserveUrlsPipe);
    return PreserveUrlsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/sanitize-url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeUrlPipe = (function () {
    function SanitizeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url);
    };
    SanitizeUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'sanitizeUrl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SanitizeUrlPipe);
    return SanitizeUrlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__ = __webpack_require__("../../../../../src/app/actions/app.actions.ts");

var playlistIdDictionary = {
    MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
    Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
};
var defaultState = {
    navbarStatus: 'FULL_WIDTH',
    playlistId: playlistIdDictionary.MassiveAttack
};
var newState = function (state, newData) {
    return Object.assign({}, state, newData);
};
function appReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    console.log(action.type, state);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__["c" /* SET_PLAYLIST_ID */]:
            return newState(state, { playlistId: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__["b" /* SET_NAVBAR_STATUS */]:
            return newState(state, { navbarStatus: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_app_actions__["a" /* RESET */]:
            return defaultState;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/services/youtube.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/youtube/v3';
    }
    YoutubeService.prototype.getPlaylistById = function (playlistId, numItems) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var myParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        myHeaders.append('Content-Type', 'application/json');
        myParams.append('playlistId', playlistId);
        myParams.append('key', 'AIzaSyAMiatLpUm-IyBYqEV6RqS9vyBPL52VMXE');
        myParams.append('part', 'snippet,contentDetails,status');
        myParams.append('maxResults', numItems.toString());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders,
            params: myParams
        });
        return this.http.get(this.url + "/playlistItems", options)
            .map(this.extractPlaylist)
            .catch(this.handleError);
    };
    YoutubeService.prototype.extractPlaylist = function (res) {
        var body = res.json();
        return body.items;
    };
    YoutubeService.prototype.getVideoById = function (videoId) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var myParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        myHeaders.append('Content-Type', 'application/json');
        myParams.append('id', videoId);
        myParams.append('key', 'AIzaSyAMiatLpUm-IyBYqEV6RqS9vyBPL52VMXE');
        myParams.append('part', 'id,snippet');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myHeaders,
            params: myParams
        });
        return this.http.get(this.url + "/videos", options)
            .map(this.extractVideo)
            .catch(this.handleError);
    };
    YoutubeService.prototype.extractVideo = function (res) {
        var body = res.json();
        return body.items[0];
    };
    YoutubeService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.message || error);
    };
    YoutubeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], YoutubeService);
    return YoutubeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
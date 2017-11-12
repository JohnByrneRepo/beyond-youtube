webpackJsonp(["details.module"],{

/***/ "../../../../../src/app/details/details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_youtube_service__ = __webpack_require__("../../../../../src/app/services/youtube.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_app_actions__ = __webpack_require__("../../../../../src/app/actions/app.actions.ts");
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
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_app_actions__["d" /* SetNavbarStatus */]('HIDDEN'));
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'details-view',
            template: "\n    <div *ngIf=\"video\">\n      <div class=\"details\">\n        <div class=\"video-container\">\n          <div class=\"video\">\n            <iframe width=\"560\" height=\"349\" [src]=\"video.id | sanitizeUrl\"></iframe>\n          </div>\n        </div>\n        <div class=\"details-container\">\n          <h2 class=\"title\">{{ video.snippet.title }}</h2>\n          <h3 class=\"published-at\">{{ video.snippet.publishedAt | formatDate }}</h3>\n          <h5 class=\"description\">{{ video.snippet.description }}</h5>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_youtube_service__["a" /* YoutubeService */]],
            styles: [__webpack_require__("../../../../../src/app/details/details.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_youtube_service__["a" /* YoutubeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */]])
    ], DetailsComponent);
    return DetailsComponent;
}());

var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [DetailsComponent],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: DetailsComponent, pathMatch: 'full' }
                ]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ]
        })
    ], DetailsModule);
    return DetailsModule;
}());



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

/***/ })

});
//# sourceMappingURL=details.module.chunk.js.map
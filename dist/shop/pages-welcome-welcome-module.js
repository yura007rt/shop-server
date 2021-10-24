(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 0, vars: 0, template: function WelcomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQubGVzcyJ9 */"] });
    return WelcomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "T2Lb":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "+j1i");





var routes = [
    { path: '', component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
];
var WelcomeRoutingModule = /** @class */ (function () {
    function WelcomeRoutingModule() {
    }
    WelcomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
    WelcomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return WelcomeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "TtBp":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-routing.module */ "T2Lb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "+j1i");




var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeModule });
    WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"]]] });
    return WelcomeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]], imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__["WelcomeRoutingModule"]],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'contact-freelance';
        this.router.events.subscribe(function () {
            window.scroll(0, 0);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_list_search_list_component__ = __webpack_require__("../../../../../src/app/components/search-list/search-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sections_sections_component__ = __webpack_require__("../../../../../src/app/components/sections/sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_public_services_public_services_component__ = __webpack_require__("../../../../../src/app/components/public-services/public-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_public_sections_public_sections_component__ = __webpack_require__("../../../../../src/app/components/public-sections/public-sections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dashboard_menu_dashboard_menu_component__ = __webpack_require__("../../../../../src/app/components/dashboard-menu/dashboard-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dashboard_home_dashboard_home_component__ = __webpack_require__("../../../../../src/app/components/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_services_list_services_list_component__ = __webpack_require__("../../../../../src/app/components/services-list/services-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_modal_update_service_modal_update_service_component__ = __webpack_require__("../../../../../src/app/components/modal-update-service/modal-update-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_service_update_service_update_component__ = __webpack_require__("../../../../../src/app/components/service-update/service-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_modal_update_section_modal_update_section_component__ = __webpack_require__("../../../../../src/app/components/modal-update-section/modal-update-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_section_update_section_update_component__ = __webpack_require__("../../../../../src/app/components/section-update/section-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_search_item_search_item_component__ = __webpack_require__("../../../../../src/app/components/search-item/search-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_freelance_public_service__ = __webpack_require__("../../../../../src/app/services/freelance-public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_maps_maps_component__ = __webpack_require__("../../../../../src/app/components/maps/maps.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'p/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */] },
    { path: 's/:query', component: __WEBPACK_IMPORTED_MODULE_14__components_search_list_search_list_component__["a" /* SearchListComponent */] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_28__components_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]] },
            { path: 'services', component: __WEBPACK_IMPORTED_MODULE_17__components_services_services_component__["a" /* ServicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]] },
            { path: 'password', component: __WEBPACK_IMPORTED_MODULE_30__components_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]] },
            { path: 'service/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_sections_sections_component__["a" /* SectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */]] }
            // { path: 'sections', component: SectionsComponent, canActivate: [SessionService] },
        ]
    },
    { path: ':serviceId/:sectionId', component: __WEBPACK_IMPORTED_MODULE_22__components_public_sections_public_sections_component__["a" /* PublicSectionsComponent */] },
    { path: ':url', component: __WEBPACK_IMPORTED_MODULE_21__components_public_services_public_services_component__["a" /* PublicServicesComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_search_list_search_list_component__["a" /* SearchListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_sections_sections_component__["a" /* SectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_public_services_public_services_component__["a" /* PublicServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_public_sections_public_sections_component__["a" /* PublicSectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_dashboard_menu_dashboard_menu_component__["a" /* DashboardMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_dashboard_home_dashboard_home_component__["a" /* DashboardHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_services_list_services_list_component__["a" /* ServicesListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_modal_update_service_modal_update_service_component__["a" /* ModalUpdateServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_service_update_service_update_component__["a" /* ServiceUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_modal_update_section_modal_update_section_component__["a" /* ModalUpdateSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_section_update_section_update_component__["a" /* SectionUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_search_item_search_item_component__["a" /* SearchItemComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_maps_maps_component__["a" /* MapsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_31_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body }),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "" + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].googleApiKey,
                libraries: ["places"]
            }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_38__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_37__services_freelance_api_service__["a" /* FreelanceApiService */], __WEBPACK_IMPORTED_MODULE_40__services_freelance_public_service__["a" /* FreelancePublicService */], __WEBPACK_IMPORTED_MODULE_39__services_helpers_service__["a" /* HelpersService */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_32__components_modal_update_service_modal_update_service_component__["a" /* ModalUpdateServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_modal_update_section_modal_update_section_component__["a" /* ModalUpdateSectionComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Change password </h3>\n\n<form (ngSubmit)=\"submitUpdates(myForm)\" #myForm=\"ngForm\">\n  <div class=\"form-group\">\n        <label for=\"inputEmail\">Change email</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"user.email\"\n            #myEmail=\"ngModel\" ng-model=\"required\">\n  </div> \n  <div class=\"form-group\">\n        <label for=\"inputPassword\">Change password</label>\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Choose Password\" name=\"password\" [(ngModel)]=\"user.password\"\n            #myPassword=\"ngModel\" minlength=\"6\" ng-model=\"required\">\n        <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n            <p class=\"error\" [hidden]=\"!myPassword.errors.required\" [hidden]=\"!myPassword.errors.minlength\">\n                <small>Password must be at least 6 characters long.</small>\n            </p>\n        </div>\n  </div> \n \n\n  <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n  <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Submit</button>\n</form>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(freelanceApi, session) {
        this.freelanceApi = freelanceApi;
        this.session = session;
        this.userId = JSON.parse(localStorage.getItem('user'))._id;
        this.user = {};
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId =
            this.freelanceApi.getUser(this.userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.user.password = '';
            });
    };
    ChangePasswordComponent.prototype.submitUpdates = function (myForm) {
        this.freelanceApi.editUserProfile(this.user)
            .subscribe(function (user) {
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], ChangePasswordComponent);

var _a, _b;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-home/dashboard-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block {\n    padding: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-home/dashboard-home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Public profile</h3>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a [routerLink]=\"['/dashboard/profile']\" class=\"btn btn-secondary\">View</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Services</h3>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a [routerLink]=\"['/dashboard/services']\" class=\"btn btn-secondary\">View</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h3 class=\"card-title\">Change password</h3>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a [routerLink]=\"['/dashboard/password']\" class=\"btn btn-secondary\">Change</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-home/dashboard-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHomeComponent = (function () {
    function DashboardHomeComponent() {
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
    };
    return DashboardHomeComponent;
}());
DashboardHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-home',
        template: __webpack_require__("../../../../../src/app/components/dashboard-home/dashboard-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-home/dashboard-home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardHomeComponent);

//# sourceMappingURL=dashboard-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard-menu/dashboard-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n        text-transform: uppercase;\n    color: #000000;\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard-menu/dashboard-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <a class=\"link\" [routerLink]=\"['/dashboard']\" role=\"button\">Dashboard</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"link\" [routerLink]=\"['/dashboard/profile']\" role=\"button\">Public profile</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"link\" [routerLink]=\"['/dashboard/services']\" role=\"button\">Services</a>\n      </li>\n      <li class=\"list-group-item\">\n        <a class=\"link\" [routerLink]=\"['/dashboard/password']\" role=\"button\">Change Password</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard-menu/dashboard-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardMenuComponent = (function () {
    function DashboardMenuComponent(route) {
        this.route = route;
    }
    DashboardMenuComponent.prototype.ngOnInit = function () {
    };
    return DashboardMenuComponent;
}());
DashboardMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-menu',
        template: __webpack_require__("../../../../../src/app/components/dashboard-menu/dashboard-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard-menu/dashboard-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], DashboardMenuComponent);

var _a;
//# sourceMappingURL=dashboard-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <app-dashboard-menu></app-dashboard-menu>\n      </div>\n    \n      <div class=\"col-sm-8\">\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #012838;\n  position: absolute;\n}\n.gap-20 {\n  height: 20px;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n            <a title=\"contacT-Freelance\" href=\"/\">\n              <img src=\"./assets/images/contact-freelance.png\" />\n            </a>\n        </div>\n      </div>\n    </div>\n</footer>\n\n "

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n    background-color: #012838;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <app-navbar></app-navbar>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bk-home {\n    background-position: center;\n    background-size: cover;\n    background-color: rgba(2,41,56, 1);\n    min-height: 60vh;\n}\nul li {\n    list-style-type: none;\n}\nul li {\n    margin: 10px;\n}\n.search-query-link {\n    text-transform: uppercase;\n    color: #000000;\n    padding: 10px;\n}\n\n.btn-light {\n    height: 40px;\n    color: #022938;\n    border-radius: 10;\n    text-transform: uppercase;\n    font-size: 1rem\n}\n\n.main-search-bar {\n    border-radius: 10px 0px 0px 10px\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bk-home\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <div class=\"gap-50\"></div>\n        <a title=\"contacT-Freelance\" href=\"/\"><img src=\"./assets/images/contact-freelance-logo.png\"/></a>\n        <div class=\"gap-50\"></div>\n        <div class=\"input-group\">\n            <input type=\"text\" name=\"search\" [(ngModel)]=\"search\" class=\"form-control main-search-bar\" placeholder=\"Find your freelance...\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-light pointer\" type=\"button\" [routerLink]=\"['/s/', search]\">Go!</button>\n            </span>\n          </div>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n    \n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <p class=\"lead c-w\">\n           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien.\n        </p>\n        <h1 class=\"c-w\">Contact Freelance</h1>\n       \n        <div class=\"gap-20\"></div>\n        <p class=\"lead c-w\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien.\n        </p>\n        <p class=\"c-w\">Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit. Ut luctus, dolor\n          et vehicula mattis, augue sem fringilla nisi, a vestibulum nisi odio ac nulla. Integer vitae aliquam nunc. Suspendisse\n          potenti. Aliquam nec feugiat nunc. Pellentesque vitae arcu mi. Cras elementum lorem sit amet risus condimentum, sit amet\n          aliquam elit viverra. Cras quis rhoncus nulla.</p>\n      </div>\n      <div class=\"col-sm-6\">\n        <p class=\"lead c-w\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien.\n        </p>\n        <h2 class=\"c-w\">Freelance Signup</h2>\n        <p class=\"lead c-w\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien.\n        </p>\n        <p class=\"c-w\">Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit. Ut luctus, dolor\n        et vehicula mattis, augue sem fringilla nisi, a vestibulum nisi odio ac nulla. Integer vitae aliquam nunc. Suspendisse potenti.\n        Aliquam nec feugiat nunc. Pellentesque vitae arcu mi. Cras elementum lorem sit amet risus condimentum, sit amet aliquam elit\n        viverra. Cras quis rhoncus nulla.</p>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/signup']\">Freelance Signup <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6\">\n        <h3 class=\"big\">leads\n          <span>factory</span>\n        </h3>\n        <div class=\"gap-50\"></div>\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <div class=\"gap-50\"></div>\n        <div class=\"gap-50\"></div>\n        \n        <p class=\"lead\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien.\n        </p>\n        <p class=\"\">Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit. Ut luctus, dolor\n          et vehicula mattis, augue sem fringilla nisi, a vestibulum nisi odio ac nulla. Integer vitae aliquam nunc. Suspendisse\n          potenti. Aliquam nec feugiat nunc. Pellentesque vitae arcu mi. Cras elementum lorem sit amet risus condimentum, sit amet\n          aliquam elit viverra. Cras quis rhoncus nulla.</p>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        \n        <img src=\"./assets/images/arrow.png\"/>\n        <div class=\"gap-50\"></div>\n        <h3 class=\"\">Popular areas</h3>\n        <div class=\"gap-50\"></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <ul>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3\">\n        <ul>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3\">\n        <ul>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3\">\n        <ul>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n          <li>\n            <a class=\"search-query-link\" [routerLink]=\"['/s', 'javascript']\">Javascript</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n    <div class=\"gap-50\"></div>\n   \n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/layout/layout.component.css")]
    })
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n\n      </div>\n      <div class=\"col-sm-6\">\n        <h1>Login</h1>\n        <form (ngSubmit)=\"submitLogin()\" #myForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"inputEmail\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"user.email\">\n            <small id=\"usernameHelp\" class=\"form-text text-muted\">Don't troll or you will be banned.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\" name=\"username\" [(ngModel)]=\"user.password\">\n          </div>\n        \n          <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n          <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\n        </form>\n        <p class=\"text-right\"><a class=\"\" [routerLink]=\"['/signup']\">Register here</a> please.</p>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            email: 'jordipiellas@gmail.com',
            password: '1234',
        };
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.session.login(this.user)
            .subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.error = err;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.session.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"form-group\">\n    <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\"\n      #search [formControl]=\"searchControl\" [ngModel]=\"cityQuote\">\n  </div>\n  <!-- <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapsComponent = (function () {
    function MapsComponent(mapsAPILoader, ngZone, freelanceApiService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.freelanceApiService = freelanceApiService;
        this.getMapPlaces = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MapsComponent.prototype.ngOnInit = function () {
        //set google maps defaults
        var _this = this;
        // this.freelanceApiService.getMapsCoords(this.cityQuote)
        // .subscribe((result) => {
        //    this.latitude = result.results[0].geometry.location.lat;
        //    this.longitude = - result.results[0].geometry.location.lng;
        //    console.log(typeof this.latitude, this.latitude, this.longitude)
        //   //  this.latitude = 40.4378698;
        //   //  this.longitude = -3.8196207;
        // })
        // this.zoom = 4;  
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        //set current position
        // this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    console.log('Map res:', place.formatted_address);
                    _this.cityQuote = place.formatted_address;
                    _this.getMapPlaces.emit(_this.cityQuote);
                    //verify result
                    // if (place.geometry === undefined || place.geometry === null) {
                    //   return;
                    // }
                    //set latitude, longitude and zoom
                    // this.latitude = place.geometry.location.lat();
                    // this.longitude = place.geometry.location.lng();
                    // this.zoom = 12;
                });
            });
        });
    };
    return MapsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsComponent.prototype, "cityQuote", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsComponent.prototype, "getMapPlaces", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MapsComponent.prototype, "searchElementRef", void 0);
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maps',
        template: __webpack_require__("../../../../../src/app/components/maps/maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/maps/maps.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _d || Object])
], MapsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal-update-section/modal-update-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal-update-section/modal-update-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n      <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message || 'Are you sure?'}}</p>\n\n      <form #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" value=\"\" placeholder=\"Your name\" name=\"section.name\" [(ngModel)]=\"section.name\"\n            required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputDescription\">Description</label>\n          <textarea class=\"form-control\" id=\"inputDescription\" name=\"section.description\" [(ngModel)]=\"section.description\" required></textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputTags\">Tags</label>\n          <tag-input [(ngModel)]='section.tags' name=\"section.tags\" required></tag-input>\n        </div>\n        <!-- <img src=\"{{ url + service.bigImage }}\"/> -->\n        <div class=\"form-group\">\n          <label for=\"inputBigImage\">Image </label>\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploaderUpdate\" class=\"form-control\" id=\"sectionImage\" value=\"\" name=\"sectionImage\"\n            required>\n        </div>\n\n\n        <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n        <button type=\"submit\" [disabled]=\"!myForm.form.valid\" (click)=\"confirm(section)\" class=\"btn btn-secondary pointer\">Submit</button>\n        <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"confirm()\">OK</button> -->\n        <button type=\"button\" class=\"btn btn-default pointer\" (click)=\"close()\">Cancel</button>\n      </form>\n      {{feedback}}\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modal-update-section/modal-update-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalUpdateSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalUpdateSectionComponent = (function (_super) {
    __extends(ModalUpdateSectionComponent, _super);
    function ModalUpdateSectionComponent(dialogService, session, freelanceApi, helpers) {
        var _this = _super.call(this, dialogService) || this;
        _this.session = session;
        _this.freelanceApi = freelanceApi;
        _this.helpers = helpers;
        _this.updateSection = {};
        _this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL;
        _this.uploaderUpdate = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL + "/api/section-update/image",
            authToken: "Bearer " + _this.session.token,
        });
        return _this;
    }
    ModalUpdateSectionComponent.prototype.confirm = function (section) {
        var _this = this;
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        if (this.uploaderUpdate.queue[0]) {
            this.helpers.formatTags(this.section.tags, function (tags, myForm) {
                _this.uploaderUpdate.onBuildItemForm = function (item, form) {
                    item.withCredentials = false;
                    form.append('id', _this.section._id);
                    form.append('name', _this.section.name);
                    form.append('description', _this.section.description);
                    form.append('tags', tags);
                    form.append('user', _this.section.user);
                    form.append('service', _this.section.service);
                };
                _this.uploaderUpdate.uploadAll();
            });
        }
        else {
            this.section = {
                name: this.section.name,
                description: this.section.description,
                tags: this.section.tags,
                user: this.section.user,
                _id: this.section._id,
            };
            this.freelanceApi.updateSection(this.section)
                .subscribe(function (serviceDetails) { });
        }
    };
    ModalUpdateSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uploader
        this.uploaderUpdate.onSuccessItem = function (item, response) {
            // this.feedback = JSON.parse(response).message;
            // this.sectionList();
            _this.result = true;
            _this.close();
        };
        this.uploaderUpdate.onErrorItem = function (item, response, status, headers) {
            // this.feedback = JSON.parse(response).message;
        };
    };
    return ModalUpdateSectionComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
ModalUpdateSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-update-section',
        template: __webpack_require__("../../../../../src/app/components/modal-update-section/modal-update-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal-update-section/modal-update-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */]) === "function" && _d || Object])
], ModalUpdateSectionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modal-update-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal-update-service/modal-update-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal-update-service/modal-update-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n      <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n    </div>\n    <div class=\"modal-body\">\n      <p>{{message || 'Are you sure?'}}</p>\n      \n      <form  #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" value=\"\" placeholder=\"Your name\" name=\"service.name\" [(ngModel)]=\"service.name\"\n            required>\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"inputDescription\">Description</label>\n          <textarea class=\"form-control\" id=\"inputDescription\" name=\"service.description\" [(ngModel)]=\"service.description\" required></textarea>\n        </div>\n      \n        <div class=\"form-group\">\n          <label for=\"inputTags\">Tags</label>\n          <tag-input [(ngModel)]='service.tags' name=\"service.tags\" required></tag-input>\n        </div>\n        <!-- <img src=\"{{ url + service.bigImage }}\"/> -->\n        <div class=\"form-group\">\n          <label for=\"inputBigImage\">Image </label>\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploaderUpdate\" class=\"form-control\" id=\"serviceImage\" value=\"\" name=\"serviceImage\"\n            required>\n        </div>\n      \n      \n        <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n      \n        <button type=\"submit\" [disabled]=\"!myForm.form.valid\" (click)=\"confirm(service)\" class=\"btn btn-secondary pointer\">Submit</button>\n        <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"confirm()\">OK</button> -->\n        <button type=\"button\" class=\"btn btn-default pointer\" (click)=\"close()\">Cancel</button>\n      </form>\n      {{feedback}}\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modal-update-service/modal-update-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalUpdateServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalUpdateServiceComponent = (function (_super) {
    __extends(ModalUpdateServiceComponent, _super);
    function ModalUpdateServiceComponent(dialogService, freelanceApi, session, helpers) {
        var _this = _super.call(this, dialogService) || this;
        _this.freelanceApi = freelanceApi;
        _this.session = session;
        _this.helpers = helpers;
        _this.updateService = {};
        _this.uploaderUpdate = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL + "/api/service-update/image",
            authToken: "Bearer " + _this.session.token,
        });
        _this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL;
        return _this;
    }
    ModalUpdateServiceComponent.prototype.confirm = function (service) {
        var _this = this;
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        if (this.uploaderUpdate.queue[0]) {
            this.helpers.formatTags(this.service.tags, function (tags, myForm) {
                _this.uploaderUpdate.onBuildItemForm = function (item, form) {
                    item.withCredentials = false;
                    form.append('id', _this.service._id);
                    form.append('name', _this.service.name);
                    form.append('description', _this.service.description);
                    form.append('tags', tags);
                    form.append('user', _this.service.user);
                    form.append('service', _this.service.service);
                };
                _this.uploaderUpdate.uploadAll();
            });
        }
        else {
            this.service = {
                name: this.service.name,
                description: this.service.description,
                tags: this.service.tags,
                user: this.service.user,
                _id: this.service._id,
            };
            this.freelanceApi.updateService(this.service)
                .subscribe(function (serviceDetails) {
            });
        }
    };
    ModalUpdateServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        //uploader
        this.uploaderUpdate.onSuccessItem = function (item, response) {
            // this.feedback = JSON.parse(response).message;
            // this.sectionList();
            _this.result = true;
            _this.close();
        };
        this.uploaderUpdate.onErrorItem = function (item, response, status, headers) {
            // this.feedback = JSON.parse(response).message;
        };
    };
    return ModalUpdateServiceComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
ModalUpdateServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-update-service',
        template: __webpack_require__("../../../../../src/app/components/modal-update-service/modal-update-service.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/modal-update-service/modal-update-service.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__["a" /* HelpersService */]) === "function" && _d || Object])
], ModalUpdateServiceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modal-update-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n    text-align: right;\n}\nnav ul {\n    list-style-type: none;\n}\nnav ul li {\n    display: inline-block;\n}\nnav ul li a {\n    color: #fff;\n    text-transform: uppercase;\n    font-size: 16px;\n    padding: 10px 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"gap-10\"></div>\n  <ul class=\"\">\n    <li class=\"\">\n      <a class=\"\" [routerLink]=\"['/']\">Home </a>\n    </li>\n    <li class=\"\">\n      <a class=\"\" [routerLink]=\"['/s/:query']\">Search</a>\n    </li>\n    <li class=\"\">\n      <a class=\"\" *ngIf=\"this.session.isAuth\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n    </li>\n    <li class=\"\">\n      <a class=\"\" *ngIf=\"!this.session.isAuth\" [routerLink]=\"['/signup']\">Signup</a>\n    </li>\n    <li class=\"\">\n      <a class=\"\" *ngIf=\"!this.session.isAuth\" [routerLink]=\"['/login']\">Login</a>\n    </li>\n    <li class=\"\">\n      <a class=\"\" *ngIf=\"this.session.isAuth\" [routerLink]=\"['/logout']\">Logout</a>\n    </li>\n  </ul>\n  <div class=\"gap-5\"></div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(session) {
        this.session = session;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.session.canActivate();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-danger {\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Public profile </h3>\n<p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit.</p>\n\n<a class=\"btn btn-secondary\" target=\"_blank\" [routerLink]=\"['/p/', user.url]\">View your public profile</a>\n\n<div class=\"gap-50\"></div>\n<form (ngSubmit)=\"submitUpdates(myForm)\" #myForm=\"ngForm\">\n    <!-- <div class=\"form-group\">\n        <label for=\"inputEmail\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"user.email\"\n            #myEmail=\"ngModel\" ng-model=\"required\">\n    </div> -->\n    <!-- <div class=\"form-group\">\n        <label for=\"inputPassword\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Choose Password\" name=\"password\" [(ngModel)]=\"user.password\"\n            #myPassword=\"ngModel\" minlength=\"6\" ng-model=\"required\">\n        <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n            <p class=\"error\" [hidden]=\"!myPassword.errors.required\" [hidden]=\"!myPassword.errors.minlength\">\n                <small>Password must be at least 6 characters long.</small>\n            </p>\n        </div>\n    </div> -->\n    <h2>Personal Data</h2>\n    <p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit.</p>\n    <div class=\"form-group\">\n        <label for=\"inputName\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Your name\" name=\"name\" [(ngModel)]=\"user.name\" ng-model=\"required\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputSurname\">Surname</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputSurname\" placeholder=\"Your Surname\" name=\"surname\" [(ngModel)]=\"user.surname\"\n            ng-model=\"required\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputPhone\">Contact phone</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Your Phone\" name=\"phone\" [(ngModel)]=\"user.phone\">\n    </div>\n    <!-- <div class=\"form-group\">\n        <label for=\"inputCountry\">Country</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputCountry\" placeholder=\"Your Country\" name=\"country\" [(ngModel)]=\"user.country\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputCity\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"Your City\" name=\"city\" [(ngModel)]=\"user.city\">\n    </div> -->\n    <div class=\"form-group\">\n        <label for=\"inputCity\">City</label>\n       <app-maps *ngIf=\"cityQuote\" [cityQuote]=\"cityQuote\" (getMapPlaces)=\"handleMapEvent($event)\"></app-maps>\n    </div>\n\n    <div *ngIf=\"feedbackError\" class=\"alert alert-danger\" role=\"alert\">{{feedbackError}}</div>\n    <div *ngIf=\"feedback\" class=\"alert alert-success\" role=\"alert\">{{feedback}}</div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n    <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Save all</button>\n    <div class=\"gap-50\"></div>\n    <h2>Sector data</h2>\n    <p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit.</p>\n    <div class=\"form-group\">\n        <label for=\"inputKlaim\">Short description</label>\n        <textarea class=\"form-control\" id=\"inputKlaim\" name=\"klaim\" [(ngModel)]=\"user.klaim\" value=\"s\" [maxLength]=\"160\" ng-trim=\"false\"></textarea> {{160 - user.klaim.length}}\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"inputTags\">Tags</label>\n        <tag-input class=\"tagline\" [(ngModel)]='user.tags' name=\"tags\"></tag-input>\n    </div>\n    <div *ngIf=\"feedbackError\" class=\"alert alert-danger\" role=\"alert\">{{feedbackError}}</div>\n    <div *ngIf=\"feedback\" class=\"alert alert-success\" role=\"alert\">{{feedback}}</div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n    <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Save all</button>\n    <div class=\"gap-50\"></div>\n    <h2>Social Networks</h2>\n    <p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit.</p>\n    <div class=\"form-group\">\n        <label for=\"inputLinkedin\">Linkedin</label>\n        <input class=\"form-control\" id=\"inputLinkedin\" placeholder=\"Your Linkedin\" name=\"linkedin\" pattern=\"https?://.+\" [(ngModel)]=\"user.linkedin\"\n            #linkedin=\"ngModel\">\n        <div *ngIf=\"linkedin.errors && (linkedin.dirty || linkedin.touched)\" class=\"alert alert-danger\">\n            <div class=\"gap-10\"></div>\n            <div [hidden]=\"!linkedin.errors.required\">\n                URL is required!\n            </div>\n            <div [hidden]=\"!linkedin.errors.pattern\">\n                Must be a valid URL!\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputFacebook\">Facebook</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputFacebook\" placeholder=\"Your Facebook\" name=\"Facebook\" pattern=\"https?://.+\"\n            [(ngModel)]=\"user.facebook\" #facebook=\"ngModel\">\n        <div *ngIf=\"facebook.errors && (facebook.dirty || facebook.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!facebook.errors.required\">\n                URL is required!\n            </div>\n            <div [hidden]=\"!facebook.errors.pattern\">\n                Must be a valid URL!\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputGoogle\">Google</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputGoogle\" placeholder=\"Your Google\" name=\"google\" pattern=\"https?://.+\" [(ngModel)]=\"user.google\"\n            #google=\"ngModel\">\n        <div *ngIf=\"google.errors && (url.dirty || google.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!google.errors.required\">\n                URL is required!\n            </div>\n            <div [hidden]=\"!google.errors.pattern\">\n                Must be a valid URL!\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputWeb\">Web</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputWeb\" placeholder=\"Your Web\" pattern=\"https?://.+\" [(ngModel)]=\"user.web\"\n            name=\"web\" #url=\"ngModel\">\n        <div *ngIf=\"url.errors && (url.dirty || url.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!url.errors.required\">\n                URL is required!\n            </div>\n            <div [hidden]=\"!url.errors.pattern\">\n                Must be a valid URL!\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"feedbackError\" class=\"alert alert-danger\" role=\"alert\">{{feedbackError}}</div>\n    <div *ngIf=\"feedback\" class=\"alert alert-success\" role=\"alert\">{{feedback}}</div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n    <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Save all</button>\n    <div class=\"gap-50\"></div>\n    <h2>Images</h2>\n    <p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit.</p>\n    <div class=\"form-group\">\n        <label for=\"inputUserImage\">Profile image</label>\n\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"form-control\" id=\"userImage\" value=\"\" name=\"userImage\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"inputBigImage\">Banner image</label>\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploaderBig\" class=\"form-control\" id=\"bigImage\" value=\"\" name=\"bigImage\"> {{bigImage}}\n    </div>\n    <div *ngIf=\"feedbackError\" class=\"alert alert-danger\" role=\"alert\">{{feedbackError}}</div>\n    <div *ngIf=\"feedback\" class=\"alert alert-success\" role=\"alert\">{{feedback}}</div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n    <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Save all</button>\n</form>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(freelanceApi, session, helpers) {
        this.freelanceApi = freelanceApi;
        this.session = session;
        this.helpers = helpers;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL + "/api/user/edit/userImage/" + JSON.parse(localStorage.getItem('user'))._id,
            authToken: "Bearer " + this.session.token
        });
        this.uploaderBig = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL + "/api/user/edit/bigImage/" + JSON.parse(localStorage.getItem('user'))._id,
            authToken: "Bearer " + this.session.token
        });
        this.usersList = [];
        this.user = {};
        this.newUser = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.klaim = "";
        this.userId = JSON.parse(localStorage.getItem('user'))._id;
        this.name = this.user.name;
        this.getUser(this.userId);
        this.uploader.onSuccessItem = function (item, response) {
            _this.getUser(_this.userId);
            _this.feedback = JSON.parse(response).message;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedbackError = JSON.parse(response).message;
        };
        this.uploaderBig.onSuccessItem = function (item, response) {
            _this.getUser(_this.userId);
            _this.feedback = JSON.parse(response).message;
        };
        this.uploaderBig.onErrorItem = function (item, response, status, headers) {
            _this.feedbackError = JSON.parse(response).message;
        };
    };
    ProfileComponent.prototype.getUser = function (id) {
        var _this = this;
        this.freelanceApi.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
            if (!_this.user.klaim) {
                _this.user.klaim = '';
            }
            _this.cityQuote = _this.user.city;
        });
    };
    ProfileComponent.prototype.handleMapEvent = function (place) {
        console.log("Emit works:", place);
        this.user.city = place;
    };
    ProfileComponent.prototype.submitUpdates = function (myForm) {
        var _this = this;
        this.helpers.convertToUrl(this.user.name, this.user.surname, function (string) {
            _this.user.url = string;
            _this.uploader.onBuildItemForm = function (item, form) {
                item.withCredentials = false;
            };
            _this.uploader.uploadAll();
            _this.uploaderBig.onBuildItemForm = function (item, form) {
                item.withCredentials = false;
            };
            _this.uploaderBig.uploadAll();
            _this.freelanceApi.editUserProfile(_this.user)
                .subscribe(function (user) {
                _this.getUser(_this.userId);
                _this.feedback = 'saved';
            });
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-bigImage {\n  height: 100px;\n  width: 150px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user.url\" class=\"bigImageContent\">\n  <div class=\"bigImage\" [ngStyle]=\"{'background-image': 'url('+ user.bigImage + ')'}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n        <div class=\"col-sm-3\">\n            <img [src]=\"user.userImage\" class=\"rounded-circle userImage\" alt=\"User Image\">\n        </div>\n        <div class=\"col-sm-9\">\n          <h1>{{user.name}} {{user.surname}}</h1>\n          <p>{{user.city}} {{user.country}}</p>\n          <div class=\"badge badge-pill badge-info\" *ngFor=\"let tag of user.tags\">\n            <a [routerLink]=\"['/s/', tag.value]\">{{tag.value}}</a>\n          </div>\n          <p class=\"lead\">{{user.klaim}}</p>\n          <a *ngIf=\"user.linkedin\" href=\"{{user.linkedin}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"user.facebook\" href=\"{{user.facebook}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"user.google\" href=\"{{user.google}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"user.web\" href=\"{{user.web}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n          </a>\n        </div>           \n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<section class=\"form-section\">\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h2 class=\"med\">Contact with\n          <span>{{user.name}} {{user.surname}}</span>\n         {{ firstService.name}}\n        </h2>\n        <p>{{ firstService.description }}</p>\n        \n        <button class=\"btn btn-secondary pointer\" [routerLink]=\"['/', firstService.url]\" role=\"button\">View</button>\n\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"form-box\">\n          <form (ngSubmit)=\"send(myForm)\" #myForm=\"ngForm\">\n            <h3>Contact Form</h3>\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your name ... \" name=\"name\" [(ngModel)]=\"contact.name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Email</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your email ... \" name=\"email\" [(ngModel)]=\"contact.email\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Phone</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your phone ... \" name=\"tel\" [(ngModel)]=\"contact.tel\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Message</label>\n              <textarea class=\"form-control form-deco\" name=\"message\" [(ngModel)]=\"contact.message\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-info btn-lg pointer\" type=\"submit\">CONTACT</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n\n<section class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        \n        <div class=\"gap-30\"></div>\n        <h4>do you know my other services?</h4>\n        <div class=\"gap-20\"></div>\n        <img src=\"./assets/images/arrow.png\">\n        <div class=\"gap-30\"></div>\n      </div>\n    </div>\n    \n  </div>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 text-center\" *ngFor=\"let service of services | slice:1\">\n          <h3>{{ service.name }}</h3>\n          <span class=\"badge badge-pill badge-info\"> {{ service.tags }}</span>\n          <p>{{ service.description }}</p>\n          <!-- <img [src]=\"url + service.bigImage\" class=\"service-bigImage img-responsive\" alt=\"Service bigImage\"> -->\n          <button class=\"btn btn-secondary pointer\" [routerLink]=\"['/', service.url]\" role=\"button\">View</button>\n      </div>\n      <div class=\"col-sm-4 text-center\" *ngFor=\"let section of sections\">\n        <!-- <img class=\"card-img-top\" [src]=\"url + section.bigImage\" alt=\"Card image cap\"> -->\n        {{section}}\n        <h3 class=\"card-title\">{{section.name}}</h3>\n        <span class=\"badge badge-pill badge-info\">{{tags}}</span>\n        <!-- <p>{{section.user}}</p>\n        <p>{{section.service }}</p> -->\n        <p>{{section.description}}</p>\n        <button class=\"btn btn-secondary pointer\" [routerLink]=\"['section.url']\" role=\"button\">View</button>\n      </div>\n    </div>   \n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n\n\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__ = __webpack_require__("../../../../../src/app/services/freelance-public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicProfileComponent = (function () {
    function PublicProfileComponent(freelancePublic, route, helpers) {
        this.freelancePublic = freelancePublic;
        this.route = route;
        this.helpers = helpers;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
        this.user = {};
        this.services = [];
        this.sections = [];
        this.firstService = {};
        this.contact = {
            name: "",
            tel: "",
            message: "",
            email: "",
            userEmail: "",
            origin: "",
            user: "",
            service: ""
        };
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.publicUserUrl = params['id'];
        });
        this.freelancePublic.getUserProfile(this.publicUserUrl)
            .subscribe(function (user) {
            _this.user = user;
            _this.publicUserId = user._id;
            console.log(_this.user.url);
            _this.freelancePublic.getPublicService(_this.publicUserId)
                .subscribe(function (service) {
                console.log('services:', _this.publicUserId);
                _this.services = service;
                console.log('services:', _this.services);
                _this.firstService = {
                    id: _this.services[0]._id,
                    name: _this.services[0].name,
                    description: _this.services[0].description,
                    url: _this.services[0].url
                };
                console.log('first service', _this.firstService, service);
            });
        });
    };
    PublicProfileComponent.prototype.send = function (myForm) {
        this.contact = {
            name: this.contact.name,
            tel: this.contact.tel,
            message: this.contact.message,
            email: this.contact.email,
            userEmail: this.user.email,
            origin: "USER",
            user: this.user._id,
            service: this.services._id
        };
        console.log(this.contact);
        this.freelancePublic.sendNewContact(this.contact)
            .subscribe(function (contact) {
            console.log(contact);
        });
    };
    return PublicProfileComponent;
}());
PublicProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-profile',
        template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object])
], PublicProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-sections/public-sections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-sections/public-sections.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bigImageContent\">\n  <div class=\"bigImage\" [ngStyle]=\"{'background-image': 'url('+ sectionDetail.bigImage + ')'}\">\n  </div>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n\n      <div class=\"col-sm-9\">\n        <h1> {{ sectionDetail.name }}</h1>\n        <div class=\"badge badge-pill badge-info\" *ngFor=\"let tag of sectionDetail.tags\">\n          <a [routerLink]=\"['/s/', tag]\">{{tag}}</a>\n        </div>\n        <p>{{userDetail.city}} {{userDetail.country}}</p>\n        <p class=\"lead\">{{ sectionDetail.description }}</p>\n\n        <div>\n          <a *ngIf=\"userDetail.linkedin\" href=\"{{userDetail.linkedin}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.facebook\" href=\"{{userDetail.facebook}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.google\" href=\"{{userDetail.google}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.web\" href=\"{{userDetail.web}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<section class=\"form-section\">\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h2 class=\"med\">Contact with\n          <span>{{ sectionDetail.name }}</span>\n          freelance\n        </h2>\n        <p>{{ sectionDetail.description}}</p>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"form-box\">\n          <form (ngSubmit)=\"send(myForm)\" #myForm=\"ngForm\">\n            <h3>Contact Form</h3>\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your name ... \" name=\"name\" [(ngModel)]=\"contact.name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Email</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your email ... \" name=\"email\" [(ngModel)]=\"contact.email\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Phone</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your phone ... \" name=\"tel\" [(ngModel)]=\"contact.tel\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Message</label>\n              <textarea class=\"form-control form-deco\" name=\"message\" [(ngModel)]=\"contact.message\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-info btn-lg pointer\" type=\"submit\">CONTACT</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<section class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n\n        <div class=\"gap-30\"></div>\n        <h4>do you know my other services?</h4>\n        <div class=\"gap-20\"></div>\n        <img src=\"./assets/images/arrow.png\">\n        <div class=\"gap-30\"></div>\n      </div>\n    </div>\n\n  </div>\n</section>\n<section>\n  <div class=\"container\">\n    <div class=\"gap-40\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 text-center\"></div>\n      <div class=\"col-sm-4 text-center\">\n        <img [src]=\"url + userDetail.userImage\" class=\"rounded-circle userImage\" alt=\"User Image\">\n        <h3>{{userDetail.name}}</h3>\n        <span class=\"badge badge-pill badge-info\" *ngFor=\"let tag of userDetail.tags\"> {{ tag.value }}</span>\n        <div class=\"gap-20\"></div>\n        <p>{{ userDetail.klaim }}</p>\n        <div class=\"gap-20\"></div>\n        <button class=\"btn btn-secondary pointer\" routerLink=\"/p/{{userDetail.url}}\" role=\"button\">View my profile</button>\n\n      </div>\n\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/public-sections/public-sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicSectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__ = __webpack_require__("../../../../../src/app/services/freelance-public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicSectionsComponent = (function () {
    function PublicSectionsComponent(freelancePublic, route) {
        this.freelancePublic = freelancePublic;
        this.route = route;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
        this.section = {};
        this.serviceDetail = {};
        this.userDetail = {};
        this.sectionDetail = {};
        this.contact = {
            name: "",
            tel: "",
            message: "",
            email: "",
            userEmail: "",
            origin: "SERVICE",
            user: "",
            service: ""
        };
    }
    PublicSectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.sectionId = params['sectionId'];
            console.log(params['sectionId']);
        });
        this.freelancePublic.getSectionProfile(this.sectionId)
            .subscribe(function (section) {
            _this.section = section;
            _this.serviceDetail = section.services;
            _this.userDetail = section.user;
            _this.sectionDetail = section.section;
            console.log(_this.sectionDetail.url);
        });
    };
    PublicSectionsComponent.prototype.send = function (myForm) {
        this.contact = {
            name: this.contact.name,
            tel: this.contact.tel,
            message: this.contact.message,
            email: this.contact.email,
            userEmail: this.userDetail.email,
            origin: "USER",
            user: this.userDetail._id,
            section: this.sectionDetail._id
        };
        this.freelancePublic.sendNewContact(this.contact)
            .subscribe(function (contact) {
            console.log(contact);
        });
    };
    return PublicSectionsComponent;
}());
PublicSectionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-sections',
        template: __webpack_require__("../../../../../src/app/components/public-sections/public-sections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-sections/public-sections.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PublicSectionsComponent);

var _a, _b;
//# sourceMappingURL=public-sections.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-services/public-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-bigImage {\n  height: 100px;\n  width: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-services/public-services.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"serviceDetail.url\" class=\"bigImageContent\">\n  <div class=\"bigImage\" [ngStyle]=\"{'background-image': 'url('+ serviceDetail.bigImage + ')'}\">\n  </div>\n    <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n     \n      <div class=\"col-sm-9\">\n        <h1>{{ serviceDetail.name }}</h1>\n        <div class=\"badge badge-pill badge-info\" *ngFor=\"let tag of serviceDetail.tags\">\n          <a [routerLink]=\"['/s/', tag]\">{{tag}}</a>\n        </div>\n         <p>{{userDetail.city}} {{userDetail.country}}</p>\n        <p class=\"lead\">{{ serviceDetail.description }}</p>\n        \n        <div>\n          <a *ngIf=\"userDetail.linkedin\" href=\"{{userDetail.linkedin}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.facebook\" href=\"{{userDetail.facebook}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.google\" href=\"{{userDetail.google}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n          </a>\n          <a *ngIf=\"userDetail.web\" href=\"{{userDetail.web}}\" class=\"btn btn-info\" target=\"_blank\">\n            <i class=\"fa fa-link\" aria-hidden=\"true\"></i>\n          </a>\n        </div>\n       \n      \n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n<section class=\"form-section\">\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <h2 class=\"med\">Contact with\n          <span>{{ serviceDetail.name }}</span>\n          \n        </h2>\n        <div class=\"gap-40\"></div>\n        <p>{{ serviceDetail.description }}</p>\n\n\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"form-box\">\n          <form (ngSubmit)=\"send(myForm)\" #myForm=\"ngForm\">\n            <h3>Contact Form</h3>\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your name ... \" name=\"name\" [(ngModel)]=\"contact.name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Email</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your email ... \" name=\"email\" [(ngModel)]=\"contact.email\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Phone</label>\n              <input class=\"form-control form-deco\" type=\"text\" placeholder=\"Your phone ... \" name=\"tel\" [(ngModel)]=\"contact.tel\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Message</label>\n              <textarea class=\"form-control form-deco\" name=\"message\" [(ngModel)]=\"contact.message\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <button class=\"btn btn-info btn-lg pointer\" type=\"submit\">CONTACT</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n\n<section *ngIf=\"sectionDetail && sectionDetail.length\" class=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <div class=\"gap-30\"></div>\n        <h4>do you know my other services?</h4>\n        <div class=\"gap-20\"></div>\n        <img src=\"./assets/images/arrow.png\">\n        <div class=\"gap-30\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 text-center\" *ngFor=\"let section of sectionDetail\">\n        <h3>{{ section.name }}</h3>\n        <span class=\"badge badge-pill badge-info\"> {{ section.tags }}</span>\n        <p>{{ section.description }}</p>\n        <!-- <img [src]=\"url + service.bigImage\" class=\"service-bigImage img-responsive\" alt=\"Service bigImage\"> -->\n        <button class=\"btn btn-secondary\" routerLink=\"/{{serviceDetail.url}}/{{section.url}}\" role=\"button\">View</button>\n      </div>\n      \n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n\n\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/public-services/public-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__ = __webpack_require__("../../../../../src/app/services/freelance-public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicServicesComponent = (function () {
    function PublicServicesComponent(freelancePublicService, route, helpers, router) {
        this.freelancePublicService = freelancePublicService;
        this.route = route;
        this.helpers = helpers;
        this.router = router;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
        this.service = {};
        this.serviceDetail = {};
        this.userDetail = {};
        this.contact = {
            name: "",
            tel: "",
            message: "",
            email: "",
            userEmail: "",
            origin: "SERVICE",
            user: "",
            service: ""
        };
    }
    PublicServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.serviceId = params['url'];
        });
        this.freelancePublicService.getServiceProfile(this.serviceId)
            .subscribe(function (service) {
            if (service.message === "error") {
                _this.router.navigate(['/']);
            }
            _this.service = service;
            _this.serviceDetail = service.services;
            _this.userDetail = service.user;
            _this.sectionDetail = service.section;
            console.log(service.section.length);
        });
    };
    PublicServicesComponent.prototype.send = function (myForm) {
        this.contact = {
            name: this.contact.name,
            tel: this.contact.tel,
            message: this.contact.message,
            email: this.contact.email,
            userEmail: this.userDetail.email,
            origin: "USER",
            user: this.userDetail._id,
            service: this.serviceDetail._id
        };
    };
    return PublicServicesComponent;
}());
PublicServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-services',
        template: __webpack_require__("../../../../../src/app/components/public-services/public-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-services/public-services.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_public_service__["a" /* FreelancePublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PublicServicesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=public-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-item/search-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".crop-image {\n  height: 120px;\n  overflow: hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-item/search-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"crop-image\">\n    <img class=\"card-img-top\" src=\"{{url + item.bigImage}}\" alt=\"User Image\">\n  </div>\n\n  <div class=\"card-body\">\n    <h6 class=\"card-title\">{{item.name}} {{item.surname}}</h6>\n    <span *ngFor=\"let tag of item.tags; let i=index\">\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"i<3\">\n        {{ tag.value || tag }}\n      </span>\n    </span>\n    <br>\n    <br>\n    <a class=\"btn btn-secondary\" *ngIf=\"item.surname\" [routerLink]=\"['/p', item.url]\">View</a>\n    <a class=\"btn btn-secondary\" *ngIf=\"!item.surname\" [routerLink]=\"['/', item.url]\">View</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/search-item/search-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchItemComponent = (function () {
    function SearchItemComponent(router) {
        this.router = router;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL;
    }
    SearchItemComponent.prototype.ngOnInit = function () {
    };
    return SearchItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SearchItemComponent.prototype, "item", void 0);
SearchItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-item',
        template: __webpack_require__("../../../../../src/app/components/search-item/search-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-item/search-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SearchItemComponent);

var _a;
//# sourceMappingURL=search-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-list/search-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-list/search-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"search\" [(ngModel)]=\"search\" class=\"form-control\" placeholder=\"Search for...\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-secondary pointer\" type=\"button\" (click)=\"newSearch()\">Search</button>\n        </span>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n\n\n<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h1>Resultados para servicios</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n\n      <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let service of serviceList\">\n        <app-search-item [item]=\"service\"></app-search-item>\n      </div>\n    </div>\n\n    <a class=\"btn btn-secondary pointer\" (click)=\"searchServiceFunction()\">Load more</a>\n\n\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n\n<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h1>Resultados para freelance</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let user of userList\">\n        <app-search-item [item]=\"user\"></app-search-item>\n      </div>\n    </div>\n    <a class=\"btn btn-secondary pointer\" (click)=\"searchUserFunction()\">Load more</a>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/search-list/search-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_freelance_public_service__ = __webpack_require__("../../../../../src/app/services/freelance-public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchListComponent = (function () {
    function SearchListComponent(freelancePublicService, route, router, helpers) {
        this.freelancePublicService = freelancePublicService;
        this.route = route;
        this.router = router;
        this.helpers = helpers;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseURL;
        this.userList = [];
        this.users = [];
        this.serviceList = [];
        this.services = [];
        this.sectionList = [];
        this.sections = [];
        this.limit = 1;
        this.skipUser = 0;
        this.skipService = 0;
        this.skipSection = 0;
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.query = params['query'];
        });
        this.searchUserFunction();
        this.searchServiceFunction();
    };
    SearchListComponent.prototype.newSearch = function () {
        this.serviceList = [];
        this.userList = [];
        this.skipUser = 0;
        this.skipService = 0;
        this.query = this.search;
        this.searchUserFunction();
        this.searchServiceFunction();
    };
    SearchListComponent.prototype.searchUserFunction = function () {
        var _this = this;
        this.freelancePublicService.searchUserList(this.query, this.limit, this.skipUser)
            .subscribe(function (user) {
            _this.users = user;
            _this.skipUser++;
            _this.helpers.arrayReassign(_this.users, _this.userList);
            console.log('User List:', _this.userList);
        });
    };
    SearchListComponent.prototype.searchServiceFunction = function () {
        var _this = this;
        this.freelancePublicService.searchServiceList(this.query, this.limit, this.skipService)
            .subscribe(function (service) {
            _this.services = service;
            _this.skipService++;
            _this.helpers.arrayReassign(_this.services, _this.serviceList);
            console.log('Service List:', _this.serviceList);
        });
    };
    return SearchListComponent;
}());
SearchListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-list',
        template: __webpack_require__("../../../../../src/app/components/search-list/search-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-list/search-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_freelance_public_service__["a" /* FreelancePublicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_freelance_public_service__["a" /* FreelancePublicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__["a" /* HelpersService */]) === "function" && _d || Object])
], SearchListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/section-update/section-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/section-update/section-update.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary pointer\" (click)=showConfirm()>Update</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/section-update/section-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modal_update_section_modal_update_section_component__ = __webpack_require__("../../../../../src/app/components/modal-update-section/modal-update-section.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionUpdateComponent = (function () {
    function SectionUpdateComponent(dialogService) {
        this.dialogService = dialogService;
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SectionUpdateComponent.prototype.showConfirm = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__components_modal_update_section_modal_update_section_component__["a" /* ModalUpdateSectionComponent */], {
            title: 'Confirm title',
            message: 'Confirm message',
            section: this.section,
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.section = {
                    name: _this.section.name,
                    description: _this.section.description,
                    tags: _this.section.tags,
                    user: _this.section.user,
                    _id: _this.section._id,
                };
                _this.goEmiterGo();
            }
        });
    };
    SectionUpdateComponent.prototype.ngOnInit = function () {
    };
    SectionUpdateComponent.prototype.goEmiterGo = function () {
        this.onSave.emit(this.section);
    };
    return SectionUpdateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionUpdateComponent.prototype, "section", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SectionUpdateComponent.prototype, "onSave", void 0);
SectionUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section-update',
        template: __webpack_require__("../../../../../src/app/components/section-update/section-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/section-update/section-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], SectionUpdateComponent);

var _a;
//# sourceMappingURL=section-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sections/sections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block {\n    padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sections/sections.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Details service</h1>\n<div class=\"card\" >\n  <img class=\"card-img-top\" [src]=\"serviceDetails.bigImage\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{ serviceDetails.name }}</h4>\n    <p>{{serviceDetails.user}}</p>\n    <span class=\"badge badge-pill badge-info\" *ngFor=\"let tag of serviceDetails.tags\">\n      {{tag}}\n    </span>\n    <p class=\"card-text\">{{ serviceDetails.description }}</p>\n    <p>\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/', serviceDetails.url]\">View public Service Page</a>\n    </p>\n  </div>\n</div>\n<div class=\"gap-50\"></div>\n\n<h3>SectionsList</h3>\n\n<div *ngFor=\"let section of sectionsList\" class=\"card\">\n  \n  <img class=\"card-img-top\" src=\"{{section.bigImage}}\" /> \n  {{section.user}}\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{section.name}}</h4>\n    <p class=\"card-text\">{{section.description}}</p>\n    <span *ngFor=\"let tag of section.tags\">\n      {{tag}}\n    </span>\n    <div class=\"gap-20\"></div>\n    <p>\n      <a class=\"btn btn-danger pointer\" (click)=\"removeSection(section._id)\">Remove section</a>\n      <app-section-update [section]=\"section\" (onSave)=\"sectionList()\"></app-section-update>\n      <a class=\"btn btn-secondary\" routerLink=\"/{{serviceDetails.url}}/{{section.url}}\">View public Service Page</a>\n\n\n\n    </p>\n  </div>\n  \n</div> \n<h3>Add new section of this service:</h3>\n<form (ngSubmit)=\"submitSection(myForm)\" #myForm=\"ngForm\">\n  \n  <div class=\"form-group\">\n    <label for=\"inputName\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputName\" value=\"\" placeholder=\"Your name\" name=\"newSection.name\" [(ngModel)]=\"newSection.name\" required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputDescription\">Description</label>\n    <textarea class=\"form-control\" id=\"inputDescription\" name=\"newSection.description\" [(ngModel)]=\"newSection.description\" required></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputTags\">Tags</label>\n\n    <tag-input id=\"inputTags\" [(ngModel)]='newSection.tags' name=\"newSection.tags\" value=\"\"></tag-input>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"inputBigImage\">Image </label>\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"form-control\" id=\"sectionImage\" value=\"\" name=\"sectionImage\" required>\n  </div>\n\n  {{feedback}}\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n  <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Submit</button>\n</form>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/sections/sections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SectionsComponent = (function () {
    function SectionsComponent(freelanceApi, session, helpers, route, router) {
        this.freelanceApi = freelanceApi;
        this.session = session;
        this.helpers = helpers;
        this.route = route;
        this.router = router;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseURL;
        this.userId = JSON.parse(localStorage.getItem('user'))._id;
        this.serviceDetails = {};
        this.sectionsList = [];
        this.newSection = {};
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseURL + "/api/section/image",
            authToken: "Bearer " + this.session.token,
        });
        this.CLIENT_BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].clientBaseURL;
    }
    SectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //capture id from url
        this.route.params
            .subscribe(function (params) {
            _this.serviceId = params['id'];
        });
        //Service Details
        this.freelanceApi.serviceDetails(this.serviceId)
            .subscribe(function (details) {
            _this.serviceDetails = details;
        });
        //SectionList
        this.sectionList();
        //uploader
        this.uploader.onSuccessItem = function (item, response) {
            _this.feedback = JSON.parse(response).message;
            _this.sectionList();
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
    };
    SectionsComponent.prototype.sectionList = function () {
        var _this = this;
        this.freelanceApi.sectionsList(this.serviceId)
            .subscribe(function (details) {
            _this.sectionsList = details;
        });
    };
    SectionsComponent.prototype.removeSection = function (sectionId) {
        var _this = this;
        this.freelanceApi.removeSection(sectionId)
            .subscribe(function (details) {
            _this.sectionList();
            _this.newSection = {};
        });
    };
    SectionsComponent.prototype.submitSection = function (myForm) {
        var _this = this;
        if (!this.uploader.queue[0]) {
            this.newSection = {
                name: this.newSection.name,
                description: this.newSection.description,
                tags: this.newSection.tags,
                user: this.userId,
                service: this.serviceId,
            };
            this.freelanceApi.newSection(this.newSection)
                .subscribe(function (details) {
                _this.sectionList();
                _this.newSection = {};
            });
        }
        else {
            this.helpers.formatTags(this.newSection.tags, function (tags, myForm) {
                _this.uploader.onBuildItemForm = function (item, form) {
                    item.withCredentials = false;
                    form.append('name', _this.newSection.name);
                    form.append('description', _this.newSection.description);
                    form.append('tags', tags);
                    form.append('user', _this.userId);
                    form.append('service', _this.serviceId);
                    form.append('url', _this.newSection.url);
                };
                _this.uploader.uploadAll();
            });
        }
        ;
    };
    ;
    return SectionsComponent;
}());
SectionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sections',
        template: __webpack_require__("../../../../../src/app/components/sections/sections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sections/sections.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], SectionsComponent);

;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=sections.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/service-update/service-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/service-update/service-update.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary pointer\" (click)=showConfirm()>Update</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/service-update/service-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modal_update_service_modal_update_service_component__ = __webpack_require__("../../../../../src/app/components/modal-update-service/modal-update-service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceUpdateComponent = (function () {
    function ServiceUpdateComponent(dialogService) {
        this.dialogService = dialogService;
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ServiceUpdateComponent.prototype.showConfirm = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__components_modal_update_service_modal_update_service_component__["a" /* ModalUpdateServiceComponent */], {
            title: 'Confirm title',
            message: 'Confirm message',
            service: this.service,
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.goEmiterGo();
            }
        });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        // setTimeout(() => {
        //   disposable.unsubscribe();
        // }, 10000);
    };
    ServiceUpdateComponent.prototype.ngOnInit = function () {
    };
    ServiceUpdateComponent.prototype.goEmiterGo = function () {
        this.onSave.emit(this.service);
    };
    return ServiceUpdateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ServiceUpdateComponent.prototype, "service", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ServiceUpdateComponent.prototype, "onSave", void 0);
ServiceUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-service-update',
        template: __webpack_require__("../../../../../src/app/components/service-update/service-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/service-update/service-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], ServiceUpdateComponent);

var _a;
//# sourceMappingURL=service-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/services-list/services-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block {\n    padding: 20px;\n}\n.card {\n    margin-bottom: 20px;\n}\n.badge {\n    padding: 5px 10px;\n    font-size: 0.7rem;\n    font-weight: 300;\n    margin-right: 5px;\n}\n.badge-info {\n    background-color: #333;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services-list/services-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Services list</h2>\n<div class=\"card\" *ngFor=\"let service of serviceList\">\n  <div class=\"crop-img-card\">\n    <img class=\"card-img-top\" [src]=\"service.bigImage\" alt=\"{{service.name}}\">\n  </div>\n  \n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{service.name}}</h4>\n    <p>{{service.user}}</p>\n    <span class=\"badge badge-pill badge-info\" *ngFor=\"let tag of service.tags\">\n      {{tag}}\n    </span>\n    <p class=\"card-text\">{{service.description}}</p>\n    <p>\n      <a class=\"btn btn-danger pointer\" (click)=\"removeService(service._id)\">REMOVE</a>\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard/service/', service._id]\">View Details</a>\n      \n    </p>\n  </div>\n</div>\n<div class=\"gap-50\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/services-list/services-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicesListComponent = (function () {
    function ServicesListComponent(freelanceApi, helpers, session) {
        this.freelanceApi = freelanceApi;
        this.helpers = helpers;
        this.session = session;
        this.serviceList = [];
        this.url = "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseURL;
        this.userId = JSON.parse(localStorage.getItem('user'))._id;
    }
    ServicesListComponent.prototype.ngOnInit = function () {
        this.serviceListing(this.userId);
    };
    ServicesListComponent.prototype.serviceListing = function (id) {
        var _this = this;
        this.freelanceApi.servicesList(id)
            .subscribe(function (list) {
            _this.serviceList = list;
        });
    };
    ServicesListComponent.prototype.removeService = function (id) {
        var _this = this;
        this.freelanceApi.removeService(id)
            .subscribe(function (details) {
            _this.serviceListing(_this.userId);
        });
    };
    return ServicesListComponent;
}());
ServicesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services-list',
        template: __webpack_require__("../../../../../src/app/components/services-list/services-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/services-list/services-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_helpers_service__["a" /* HelpersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], ServicesListComponent);

var _a, _b, _c;
//# sourceMappingURL=services-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-bigImage {\n  height: 100px;\n  width: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Services</h1>\n<p>Malesuada nec gravida lobortis, congue id tellus. Proin placerat tortor dapibus nisl faucibus hendrerit. Ut luctus, dolor\net vehicula mattis, augue sem fringilla nisi, a vestibulum nisi odio ac nulla. Integer vitae aliquam nunc. Suspendisse potenti.\nAliquam nec feugiat nunc. Pellentesque vitae arcu mi. Cras elementum lorem sit amet risus condimentum, sit amet aliquam elit\nviverra. Cras quis rhoncus nulla.</p>\n<hr>\n<h2>Create new Service</h2>\n<form (ngSubmit)=\"submitService(myForm)\" #myForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"inputName\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputName\" value=\"\" placeholder=\"Your name\" name=\"newService.name\" [(ngModel)]=\"newService.name\" required>\n  </div>\n\n   <div class=\"form-group\">\n    <label for=\"inputDescription\">Description</label>\n    <textarea class=\"form-control\" id=\"inputDescription\" name=\"newService.description\" [(ngModel)]=\"newService.description\" required></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputTags\">Tags</label>\n    <tag-input [(ngModel)]='newService.tags' name=\"newService.tags\" required></tag-input>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputBigImage\">Image </label>\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"form-control\" id=\"serviceImage\" value=\"\" name=\"serviceImage\" required>\n  </div>\n  \n\n  <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n\n  <button type=\"submit\" [disabled]=\"!myForm.form.valid\" class=\"btn btn-secondary\">Submit</button>\n</form>\n   {{feedback}}\n\n<hr>\n<h2>Services list</h2>\n<div class=\"card\" *ngFor=\"let service of servicesList\">\n  <div class=\"crop-img-card\">\n    <img class=\"card-img-top\" [src]=\"service.bigImage\" alt=\"{{service.name}}\">\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">{{service.name}}</h4>\n    \n    <span class=\"badge badge-pill badge-info\" *ngFor=\"let tag of service.tags\">\n      {{tag}}\n    </span>\n    <p class=\"card-text\">{{service.description}}</p>\n    <p>\n      <a class=\"btn btn-danger pointer\" (click)=\"removeService(service._id)\">REMOVE</a>\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard/service/', service._id]\">View Details</a>\n      <app-service-update [service]=\"service\" (onSave)=\"serviceList(service.user)\"></app-service-update>\n\n      \n    </p>\n  </div>\n</div>\n<div class=\"gap-50\"></div>\n<div class=\"gap-50\"></div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__ = __webpack_require__("../../../../../src/app/services/freelance-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServicesComponent = (function () {
    function ServicesComponent(freelanceApi, helpers, session) {
        this.freelanceApi = freelanceApi;
        this.helpers = helpers;
        this.session = session;
        this.url = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
        this.userId = JSON.parse(localStorage.getItem('user'))._id;
        this.servicesList = [];
        this.serviceDetail = {};
        this.newService = {};
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL + "/api/service/image",
            authToken: "Bearer " + this.session.token,
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    ServicesComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ServicesComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceList(this.userId);
        this.uploader.onSuccessItem = function (item, response) {
            _this.serviceList(_this.userId);
            _this.feedback = JSON.parse(response).message;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
    };
    ServicesComponent.prototype.serviceList = function (id) {
        var _this = this;
        this.freelanceApi.servicesList(id)
            .subscribe(function (list) {
            _this.servicesList = list;
        });
    };
    ServicesComponent.prototype.submitService = function (myForm) {
        var _this = this;
        this.helpers.convertToUrl(this.newService.name, null, function (string) {
            _this.newService.url = string;
            console.log(_this.newService);
            _this.helpers.formatTags(_this.newService.tags, function (tags, myForm) {
                _this.uploader.onBuildItemForm = function (item, form) {
                    item.withCredentials = false;
                    form.append('name', _this.newService.name);
                    form.append('description', _this.newService.description);
                    form.append('tags', tags);
                    form.append('user', _this.userId);
                    form.append('url', _this.newService.url);
                };
                _this.uploader.uploadAll();
                _this.newService = {};
            });
        });
    };
    ServicesComponent.prototype.removeService = function (id) {
        var _this = this;
        this.freelanceApi.removeService(id)
            .subscribe(function (details) {
            _this.serviceList(_this.userId);
        });
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_freelance_api_service__["a" /* FreelanceApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_helpers_service__["a" /* HelpersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], ServicesComponent);

var _a, _b, _c;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"container\">\n    <div class=\"gap-50\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n      </div>\n      <div class=\"col-sm-6\">\n        <h1>Signup</h1>\n        <form (ngSubmit)=\"submitSignup(myForm)\" #myForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"inputEmail\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"user.email\"\n              #myEmail=\"ngModel\" ng-model=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Choose Password\" name=\"password\" [(ngModel)]=\"user.password\"\n              #myPassword=\"ngModel\" minlength=\"6\" ng-model=\"required\">\n            <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n              <p class=\"error\" [hidden]=\"!myPassword.errors.required\" [hidden]=\"!myPassword.errors.minlength\">\n                <small>Password must be at least 6 characters long.</small>\n              </p>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputName\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Your name\" name=\"name\" [(ngModel)]=\"user.name\" ng-model=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputSurname\">Surname</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputSurname\" placeholder=\"Your Surname\" name=\"surname\" [(ngModel)]=\"user.surname\"\n              ng-model=\"required\">\n          </div>\n        \n          <div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">{{ error.statusText }}</div>\n          <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\n        </form>\n          <p class=\"text-right\">\n            <a class=\"\" [routerLink]=\"['/login']\">Login here</a> please.\n          </p>\n\n        \n      </div>\n    </div>\n    <div class=\"gap-50\"></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__ = __webpack_require__("../../../../../src/app/services/helpers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(session, router, helpers) {
        this.session = session;
        this.router = router;
        this.helpers = helpers;
        this.user = {
            email: '',
            password: '',
            name: '',
            surname: '',
            url: '',
        };
        this.error = null;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submitSignup = function (myForm) {
        var _this = this;
        this.helpers.convertToUrl(this.user.name, this.user.surname, function (string) {
            _this.user.url = string;
            _this.session.signup(_this.user)
                .subscribe(function (data) {
                _this.router.navigate(['/dashboard']);
            }, function (err) {
                _this.error = err;
            });
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/freelance-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelanceApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FreelanceApiService = (function () {
    function FreelanceApiService(http, session) {
        this.http = http;
        this.session = session;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
    }
    FreelanceApiService.prototype.setOptionsApi = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.session.token });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    FreelanceApiService.prototype.getUserList = function () {
        return this.http.get(this.BASE_URL + "/api/users", this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    //get user from your :id
    FreelanceApiService.prototype.getUser = function (id) {
        return this.http.get(this.BASE_URL + "/api/user/" + id, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    //put update user profile
    FreelanceApiService.prototype.editUserProfile = function (user) {
        return this.http.put(this.BASE_URL + "/api/user/" + user._id, user, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    //get services user profile
    FreelanceApiService.prototype.servicesList = function (user) {
        return this.http.get(this.BASE_URL + "/api/services/" + user, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.newService = function (service) {
        return this.http.post(this.BASE_URL + "/api/service", service, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.updateService = function (service) {
        console.log(service._id);
        return this.http.put(this.BASE_URL + "/api/service/" + service._id, service, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.removeService = function (serviceId) {
        return this.http.delete(this.BASE_URL + "/api/service/" + serviceId, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    //get 1 service
    FreelanceApiService.prototype.serviceDetails = function (service) {
        return this.http.get(this.BASE_URL + "/api/service/" + service, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    //get sections user profile
    FreelanceApiService.prototype.sectionsList = function (service) {
        return this.http.get(this.BASE_URL + "/api/sections/" + service, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.newSection = function (section) {
        return this.http.post(this.BASE_URL + "/api/section", section, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.updateSection = function (section) {
        return this.http.put(this.BASE_URL + "/api/section/" + section._id, section, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    FreelanceApiService.prototype.removeSection = function (sectionId) {
        return this.http.delete(this.BASE_URL + "/api/section/" + sectionId, this.setOptionsApi())
            .map(function (res) { return res.json(); });
    };
    return FreelanceApiService;
}());
FreelanceApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], FreelanceApiService);

var _a, _b;
//# sourceMappingURL=freelance-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/freelance-public.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancePublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FreelancePublicService = (function () {
    function FreelancePublicService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
    }
    FreelancePublicService.prototype.getUserProfile = function (url) {
        return this.http.get(this.BASE_URL + "/public-profile/" + url)
            .map(function (res) { return res.json(); });
    };
    FreelancePublicService.prototype.getPublicService = function (id) {
        return this.http.get(this.BASE_URL + "/public-profile-service/" + id)
            .map(function (res) { return res.json(); });
    };
    FreelancePublicService.prototype.getServiceProfile = function (url) {
        return this.http.get(this.BASE_URL + "/public-service/" + url)
            .map(function (res) { return res.json(); });
    };
    FreelancePublicService.prototype.getSectionProfile = function (url) {
        return this.http.get(this.BASE_URL + "/public-section/" + url)
            .map(function (res) { return res.json(); });
    };
    FreelancePublicService.prototype.sendNewContact = function (contact) {
        return this.http.post(this.BASE_URL + "/send", contact)
            .map(function (res) { return res.json(); });
    };
    // search how many users match with the query
    FreelancePublicService.prototype.searchUserList = function (query, limit, skip) {
        return this.http.get(this.BASE_URL + "/search-user/" + query + "/" + limit + "/" + skip)
            .map(function (res) { return res.json(); });
    };
    FreelancePublicService.prototype.searchServiceList = function (query, limit, skip) {
        return this.http.get(this.BASE_URL + "/search-service/" + query + "/" + limit + "/" + skip)
            .map(function (res) { return res.json(); });
    };
    return FreelancePublicService;
}());
FreelancePublicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FreelancePublicService);

var _a;
//# sourceMappingURL=freelance-public.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/helpers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpersService = (function () {
    function HelpersService() {
    }
    HelpersService.prototype.formatTags = function (tags, cb) {
        for (var i = 0; i < tags.length; i++) {
            if (i == 0) {
                this.tags = tags[i].value;
            }
            else {
                this.tags += ', ' + tags[i].value;
            }
        }
        cb(this.tags);
    };
    // función que detecta 2 parametros, los junta, elimina espacio, minusculas y lo convierte en url
    HelpersService.prototype.convertToUrl = function (name, surname, cb) {
        this.str = surname ? name + '-' + surname : name;
        this.str = encodeURI(this.str.replace(/\s/g, '').replace("'", '').toLowerCase());
        if (cb)
            cb(this.str);
        return this.str;
    };
    HelpersService.prototype.arrayReassign = function (originArray, newArray) {
        originArray.forEach(function (e) {
            newArray.push(e);
        });
    };
    return HelpersService;
}());
HelpersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HelpersService);

//# sourceMappingURL=helpers.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http, router) {
        this.http = http;
        this.router = router;
        this.token = '';
        this.isAuth = false;
        this.user = {};
        this.userLogged = false;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseURL;
    }
    // ifIsLogged(){
    //   if(localStorage.getItem('token')
    // }
    SessionService.prototype.canActivate = function () {
        var _this = this;
        if (localStorage.getItem('token')) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(this.BASE_URL + "/token", options)
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (data) {
                _this.isAuth = true;
                _this.user = JSON.parse(localStorage.getItem('user'));
                _this.token = localStorage.getItem('token');
                return true;
            })
                .catch(function (err) {
                // this.logout()
                _this.router.navigate(['/login']);
                return false;
            });
        }
        else {
            // this.logout()
            this.router.navigate(['/login']);
            return false;
        }
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            var token = res.token, user = res.user;
            if (token) {
                _this.token = token;
                _this.user = {
                    _id: user._id,
                    email: user.email
                };
                _this.isAuth = true;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(_this.user));
                console.log('isauth', _this.isAuth);
                return true;
            }
            else {
                return false;
            }
        });
    };
    SessionService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/user", user)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            var token = res.token, user = res.user;
            if (token) {
                _this.token = token;
                _this.user = {
                    _id: user._id,
                    email: user.email
                };
                _this.isAuth = true;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(_this.user));
                return true;
            }
            else {
                return false;
            }
        });
    };
    SessionService.prototype.logout = function () {
        this.isAuth = false;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['/dashboard']);
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SessionService);

var _a, _b;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseURL: 'http://localhost:3000',
    clientBaseURL: 'http://localhost:4200',
    googleApiKey: 'AIzaSyBK-_f7kp8ZGLCdeinr8SLXPVQ5fuVvfwY'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
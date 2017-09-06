webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_configuration_model__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_tuple_model__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Configuration = (function () {
    function Configuration(http) {
        this.http = http;
        this.configuration = new __WEBPACK_IMPORTED_MODULE_2__models_voj_configuration_model__["a" /* VojConfiguration */]();
    }
    Configuration.prototype.initialize = function () {
        var _this = this;
        var payload = {
            "cid": __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* envConfig */].cid
        };
        debugger;
        this.http.call(payload, __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* envConfig */].server, "", true).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.configuration.brand = data[0].brand;
                _this.configuration.customer = data[0].customer;
                _this.configuration.env = data[0].env;
                _this.configuration.target = data[0].target;
                _this.configuration.dlMode = data[0].dlmode;
                _this.configuration.logo = data[0].logo;
                _this.configuration.brand = data[0].brand;
                _this.configuration.css = JSON.stringify(data[0].css);
                _this.configuration.urls = [];
                for (var key in data[0].urls) {
                    var t = new __WEBPACK_IMPORTED_MODULE_4__models_voj_tuple_model__["a" /* VojTuple */]();
                    t.key = key;
                    t.value = data[0].urls[key];
                    _this.configuration.urls.push(t);
                }
            }
        });
    };
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], Configuration);
    return Configuration;
}());

//# sourceMappingURL=voj-configuration.js.map

/***/ }),

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__strategy_employer__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strategy_jobyer__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__strategy_context__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserInformationPage = (function () {
    function UserInformationPage(config, storage, context) {
        var _this = this;
        this.config = config;
        this.storage = storage;
        this.context = context;
        this.userData = {};
        // Get user type
        this.userType = (this.config.configuration.customer == "J" ? "jobyer" : "employer");
        console.log('User type:', this.userType);
        /***
         * Strategy pattern test
         * @type {EmployerStrategy | JobyerStrategy}
         */
        __WEBPACK_IMPORTED_MODULE_6__strategy_context__["a" /* Context */].strategy = (this.userType === 'employer') ? new __WEBPACK_IMPORTED_MODULE_4__strategy_employer__["a" /* EmployerStrategy */]() : new __WEBPACK_IMPORTED_MODULE_5__strategy_jobyer__["a" /* JobyerStrategy */]();
        this.dataPageHeader = this.context.loadHeaderData();
        /** END **/
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            _this.userData = {
                // JobyerStrategy
                name: _this.currentUser.identity ? _this.currentUser.identity.lastName : '',
                firstName: _this.currentUser.identity ? _this.currentUser.identity.firstName : '',
                birthDate: '16/01/88',
                placeOfBirth: 'Paris, France',
                identityDocumentType: 'CNI',
                docNumber: 67890,
                bankDetails: 'Some bank details',
                documents: 'Some documents',
                no: 11,
                streetName: 'Central Street',
                postcode: 12345,
                city: 'Paris',
                // EmployerStrategy
                companyName: 'Dome Enterprise'
            };
        });
    }
    UserInformationPage.prototype.presentPage = function (pageName) {
        console.log('Present page:', pageName);
    };
    UserInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-information-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/user-information/user-information.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<!-- Jobyer info list -->\n<ion-list padding class="voj-user-info-list" *ngIf="userType === \'jobyer\'">\n    <!-- User name -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.name}} {{userData.firstName}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Identity page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Address -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.no}} {{userData.streetName}}<br>{{userData.postcode}} {{userData.city}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Addresses page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Birth date and Place of birth -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.birthDate}}<br>{{userData.placeOfBirth}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Personal Details 1/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Identity document -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.identityDocumentType}} {{userData.docNumber}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Personal Details 2/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Bank details -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.bankDetails}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Bank Settings page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- Documents -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.documents}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Documents page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n</ion-list>\n\n<!-- Employer info list -->\n<ion-list padding class="voj-user-info-list" *ngIf="userType === \'employer\'">\n    <!-- 1 - Company name -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.companyName}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Details 1/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 2 - Address -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{userData.no}} {{userData.streetName}}<br>{{userData.postcode}} {{userData.city}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Addresses page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 3 - Enterprise Details 2/2 -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{\'Collective agreement, organization of occupational medicine, ...\'}}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Details 2/2\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 4 - Bank details -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'Bank details\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Bank Settings\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 5 - My Documents -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My Documents\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Documents page\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 6 - My presentation -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My presentation\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Enterprise Presentation\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 7 - My qualities -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My qualities\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Qualities\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n\n    <!-- 8 - My languages -->\n    <ion-item>\n        <h2 class="voj-user-info-item-label">{{ \'My languages\' }}</h2>\n\n        <button class="voj-user-info-edit-btn" ion-button icon-only item-end (click)="presentPage(\'Languages\')">\n            <ion-icon name="create"></ion-icon>\n        </button>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/user-information/user-information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__strategy_context__["a" /* Context */]])
    ], UserInformationPage);
    return UserInformationPage;
}());

//# sourceMappingURL=user-information.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_information_user_information__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_options_options__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Form data for testing
        this.formData = {
            title: 'Form Title',
            fields: [
                {
                    placeholder: 'Item 1',
                    type: 'text',
                    value: 'Label 1',
                    label: 'Label 1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input1'
                },
                {
                    type: 'button',
                    label: 'Button',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('click Button');
                    }
                },
                {
                    placeholder: 'Item 2',
                    type: 'text',
                    value: 'Label 2',
                    label: 'Label 2',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input2'
                },
                {
                    placeholder: 'Password 1',
                    type: 'password',
                    value: 'Password 1',
                    label: 'Password 1',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Password 1'
                },
                {
                    type: 'select',
                    value: 'select 1',
                    label: 'Label 3',
                    dataset: [
                        { id: 1, key: 'select 1', value: 'select 1' },
                        { id: 2, key: 'select 2', value: 'select 2' },
                        { id: 3, key: 'select 3', value: 'select 3' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Select1'
                },
                {
                    type: 'radio',
                    value: 'radio 1',
                    label: 'Label 4',
                    dataset: [
                        { id: 1, key: 'radio 1', value: 'radio 1' },
                        { id: 2, key: 'radio 2', value: 'radio 2' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioTest'
                },
                // Custom Select
                {
                    type: 'customSelect',
                    value: null,
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'select 4', value: 'select 4' },
                        { id: 5, key: 'select 5', value: 'select 5' },
                        { id: 6, key: 'select 6', value: 'select 6' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customSelect'
                },
                {
                    type: 'customTwoSelects',
                    value: 'select 2',
                    value2: 'select 7',
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    dataset2: [
                        { id: 7, key: 'beginner', value: 'Beginner' },
                        { id: 8, key: 'intermediate', value: 'Intermediate' },
                        { id: 9, key: 'advanced', value: 'Advanced' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customTwoSelects'
                }
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'Form Button',
                action: function (event) {
                    console.log(event);
                }
            }
        };
    }
    ContactPage.prototype.ngOnInit = function () {
        var actions = [{ id: 'create', icon: "create", label: "Créer", action: this.action1 }, { id: 'delete', icon: "trash", label: "Supprimer", action: this.action2 }];
        this.contactButtonsData = { style: { 'color': '#488aff' }, actions: actions };
        this.testVar = "Nom de la barre";
    };
    ContactPage.prototype.action1 = function () {
        console.log("action1 button clicked");
    };
    ContactPage.prototype.action2 = function () {
        console.log("action2 button clicked");
    };
    ContactPage.prototype.presentOptionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_options_options__["a" /* OptionsPage */]);
    };
    ContactPage.prototype.presentJobyerAvailabilityChoicePage = function () {
        console.log('Present JobyerStrategy Availability Choice Page.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]);
    };
    ContactPage.prototype.presentUserInfoPage = function () {
        console.log('Present user info page.');
        // Testing user data
        var testUser = {
            name: 'John',
            firstName: 'Terry',
            no: 11,
            streetName: 'Central Street',
            postcode: 12345,
            city: 'Paris',
            birthDate: '16/01/88',
            placeOfBirth: 'Paris, France',
            identityDocumentType: 'CNI',
            docNumber: 67890,
            bankDetails: 'Some bank details',
            documents: 'Some documents'
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_information_user_information__["a" /* UserInformationPage */], { userData: testUser });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/contact/contact.html"*/'<ion-header no-border>\n	<ion-navbar transparent>\n		<ion-title>\n			Contact\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n		<ion-list-header>Follow us on Twitter</ion-list-header>\n		<ion-item>\n			<ion-icon name="ionic" item-left></ion-icon>\n			@ionicframework\n		</ion-item>\n	</ion-list>\n\n	<!-- Test form -->\n	<voj-form [data]=\'formData\'></voj-form>\n\n	<!-- Option page testing -->\n	<button ion-button (click)="presentOptionsPage()">Options page</button>\n	\n	<voj-footer [data]="contactButtonsData" [testVar]="testVar"></voj-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_service_account_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_address_main_address__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IdentityPage = (function () {
    function IdentityPage(configurationService, accountService, viewCtrl, storage, modalService, notification) {
        var _this = this;
        this.configurationService = configurationService;
        this.accountService = accountService;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalService = modalService;
        this.notification = notification;
        this.config = this.configurationService.configuration;
        // Set page header
        this.dataPageHeader = {
            title: 'Mon identité',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Radio for civility
                {
                    type: 'radio',
                    value: "",
                    label: 'Civilité',
                    dataset: [
                        { id: 1, key: 'Mme', value: 'Mme' },
                        { id: 2, key: 'Mr', value: 'Mr' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'civility',
                },
                // Text for name
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Name',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Z]*$',
                    id: '',
                    name: 'lastName'
                },
                // Text for maiden name
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Maiden name',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Z]*$',
                    id: '',
                    name: 'middleName'
                },
                // Text for Prénom
                {
                    placeholder: '',
                    type: 'text',
                    value: "",
                    label: 'Prénom',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Z][a-z]*$',
                    id: '',
                    name: 'firstName'
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'Suivant',
                action: function (event) {
                    console.log('Present Information Resume page.');
                    _this.saveIdentity();
                }
            }
        };
    }
    IdentityPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            // Set form data
            _this.formData.fields.filter(function (f) { return f.name === "civility"; })[0].value = _this.currentUser.identity.civility;
            _this.formData.fields.filter(function (f) { return f.name === "lastName"; })[0].value = _this.currentUser.identity.lastName;
            _this.formData.fields.filter(function (f) { return f.name === "middleName"; })[0].value = _this.currentUser.identity.middleName;
            _this.formData.fields.filter(function (f) { return f.name === "firstName"; })[0].value = _this.currentUser.identity.firstName;
            _this.formData.submit.label = "Valider";
        });
    };
    IdentityPage.prototype.saveIdentity = function () {
        var _this = this;
        var identityDto = {
            civility: this.formData.fields.filter(function (f) { return f.name === "civility"; })[0].value,
            lastName: this.formData.fields.filter(function (f) { return f.name === "lastName"; })[0].value,
            middleName: this.formData.fields.filter(function (f) { return f.name === "middleName"; })[0].value,
            firstName: this.formData.fields.filter(function (f) { return f.name === "firstName"; })[0].value
        };
        this.accountService.saveIdentity(identityDto, this.currentUser.id).then(function (data) {
            if (data.status == "success") {
                if (_this.viewCtrl.isOverlay) {
                    _this.viewCtrl.dismiss();
                    _this.modalService.present(__WEBPACK_IMPORTED_MODULE_6__main_address_main_address__["a" /* MainAddressPage */]);
                }
                else {
                    var notif = { icon: "star", title: "Sauvegarde réussie", message: "Vos informations ont été bien sauvegardé", buttons: [{ id: "0", icon: "star", label: "OK", action: _this.closeNotif }], backdropDismiss: true };
                    _this.notification.present(notif);
                }
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    IdentityPage.prototype.test = function () {
        this.viewCtrl.dismiss();
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_6__main_address_main_address__["a" /* MainAddressPage */]);
    };
    IdentityPage.prototype.closeNotif = function () {
        this.viewCtrl.dismiss();
    };
    IdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'identity-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/identity/identity.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n<!--<div [ngClass]="!config.isLargeScreen ? \'sign-up-container\' : \'\'">-->\n  <!--<div [ngClass]="!config.isLargeScreen ? \'sign-up-child-container\' : \'\'">-->\n    <div class="voj-content">\n      <div class="voj-form-container">\n        <voj-form [data]=\'formData\'></voj-form>\n      </div>\n    </div>\n  <!--</div>-->\n<!--</div>-->'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/identity/identity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_7__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */]])
    ], IdentityPage);
    return IdentityPage;
}());

//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_md5__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(accountService, storage, modalService, viewCtrl, vojNotification, masterdataService) {
        var _this = this;
        this.accountService = accountService;
        this.storage = storage;
        this.modalService = modalService;
        this.viewCtrl = viewCtrl;
        this.vojNotification = vojNotification;
        this.masterdataService = masterdataService;
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'FORM.COUNTRY_CODE',
                    dataset: [],
                    required: true,
                    visible: true,
                    id: 'phone-code-field',
                    name: 'code'
                },
                // Phone
                {
                    placeholder: '',
                    type: 'tel',
                    value: '',
                    label: 'FORM.PHONE',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 9,
                    max: 10,
                    regex: '^[0-9]*$',
                    id: 'phone-field',
                    name: 'phone'
                },
                // Password
                {
                    placeholder: '',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    max: 100,
                    regex: '',
                    id: 'password-field',
                    name: 'password'
                },
                // Forgotten password button
                {
                    type: 'button',
                    label: 'LOGIN.FORGOTTEN_PASSWORD',
                    visible: true,
                    id: 'forgotten-password-btn',
                    action: function () {
                        _this.viewCtrl.dismiss().then(function () {
                            _this.modalService.present(__WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password__["a" /* ResetPasswordPage */], false);
                        });
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'LOGIN.VALIDATE',
                action: function () {
                    console.log('Click validate button.');
                    _this.authenticate();
                }
            }
        };
        // Set page header
        this.dataPageHeader = {
            title: 'LOGIN.TITLE',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        // load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.formData.fields.filter(function (f) { return f.name === "code"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.formData.fields.filter(function (f) { return f.name === "code"; })[0].value = "33";
        });
    };
    LoginPage.prototype.authenticate = function () {
        var _this = this;
        //prepare credentials data
        var code = this.formData.fields.filter(function (f) { return f.name === "code"; })[0].value;
        var phone = this.formData.fields.filter(function (f) { return f.name === "phone"; })[0].value;
        var password = Object(__WEBPACK_IMPORTED_MODULE_7__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "password"; })[0].value);
        var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
        //call web service method
        this.accountService.authenticate(phoneWithCode, password).then(function (data) {
            console.log(JSON.stringify(data));
            if (data.status == "passwordError") {
                var msg = 'Le mot de passe est incorrect. Veuillez réessayer.';
                _this.displayErrorNotification(msg);
                return;
            }
            if (data.found == false) {
                var msg = 'Aucun compte associé à ce numéro de téléphone.';
                _this.displayErrorNotification(msg);
                return;
            }
            if (data.id != 0) {
                var account = data;
                _this.storage.set("currentUser", JSON.stringify(account)).then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.viewCtrl.dismiss();
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.displayErrorNotification = function (msg) {
        var notificationData = {
            icon: 'star',
            title: 'Warning',
            message: msg,
            backdropDismiss: true,
            buttons: [
                {
                    id: 'cancel',
                    label: 'OK',
                    icon: 'alert',
                    action: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/login/login.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n\n    <!-- Create an account -->\n    <h2 class="voj-not-registered-title">{{ \'LOGIN.NOT_REGISTERED\' | translate }}</h2>\n    <button ion-button class="custom-btn" (click)="goToSignup()">\n      {{ \'LOGIN.CREATE_ACCOUNT\' | translate }}\n    </button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMenuModule", function() { return VojMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojMenuModule = (function () {
    function VojMenuModule() {
    }
    VojMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_menu__["a" /* VojMenu */]
            ]
        })
    ], VojMenuModule);
    return VojMenuModule;
}());

//# sourceMappingURL=voj-menu.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchServiceProvider = (function () {
    function SearchServiceProvider(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    SearchServiceProvider.prototype.loadDetails = function (id) {
        var _this = this;
        var payload = {
            "service": "DETAILS",
            "role": this.configuration.configuration.customer == "J" ? "employer" : "jobyer",
            "selectedRow": id,
            "index": this.idIndexation
        };
        var url = "";
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    /**
     * Seek offers/jobyers based on composit query
     * @param SearchQuery object
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.criteriaSearch = function (query) {
        var _this = this;
        var payload = {
            "service": "CRITERIA",
            "role": this.configuration.configuration.customer == "J" ? "employer" : "jobyer",
            "query": query
        };
        var url = "";
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.results = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i]);
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.results.push(r);
                }
                resolve(cards);
            });
        });
    };
    /**
     * Seek offers/jobyers based on natural language query
     * @param fullText
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.semanticSearch = function (fullText) {
        var _this = this;
        var payload = {
            "service": "FULL_TEXT",
            "role": this.configuration.configuration.customer == "J" ? "employer" : "jobyer",
            "fullText": fullText
        };
        var url = "";
        for (var i = 0; i < this.configuration.configuration.urls.length; i++) {
            var t = this.configuration.configuration.urls[i];
            if (t.key == "search") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                _this.results = [];
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SearchResultDTO */](data[i]);
                    var c = r.toVojCard();
                    cards.push(c);
                    _this.results.push(r);
                }
                resolve(cards);
            });
        });
    };
    SearchServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */]])
    ], SearchServiceProvider);
    return SearchServiceProvider;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojConfiguration; });
var VojConfiguration = (function () {
    function VojConfiguration() {
    }
    return VojConfiguration;
}());

//# sourceMappingURL=voj-configuration.model.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_page_header_model__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = (function () {
    function DetailsPage(navParams, navigationService) {
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.headerData = new __WEBPACK_IMPORTED_MODULE_4__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.headerData.title = "Détails";
        this.card = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
        this.card.id = 0;
        if (navParams.data && navParams.data.card)
            this.card = navParams.data.card;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
    };
    DetailsPage.prototype.updateCard = function (c) {
        this.card = c;
    };
    DetailsPage.prototype.noData = function () {
        return !this.card || this.card.id == 0;
    };
    DetailsPage.prototype.hideDetailsView = function () {
        this.navigationService.hide('details');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/'<!--<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>\n\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="hideDetailsView()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>-->\n<ion-header >\n  <voj-page-header [data]="headerData"></voj-page-header>\n</ion-header>\n<ion-content >\n  <voj-card [hidden]="noData()" [data]="card" mode="full" ></voj-card>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeaderType; });
var VojPageHeaderType = (function () {
    function VojPageHeaderType() {
        this.isCanceled = true;
    }
    return VojPageHeaderType;
}());

//# sourceMappingURL=voj-page-header.model.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_page_header__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojPageHeaderModule = (function () {
    function VojPageHeaderModule() {
    }
    VojPageHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_page_header__["a" /* VojPageHeader */]
            ]
        })
    ], VojPageHeaderModule);
    return VojPageHeaderModule;
}());

//# sourceMappingURL=voj-page-header.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
var FormDataService = (function () {
    function FormDataService() {
        this.data = [];
    }
    FormDataService.prototype.getData = function () {
        return this.data;
    };
    FormDataService.prototype.addData = function (selectedValue) {
        this.data.push(selectedValue);
    };
    return FormDataService;
}());

//# sourceMappingURL=form-data.service.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSearchHeaderModule", function() { return VojSearchHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_search_header__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojSearchHeaderModule = (function () {
    function VojSearchHeaderModule() {
    }
    VojSearchHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_search_header__["a" /* VojSearchHeader */]
            ]
        })
    ], VojSearchHeaderModule);
    return VojSearchHeaderModule;
}());

//# sourceMappingURL=voj-search-header.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsPage = (function () {
    function OptionsPage() {
        // Set page header title
        this.dataPageHeader = {
            title: 'Options',
            actions: [
                {
                    id: 'help',
                    icon: 'help',
                    action: function () { console.log('Click help button.'); },
                    label: ''
                }
            ]
        };
    }
    OptionsPage.prototype.presentPage = function (pageName) {
        console.log('Present page:', pageName);
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'options-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/options/options.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<ion-card>\n    <ion-card-content class="voj-card-buttons">\n        <button ion-button block small (click)="presentPage(\'Change Password\')">Change Password</button>\n        <button ion-button block small (click)="presentPage(\'Choose frequency of compensation\')">Choose frequency of compensation</button>\n        <button ion-button block small (click)="presentPage(\'Join a campaign\')">Join a campaign</button>\n        <button ion-button block small (click)="presentPage(\'Disconnect\')">Disconnect</button>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/options/options.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_page_header_model__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_configuration_model__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(navCtrl, appCtrl, viewCtrl, configuration, event) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.configuration = configuration;
        this.event = event;
        this.gmapView = true;
        //  Page header
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_3__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.pageHeader.title = "Géolocatisation";
        this.pageHeader.actions = [
            {
                id: 'map',
                icon: 'map',
                action: function () {
                    if (!_this.configuration.isLargeScreen) {
                        _this.gmapView = !_this.gmapView;
                        _this.event.publish('MAP_DATA', _this.cards);
                    }
                },
                label: ''
            },
            {
                id: 'help',
                icon: 'help',
                action: function () {
                    console.log("Help");
                },
                label: ''
            }
        ];
        // Testing JobyerStrategy Data
        this.jobyerData = {
            title: {
                label: 'Title'
            },
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
            thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
            subtitles: [
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 1'
                },
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 2'
                }
            ],
            actions: [
                {
                    id: '',
                    icon: 'build',
                    label: 'First action',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            socialButton: [
                {
                    id: '',
                    icon: 'logo-googleplus',
                    label: 'Google+',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            menu: [
                {
                    id: '',
                    icon: 'home',
                    label: 'Home',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            badges: [
                {
                    id: '',
                    icon: 'star',
                    label: 'Star',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            segments: [
                {
                    title: {
                        icon: 'star',
                        label: 'Title 1'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 1'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style1'
                },
                {
                    title: {
                        icon: 'star',
                        label: 'Title 2'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 2'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style1'
                }
            ]
        };
        this.title = "un autre titre dynamique";
        this.content = "un autre texte de détails..";
        this.actionName = "Action 2";
        this.listTitle = "Ma liste des cartes";
        this.actions = [{
                label: "test",
                action: function () {
                    _this.goToPage();
                }
            }, {
                label: "test2",
                action: function () {
                    _this.goToPage2();
                }
            }
        ];
        this.cards = [{
                title: "JobyerStrategy 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "JobyerStrategy 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "JobyerStrategy 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "JobyerStrategy 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "JobyerStrategy 5",
                content: "contenu 5",
                actionName: "action 5"
            }];
    }
    AboutPage.prototype.goToPage = function () {
        //
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
        //this.viewCtrl.getNav().push(ContactPage);
        //this.navCtrl.push(ContactPage);
    };
    AboutPage.prototype.goToPage2 = function () {
        //
        //this.appCtrl.getRootNav().push(ContactPage);
        //this.viewCtrl.getNav().push(ContactPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    AboutPage.prototype.test = function () {
        console.log("works");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentMenu'),
        __metadata("design:type", Object)
    ], AboutPage.prototype, "nav", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/about/about.html"*/'<!--ion-header no-border>\n	<ion-navbar transparent>\n		<ion-title>\n			Géolocalisation\n		</ion-title>\n	</ion-navbar>\n</ion-header-->\n\n\n<ion-content padding>\n	<voj-page-header [data]="pageHeader"></voj-page-header>\n	<!--<button ion-button (click)="goToPage()">test Navigation</button>-->\n	<!--<voj-card title="Test" content="le contenu détaillé ici" action-name="Action 1" [buttons]="actions" thumbnail="assets/img/advance-card-bttf.png" date="12/06/2017"> </voj-card>-->\n	<!--<voj-card [title]="title" [content]="content" [action-name]="actionName" cover="assets/img/advance-card-bttf.png" thumbnail="assets/img/advance-card-bttf.png"> </voj-card>-->\n	<!--voj-card [data]="jobyerData"></voj-card-->\n	<!--voj-list [title]="listTitle" [cards]="cards"></voj-list-->\n\n	<voj-map [data]="cards"></voj-map>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__models_voj_configuration_model__["a" /* VojConfiguration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalDetailsPage = (function () {
    function PersonalDetailsPage(platform, masterdataService) {
        this.platform = platform;
        this.masterdataService = masterdataService;
        platform.is('core') ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My personal data 1/2',
            style: 'any',
            isCanceled: true,
            actions: [{
                    id: 'xdfgchvbjknm',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
        };
        this.formData = {
            fields: [
                {
                    required: true,
                    type: 'date',
                    label: 'Date of birth',
                    readonly: false,
                    visible: true,
                    id: 'date-of-birth',
                    validationMsg: 'Date of birth error',
                    name: 'dateOfBirth'
                },
                {
                    required: true,
                    type: 'select',
                    value: 'Country of birth',
                    label: 'Country of birth',
                    dataset: [
                        { id: 1, key: 'france', value: 'France' },
                        { id: 2, key: 'england', value: 'England' },
                        { id: 3, key: 'russia', value: 'Russia' },
                    ],
                    visible: true,
                    validationMsg: 'Country of birth error',
                    id: 'country-of-birth',
                    name: 'countryBirth'
                },
                {
                    required: true,
                    type: 'select',
                    value: 'Department of birth',
                    label: 'Department of birth',
                    dataset: [
                        { id: 1, key: 'test1', value: '92 - test' },
                        { id: 2, key: 'test2', value: '101 - Some text' },
                    ],
                    readonly: false,
                    visible: true,
                    validationMsg: 'Department of birth error',
                    id: 'department-of-birth',
                    name: 'departmentOfBirth'
                },
                {
                    required: true,
                    type: 'text',
                    label: 'Place of birth',
                    readonly: false,
                    visible: true,
                    validationMsg: 'Place of birth error',
                    id: 'place-of-birth',
                    name: 'placeOfBirth'
                },
                {
                    required: true,
                    type: 'number',
                    value: 'Social Security Number',
                    label: 'Social Security Number',
                    readonly: false,
                    visible: true,
                    validationMsg: 'Social security number error',
                    id: 'social-security-number',
                    name: 'socialSecurityNumber'
                }
            ],
            submit: {
                label: 'Valider',
                id: 'valid-btn',
                icon: 'no',
                action: Function
            }
        };
    }
    PersonalDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        //load nationality list
        this.masterdataService.loadNationalitiesList().then(function (data) {
            //set dataset of nationalities of the form
            _this.formData.fields.filter(function (f) { return f.name === "countryBirth"; })[0].dataset = _this.masterdataService.convertNationalitiesListToDataset(data);
            //the default nationality is "France"
            _this.formData.fields.filter(function (f) { return f.name === "countryBirth"; })[0].value = "France";
        });
    };
    PersonalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'personal-details-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/personal-details/personal-details.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n  <div class="voj-content">\n    <div class="voj-form-container">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/personal-details/personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_map_model__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_text_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__identity_identity__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_information_user_information__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__enterprise_details_enterprise_details__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_options_options__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_account__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_address_main_address__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bank_settings_bank_settings__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__personal_details_identity_personal_details_identity__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sign_up_sign_up__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__availabilities_add_days_availabilities_add_days__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__availabilities_availabilities__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__personal_details_personal_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__company_company__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var HomePage = (function () {
    function HomePage(navCtrl, platform, appCtrl, viewCtrl, event, httpRequest, vojNotification, navigationService, modalService) {
        // this.isWeb = !platform.is('cordova');
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.viewCtrl = viewCtrl;
        this.event = event;
        this.httpRequest = httpRequest;
        this.vojNotification = vojNotification;
        this.navigationService = navigationService;
        this.modalService = modalService;
        this.isWeb = false;
        // Testing JobyerStrategy Data
        this.jobyerData = {
            title: {
                label: 'Title'
            },
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
            thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
            subtitles: [
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 1'
                },
                {
                    icon: 'logo-angular',
                    label: 'Subtitle 2'
                }
            ],
            actions: [
                {
                    id: '',
                    icon: 'build',
                    label: 'First action',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            socialButton: [
                {
                    id: '',
                    icon: 'logo-googleplus',
                    label: 'Google+',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            menu: [
                {
                    id: '',
                    icon: 'home',
                    label: 'Home',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            badges: [
                {
                    id: '',
                    icon: 'star',
                    label: 'Star',
                    action: function () {
                        _this.test();
                    }
                }
            ],
            segments: [
                {
                    title: {
                        icon: 'star',
                        label: 'Title 1'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 1'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style1'
                },
                {
                    title: {
                        icon: 'star',
                        label: 'Title 2'
                    },
                    subtitle: {
                        icon: 'star',
                        label: 'Subtitle 2'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style1'
                }
            ]
        };
        this.formData = {
            title: 'Form Title',
            fields: [
                {
                    placeholder: 'Item 1',
                    type: 'text',
                    value: 'Label 1',
                    label: 'Label 1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input1'
                },
                {
                    type: 'button',
                    label: 'Button',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('click Button');
                    }
                },
                {
                    placeholder: 'Item 2',
                    type: 'text',
                    value: 'Label 2',
                    label: 'Label 2',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Input2'
                },
                {
                    placeholder: 'Password 1',
                    type: 'password',
                    value: 'Password 1',
                    label: 'Password 1',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 3,
                    max: 10,
                    regex: '^[A-z]+$',
                    id: '',
                    name: 'Password 1'
                },
                {
                    type: 'select',
                    value: 'select 1',
                    label: 'Label 3',
                    dataset: [
                        { id: 1, key: 'select 1', value: 'select 1' },
                        { id: 2, key: 'select 2', value: 'select 2' },
                        { id: 3, key: 'select 3', value: 'select 3' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Select1'
                },
                {
                    type: 'radio',
                    value: 'radio 1',
                    label: 'Label 4',
                    dataset: [
                        { id: 1, key: 'radio 1', value: 'radio 1' },
                        { id: 2, key: 'radio 2', value: 'radio 2' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioTest'
                },
                // Custom Select
                {
                    type: 'customSelect',
                    value: null,
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'select 4', value: 'select 4' },
                        { id: 5, key: 'select 5', value: 'select 5' },
                        { id: 6, key: 'select 6', value: 'select 6' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customSelect'
                },
                {
                    type: 'customTwoSelects',
                    value: 'select 2',
                    value2: 'select 7',
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    dataset2: [
                        { id: 7, key: 'beginner', value: 'Beginner' },
                        { id: 8, key: 'intermediate', value: 'Intermediate' },
                        { id: 9, key: 'advanced', value: 'Advanced' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customTwoSelects'
                }
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'Form Button',
                action: function (event) {
                    console.log(event);
                }
            }
        };
        this.searchHeaderData = {
            placeholders: {
                main: 'Recherche libre',
                what: 'Job',
                where: 'Localisation',
                when: 'Crénaux de mission',
                who: 'Nom'
            },
            action: function (args) {
                console.log(JSON.stringify(args));
            }
        };
        this.cardExample = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
        this.cardExample.id = 1;
        this.cardExample.title = new __WEBPACK_IMPORTED_MODULE_5__models_text_type__["a" /* TextType */]();
        this.cardExample.title.label = 'Don Rodrigue';
        this.cardExample.subtitles = [{
                label: 'sous-titre',
                icon: ''
            }];
        this.cardExample.address = new __WEBPACK_IMPORTED_MODULE_3__models_voj_map_model__["a" /* VojMapModel */]();
        this.cardExample.address.title = 'Le Dôme';
        this.cardExample.address.number = '5';
        this.cardExample.address.street = 'Rue de la Haye';
        this.cardExample.address.zipCode = '93100';
        this.cardExample.address.city = 'Tremblay en France';
        this.cardExample.address.lat = 49.005278;
        this.cardExample.address.lng = 2.555114;
        this.cards = [this.cardExample];
        //this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //this.tabBarElement.style.display = 'none';
    };
    HomePage.prototype.test = function () {
        console.log("works");
        var payLoad = { "service": "FULL_TEXT", "role": "jobyer", "fullText": "agent de piste aeroportuaire" };
        this.httpRequest.sendCallOut(payLoad, this).subscribe(function (response) {
            if (response)
                console.log(JSON.stringify(response));
            //
        });
    };
    HomePage.prototype.testNotification = function () {
        var notificationData = {
            icon: 'star',
            title: 'My title',
            message: 'My message. Hello.',
            backdropDismiss: true,
            buttons: [
                {
                    id: 'cancel',
                    label: 'Cancel',
                    icon: 'alert',
                    action: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    id: 'validate',
                    label: 'OK',
                    icon: 'checkmark-circle',
                    action: function () {
                        console.log('Ok clicked');
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    HomePage.prototype.goToPage = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        //this.navCtrl.parent.select(2);
        //this.navCtrl.push(ContactPage);
        //this.navigationService.navigate('details', vojNav);
        this.navigationService.hide('details');
    };
    HomePage.prototype.goToPage1 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_10__jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('details', vojNav);
    };
    HomePage.prototype.goToPage2 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToEnterpriseDetails = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_12__enterprise_details_enterprise_details__["a" /* EnterpriseDetails */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.presentUserInfoPage = function () {
        console.log('Present user info page.');
        // this.navCtrl.push(UserInformationPage);
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_11__user_information_user_information__["a" /* UserInformationPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.presentCompany = function () {
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_24__company_company__["a" /* CompanyPage */]);
    };
    HomePage.prototype.presentJobyerAvailabilityChoicePage = function () {
        console.log('Present JobyerStrategy Availability Choice Page.');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]);
    };
    HomePage.prototype.presentOptionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_options_options__["a" /* OptionsPage */]);
    };
    HomePage.prototype.presentIdentityPage = function () {
        // this.navCtrl.push(IdentityPage);
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_9__identity_identity__["a" /* IdentityPage */]);
    };
    HomePage.prototype.goToAccountPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.goToSignUp = function () {
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_19__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.presentAddressesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__main_address_main_address__["a" /* MainAddressPage */]);
    };
    HomePage.prototype.presentLoginPage = function () {
        // let vojNav: VojPage = { page: LoginPage, isRoot: false };
        // this.navigationService.navigate('list', vojNav);
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_16__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToBankDetailsPage = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_17__bank_settings_bank_settings__["a" /* BankSettingsPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToPersonalDetailsIdentity = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_18__personal_details_identity_personal_details_identity__["a" /* PersonalDetailsIdentityPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToAvailabilitiesAddDays = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_21__availabilities_add_days_availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToAvailabilities = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_22__availabilities_availabilities__["a" /* AvailabilitiesPage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    HomePage.prototype.goToPersonalDetails = function () {
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_23__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
        // let vojNav: VojPage = {page: PersonalDetailsPage, isRoot: false};
        // this.navigationService.navigate('navigate:list', vojNav);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentMenu'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "nav2", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/'<ion-content padding #mycontent fullscreen>\n\n	<h2>Welcome to Ionic!</h2>\n	<p>\n		This starter project comes with simple tabs-based layout for apps\n		that are going to primarily use a Tabbed UI.\n	</p>\n	<p>\n		Take a look at the <code>src/pages/</code> directory to add or change tabs,\n		update any existing page or create new pages.\n	</p>\n	\n	<button ion-button (click)="goToPage()">Click me</button>\n	<button ion-button (click)="goToPage1()">Click me1</button>\n	<button ion-button (click)="goToPage2()">Click me2</button>\n	<button ion-button (click)="goToSignUp()">goToSignUpPage</button>\n	<button ion-button (click)="goToEnterpriseDetails()">goToEnterpriseDetails</button>\n	<button ion-button (click)="goToBankDetailsPage()">goToBankDetailsPage</button>\n	<button ion-button (click)="goToPersonalDetailsIdentity()">goToPersonalDetailsIdentity</button>\n\n	<!--Test availabilities page-->\n	<button ion-button (click)="goToAvailabilities()">goToAvailabilitiesPage</button>\n\n	<!-- Notification testing -->\n	<button ion-button (click)="testNotification()">Test notification</button>\n	<button ion-button (click)="goToPersonalDetails()">goTopersonalDetails</button>\n\n	<!-- Availabilities Add Days Page testing -->\n	<button ion-button (click)="goToAvailabilitiesAddDays()">AvailabilitiesAddDaysPage</button>\n\n	<!-- Test translate service -->\n	<p>{{ \'HOME.TEST_TRANSLATION\' | translate}}</p>\n\n	<!-- Test account page -->\n	<button ion-button (click)="goToAccountPage()">Account page</button>\n\n	<!-- Option page testing -->\n	<button ion-button (click)="presentOptionsPage()">Options page</button>\n\n	<!-- Test jobyer-availability-choice page  -->\n	<button ion-button (click)="presentJobyerAvailabilityChoicePage()">Jobyer Availability Choice page</button>\n\n	<!-- Test user info page -->\n	<button ion-button (click)="presentUserInfoPage()">Present user info page</button>\n\n	<!-- Test identity page -->\n	<button ion-button (click)="presentIdentityPage()">Test identity page</button>\n\n	<button ion-button (click)="goToPage()">Click me</button>\n\n	<button ion-button (click)="presentAddressesPage()">Present addresses page</button>\n\n	<!-- Test login page -->\n	<button ion-button (click)="presentLoginPage()">Test login page</button>\n	<button ion-button (click)="presentCompany()">Present Company</button>\n\n	<!--<voj-card title="Mon titre" content="Ma description ici" action-name="Mon identité" subtitle1="Tél: 0669938121"\n			  subtitle1-icon="call" subtitle2="E-mail: test@compte.com" subtitle2-icon="mail"  thumbnail="assets/img/advance-card-bttf.png"></voj-card>-->\n	<voj-card [data]=\'jobyerData\' [vojData]="cards" ></voj-card>\n	<voj-form [data]=\'formData\'></voj-form>\n	<voj-calendar></voj-calendar>\n	<ion-fab bottom right>\n		<button ion-fab (click)="test()" color="vojgreen">\n			<ion-icon name="log-in"></ion-icon>\n		</button>\n	</ion-fab>\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="cards"></voj-map> -->\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_20__services_modal_service__["a" /* ModalService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_service_account_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personal_details_personal_details__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainAddressPage = (function () {
    function MainAddressPage(http, loadingCtrl, accountService, storage, viewCtrl, modalService) {
        var _this = this;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.accountService = accountService;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.modalService = modalService;
        // Set header data
        this.dataPageHeader = {
            title: 'Main Address',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: false
        };
        // Set form data
        this.formData = {
            title: '',
            fields: [
                // Button
                {
                    type: 'button',
                    label: 'Geolocalise me',
                    visible: true,
                    id: '',
                    action: function () {
                        console.log('Click Geolocalise me.');
                        _this.getCurrentAddress();
                    }
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: 'Domicile',
                    label: 'Name of address',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z0-9 ]*$',
                    validationMsg: 'Name of address error',
                    id: '',
                    name: 'name'
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: '04',
                    label: 'N°',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z0-9 ]*$',
                    validationMsg: 'N° error',
                    id: '',
                    name: 'number'
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: 'Rue de la Haye',
                    label: 'Street name',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z0-9 ]*$',
                    validationMsg: 'Street name error',
                    id: '',
                    name: 'street'
                },
                // Number
                {
                    placeholder: '',
                    type: 'number',
                    value: 93290,
                    label: 'Postal code',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[0-9]*$',
                    validationMsg: 'Postal code error',
                    id: '',
                    name: 'zipCode'
                },
                // Text
                {
                    placeholder: '',
                    type: 'text',
                    value: 'Paris',
                    label: 'City',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 0,
                    max: 100,
                    regex: '^[A-Za-z ]*$',
                    validationMsg: 'City error',
                    id: '',
                    name: 'city'
                },
                // Button
                {
                    type: 'button',
                    label: 'Add an address',
                    visible: true,
                    id: 'add-address-btn',
                    action: function () {
                        console.log('Click Add an address button.');
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'Validate',
                action: function (event) {
                    _this.saveAddress();
                }
            }
        };
        this.storage.get("currentUser").then(function (val) {
            _this.currentUser = JSON.parse(val);
        });
    }
    MainAddressPage.prototype.saveAddress = function () {
        var _this = this;
        var addressDto = {
            id: 0,
            name: this.formData.fields.filter(function (f) { return f.name === "name"; })[0].value,
            number: this.formData.fields.filter(function (f) { return f.name === "number"; })[0].value,
            street: this.formData.fields.filter(function (f) { return f.name === "street"; })[0].value,
            zipCode: this.formData.fields.filter(function (f) { return f.name === "zipCode"; })[0].value,
            city: this.formData.fields.filter(function (f) { return f.name === "city"; })[0].value,
            adressType: ""
        };
        this.accountService.saveAddress(addressDto, this.currentUser.id).then(function (data) {
            if (data.status == "success") {
                _this.viewCtrl.dismiss().then(function () {
                    _this.modalService.present(__WEBPACK_IMPORTED_MODULE_7__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
                });
            }
            else {
                console.log("une erreur est survenue lors de l'enregistrement des données");
                console.log(data.error);
            }
        });
    };
    MainAddressPage.prototype.getCurrentAddress = function () {
        var _this = this;
        // Show loading spinner
        var loading = this.loadingCtrl.create({});
        loading.present();
        // Clear input fields
        for (var key in this.formData.fields) {
            // Clear city
            if (this.formData.fields[key].name === 'city') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'street') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'number') {
                this.formData.fields[key].value = '';
            }
            else if (this.formData.fields[key].name === 'zipCode') {
                this.formData.fields[key].value = null;
            }
        }
        // Check for geolocation availability
        if (!navigator.geolocation) {
            // Hide loading spinner
            loading.dismiss();
            return;
        }
        // Get current position
        navigator.geolocation.getCurrentPosition(function (res) {
            // Current coordinates
            var latitude = res.coords.latitude;
            var longitude = res.coords.longitude;
            // Google API key
            var key = 'AIzaSyAiXwdHbyWYjC63gTo1X3IUKTKf64oiAgI';
            // Full URL for request
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + key;
            // Request for getting address data
            _this.http.get(url).toPromise()
                .then(function (response) {
                var geocodeData = response.json().results;
                var streetName, buildNum, city, postalCode;
                // Get current address
                for (var i = 0; i < geocodeData[0].address_components.length; i++) {
                    // Get current city
                    if (geocodeData[0].address_components[i].types[0] === 'locality' &&
                        geocodeData[0].address_components[i].types[1] === 'political') {
                        city = geocodeData[0].address_components[i].long_name;
                        console.log('City:', city);
                    }
                    else if (geocodeData[0].address_components[i].types[0] === 'route') {
                        streetName = geocodeData[0].address_components[i].long_name;
                        console.log('Street:', streetName);
                    }
                    else if (geocodeData[0].address_components[i].types[0] === 'street_number') {
                        buildNum = geocodeData[0].address_components[i].long_name;
                        console.log('Build Number:', buildNum);
                    }
                }
                // Get postal code
                for (var k = 1; k < 3; k++) {
                    for (var i = 0; i < geocodeData[k].address_components.length; i++) {
                        if (geocodeData[k].address_components[i].types[0] === 'postal_code') {
                            postalCode = geocodeData[k].address_components[i].long_name;
                            console.log('Postal code:', postalCode);
                        }
                    }
                }
                // Set input fields
                for (var key_1 in _this.formData.fields) {
                    // Set city
                    if (_this.formData.fields[key_1].name === 'city') {
                        _this.formData.fields[key_1].value = city;
                    }
                    else if (_this.formData.fields[key_1].name === 'street') {
                        _this.formData.fields[key_1].value = streetName;
                    }
                    else if (_this.formData.fields[key_1].name === 'number') {
                        _this.formData.fields[key_1].value = buildNum;
                    }
                    else if (_this.formData.fields[key_1].name === 'zipCode') {
                        _this.formData.fields[key_1].value = postalCode;
                    }
                }
                // Hide loading spinner
                loading.dismiss();
            })
                .catch(function (err) {
                // Hide loading spinner
                loading.dismiss();
            });
        }, function (err) {
            // Hide loading spinner
            loading.dismiss();
        });
    };
    MainAddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-address-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/main-address/main-address.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/main-address/main-address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */]])
    ], MainAddressPage);
    return MainAddressPage;
}());

//# sourceMappingURL=main-address.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(storage, profileService) {
        var _this = this;
        this.storage = storage;
        this.profileService = profileService;
        // Set page header
        this.dataPageHeader = {
            title: 'Mon compte',
            actions: [
                {
                    id: 'parameters',
                    label: '',
                    icon: 'settings',
                    action: function () {
                        console.log('Click parameters button.');
                    }
                },
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        this.storage.get("currentUser").then(function (data) {
            if (!data) {
                return;
            }
            _this.currentUser = JSON.parse(data);
            // Set profile data
            _this.profileData = {
                cover: 'http://www.turfgrass.ie/wp-content/uploads/2014/07/T-Projects-Lubker-1.jpg',
                thumbnail: 'http://diysolarpanelsv.com/images/clip-art-user-14.png',
                title: {
                    label: _this.currentUser.identity.firstName + " " + _this.currentUser.identity.middleName + " " + _this.currentUser.identity.lastName
                },
                subtitles: [
                    {
                        icon: 'call',
                        label: _this.currentUser.account.phone
                    },
                    {
                        icon: 'mail',
                        label: _this.currentUser.account.mail
                    }
                ],
                actions: [
                    {
                        id: '',
                        icon: 'information-circle',
                        label: 'Mes informations',
                        action: function () {
                            console.log('Click to My information button.');
                        }
                    }
                ],
                segments: [
                    {
                        title: {
                            icon: '',
                            label: '5'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Contrats en attente'
                        },
                        action: function () {
                            console.log('Present Waiting Contracts page.');
                        },
                        style: 'style1'
                    },
                    {
                        title: {
                            icon: '',
                            label: '3'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Pointage à effectuer'
                        },
                        action: function () {
                            console.log('Present Hour Tracking page.');
                        },
                        style: 'style1'
                    },
                    {
                        title: {
                            icon: '',
                            label: '3'
                        },
                        subtitle: {
                            icon: '',
                            label: 'Missions à clôturer'
                        },
                        action: function () {
                            console.log('Present Hours Validation Signature page.');
                        },
                        style: 'style1'
                    }
                ]
            };
        });
    }
    AccountPage.prototype.ngOnInit = function () {
        //this.profileService.getAccountData(this.currentUser.account.id).then((data: any) => {
        //});
    };
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage.prototype.logout = function () {
        this.storage.clear();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'account-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account/account.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<voj-card [data]="profileData" [mode]="\'reduced\'"></voj-card>\n\n<button (click)="logout()">Se déconnecter</button>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__["a" /* ProfileService */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_signup_service_signup_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity_identity__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scripts_md5__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignUpPage = (function () {
    function SignUpPage(params, configurationService, signupService, viewCtrl, modalService, vojNotification, storage, masterdataService) {
        var _this = this;
        this.params = params;
        this.configurationService = configurationService;
        this.signupService = signupService;
        this.viewCtrl = viewCtrl;
        this.modalService = modalService;
        this.vojNotification = vojNotification;
        this.storage = storage;
        this.masterdataService = masterdataService;
        this.config = this.configurationService.configuration;
        this.formData = {
            title: '',
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'FORM.COUNTRY_CODE',
                    dataset: [],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'selectPhoneCode'
                },
                // Phone
                {
                    placeholder: 'Enter mobile phone',
                    type: 'tel',
                    value: '',
                    label: 'FORM.PHONE',
                    required: true,
                    readonly: false,
                    visible: true,
                    id: '',
                    min: 9,
                    max: 10,
                    regex: '^[0-9]*$',
                    name: 'userPhone',
                    validationMsg: 'VALIDATION.PHONE_VALIDATION_MSG'
                },
                // Email
                {
                    placeholder: 'Enter email',
                    type: 'text',
                    value: '',
                    label: 'FORM.EMAIL',
                    required: true,
                    readonly: false,
                    visible: true,
                    name: 'userEmail',
                    id: '',
                    min: 5,
                    validationMsg: 'VALIDATION.EMAIL_VALIDATION_MSG',
                    regex: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
                },
                // Password
                {
                    placeholder: 'Password',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    id: '',
                    name: 'userPassword',
                    validationMsg: 'VALIDATION.PASSWORD_VALIDATION_MSG',
                },
                // Confirm password
                {
                    placeholder: 'Confirm password',
                    type: 'password',
                    value: '',
                    label: 'FORM.PASSWORD_CONFIRMATION',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 6,
                    id: '',
                    name: 'passwordConfirmation',
                    validationMsg: 'VALIDATION.PASSWORD_VALIDATION_MSG',
                },
            ],
            submit: {
                id: '',
                icon: 'build',
                label: 'SIGNUP.VALIDATE',
                action: function (event) {
                    //this.checkPhone();
                    var samePasswd = _this.checkPasswordConfirmation();
                    samePasswd ? _this.signUp() : false;
                }
            }
        };
        this.headerData = {
            title: 'SIGNUP.TITLE',
            actions: [],
            style: '',
            isCanceled: false
        };
    }
    SignUpPage.prototype.checkPasswordConfirmation = function () {
        var password = Object(__WEBPACK_IMPORTED_MODULE_9__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "userPassword"; })[0].value);
        var passwordConfirmation = Object(__WEBPACK_IMPORTED_MODULE_9__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "passwordConfirmation"; })[0].value);
        if (password !== passwordConfirmation) {
            // this.formData.fields[passwordConfirmationIndex].value = '';
            return false;
        }
        return true;
    };
    /*checkPhone() {
        for (let i = 0; i < this.formData.fields.length; i++) {
            if (this.formData.fields[i].name === 'userPhone') {
                if (this.formData.fields[i].value[0] === '0') {
                    console.log('checkPhone was called. First symbol is 0. Corrected.');
                    this.formData.fields[i].value = this.formData.fields[i].value.slice(1);
                }
            }
        }
    }*/
    SignUpPage.prototype.ngOnInit = function () {
        var _this = this;
        //load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].value = "33";
        });
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        //prepare credentials data
        var code = this.formData.fields.filter(function (f) { return f.name === "selectPhoneCode"; })[0].value;
        var phone = this.formData.fields.filter(function (f) { return f.name === "userPhone"; })[0].value;
        var email = this.formData.fields.filter(function (f) { return f.name === "userEmail"; })[0].value;
        var password = Object(__WEBPACK_IMPORTED_MODULE_9__scripts_md5__["a" /* md5 */])(this.formData.fields.filter(function (f) { return f.name === "userPassword"; })[0].value);
        var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
        //call web service method
        this.signupService.signup(phoneWithCode, email, password, "jobyer").then(function (data) {
            //if credentials already registred in our DB : show error msg
            if (data.found) {
                _this.displayNotificationForUsedCredentials();
            }
            else {
                //if credentials does not exist in our DB : store new user in localDB
                //dismiss the sign in modal and display identity modal
                var account = data;
                _this.storage.set("currentUser", JSON.stringify(account)).then(function () {
                    _this.viewCtrl.dismiss().then(function () {
                        _this.modalService.present(__WEBPACK_IMPORTED_MODULE_5__identity_identity__["a" /* IdentityPage */]);
                    });
                });
            }
        });
    };
    //TODO: this error msg should be displayed in the form
    SignUpPage.prototype.displayNotificationForUsedCredentials = function () {
        var notificationData = {
            icon: 'star',
            title: 'Warning',
            message: 'Ces informations d\'identification sont déjà enregistrées. Entrez un autre numéro de téléphone et un email.',
            backdropDismiss: true,
            buttons: [
                {
                    id: 'Annuler',
                    label: 'OK',
                    icon: 'alert',
                    action: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    SignUpPage.prototype.goToLogin = function () {
        this.viewCtrl.dismiss();
        this.modalService.present(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        //this.modalService.present(PersonalDetailsPage);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sign-up-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/sign-up/sign-up.html"*/'<voj-page-header [data]="headerData"></voj-page-header>\n\n<div class="voj-content">\n    <div class="voj-form-container">\n        <voj-form [data]="formData"></voj-form>\n\n        <div text-center class="connector">\n            <h5>{{\'SIGNUP.REGISTERED\' | translate}}</h5>\n\n            <button ion-button outline class="custom-btn" type="button" (click)="goToLogin()">\n                {{\'SIGNUP.LOGIN\' | translate}}\n            </button>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_4__providers_signup_service_signup_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_7__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_page_header_model__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_voj_events_voj_events__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_reset_password_service_reset_password_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SearchPage = (function () {
    function SearchPage(navCtrl, geolocation, eventBus, navigationService, configuration, searchService, event, modalService, resetPassword) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.configuration = configuration;
        this.searchService = searchService;
        this.event = event;
        this.modalService = modalService;
        this.resetPassword = resetPassword;
        this.gmapView = false;
        this.sortType = 'pertinence';
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapView = false;
        //  Page header
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_2__models_voj_page_header_model__["a" /* VojPageHeaderType */]();
        this.pageHeader.title = "Recherche";
        this.pageHeader.isCanceled = false;
        this.pageHeader.actions = [
            {
                id: 'map',
                icon: 'map',
                action: function () {
                    if (!_this.configuration.configuration.isLargeScreen) {
                        _this.gmapView = !_this.gmapView;
                        _this.event.publish('MAP_DATA', _this.cards);
                    }
                },
                label: ''
            },
            {
                id: 'help',
                icon: 'help',
                action: function () {
                    console.log("Help");
                },
                label: ''
            }
        ];
        this.searchHeaderData = {
            placeholders: {
                main: 'Recherche libre',
                what: 'Job',
                where: 'Localisation',
                when: 'Crénaux de mission',
                who: 'Nom'
            },
            action: function (q) {
                _this.search(q);
            }
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.clear();
            console.log(JSON.stringify(resp));
            _this.position = resp;
        }).catch(function (data) {
            console.clear();
            console.log(JSON.stringify(data));
        });
    };
    SearchPage.prototype.search = function (q) {
        var _this = this;
        if (q.queryType == 'full_text' && q.freeText && q.freeText != '') {
            //TODO TIM: Data should have an Array<VojCardType> as type
            //TODO ABDESLAM: If data is of VojCardType type it will be too generic and unusable for other apps and services
            this.searchService.semanticSearch(q.freeText).then(function (data) {
                _this.sortType = 'pertinence';
                _this.cards = data;
                var _loop_1 = function (i) {
                    var c = _this.cards[i];
                    c.scoreOrder = i;
                    for (var j = 0; j < c.actions.length; j++) {
                        var action = c.actions[j];
                        if (action.id == "details") {
                            action.action = function () {
                                _this.gotoDetails(c);
                            };
                            break;
                        }
                    }
                };
                for (var i = 0; i < _this.cards.length; i++) {
                    _loop_1(i);
                }
                //TODO TIM: an event service that defines an event for every data structure and then verify types of sent objects
                //TODO TIM: All maps will be updated. We should define witch map to update, if we have more than one..
                // sending values to map component in other pages
                var mapPassenger = _this.eventBus.passenger.type.get('map');
                mapPassenger.data = _this.cards;
                _this.eventBus.set(mapPassenger);
                _this.saveProximityOrder(_this.position.coords.latitude, _this.position.coords.longitude);
            });
        }
        else if (q.queryType == 'criteria' && (q.job || q.location || q.timeslot || q.name)) {
            this.searchService.criteriaSearch(q).then(function (data) {
                _this.sortType = 'pertinence';
                _this.cards = data;
                var _loop_2 = function (i) {
                    var c = _this.cards[i];
                    c.scoreOrder = i;
                    for (var j = 0; j < c.actions.length; j++) {
                        var action = c.actions[j];
                        if (action.id == "details") {
                            action.action = function () {
                                _this.gotoDetails(c);
                            };
                            break;
                        }
                    }
                };
                for (var i = 0; i < _this.cards.length; i++) {
                    _loop_2(i);
                }
                var mapPassenger = _this.eventBus.passenger.type.get('map');
                mapPassenger.data = _this.cards;
                _this.eventBus.set(mapPassenger);
                _this.saveProximityOrder(_this.position.coords.latitude, _this.position.coords.longitude);
            });
        }
    };
    SearchPage.prototype.saveProximityOrder = function (x0, y0) {
        for (var i = 0; i < this.cards.length; i++) {
            if (!this.cards[i].address.lat || !this.cards[i].address.lng)
                this.cards[i].locationOrder = 9999; // large distance to ensure sending the card to the end
            var x1 = this.cards[i].address.lat;
            var y1 = this.cards[i].address.lng;
            var distance = Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1)); // Thanks Pythagoras
            this.cards[i].locationOrder = distance;
        }
    };
    SearchPage.prototype.doSort = function (e) {
        if (this.sortType == 'pertinence') {
            this.cards.sort(function (a, b) {
                return a.scoreOrder - b.scoreOrder;
            });
        }
        else {
            this.cards.sort(function (a, b) {
                return a.locationOrder - b.locationOrder;
            });
        }
    };
    SearchPage.prototype.gotoDetails = function (card) {
        console.log("Details : " + card.id);
        var c = null;
        for (var i = 0; i < this.searchService.results.length; i++) {
            if (this.searchService.results[i].id == card.id) {
                c = this.searchService.results[i].toCardDetails();
                break;
            }
        }
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* DetailsPage */], params: { card: c }, isRoot: false };
        this.navigationService.navigate('details', vojNav);
    };
    /*
    goToSignUp() {
        this.modalService.present(SignUpPage);

    }

    presentResetPassword() {
        console.log('Call Reset Password.');
        // this.resetPassword.present();
        this.modalService.present(ResetPasswordPage, false);
    }

    goToJobsListPage() {
        let vojNav: VojPage = {page: LanguagesPage, isRoot: false};
        this.navigationService.navigate('details', vojNav);
    }
    */
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search/search.html"*/'<ion-header no-border>\n  <voj-page-header [data]="pageHeader"></voj-page-header>\n</ion-header>\n<ion-content padding class="search-page-content">\n  <voj-search-header [criteria-mode]="false" [data]="searchHeaderData"></voj-search-header>\n  <ion-segment [(ngModel)]="sortType" color="primary" (ionChange)="doSort($event)">\n    <ion-segment-button value="pertinence">\n      Pertinence\n    </ion-segment-button>\n    <ion-segment-button value="distance">\n      Proximité\n    </ion-segment-button>\n  </ion-segment>\n  <voj-map [data]="cards" *ngIf="gmapView"></voj-map>\n  <voj-card [hidden]="gmapView" *ngFor="let c of cards" [data]="c" [vojData]="cards" mode="reduced" ></voj-card>\n\n\n  <!--<button ion-button (click)="goToSignUp()">openSignUpModal</button>\n\n\n  <button ion-button (click)="presentResetPassword()">Test reset password</button>\n\n    <button ion-button (click)="goToJobsListPage()">Go to JobsListPage</button>\n    <button ion-button (click)="goToJobsListPage()">Go to JobsListPage</button>-->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_7__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_reset_password_service_reset_password_service__["a" /* ResetPasswordService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/voj-calendar/desktop-calendar/desktop-calendar.module": [
		275
	],
	"../components/voj-calendar/smart-calendar/smart-calendar.module": [
		272
	],
	"../components/voj-calendar/voj-calendar.module": [
		271
	],
	"../components/voj-card/voj-card.module": [
		95
	],
	"../components/voj-form/voj-form.module": [
		390
	],
	"../components/voj-header-segment/voj-header-segment.module": [
		392
	],
	"../components/voj-header-web/voj-header-web.module": [
		391
	],
	"../components/voj-header/voj-header.module": [
		388
	],
	"../components/voj-list/voj-list.module": [
		389
	],
	"../components/voj-map/voj-map.module": [
		96
	],
	"../components/voj-menu/voj-menu.module": [
		176
	],
	"../components/voj-search-header/voj-search-header.module": [
		191
	],
	"../components/voj-segment/voj-segment.module": [
		74
	],
	"../pages/about/about.module": [
		396
	],
	"../pages/company/company.module": [
		403
	],
	"../pages/enterprise-details/enterprise-details.module": [
		401
	],
	"../pages/home/home.module": [
		405
	],
	"../pages/jobyer-availability-choice/jobyer-availability-choice.module": [
		270
	],
	"../pages/landing-page/landing-page.module": [
		397
	],
	"../pages/options/options.module": [
		395
	],
	"../pages/personal-details-identity/personal-details-identity.module": [
		398
	],
	"../pages/personal-details/personal-details.module": [
		400
	],
	"../pages/search/search.module": [
		414
	],
	"../pages/tabs/tabs.module": [
		416
	],
	"../pages/user-information/user-information.module": [
		393
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobyerAvailabilityChoiceModule", function() { return JobyerAvailabilityChoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobyerAvailabilityChoiceModule = (function () {
    function JobyerAvailabilityChoiceModule() {
    }
    JobyerAvailabilityChoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */]
            ]
        })
    ], JobyerAvailabilityChoiceModule);
    return JobyerAvailabilityChoiceModule;
}());

//# sourceMappingURL=jobyer-availability-choice.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCalendarModule", function() { return VojCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_calendar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_calendar_smart_calendar_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__desktop_calendar_desktop_calendar_module__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VojCalendarModule = (function () {
    function VojCalendarModule() {
    }
    VojCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_calendar__["a" /* VojCalendar */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__smart_calendar_smart_calendar_module__["SmartCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4__desktop_calendar_desktop_calendar_module__["DesktopCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_calendar__["a" /* VojCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_calendar__["a" /* VojCalendar */]
            ],
            entryComponents: []
        })
    ], VojCalendarModule);
    return VojCalendarModule;
}());

//# sourceMappingURL=voj-calendar.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCalendarModule", function() { return SmartCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smart_calendar__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SmartCalendarModule = (function () {
    function SmartCalendarModule() {
    }
    SmartCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */],
                __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__smart_calendar__["a" /* SmartCalendar */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */], useValue: 'fr-FR' }
            ]
        })
    ], SmartCalendarModule);
    return SmartCalendarModule;
}());

//# sourceMappingURL=smart-calendar.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.changeMode = function (mode) {
        this.viewCtrl.dismiss({ mode: mode });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/components/voj-popover.page.html"*/'<ion-list>\n	<ion-list-header>Calendar component</ion-list-header>\n	<button ion-item (click)="changeMode(\'day\')">Day view</button>\n	<button ion-item (click)="changeMode(\'month\')">Month view</button>\n	<button ion-item (click)="changeMode(\'week\')">Week view</button>\n</ion-list>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/components/voj-popover.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=voj-popover.page.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopCalendarModule", function() { return DesktopCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_custom_title_formatter__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_demo_utils_module__ = __webpack_require__(650);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import '../../../../node_modules/angular-calendar/dist/css/angular-calendar.css';
var DesktopCalendarModule = (function () {
    function DesktopCalendarModule() {
    }
    DesktopCalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_demo_utils_module__["a" /* DemoUtilsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__["a" /* DesktopCalendar */]
            ],
            entryComponents: [],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */], useValue: 'fr-FR' },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarEventTitleFormatter */],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__components_custom_title_formatter__["a" /* CustomEventTitleFormatter */]
                }
            ]
        })
    ], DesktopCalendarModule);
    return DesktopCalendarModule;
}());

//# sourceMappingURL=desktop-calendar.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_page_landing_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationService = (function () {
    function NavigationService(event, configurationService) {
        this.event = event;
        this.configurationService = configurationService;
        this.config = this.configurationService.configuration;
    }
    NavigationService.prototype.navigate = function (navName, vojNav) {
        if (this.config.isLargeScreen) {
            //if the target nav contains only the landing page
            //make the vojPage as a root page instead of landing page
            var targetNav = this.getNavByName(navName);
            if (targetNav.getViews().length == 1 && targetNav.last().component == __WEBPACK_IMPORTED_MODULE_3__pages_landing_page_landing_page__["a" /* LandingPage */]) {
                vojNav.isRoot = true;
            }
            this.event.publish("navigate:" + navName, vojNav);
        }
        else {
            this.event.publish('navigate:main', vojNav);
        }
    };
    NavigationService.prototype.hide = function (navName) {
        if (this.config.isLargeScreen) {
            this.event.publish("hide:" + navName);
        }
    };
    NavigationService.prototype.goBack = function (navName) {
        if (this.config.isLargeScreen) {
            this.event.publish("pop:" + navName);
        }
        else {
            this.event.publish('pop:main');
        }
    };
    NavigationService.prototype.getActiveNav = function (view) {
        switch (view) {
            case (this.nav1.getByIndex(0)):
                return this.nav1;
            case (this.nav2.getByIndex(0)):
                return this.nav2;
            case (this.nav3.getByIndex(0)):
                return this.nav3;
            default:
                return null;
        }
    };
    NavigationService.prototype.getNavByName = function (navName) {
        switch (navName) {
            case (this.nav1.name):
                return this.nav1;
            case (this.nav2.name):
                return this.nav2;
            case (this.nav3.name):
                return this.nav3;
            default:
                return null;
        }
    };
    /*
    Getters and setters
     */
    NavigationService.prototype.getNav1 = function () {
        return this.nav1;
    };
    NavigationService.prototype.setNav1 = function (value) {
        this.nav1 = value;
    };
    NavigationService.prototype.getNav2 = function () {
        return this.nav2;
    };
    NavigationService.prototype.setNav2 = function (value) {
        this.nav2 = value;
    };
    NavigationService.prototype.getNav3 = function () {
        return this.nav3;
    };
    NavigationService.prototype.setNav3 = function (value) {
        this.nav3 = value;
    };
    NavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */]])
    ], NavigationService);
    return NavigationService;
}());

//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojMenu = (function () {
    function VojMenu(params) {
        this.params = params;
        this.paramsMenu = this.params.data.data;
    }
    VojMenu.prototype.ngOnInit = function () {
    };
    VojMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-menu',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-menu/voj-menu.html"*/'<ion-list>\n	<ion-list-header>Menu</ion-list-header>\n	<button full icon-left ion-item *ngFor="let item of paramsMenu" (click)="item.action()">\n		<ion-icon [name]="item.icon"></ion-icon>\n		{{ item.label }}\n	</button>\n</ion-list>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-menu/voj-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VojMenu);
    return VojMenu;
}());

//# sourceMappingURL=voj-menu.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return envConfig; });
var envConfig = {
    cid: "8f3c82e6-12d0-4a86-bb22-c5d30d2c2b2f",
    //server : "http://127.0.0.1:8000/appsettings/",
    server: "https://hermes.vitonjob.com/appsettings/",
    thresholdWidth: 768
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextType; });
var TextType = (function () {
    function TextType() {
    }
    return TextType;
}());

//# sourceMappingURL=text-type.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMapModel; });
var VojMapModel = (function () {
    function VojMapModel() {
    }
    return VojMapModel;
}());

//# sourceMappingURL=voj-map.model.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_footer__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojFooterModule = (function () {
    function VojFooterModule() {
    }
    VojFooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_footer__["a" /* VojFooter */]
            ]
        })
    ], VojFooterModule);
    return VojFooterModule;
}());

//# sourceMappingURL=voj-footer.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderModule", function() { return VojHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojHeaderModule = (function () {
    function VojHeaderModule() {
    }
    VojHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header__["a" /* VojHeader */]
            ]
        })
    ], VojHeaderModule);
    return VojHeaderModule;
}());

//# sourceMappingURL=voj-header.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojListModule", function() { return VojListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_list__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_card_voj_card_module__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojListModule = (function () {
    function VojListModule() {
    }
    VojListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_list__["a" /* VojList */]
            ]
        })
    ], VojListModule);
    return VojListModule;
}());

//# sourceMappingURL=voj-list.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojFormModule", function() { return VojFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_form__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VojFormModule = (function () {
    function VojFormModule() {
    }
    VojFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__voj_form__["a" /* VojForm */]
            ]
        })
    ], VojFormModule);
    return VojFormModule;
}());

//# sourceMappingURL=voj-form.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderWebModule", function() { return VojHeaderWebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header_web__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VojHeaderWebModule = (function () {
    function VojHeaderWebModule() {
    }
    VojHeaderWebModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_web__["a" /* VojHeaderWeb */]
            ]
        })
    ], VojHeaderWebModule);
    return VojHeaderWebModule;
}());

//# sourceMappingURL=voj-header-web.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderSegmentModule", function() { return VojHeaderSegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojHeaderSegmentModule = (function () {
    function VojHeaderSegmentModule() {
    }
    VojHeaderSegmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_header_segment__["a" /* VojHeaderSegment */]
            ]
        })
    ], VojHeaderSegmentModule);
    return VojHeaderSegmentModule;
}());

//# sourceMappingURL=voj-header-segment.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationModule", function() { return UserInformationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_information__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserInformationModule = (function () {
    function UserInformationModule() {
    }
    UserInformationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */]
            ]
        })
    ], UserInformationModule);
    return UserInformationModule;
}());

//# sourceMappingURL=user-information.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
var Context = (function () {
    function Context() {
    }
    Context.prototype.loadHeaderData = function () {
        return Context.strategy.loadHeaderData();
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OptionsModule = (function () {
    function OptionsModule() {
    }
    OptionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__options__["a" /* OptionsPage */]
            ]
        })
    ], OptionsModule);
    return OptionsModule;
}());

//# sourceMappingURL=options.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__landing_page__["a" /* LandingPage */]
            ]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing-page.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsIdentityPageModule", function() { return PersonalDetailsIdentityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details_identity__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalDetailsIdentityPageModule = (function () {
    function PersonalDetailsIdentityPageModule() {
    }
    PersonalDetailsIdentityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details_identity__["a" /* PersonalDetailsIdentityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details_identity__["a" /* PersonalDetailsIdentityPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], PersonalDetailsIdentityPageModule);
    return PersonalDetailsIdentityPageModule;
}());

//# sourceMappingURL=personal-details-identity.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsIdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PersonalDetailsIdentityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PersonalDetailsIdentityPage = (function () {
    function PersonalDetailsIdentityPage(configurationService, masterdataService) {
        this.configurationService = configurationService;
        this.masterdataService = masterdataService;
        this.config = this.configurationService.configuration;
        this.formData = {
            fields: [
                {
                    type: 'select',
                    value: '',
                    dataset: [],
                    label: 'Nationality',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'nationality',
                },
                {
                    type: 'select',
                    value: '',
                    dataset: [
                        { id: 201, key: 'select 4', value: 'select 4' },
                        { id: 202, key: 'select 5', value: 'select 5' },
                        { id: 203, key: 'select 6', value: 'select 6' }
                    ],
                    label: 'Type of identity document',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Type of identity document',
                },
                {
                    type: 'number',
                    value: '',
                    label: 'ID number',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'ID number',
                },
                {
                    type: 'number',
                    value: '',
                    label: 'Delivered on',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Delivered on',
                },
                {
                    type: 'text',
                    regex: '^[a-zA-Z0-9_]*$',
                    value: '',
                    label: 'Par',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Par',
                },
                {
                    type: 'number',
                    value: '',
                    label: 'Valid from',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'Valid from',
                },
                {
                    type: 'text',
                    value: '',
                    label: 'au',
                    required: true,
                    visible: true,
                    id: '',
                    name: 'au',
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'validate',
                action: function (event) {
                    console.log('navigation to J-S-GCO-V1-03 Information Resume ');
                }
            }
        };
        this.headerData = {
            title: 'My personal data 2/2',
            actions: [
                {
                    id: '',
                    icon: 'help',
                    label: 'help',
                    action: function (event) {
                        console.log('help button works');
                    }
                }
            ],
            style: '',
            isCanceled: false
        };
    }
    PersonalDetailsIdentityPage.prototype.ngOnInit = function () {
        var _this = this;
        //load nationality list
        this.masterdataService.loadNationalitiesList().then(function (data) {
            //set dataset of nationalities of the form
            _this.formData.fields.filter(function (f) { return f.name === "nationality"; })[0].dataset = _this.masterdataService.convertNationalitiesListToDataset(data);
            //the default nationality is "France"
            _this.formData.fields.filter(function (f) { return f.name === "nationality"; })[0].value = "France";
        });
    };
    PersonalDetailsIdentityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsIdentityPage');
    };
    PersonalDetailsIdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-personal-details-identity',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/personal-details-identity/personal-details-identity.html"*/'<ion-content>\n  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="!config.isLargeScreen ? \'personal-details-container\' : \'\'">\n    <div [ngClass]="!config.isLargeScreen ? \'personal-details-child-container\' : \'\'">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/personal-details-identity/personal-details-identity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */]])
    ], PersonalDetailsIdentityPage);
    return PersonalDetailsIdentityPage;
}());

//# sourceMappingURL=personal-details-identity.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TIME_OUT_PERIOD = 120000;
/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttpRequestProvider = (function () {
    function HttpRequestProvider(http, toastCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello HttpRequestProvider Provider');
        HttpRequestProvider_1.toast = this.toastCtrl;
        HttpRequestProvider_1.loading = this.loadingCtrl;
    }
    HttpRequestProvider_1 = HttpRequestProvider;
    /**
     * Shows error message
     * @param error
     * @returns {Promise<any>}
     */
    HttpRequestProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        var vojMessage = HttpRequestProvider_1.getErrMessage(error, HttpRequestProvider_1.senderClassName);
        HttpRequestProvider_1.presentErrToast(vojMessage);
        //TODO send email to notify us
        var errorObject = { success: false, error: error.message || error };
        return Promise.reject(errorObject);
    };
    /**
     * Send a callOut request via http post method
     * @param payload
     * @param classObject
     * @param silentMode
     * @returns {Observable<T>}
     */
    HttpRequestProvider.prototype.sendCallOut = function (payload, classObject, silentMode) {
        var newTimeOutPeriod = 0;
        var silentLadingToast = this.toastCtrl.create();
        //
        if (silentMode !== true) {
            HttpRequestProvider_1.presentLoading();
            newTimeOutPeriod = TIME_OUT_PERIOD;
        }
        else {
            //silent mode : waiting for more time..
            newTimeOutPeriod = TIME_OUT_PERIOD * 10;
            silentLadingToast = HttpRequestProvider_1.presentSilentLoadingToast("En cours de chargement des données...", newTimeOutPeriod, 'top');
        }
        // Getting service class name
        HttpRequestProvider_1.senderClassName = (classObject) ? classObject.constructor.name : "";
        // Sending request
        var options = HttpRequestProvider_1.getHttpJsonHeaders();
        return this.http.post(HttpRequestProvider_1.calloutURL, JSON.stringify(payload), options)
            .map(function (res) { return res.json(); })
            .timeout(newTimeOutPeriod)
            .catch(this.handleError)
            .finally(function () {
            if (HttpRequestProvider_1.loaderComponent)
                HttpRequestProvider_1.loaderComponent.dismiss();
            if (silentLadingToast)
                silentLadingToast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
        });
    };
    /**
     * Calls a specific web service given the URL and payload
     * @param payload
     * @param url
     * @param classObject
     * @param silentMode
     * @returns {Observable<T>}
     */
    HttpRequestProvider.prototype.call = function (payload, url, classObject, silentMode) {
        var newTimeOutPeriod = 0;
        var silentLadingToast = this.toastCtrl.create();
        //
        if (silentMode !== true) {
            HttpRequestProvider_1.presentLoading();
            newTimeOutPeriod = TIME_OUT_PERIOD;
        }
        else {
            //silent mode : waiting for more time..
            newTimeOutPeriod = TIME_OUT_PERIOD * 10;
            silentLadingToast = HttpRequestProvider_1.presentSilentLoadingToast("En cours de chargement des données...", newTimeOutPeriod, 'top');
        }
        // Getting service class name
        HttpRequestProvider_1.senderClassName = (classObject) ? classObject.constructor.name : "";
        // Sending request
        var options = HttpRequestProvider_1.getHttpJsonHeaders();
        return this.http.post(url, JSON.stringify(payload), options)
            .map(function (res) { return res.json(); })
            .timeout(newTimeOutPeriod)
            .catch(this.handleError)
            .finally(function () {
            if (HttpRequestProvider_1.loaderComponent)
                HttpRequestProvider_1.loaderComponent.dismiss();
            if (silentLadingToast) {
                silentLadingToast.dismissAll();
            }
        });
    };
    HttpRequestProvider.getHttpJsonHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = { headers: headers };
        options.headers.append("Content-Type", 'application/json');
        //if (GlobalConfigs.env === 'PROD')
        options.headers.append("Authorization", 'Basic dm9qYWRtaW46NG5ncmFNNDFueXU=');
        return options;
    };
    HttpRequestProvider.getHttpTextHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'text/plain');
        /*if (GlobalConfigs.env === 'PROD')
            headers.append("Authorization", 'Basic aGFkZXM6NWV0Y2Fy');*/
        return headers;
    };
    HttpRequestProvider.getHttpXmlHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'text/xml');
        /*if (GlobalConfigs.env === 'PROD')
            headers.append("Authorization", 'Basic aGFkZXM6NWV0Y2Fy');*/
        return headers;
    };
    /**
     * Show a red toast that contains error message
     * @param message
     * @param duration
     * @param position
     */
    HttpRequestProvider.presentErrToast = function (message, duration, position) {
        if (!duration)
            duration = 5;
        var toast = this.toast.create({
            message: message,
            position: position,
            dismissOnPageChange: true,
            showCloseButton: true,
            closeButtonText: "Ok",
            duration: duration * 1000
        });
        toast.present();
        // Change toast color to red
        var toastElement = document.getElementsByClassName('toast-wrapper toast-bottom');
        if (toastElement && toastElement.length > 0)
            toastElement[0].style.background = "#E8384F";
    };
    /**
     * Show a normal toast that contains silent loading message
     * @param message
     * @param duration
     * @param position
     */
    HttpRequestProvider.presentSilentLoadingToast = function (message, duration, position) {
        var toast = this.toast.create({
            message: message,
            position: position,
            dismissOnPageChange: false,
            showCloseButton: true,
            closeButtonText: "Ok",
            duration: duration
        });
        toast.present();
        return toast;
    };
    /**
     * Present Loading component while the treatment of request
     */
    HttpRequestProvider.presentLoading = function () {
        HttpRequestProvider_1.loaderComponent = HttpRequestProvider_1.loading.create({ content: "Merci de patienter..." });
        HttpRequestProvider_1.loaderComponent.present();
    };
    /**
     * Get error message from status code
     * @param error
     * @param senderClassName
     * @returns {string}
     */
    HttpRequestProvider.getErrMessage = function (error, senderClassName) {
        if (error.message === "timeout") {
            error.status = -100;
        }
        switch (~~(error.status / 100)) {
            case 0:
                // General error with status 0: http://stackoverflow.com/a/26451773/2936049
                return "0 • Problème sur serveur, merci de réessayer ultérieurement. (" + senderClassName + ")";
            case 4:
                // 4xx: client type error
                return "4 • Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
            case 5:
                // 5xx: server type error
                return "5 • Problème sur serveur, merci de réessayer ultérieurement. (" + senderClassName + ")";
            case -1:
                // TimeOut error specified by us. See cont variable TIME_OUT_PERIOD
                return "-1 • Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
            default:
                // Other problems...
                return "• Merci de vérifier votre connexion internet et réessayer ultérieurement. (" + senderClassName + ")";
        }
    };
    HttpRequestProvider.calloutURL = "http://localhost:8000/search/";
    HttpRequestProvider = HttpRequestProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* LoadingController */]])
    ], HttpRequestProvider);
    return HttpRequestProvider;
    var HttpRequestProvider_1;
}());

//# sourceMappingURL=http-request.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsPageModule", function() { return PersonalDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalDetailsPageModule = (function () {
    function PersonalDetailsPageModule() {
    }
    PersonalDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], PersonalDetailsPageModule);
    return PersonalDetailsPageModule;
}());

//# sourceMappingURL=personal-details.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDetailsModule", function() { return EnterpriseDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterprise_details__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnterpriseDetailsModule = (function () {
    function EnterpriseDetailsModule() {
    }
    EnterpriseDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enterprise_details__["a" /* EnterpriseDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enterprise_details__["a" /* EnterpriseDetails */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], EnterpriseDetailsModule);
    return EnterpriseDetailsModule;
}());

//# sourceMappingURL=enterprise-details.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EnterpriseDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EnterpriseDetails = (function () {
    function EnterpriseDetails(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.isMobile = false;
        platform.is('core') ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Mess Donnees',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [{
                    type: 'select',
                    value: 'Convention collective1',
                    label: 'Convention collective1',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                },
                {
                    type: 'number',
                    value: 'Convention collective2',
                    label: 'Convention collective2',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                },
                {
                    type: 'select',
                    value: 'Convention collective3',
                    label: 'Convention collective3',
                    dataset: [
                        { id: 4, key: 'russian', value: 'Russian' },
                        { id: 5, key: 'ukrainian', value: 'Ukrainian' },
                        { id: 6, key: 'english', value: 'English' }
                    ],
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Convention collective'
                }],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Suivant',
                icon: 'help',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    EnterpriseDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterpriseDetails');
    };
    EnterpriseDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-enterprise-details',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/enterprise-details/enterprise-details.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'enterprise-details-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'enterprise-details-child-container\' : \'\'">\n            <voj-form [data]=\'formData\'></voj-form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/enterprise-details/enterprise-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], EnterpriseDetails);
    return EnterpriseDetails;
}());

//# sourceMappingURL=enterprise-details.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompanyModule = (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], CompanyModule);
    return CompanyModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyPage = (function () {
    function CompanyPage() {
        var _this = this;
        // Header
        this.dataPageHeader = {
            title: 'COMPANY.TITLE',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
        // Form data
        this.formData = {
            title: '',
            fields: [
                // Search button
                {
                    type: 'button',
                    value: '',
                    label: 'COMPANY.SEARCH_BTN',
                    visible: true,
                    id: 'search-button',
                    name: 'searchButton',
                    action: function () {
                        console.log('Click search button');
                    }
                },
                // Text for company name
                {
                    type: 'text',
                    value: '',
                    label: 'COMPANY.COMPANY_NAME',
                    required: true,
                    visible: true,
                    regex: '^[A-z0-9 ]*$',
                    id: 'company-name',
                    name: 'companyName',
                    validationMsg: 'COMPANY.COMPANY_NAME_ERR'
                },
                // Radio for civility
                {
                    type: 'radio',
                    value: '',
                    label: 'COMPANY.CIVILITY',
                    dataset: [
                        { id: 1, key: 'COMPANY.MRS', value: 'Mrs' },
                        { id: 2, key: 'COMPANY.MR', value: 'Mr' }
                    ],
                    required: true,
                    visible: true,
                    id: 'civility',
                    name: 'civility',
                },
                // Text for user name
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.NAME',
                    required: true,
                    visible: true,
                    regex: '[A-z]*$',
                    id: 'user-name',
                    name: 'userName',
                    validationMsg: 'COMPANY.NAME_ERR'
                },
                // Text for first name
                {
                    placeholder: '',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.FIRST_NAME',
                    required: true,
                    visible: true,
                    regex: '[A-z]*$',
                    id: 'first-name',
                    name: 'firstName',
                    validationMsg: 'COMPANY.FIRST_NAME_ERR'
                },
                // Company number
                {
                    placeholder: '999 999 999 99999',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.COMPANY_NUMBER',
                    required: true,
                    visible: true,
                    regex: '^[0-9 ]*$',
                    id: 'company-number',
                    min: 17,
                    max: 17,
                    name: 'companyNumber',
                    validationMsg: 'COMPANY.COMPANY_NUMBER_ERR',
                    action: function () {
                        _this.maskCompanyNumber();
                    }
                },
                // Text for Naf
                {
                    placeholder: '9999A',
                    type: 'text',
                    value: '',
                    label: 'COMPANY.NAF',
                    required: true,
                    readonly: false,
                    visible: true,
                    min: 5,
                    max: 5,
                    regex: '^[0-9]{4}[A-Za-z]{1}',
                    id: 'naf',
                    name: 'naf',
                    validationMsg: 'COMPANY.NAF_ERR'
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'COMPANY.VALIDATE_BTN',
                action: function () {
                    console.log('Present Add Adresses page.');
                }
            }
        };
        this.currentCompanyNumber = this.formData.fields[5].value;
    }
    CompanyPage.prototype.maskCompanyNumber = function () {
        // Mask company number
        var newValue = this.formData.fields[5].value;
        if (newValue > this.currentCompanyNumber) {
            if (newValue.length === 3 || newValue.length === 7 || newValue.length === 11) {
                this.formData.fields[5].value += ' ';
            }
            else if ((newValue.length === 4 || newValue.length === 8 || newValue.length === 12) &&
                newValue[newValue.length - 2] !== ' ') {
                this.formData.fields[5].value = newValue.slice(0, newValue.length - 1) + ' ' + newValue[newValue.length - 1];
            }
        }
        else if (newValue < this.currentCompanyNumber) {
            if (newValue.length === 4 || newValue.length === 8 || newValue.length === 12) {
                this.formData.fields[5].value = this.formData.fields[5].value.slice(0, newValue.length - 1);
            }
        }
        this.currentCompanyNumber = this.formData.fields[5].value;
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/company/company.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<div class="voj-content">\n  <div class="voj-form-container">\n    <voj-form [data]=\'formData\'></voj-form>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/company/company.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojNotification = (function () {
    function VojNotification(params) {
        this.params = params;
        this.data = this.params.get('data');
    }
    VojNotification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-notification',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/'<!-- Title -->\n<h1 class="voj-notification-title" *ngIf="(data.icon && data.icon.length > 0) || (data.title && data.title.length > 0)">\n    <ion-icon name="{{ data.icon }}" *ngIf="data.icon && data.icon.length > 0"></ion-icon>\n    {{ data.title | translate }}\n</h1>\n\n<!-- Message -->\n<div class="voj-notification-message">\n    <p>{{ data.message | translate }}</p>\n</div>\n\n<!-- Buttons -->\n<div class="voj-notification-buttons">\n    <button id="{{ button.id }}" ion-button icon-left clear navPop *ngFor="let button of data.buttons" (click)="button.action()">\n        <ion-icon name="{{ button.icon }}"></ion-icon>\n        {{ button.label | translate }}\n    </button>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VojNotification);
    return VojNotification;
}());

//# sourceMappingURL=voj-notification.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
        this.config = this.configuration.configuration;
    }
    ProfileService.prototype.getAccountData = function (accountId) {
        var _this = this;
        var payload = {
            "service": "GET_ACCOUNT_RESUME",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "accountId": accountId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    /***
     * Method retuning a list of municipalities according to a given department
     * @param {number} departmentId : the id of the department
     * @returns {Promise<any>} list of the municipalities
     */
    ProfileService.prototype.getMunicipalitiesByDepartment = function (departmentId) {
        var _this = this;
        var payload = {
            "service": "GET_MUNICIPALITIES_BY_DEPARTMENT",
            "departmentId": departmentId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            //TODO: create the MunicipalityDTO class. this Promise should return an array of MunicipalityDTO
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    ProfileService.prototype.savePersonalDetails = function (jobyerId, birthData, numSS) {
        var _this = this;
        var payload = {
            "service": "SAVE_PERSONAL_DETAILS",
            "jobyerId": jobyerId,
            "numSS": numSS,
            "birthDate": birthData.birthdate,
            "birthCountryId": birthData.country.gid,
            "departmentId": birthData.department.gid,
            "municipalityId": birthData.municipality.gid,
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = (function () {
    function SignupService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.config = this.configuration.configuration;
    }
    SignupService.prototype.signup = function (phone, email, password, role) {
        var _this = this;
        var payload = {
            "service": "REGISTER",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "email": email,
            "password": password
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__["a" /* Configuration */]])
    ], SignupService);
    return SignupService;
}());

//# sourceMappingURL=signup-service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
// Taken from https://github.com/killmenot/webtoolkit.md5
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordPage = (function () {
    function ResetPasswordPage(accountService, vojNotification, masterdataService, viewCtrl) {
        var _this = this;
        this.accountService = accountService;
        this.vojNotification = vojNotification;
        this.masterdataService = masterdataService;
        this.viewCtrl = viewCtrl;
        // Set radio form data
        this.radioFormData = {
            title: '',
            fields: [
                {
                    type: 'radio',
                    value: 'sms',
                    label: '',
                    dataset: [
                        { id: 1, key: 'RESET_PASSWORD.SMS_BTN', value: 'sms' },
                        { id: 2, key: 'RESET_PASSWORD.MAIL_BTN', value: 'mail' }
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'radioType'
                }
            ],
            submit: {
                id: 'radio-submit',
                icon: '',
                label: '',
                action: function () { }
            }
        };
        // Phone
        this.phoneFormData = {
            title: '',
            fields: [
                // Phone code
                {
                    type: 'select',
                    value: null,
                    label: 'LOGIN.PHONE',
                    dataset: [],
                    /*[
                                { id: 1, key: 'France (+33)', value: '+33' },
                                { id: 2, key: 'Ukraine (+38)', value: '+38' }
                        ],*/
                    required: true,
                    visible: true,
                    id: 'phone-code-select',
                    name: 'code'
                },
                {
                    placeholder: 'PLACEHOLDER.ENTER_PHONE',
                    type: 'tel',
                    value: '',
                    label: '',
                    required: true,
                    readonly: false,
                    visible: true,
                    id: 'phone-select',
                    min: 9,
                    max: 10,
                    regex: '^(06|07)[0-9]*$',
                    name: 'userPhone',
                    validationMsg: 'VALIDATION.PHONE_VALIDATION_MSG',
                    action: function () {
                        // Hide error
                        _this.hideError();
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'RESET_PASSWORD.VALIDATE_BTN',
                action: function () {
                    console.log('Check user phone.');
                    //this.checkUserData('telephone number');
                    var code = _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].value;
                    var phone = _this.phoneFormData.fields.filter(function (f) { return f.name === "userPhone"; })[0].value;
                    var phoneWithCode = "+" + code + phone.substr(phone.length - 9);
                    _this.accountService.sendPassword(phoneWithCode, "").then(function (data) {
                        if (data.status == "success") {
                            _this.viewCtrl.dismiss().then(function () {
                                _this.presentConfirmation("sms");
                            });
                        }
                        else {
                            _this.presentError(data.code, "sms");
                        }
                    });
                }
            }
        };
        // Mail
        this.mailFormData = {
            title: '',
            fields: [
                {
                    placeholder: 'PLACEHOLDER.ENTER_MAIL',
                    type: 'mail',
                    value: '',
                    label: '',
                    required: true,
                    readonly: false,
                    visible: true,
                    name: 'userEmail',
                    id: 'user-mail',
                    min: 5,
                    validationMsg: 'VALIDATION.EMAIL_VALIDATION_MSG',
                    regex: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    action: function () {
                        // Hide error
                        _this.hideError();
                    }
                }
            ],
            submit: {
                id: '',
                icon: '',
                label: 'RESET_PASSWORD.VALIDATE_BTN',
                action: function () {
                    console.log('Check user email.');
                    //this.checkUserData('e-mail address');
                    _this.accountService.sendPassword("", _this.mailFormData.fields[0].value).then(function (data) {
                        if (data.status == "success") {
                            _this.viewCtrl.dismiss().then(function () {
                                _this.presentConfirmation("mail");
                            });
                        }
                        else {
                            _this.presentError(data.code, "mail");
                        }
                    });
                }
            }
        };
        // Error init
        this.isErrorShown = false;
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        //load phone code list
        this.masterdataService.loadCountriesList().then(function (data) {
            //set dataset of phone codes of the form
            _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].dataset = _this.masterdataService.convertCountriesListToDataset(data);
            //the default phone code is France code (33)
            _this.phoneFormData.fields.filter(function (f) { return f.name === "code"; })[0].value = "33";
        });
    };
    ResetPasswordPage.prototype.checkUserData = function (type) {
        // Hide error if shown
        if (this.isErrorShown === true) {
            this.hideError();
        }
        // Show error
        //this.presentError(type);
    };
    ResetPasswordPage.prototype.presentError = function (msg, type) {
        // Show only one error message
        if (this.isErrorShown === true) {
            return;
        }
        this.isErrorShown = true;
        var errorDiv = document.createElement('div');
        errorDiv.setAttribute('id', 'voj-error-msg');
        errorDiv.innerHTML = '<p>' + msg + '</p>';
        errorDiv.className = 'voj-validation-error-msg';
        var parentId = (type === 'sms' ? '2' : '3');
        document.getElementById(parentId).appendChild(errorDiv);
    };
    ResetPasswordPage.prototype.hideError = function () {
        // Hide error if it exists
        if (this.isErrorShown === false) {
            return;
        }
        if (document.getElementById('voj-error-msg')) {
            document.getElementById('voj-error-msg').remove();
        }
        this.isErrorShown = false;
    };
    ResetPasswordPage.prototype.presentConfirmation = function (method) {
        console.log('Show Present Confirmation modal.');
        var notificationData = {
            icon: '',
            title: '',
            message: (method == 'sms' ? 'RESET_PASSWORD.CONFIRMATION_MESSAGE' : 'RESET_PASSWORD.CONFIRMATION_MESSAGE'),
            backdropDismiss: true,
            buttons: [
                {
                    id: 'connectBtn',
                    label: 'RESET_PASSWORD.VALIDATE_BTN',
                    icon: '',
                    action: function () {
                        console.log('Connect was clicked');
                    }
                },
            ]
        };
        this.vojNotification.present(notificationData);
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reset-password-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/reset-password/reset-password.html"*/'<div class="voj-content">\n  <div class="voj-form-container">\n\n    <h2>{{ \'RESET_PASSWORD.MESSAGE\' | translate }}</h2>\n\n    <!-- Form for radio -->\n    <voj-form [data]=\'radioFormData\'></voj-form>\n\n    <!-- Form for phone -->\n    <voj-form [data]=\'phoneFormData\' *ngIf="radioFormData.fields[0].value === \'sms\'"></voj-form>\n\n    <!-- Form for mail -->\n    <voj-form [data]=\'mailFormData\' *ngIf="radioFormData.fields[0].value === \'mail\'"></voj-form>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_account_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ViewController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BankSettingsPage = (function () {
    function BankSettingsPage(configurationService, platform) {
        this.configurationService = configurationService;
        this.platform = platform;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My bank details',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'number',
                    label: 'Bank name',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Bank name',
                    required: true
                },
                {
                    type: 'text',
                    label: 'Name of the holder',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'Name of the holder',
                    required: true
                },
                {
                    type: 'number',
                    label: 'IBAN',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'IBAN',
                    required: true
                },
                {
                    type: 'number',
                    label: 'BIC',
                    readonly: false,
                    visible: true,
                    id: '',
                    name: 'BIC',
                    required: true
                }
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Suivant',
                icon: 'help',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    BankSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    BankSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bank-settings-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/bank-settings/bank-settings.html"*/'<ion-content>\n  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'bank-settings-container\' : \'\'">\n    <div [ngClass]="isMobile ? \'bank-settings-child-container\' : \'\'">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/bank-settings/bank-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], BankSettingsPage);
    return BankSettingsPage;
}());

//# sourceMappingURL=bank-settings.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddDaysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailabilitiesAddDaysPage = (function () {
    function AvailabilitiesAddDaysPage(configurationService, platform) {
        this.configurationService = configurationService;
        this.platform = platform;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Add an availability',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'checkbox',
                    label: 'Monday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Tuesday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Wednesday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Thursday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Friday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Saturday',
                    value: false,
                    visible: true,
                    id: '',
                },
                {
                    type: 'checkbox',
                    label: 'Sunday',
                    value: false,
                    visible: true,
                    id: '',
                }
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Suivant',
                icon: 'help',
                action: function () {
                    console.log('navigate to  J-S-CV-V1-03 Availabilities 1/4');
                }
            }
        };
    }
    AvailabilitiesAddDaysPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    AvailabilitiesAddDaysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'availabilities-add-days-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities-add-days/availabilities-add-days.html"*/'<ion-content>\n  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'availabilities-add-days-container\' : \'\'">\n    <div [ngClass]="isMobile ? \'availabilities-add-days-child-container\' : \'\'">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities-add-days/availabilities-add-days.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], AvailabilitiesAddDaysPage);
    return AvailabilitiesAddDaysPage;
}());

//# sourceMappingURL=availabilities-add-days.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailabilitiesPage = (function () {
    function AvailabilitiesPage(configurationService, navigationService) {
        this.configurationService = configurationService;
        this.navigationService = navigationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My availabilities',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.testAvailabilitiesData = [
            {
                fromDay: new Date(1503679162783),
                toDay: new Date(1503679162783 + 86400000),
                fromHour: 12,
                toHour: 1,
                entireDay: true
            },
            {
                fromDay: new Date(1503699162783),
                toDay: new Date(1503699162783 + 86400000),
                fromHour: 12,
                toHour: 1,
                entireDay: true
            }
        ];
    }
    AvailabilitiesPage.prototype.deleteAvailability = function (index) {
        this.testAvailabilitiesData.splice(index, 1);
    };
    AvailabilitiesPage.prototype.goToJobyerAvailabilityChoice = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_2__jobyer_availability_choice_jobyer_availability_choice__["a" /* JobyerAvailabilityChoicePage */], isRoot: false };
        this.navigationService.navigate('list', vojNav);
    };
    AvailabilitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    AvailabilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'availabilities-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities/availabilities.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'availabilities-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'availabilities-child-container\' : \'\'">\n\n            <p class="availabilities-link" (click)="goToJobyerAvailabilityChoice()">Add an availability</p>\n            <div class="empty-field1"></div>\n            <div class="custom-line"></div>\n            <div class="empty-field2"></div>\n\n            <ion-list padding class="availability-list">\n                <ion-item *ngFor="let item of testAvailabilitiesData let i = index">\n                    <span class="availability-label">From {{item.fromDay | date: \'dd/MM/y\'}} to {{item.toDay | date: \'dd/MM/y\'}}</span>\n                    <br>\n                    <span class="availability-label">From {{item.fromHour}} to {{item.toHour}}</span>\n\n                    <button class="availability-delete-btn" ion-button icon-only item-end (click)="deleteAvailability(i)">\n                        <ion-icon name="ios-trash"></ion-icon>\n                    </button>\n                </ion-item>\n            </ion-list>\n\n            <div class="availabilities-validate-button">\n                <button ion-button class="validate-btn">Validate</button>\n            </div>\n\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/availabilities/availabilities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */]])
    ], AvailabilitiesPage);
    return AvailabilitiesPage;
}());

//# sourceMappingURL=availabilities.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_search_header_voj_search_header_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_voj_card_voj_card_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_map_voj_map_module__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_voj_search_header_voj_search_header_module__["VojSearchHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_6__components_voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service_account_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordService = (function () {
    function ResetPasswordService(vojNotification, accountService) {
        this.vojNotification = vojNotification;
        this.accountService = accountService;
    }
    ResetPasswordService.prototype.present = function () {
        console.log('Show Reset Password modal.');
        var notificationData = {
            icon: '',
            title: '',
            message: 'RESET_PASSWORD.MESSAGE',
            backdropDismiss: true,
            buttons: [
                {
                    id: 'smsBtn',
                    label: 'RESET_PASSWORD.SMS_BTN',
                    icon: '',
                    action: function () {
                        console.log('SMS was clicked');
                        //this.sendPassword('sms');
                    }
                },
                {
                    id: 'mailBtn',
                    label: 'RESET_PASSWORD.MAIL_BTN',
                    icon: '',
                    action: function () {
                        console.log('Mail was clicked');
                        //this.sendPassword('mail', phone, accountId);
                    }
                }
            ]
        };
        this.vojNotification.present(notificationData);
    };
    ResetPasswordService.prototype.sendPassword = function (canal, phone, accountId) {
        var _this = this;
        this.accountService.sendPassword(phone, "").then(function (data) {
            if (data.status == "success") {
                // Present confirmation modal
                _this.presentConfirmation(canal);
            }
            else {
                console.log("Erreur lors de l'envoi du SMS");
            }
        });
    };
    ResetPasswordService.prototype.presentConfirmation = function (method) {
        console.log('Show Present Confirmation modal.');
        var notificationData = {
            icon: '',
            title: '',
            message: (method == 'sms' ? 'RESET_PASSWORD.CONFIRMATION_MESSAGE' : 'RESET_PASSWORD.CONFIRMATION_MESSAGE'),
            backdropDismiss: true,
            buttons: [
                {
                    id: 'connectBtn',
                    label: 'RESET_PASSWORD.CONNECT_BTN',
                    icon: '',
                    action: function () {
                        console.log('Connect was clicked');
                    }
                },
            ]
        };
        this.vojNotification.present(notificationData);
    };
    ResetPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__account_service_account_service__["a" /* AccountService */]])
    ], ResetPasswordService);
    return ResetPasswordService;
}());

//# sourceMappingURL=reset-password-service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(platform, navCtrl, navigationService) {
        //".tabbar.show-tabbar" --> visibility: hidden
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navigationService = navigationService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        //let test: any = document.getElementsByClassName('tabbar.show-tabbar');
        //this.tabBarElement = document.querySelector('#tabs');
        /*if (!platform.is('cordova')){
         document.getElementsByClassName('tabbar show-tabbar')[0].style.visibility = 'hidden';
         }*/
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab [root]="tab1Root" tabTitle="Recherche" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Annonces" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Missions" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Compte" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = (function () {
    function ModalService(configurationService, modalCtrl) {
        this.configurationService = configurationService;
        this.modalCtrl = modalCtrl;
    }
    // header - optional parameter. If false - without header
    ModalService.prototype.present = function (page, header) {
        var _this = this;
        console.log('header:', header);
        // Options for modal window
        var modalOptions = {
            cssClass: 'voj-modal',
            //enableBackdropDismiss: signUpData.backdropDismiss
            enableBackdropDismiss: true
        };
        // Create modal window
        var modal = this.modalCtrl.create(page, {}, modalOptions);
        // Show modal window
        modal.present().then(function () {
            // Call on mobile screen
            if (_this.configurationService.configuration.isLargeScreen === true) {
                _this.setModalHeight(header);
            }
        });
    };
    ModalService.prototype.dismiss = function () {
    };
    ModalService.prototype.setModalHeight = function (header) {
        console.log('setModalHeight');
        // Content of page
        var vojContents = document.getElementsByClassName('voj-content');
        var modalContent = vojContents[vojContents.length - 1];
        // Modal window
        var modalWrapper = document.getElementsByClassName('modal-wrapper')[0];
        // Set height and show modal
        modalWrapper.style.display = 'block';
        var modalHeader = (header === false) ? 0 : 56;
        modalWrapper.style.height = modalContent.clientHeight + modalHeader + 'px';
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], ModalService);
    return ModalService;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(472);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_components_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_calendar__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_voj_notification_voj_notification_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_signup_service_signup_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_reset_password_service_reset_password_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_form_data_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_masterdata_service_masterdata_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_profile_service_profile_service__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_user_information_strategy_context__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import './node_modules/angular-calendar/dist/css/angular-calendar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






















function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__["a" /* VojNotification */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_calendar__["b" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/jobyer-availability-choice/jobyer-availability-choice.module#JobyerAvailabilityChoiceModule', name: 'JobyerAvailabilityChoicePage', segment: 'jobyer-availability-choice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-information/user-information.module#UserInformationModule', name: 'UserInformationPage', segment: 'user-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options/options.module#OptionsModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing-page/landing-page.module#LandingPageModule', name: 'LandingPage', segment: 'landing-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details-identity/personal-details-identity.module#PersonalDetailsIdentityPageModule', name: 'PersonalDetailsIdentityPage', segment: 'personal-details-identity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enterprise-details/enterprise-details.module#EnterpriseDetailsModule', name: 'EnterpriseDetails', segment: 'enterprise-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company/company.module#CompanyModule', name: 'CompanyPage', segment: 'company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/voj-calendar.module#VojCalendarModule', name: 'VojCalendar', segment: 'voj-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/smart-calendar/smart-calendar.module#SmartCalendarModule', name: 'SmartCalendar', segment: 'smart-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-calendar/desktop-calendar/desktop-calendar.module#DesktopCalendarModule', name: 'DesktopCalendar', segment: 'desktop-calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-menu/voj-menu.module#VojMenuModule', name: 'VojMenu', segment: 'voj-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-card/voj-card.module#VojCardModule', name: 'VojCard', segment: 'voj-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-segment/voj-segment.module#VojSegmentModule', name: 'VojSegment', segment: 'voj-segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-map/voj-map.module#VojMapModule', name: 'VojMap', segment: 'voj-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header/voj-header.module#VojHeaderModule', name: 'VojHeader', segment: 'voj-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-list/voj-list.module#VojListModule', name: 'VojList', segment: 'voj-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-form/voj-form.module#VojFormModule', name: 'VojForm', segment: 'voj-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-search-header/voj-search-header.module#VojSearchHeaderModule', name: 'VojSearchHeader', segment: 'voj-search-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header-web/voj-header-web.module#VojHeaderWebModule', name: 'VojHeaderWeb', segment: 'voj-header-web', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header-segment/voj-header-segment.module#VojHeaderSegmentModule', name: 'VojHeaderSegment', segment: 'voj-header-segment', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__["a" /* VojNotification */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_navigation_service__["a" /* NavigationService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__config_voj_configuration__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__["a" /* HttpRequestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__["a" /* SearchServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__["a" /* EventBusProvider */],
                __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__["a" /* VojConfiguration */],
                __WEBPACK_IMPORTED_MODULE_20__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_signup_service_signup_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_reset_password_service_reset_password_service__["a" /* ResetPasswordService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_26__services_form_data_service__["a" /* FormDataService */],
                __WEBPACK_IMPORTED_MODULE_23__providers_account_service_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_27__providers_masterdata_service_masterdata_service__["a" /* MasterdataService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_profile_service_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_information_strategy_context__["a" /* Context */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VojCalendar component.
 *
 */
var VojCalendar = (function () {
    function VojCalendar(elRef, platform) {
        this.desktopPlatform = false;
        this.elRef = elRef;
        this.platform = platform;
        console.log('Hello VojCalendar Component');
        if (this.platform.is('core')) {
            this.desktopPlatform = true;
            console.log('>>>Desktop<<<');
        }
    }
    VojCalendar.prototype.ionViewWillEnter = function () {
        // if (this.platform.is('core')) {
        // 	this.desktopPlatform = true;
        // 	console.log('>>>Desktop<<<');
        // }
    };
    VojCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/voj-calendar.html"*/'<!-- Generated template for the VojCalendar component -->\n<div>\n	<smart-calendar *ngIf="!desktopPlatform"></smart-calendar>\n	<desktop-calendar *ngIf="desktopPlatform"></desktop-calendar>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/voj-calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], VojCalendar);
    return VojCalendar;
}());

//# sourceMappingURL=voj-calendar.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_notification__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VojNotificationService = (function () {
    function VojNotificationService(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    // Present notification
    VojNotificationService.prototype.present = function (notificationData) {
        // Options for modal window
        var modalOptions = {
            cssClass: 'voj-notification-modal',
            enableBackdropDismiss: notificationData.backdropDismiss
        };
        // Create modal window
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__voj_notification__["a" /* VojNotification */], { data: notificationData }, modalOptions);
        // Show modal window
        modal.present();
    };
    VojNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], VojNotificationService);
    return VojNotificationService;
}());

//# sourceMappingURL=voj-notification.service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SmartCalendar component.
 *
 */
var SmartCalendar = (function () {
    function SmartCalendar(elRef, popoverCtrl) {
        this.calendarCollapse = false;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.eventsSource = [];
        this.elRef = elRef;
        this.popoverCtrl = popoverCtrl;
        this.loadEvents();
    }
    SmartCalendar.prototype.ngAfterViewInit = function () {
        var _this = this;
        var hammer = new Hammer(this.elRef.nativeElement.querySelector('calendar'));
        hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammer.on('swipe', function (event) {
            _this.calendarCollapse ? _this.handleSwipeDownEvent() : _this.handleSwipeUpEvent();
            _this.calendarCollapse = !_this.calendarCollapse;
        });
    };
    SmartCalendar.prototype.handleSwipeUpEvent = function () {
        var rows = this.elRef.nativeElement.querySelectorAll('table tr');
        var selectedIndex = [];
        if (rows.length > 0) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(rows, function (tr) {
                if (tr && tr.children && tr.children.length) {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(tr.children, function (td) {
                        if (td['className'] && td['className'].length) {
                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(td['className'].split(' '), function (className) {
                                if (className.slice(10) == 'selected') {
                                    selectedIndex.push(tr.rowIndex);
                                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(rows, function (tr) {
                                        tr.style.display = 'none';
                                        (tr.rowIndex == 0 || tr.rowIndex == selectedIndex[0]) ?
                                            tr.style.display = 'table-row' : false;
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SmartCalendar.prototype.handleSwipeDownEvent = function () {
        var rows = this.elRef.nativeElement.querySelectorAll('table tr');
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(rows, function (tr) { return tr.style.display = 'table-row'; });
    };
    SmartCalendar.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__["a" /* PopoverPage */]);
        popover.onDidDismiss(function (data) {
            _this.calendar.mode = data.mode;
        });
        popover.present({
            ev: myEvent
        });
    };
    SmartCalendar.prototype.loadEvents = function () {
        // this.eventSource = this.eventsSource;
        this.eventSource = this.createRandomEvents();
    };
    SmartCalendar.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    SmartCalendar.prototype.onEventSelected = function (event) {
        console.log(event);
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    SmartCalendar.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    SmartCalendar.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    SmartCalendar.prototype.onTimeSelected = function (ev) {
        // console.log(ev);
        if (this.calendar.mode === 'month') {
            return;
        }
        // let selectedTime: any = new Date(ev.selectedTime);
        var selected = Date.parse(ev.selectedTime);
        var event = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(ev.events, function (event) {
            var timeEvent = Date.parse(event['startTime']);
            return timeEvent == selected;
        });
        console.log(event);
    };
    SmartCalendar.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    SmartCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'smart-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/'<!--<div>-->\n	<!--<div class="container-calendar">-->\n		<!--<div class="voj-style">-->\n			<!--<div class="header-calendar">-->\n				<!--<span>{{viewTitle}}</span>-->\n				<!--<button ion-button icon-only clear>-->\n					<!--<ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>-->\n				<!--</button>-->\n				<!--<button ion-button icon-only clear class="btn-more" (click)="presentPopover($event)">-->\n					<!--<ion-icon ios="md-more" md="md-more"></ion-icon>-->\n				<!--</button>-->\n			<!--</div>-->\n\n			<!--<ng-template #monthviewDisplayEventTemplate let-view="view" let-row="row" let-col="col">-->\n				<!--{{view.dates[row*7+col].label}}-->\n				<!--<div>-->\n					<!--<span></span>-->\n				<!--</div>-->\n			<!--</ng-template>-->\n\n			<!--<ng-template #monthviewInactiveDisplayEventTemplate let-view="view" let-row="row" let-col="col">-->\n				<!--{{view.dates[row*7+col].label}}-->\n				<!--<div>-->\n					<!--<span></span>-->\n				<!--</div>-->\n			<!--</ng-template>-->\n\n			<!--<ng-template #dayviewAllDayEventTemplate let-displayEvent="displayEvent">-->\n				<!--<div class="calendar-event-inner">{{displayEvent.event.title}}</div>-->\n			<!--</ng-template>-->\n\n			<!--<ng-template #dayviewNormalEventTemplate let-displayEvent="displayEvent">-->\n				<!--<div class="calendar-event-inner">{{displayEvent.event.title}}</div>-->\n			<!--</ng-template>-->\n\n			<!--<calendar-->\n				<!--[eventSource]="eventSource"-->\n				<!--[calendarMode]="calendar.mode"-->\n				<!--[showEventDetail]="false"-->\n				<!--[currentDate]="calendar.currentDate"-->\n				<!--(onEventSelected)="onEventSelected($event)"-->\n				<!--(onTimeSelected)="onTimeSelected($event)"-->\n				<!--(onTitleChanged)="onViewTitleChanged($event)"-->\n				<!--[monthviewDisplayEventTemplate]="monthviewDisplayEventTemplate"-->\n				<!--[dayviewAllDayEventTemplate]="dayviewAllDayEventTemplate"-->\n				<!--[dayviewNormalEventTemplate]="dayviewNormalEventTemplate"-->\n				<!--[monthviewInactiveDisplayEventTemplate]="monthviewInactiveDisplayEventTemplate"-->\n				<!--step="30">-->\n			<!--</calendar>-->\n		<!--</div>-->\n	<!--</div>-->\n<!--</div>-->\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */]])
    ], SmartCalendar);
    return SmartCalendar;
}());

//# sourceMappingURL=smart-calendar.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
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





var colors = {
    yellow: {
        primary: '#e5bd85',
    },
    green: {
        primary: '#14baa6',
    }
};
/**
 * Generated class for the SmartCalendar component.
 *
 */
var DesktopCalendar = (function () {
    function DesktopCalendar(modal, locale) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [{
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.yellow,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.green,
                actions: this.actions
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.green
            }, {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.green,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.activeDayIsOpen = true;
    }
    DesktopCalendar.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        // if (isSameMonth(date, this.viewDate)) {
        // 	if (
        // 		(isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        // 		events.length === 0
        // 	) {
        // 		this.activeDayIsOpen = false;
        // 	} else {
        // 		this.activeDayIsOpen = true;
        // 		this.viewDate = date;
        // 	}
        // }
        console.log(date);
    };
    DesktopCalendar.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    DesktopCalendar.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    DesktopCalendar.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('modalContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* TemplateRef */])
    ], DesktopCalendar.prototype, "modalContent", void 0);
    DesktopCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'desktop-calendar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/desktop-calendar/desktop-calendar.html"*/'<!--<ng-template #modalContent let-close="close">-->\n<!--<div class="modal-header">-->\n<!--<h5 class="modal-title">Event action occurred</h5>-->\n<!--<button type="button" class="close" (click)="close()">-->\n<!--<span aria-hidden="true">&times;</span>-->\n<!--</button>-->\n<!--</div>-->\n<!--<div class="modal-body">-->\n<!--<div>-->\n<!--Action:-->\n<!--<pre>{{ modalData?.action }}</pre>-->\n<!--</div>-->\n<!--<div>-->\n<!--Event:-->\n<!--<pre>{{ modalData?.event | json }}</pre>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class="modal-footer">-->\n<!--<button type="button" class="btn btn-secondary" (click)="close()">OK</button>-->\n<!--</div>-->\n<!--</ng-template>-->\n<div class="desktop-calendar-container">\n\n	<!--<div class="col-md-4">-->\n	<!--<div class="btn-group">-->\n	<!--<div-->\n	<!--class="btn btn-primary"-->\n	<!--mwlCalendarPreviousView-->\n	<!--[view]="view"-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Previous-->\n	<!--</div>-->\n	<!--<div-->\n	<!--class="btn btn-secondary"-->\n	<!--mwlCalendarToday-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Today-->\n	<!--</div>-->\n	<!--<div-->\n	<!--class="btn btn-primary"-->\n	<!--mwlCalendarNextView-->\n	<!--[view]="view"-->\n	<!--[(viewDate)]="viewDate">-->\n	<!--Next-->\n	<!--</div>-->\n	<!--</div>-->\n	<!--</div>-->\n\n	<div class="desktop-calendar-container-header-buttons">\n		<button (click)="view = \'month\'" [class.active]="view === \'month\'">Mois</button>\n		<button (click)="view = \'week\'" [class.active]="view === \'week\'">Semaine</button>\n		<button (click)="view = \'day\'" [class.active]="view === \'day\'">Jour</button>\n	</div>\n\n	<div [ngSwitch]="view" class="desktop-calendar-container-inside">\n		<h3 [ngStyle]="{\'text-transform\' : \'none\'}">\n			{{ viewDate | calendarDate:(view + \'ViewTitle\'):\'fr\' }}\n		</h3>\n		<mwl-calendar-month-view\n			*ngSwitchCase="\'month\'"\n			[viewDate]="viewDate"\n			[locale]="locale"\n			[events]="events"\n			[refresh]="refresh"\n			(dayClicked)="dayClicked($event.day)"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-month-view>\n		<mwl-calendar-week-view\n			*ngSwitchCase="\'week\'"\n			[viewDate]="viewDate"\n			[events]="events"\n			[locale]="locale"\n			[refresh]="refresh"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-week-view>\n		<mwl-calendar-day-view\n			*ngSwitchCase="\'day\'"\n			[viewDate]="viewDate"\n			[events]="events"\n			[locale]="locale"\n			[refresh]="refresh"\n			(eventClicked)="handleEvent(\'Clicked\', $event.event)"\n			(eventTimesChanged)="eventTimesChanged($event)">\n		</mwl-calendar-day-view>\n	</div>\n\n	<!--<h3>-->\n	<!--Edit events-->\n	<!--<button-->\n	<!--class="btn btn-primary pull-right"-->\n	<!--(click)="addEvent()">-->\n	<!--Add new-->\n	<!--</button>-->\n	<!--<div class="clearfix"></div>-->\n	<!--</h3>-->\n\n	<!--<table class="table table-bordered">-->\n\n	<!--<thead>-->\n	<!--<tr>-->\n	<!--<th>Title</th>-->\n	<!--<th>Primary color</th>-->\n	<!--<th>Secondary color</th>-->\n	<!--<th>Starts at</th>-->\n	<!--<th>Ends at</th>-->\n	<!--<th>Remove</th>-->\n	<!--</tr>-->\n	<!--</thead>-->\n\n	<!--<tbody>-->\n	<!--<tr *ngFor="let event of events; let index = index">-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="text"-->\n	<!--class="form-control"-->\n	<!--[(ngModel)]="event.title"-->\n	<!--(keyup)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="color"-->\n	<!--[(ngModel)]="event.color.primary"-->\n	<!--(change)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<input-->\n	<!--type="color"-->\n	<!--[(ngModel)]="event.color.secondary"-->\n	<!--(change)="refresh.next()">-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<mwl-demo-utils-date-time-picker-->\n	<!--[(date)]="event.start"-->\n	<!--(dateChange)="refresh.next()"-->\n	<!--placeholder="Not set">-->\n	<!--</mwl-demo-utils-date-time-picker>-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<mwl-demo-utils-date-time-picker-->\n	<!--[(date)]="event.end"-->\n	<!--(dateChange)="refresh.next()"-->\n	<!--placeholder="Not set">-->\n	<!--</mwl-demo-utils-date-time-picker>-->\n	<!--</td>-->\n	<!--<td>-->\n	<!--<button-->\n	<!--class="btn btn-danger"-->\n	<!--(click)="events.splice(index, 1); refresh.next()">-->\n	<!--Delete-->\n	<!--</button>-->\n	<!--</td>-->\n	<!--</tr>-->\n	<!--</tbody>-->\n\n	<!--</table>-->\n</div>\n<div class="desktop-calendar-footer">\n	<button>Creer une annouce</button>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/desktop-calendar/desktop-calendar.html"*/
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], String])
    ], DesktopCalendar);
    return DesktopCalendar;
}());

//# sourceMappingURL=desktop-calendar.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MasterdataService = (function () {
    function MasterdataService(configuration, http) {
        this.configuration = configuration;
        this.http = http;
        this.config = this.configuration.configuration;
    }
    MasterdataService.prototype.loadCountriesList = function () {
        var _this = this;
        var payload = {
            "type": "COUNTRIES",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadNationalitiesList = function () {
        var _this = this;
        var payload = {
            "type": "NATIONALITIES",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadDepartmentList = function () {
        var _this = this;
        var payload = {
            "type": "DEPARTMENTS",
        };
        var url = "";
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "masterdata") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.loadPrefectureList = function () {
        var _this = this;
        var payload = {
            "service": "PREFECTURES"
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "profile") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            //TODO: create the PrefectureDTO class. this Promise should return an array of PrefectureDTO
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    MasterdataService.prototype.convertCountriesListToDataset = function (countries) {
        var dataset = [];
        for (var i = 0; i < countries.length; i++) {
            var ds = { id: countries[i].gid, key: countries[i].name + "(" + countries[i].phoneCode + ")", value: countries[i].phoneCode };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService.prototype.convertNationalitiesListToDataset = function (nationalities) {
        var dataset = [];
        for (var i = 0; i < nationalities.length; i++) {
            var ds = { id: nationalities[i].gid, key: nationalities[i].name, value: nationalities[i].gid.toString() };
            dataset.push(ds);
        }
        return dataset;
    };
    MasterdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__["a" /* HttpRequestProvider */]])
    ], MasterdataService);
    return MasterdataService;
}());

//# sourceMappingURL=masterdata-service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_request_http_request__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.config = this.configuration.configuration;
    }
    AccountService.prototype.authenticate = function (phone, password) {
        var _this = this;
        var payload = {
            "service": "AUTH",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "password": password
        };
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.saveIdentity = function (identityDto, roleId) {
        var _this = this;
        var payload = {
            "service": "IDENTITY_SAVE",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "civility": identityDto.civility,
            "lastName": identityDto.lastName,
            "middleName": identityDto.middleName,
            "firstName": identityDto.firstName,
            "roleId": roleId.toString()
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.saveAddress = function (addressDto, roleId) {
        var _this = this;
        var payload = {
            "service": "ADDRESS_SAVE",
            //"id": roleId,
            "id": roleId.toString(),
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "name": addressDto.name,
            "number": addressDto.number,
            "street": addressDto.street,
            "zipCode": addressDto.zipCode.toString(),
            "city": addressDto.city,
        };
        //let url = (this.config.urls.filter(tuple => tuple.key === "identity")).value;
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService.prototype.sendPassword = function (phone, email) {
        var _this = this;
        var payload = {
            "service": "SEND_PASSWD",
            "role": this.config.customer == "J" ? "jobyer" : "employer",
            "phone": phone,
            "email": email
        };
        var url;
        for (var i = 0; i < this.config.urls.length; i++) {
            var t = this.config.urls[i];
            if (t.key == "account") {
                url = t.value;
                break;
            }
        }
        return new Promise(function (resolve) {
            _this.http.call(payload, url, "", true).subscribe(function (data) {
                console.log(JSON.stringify(data));
                resolve(data);
            });
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */]])
    ], AccountService);
    return AccountService;
}());

//# sourceMappingURL=account-service.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEventTitleFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_calendar__ = __webpack_require__(93);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CustomEventTitleFormatter = (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new Intl.DateTimeFormat(this.locale, {
            hour: 'numeric',
            minute: 'numeric'
        }).format(event.start) + "</b> " + event.title;
    };
    CustomEventTitleFormatter = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */])),
        __metadata("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(__WEBPACK_IMPORTED_MODULE_1_angular_calendar__["a" /* CalendarEventTitleFormatter */]));

//# sourceMappingURL=custom-title-formatter.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoUtilsModule = (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbTimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["b" /* CalendarModule */]
            ],
            declarations: [],
            exports: []
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());

//# sourceMappingURL=demo-utils.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu_voj_menu__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojCard = (function () {
    function VojCard(actionSheetCtrl, popoverCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.socialButtons = [];
    }
    VojCard.prototype.openMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__voj_menu_voj_menu__["a" /* VojMenu */], { data: this.data.menu });
        popover.present({
            ev: myEvent
        });
    };
    VojCard.prototype.presentActionSheet = function () {
        var actionSocial = this.actionSheetCtrl.create({
            title: 'Social networks',
            buttons: this.socialButtons
        });
        actionSocial.present();
    };
    VojCard.prototype.setClasses = function (data) {
        // Set classes if json field does not exist
        return {
            'voj-indent': !data.title,
            'voj-without-menu': !data.cover && !data.menu,
            'voj-without-badges': !data.cover && !data.badges,
            'voj-without-menu-and-badges': !data.cover && !data.menu && !data.badges,
            'voj-card-without-header': !data.cover && !data.menu && !data.badges && !data.thumbnail
        };
    };
    VojCard.prototype.ngOnInit = function () {
        // Data for header of card
        this.reduced = this.mode == 'reduced';
        /*this.dataPageHeader = this.data.header;

        if(!this.data.header) {
            this.data.header = new VojPageHeaderType();
        }
        this.dataPageHeader = this.data.header;*/
        // Social buttons for share
        if (this.data && this.data.socialButtons && this.data.socialButtons.length > 0) {
            for (var i = 0; i < this.data.socialButtons.length; i++) {
                this.socialButtons.push({
                    text: this.data.socialButtons[i].label,
                    handler: this.data.socialButtons[i].action,
                    icon: this.data.socialButtons[i].icon
                });
            }
        }
        this.modelForSegment = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__["a" /* VojCardModel */])
    ], VojCard.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('vojData'),
        __metadata("design:type", Array)
    ], VojCard.prototype, "vojData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('mode'),
        __metadata("design:type", String)
    ], VojCard.prototype, "mode", void 0);
    VojCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'voj-card',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/'<!-- Generated template for the VojCard component -->\n<div *ngIf="data">\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="vojData"></voj-map> -->\n\n	<!-- Card -->\n	<ion-card>\n		<div class="voj-style">\n			<div class="badges-container" [ngClass]="setClasses(data)">\n				<!-- Menu button -->\n				<button *ngIf="data.menu && data.menu.length > 0"\n						class="menu-button" \n						ion-button \n						icon-left \n						clear \n						round \n						small\n						(click)="openMenu($event)">\n						<ion-icon name="menu"></ion-icon>\n				</button>\n\n				<!-- Badges -->\n				<ion-item text-right *ngIf="data.badges && data.badges.length > 0">\n					<!-- Buttons for badges -->\n					<button ion-button icon-only round outline class="voj-badge-button" *ngFor="let badge of data.badges">\n						<ion-icon name="{{ badge.icon }}" (click)="badge.action()"></ion-icon>\n					</button>\n				</ion-item>\n\n				<!-- Cover -->\n				<img [src]="data.cover" *ngIf="data.cover && !reduced" class="{{reduced?\'cover-50\':\'\'}}"/>\n\n				<!-- Thumbnail -->\n				<ion-avatar item-left *ngIf="data.thumbnail">\n					<img [src]="data.thumbnail">\n				</ion-avatar>\n			</div>\n\n			<!-- Title -->\n			<div class="voj-style-header" *ngIf="data.title">\n				<h2>{{data.title.label}}</h2>\n			</div>\n\n			<!-- Segments -->\n			<voj-segment [data]="data.segments"></voj-segment>\n			<!-- Subtitles -->\n			<div *ngIf="data.subtitles && data.subtitles.length > 0">\n				<ion-item text-wrap no-lines *ngFor="let title of data.subtitles" class="voj-subtitle">\n					<ion-icon [name]="title.icon" item-start small></ion-icon>\n					<h2>{{title.label}}</h2>\n				</ion-item>\n			</div>\n\n			<!-- Content -->\n			<ion-card-content class="voj-content" no-margin no-lines *ngIf="data.content">{{data.content}}</ion-card-content>\n		</div>\n\n		<!-- Buttons -->\n		<ion-grid *ngIf="data.actions && data.actions.length > 0">\n			<ion-row>\n				<ion-col text-center *ngFor="let button of data.actions">\n					<button small ion-button icon-left class="voj-button" (click)="button.action($event)">\n						<ion-icon [name]="button.icon"></ion-icon>\n						{{button.label}}\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<!-- Social buttons -->\n		<ion-row>\n			<ion-col >\n\n				<button\n					*ngFor="let button of data.socialButtons"\n					class="social-buttons"\n					left\n					ion-button\n					clear\n					large\n					(click)="button.action($event)">\n					<ion-icon [name]="button.icon">\n					</ion-icon>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* PopoverController */]])
    ], VojCard);
    return VojCard;
}());

//# sourceMappingURL=voj-card.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojSegment = (function () {
    function VojSegment() {
        this.segmentModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    VojSegment.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('segmentModel'),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "segmentModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('isStats'),
        __metadata("design:type", Boolean)
    ], VojSegment.prototype, "isStats", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], VojSegment.prototype, "segmentModelChange", void 0);
    VojSegment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-segment',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-segment/voj-segment.html"*/'<div class="voj-segments-container">\n	<div class="voj-segment" *ngFor="let segment of data"\n		 [ngStyle]="{\'color\': segment.style === \'style2\' ? \'#fff\':\'#000\'}" (click)="segment.action()">\n		<div [className]="(isStats)? \'voj-segment-title-web\': \'voj-segment-title\'">{{segment.title.label}}</div>\n		<div [className]="(isStats)? \'voj-segment-subtitle-web\': \'voj-segment-subtitle\'">{{segment.subtitle.label}}</div>\n	</div>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-segment/voj-segment.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VojSegment);
    return VojSegment;
}());

//# sourceMappingURL=voj-segment.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_voj_events_voj_events__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VojMap = (function () {
    function VojMap(platform, searchService, geolocation, eventBus, navigationService) {
        var _this = this;
        this.platform = platform;
        this.searchService = searchService;
        this.geolocation = geolocation;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.hiddenMap = true;
        this.position = null;
        this.latitude = 48.855168;
        this.longitude = 2.344813;
        this.markers = [];
        this.geolocation.getCurrentPosition().then(function (resp) {
            if (resp && resp.coords) {
                _this.latitude = resp.coords.latitude;
                _this.longitude = resp.coords.longitude;
            }
            _this.initMap();
        }).catch(function (data) {
            console.clear();
            console.log(JSON.stringify(data));
        });
    }
    Object.defineProperty(VojMap.prototype, "data", {
        set: function (value) {
            var _this = this;
            var mapPassenger = this.eventBus.passenger.type.get('map');
            this.eventBus.get(mapPassenger).then(function (eventValue) {
                if (eventValue) {
                    _this.mapData = eventValue;
                    _this.initMap();
                }
                else if (value) {
                    _this.mapData = value;
                    _this.initMap();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    VojMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    VojMap.prototype.initMap = function () {
        for (var i = 0; i < this.markers.length; i++) {
            var m = void 0;
            m = this.markers[i];
            m.setMap(null);
        }
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.loadJSMap(latLng);
        this.hiddenMap = false;
        if (this.mapData && this.mapData.length > 0) {
            for (var i = 0; i < this.mapData.length; i++) {
                var card = this.mapData[i];
                this.addMarker(card);
            }
        }
    };
    VojMap.prototype.addMarker = function (card) {
        var marker = new google.maps.Marker({
            position: { lat: card.address.lat, lng: card.address.lng },
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            title: card.address.title
        });
        var infoWindow = new google.maps.InfoWindow({
            content: '<div id="myInfoWinDiv_' + card.id + '">' +
                '<img src="' + card.thumbnail + '" style="width:50px;height:50px"><br />' +
                '<strong>' + card.title.label + '</strong><br />' +
                card.subtitles[0].label
                + '</div>'
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(this.map, marker);
            google.maps.event.addDomListener(document.getElementById('myInfoWinDiv_' + card.id), 'click', function () {
                this.updateDetails(card);
            }.bind(this));
        }.bind(this));
        this.markers.push(marker);
    };
    VojMap.prototype.loadJSMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var largeCircle = new google.maps.Circle({
            strokeColor: '#488aff',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#488aff',
            fillOpacity: 0.10,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 50000
        });
        var mediumCircle = new google.maps.Circle({
            strokeColor: '#14baa6',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#14baa6',
            fillOpacity: 0.20,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 30000
        });
        var shortCircle = new google.maps.Circle({
            strokeColor: '#757575',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#757575',
            fillOpacity: 0.30,
            map: this.map,
            center: { lat: this.latitude, lng: this.longitude },
            radius: 10000
        });
    };
    VojMap.prototype.updateDetails = function (card) {
        console.log("Details : " + card.id);
        var c = null;
        for (var i = 0; i < this.searchService.results.length; i++) {
            if (this.searchService.results[i].id == card.id) {
                c = this.searchService.results[i].toCardDetails();
                break;
            }
        }
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_4__pages_details_details__["a" /* DetailsPage */], params: { card: c }, isRoot: false };
        this.navigationService.navigate('details', vojNav);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], VojMap.prototype, "data", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], VojMap.prototype, "mapElement", void 0);
    VojMap = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-map',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-map/voj-map.html"*/'<ion-card [hidden]="hiddenMap">\n    <div #map id="map"></div>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-map/voj-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__["a" /* NavigationService */]])
    ], VojMap);
    return VojMap;
}());

//# sourceMappingURL=voj-map.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Passenger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voj_card_model__ = __webpack_require__(73);

var Passenger = (function () {
    function Passenger() {
        this.type = new Map();
        /**
         * Map events
         */
        this.type.set('map', {
            topic: 'MAP_DETAILS',
            data: new Array(),
            condition: true
        });
        /**
         * Others
         */
        this.type.set('details', {
            topic: 'SHOW_DETAILS',
            data: __WEBPACK_IMPORTED_MODULE_0__voj_card_model__["a" /* VojCardModel */],
            condition: true
        });
    }
    return Passenger;
}());

//# sourceMappingURL=voj-event.model.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojTuple; });
var VojTuple = (function () {
    function VojTuple() {
    }
    return VojTuple;
}());

//# sourceMappingURL=voj-tuple.model.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultDTO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_text_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__ = __webpack_require__(382);



var SearchResultDTO = (function () {
    function SearchResultDTO(row) {
        var r = row.result;
        this.id = r.id;
        this.indexation = 0;
        this.name = r.name;
        this.phone = r.phone;
        this.email = r.email;
        this.availability = "Disponible";
        this.lat = r.latitude;
        this.lng = r.longitude;
        if (row.jobs && row.jobs.length > 0) {
            this.job = row.jobs[0].label;
            this.job += row.jobs[0].level == 2 ? '  expert' : ' débutant';
        }
        this.dataSource = row;
    }
    SearchResultDTO.prototype.toVojCard = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__["a" /* VojCardModel */]();
        result.id = this.id;
        result.title = new __WEBPACK_IMPORTED_MODULE_1__models_text_type__["a" /* TextType */]();
        result.title.label = this.name;
        result.thumbnail = "http://dev.vitonjob.com/resources/jobyer_avatar.png";
        result.cover = this.dataSource.cover ? this.dataSource.cover : "http://dev.vitonjob.com/resources/726.jpg";
        result.subtitles = [
            {
                icon: '',
                label: this.job
            },
            {
                icon: '',
                label: 'Disponible dès maintenant'
            }
        ];
        result.actions = [{
                id: 'recruite',
                icon: '',
                label: 'Recruter',
                action: function () {
                    console.log('REC');
                }
            }, {
                id: 'details',
                icon: '',
                label: 'Détails',
                action: function () {
                    console.log('DTL');
                }
            }];
        result.socialButtons = [{
                id: 'mail',
                icon: 'mail',
                label: '',
                action: function () {
                    console.log('SMS');
                }
            }, {
                id: 'call',
                icon: 'call',
                label: '',
                action: function () {
                    console.log('PHONE');
                }
            }, {
                id: 'fav',
                icon: 'star',
                label: '',
                action: function () {
                    console.log('FAV');
                }
            }];
        result.address = new __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__["a" /* VojMapModel */]();
        result.address.title = this.name;
        if (this.lat)
            result.address.lat = parseInt(this.lat);
        if (this.lng)
            result.address.lng = parseInt(this.lng);
        return result;
    };
    SearchResultDTO.prototype.toCardDetails = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__["a" /* VojCardModel */]();
        result.id = this.id;
        result.title = new __WEBPACK_IMPORTED_MODULE_1__models_text_type__["a" /* TextType */]();
        result.title.label = this.name;
        result.thumbnail = "http://dev.vitonjob.com/resources/jobyer_avatar.png";
        result.cover = this.dataSource.cover ? this.dataSource.cover : "http://dev.vitonjob.com/resources/726.jpg";
        result.subtitles = [
            {
                icon: '',
                label: this.job
            },
            {
                icon: 'clock',
                label: 'Disponible dès maintenant'
            }
        ];
        if (this.dataSource.address) {
            result.subtitles.push({
                icon: 'home',
                label: this.dataSource.address
            });
        }
        for (var i = 0; i < this.dataSource.jobs.length; i++) {
            result.subtitles.push({
                icon: 'briefcase',
                label: this.dataSource.jobs[i].label + (this.dataSource.jobs[i].level == 1 ? " débutant" : " expérimenté")
            });
        }
        for (var i = 0; i < this.dataSource.languages.length; i++) {
            result.subtitles.push({
                icon: 'globe',
                label: this.dataSource.languages[i].label + (this.dataSource.languages[i].level == 1 ? " débutant" : " courant")
            });
        }
        for (var i = 0; i < this.dataSource.qualities.length; i++) {
            result.subtitles.push({
                icon: 'flower',
                label: this.dataSource.qualities[i].label
            });
        }
        result.actions = [{
                id: 'recruite',
                icon: '',
                label: 'Recruter',
                action: function () {
                    console.log('REC');
                }
            }];
        result.socialButtons = [{
                id: 'mail',
                icon: 'mail',
                label: '',
                action: function () {
                    console.log('SMS');
                }
            }, {
                id: 'call',
                icon: 'call',
                label: '',
                action: function () {
                    console.log('PHONE');
                }
            }, {
                id: 'fav',
                icon: 'star',
                label: '',
                action: function () {
                    console.log('FAV');
                }
            }];
        result.address = new __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__["a" /* VojMapModel */]();
        result.address.title = this.name;
        if (this.lat)
            result.address.lat = parseInt(this.lat);
        if (this.lng)
            result.address.lng = parseInt(this.lng);
        return result;
    };
    return SearchResultDTO;
}());

//# sourceMappingURL=search-result.dto.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_page_landing_page__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojPageHeader = (function () {
    function VojPageHeader(platform, navigationService, configurationService, viewCtrl) {
        this.platform = platform;
        this.navigationService = navigationService;
        this.configurationService = configurationService;
        this.viewCtrl = viewCtrl;
        this.showHeader = true;
        this.config = this.configurationService.configuration;
    }
    VojPageHeader.prototype.ngOnInit = function () {
        this.activeNav = this.navigationService.getActiveNav(this.viewCtrl);
        //canGoBack and canClose should be initialized in ngOnInit to make sure that the component is initialized
        //Going back is allowed if the page : isn't a modal AND isn't the first in the nav stack
        this.canGoBack = (!this.viewCtrl.isOverlay && !this.viewCtrl.isFirst() && this.viewCtrl.enableBack());
        //Closing a page is allowed if the page : is a modal OR is first in the stack in large screen
        //only the second and third navs are allowed to be hiding
        this.canClose = this.viewCtrl.isOverlay || (this.viewCtrl.isFirst() && this.config.isLargeScreen && this.activeNav.name != this.navigationService.getNav1().name);
    };
    VojPageHeader.prototype.closePage = function () {
        var _this = this;
        //if modal: dismiss it
        if (this.viewCtrl.isOverlay) {
            this.viewCtrl.dismiss();
            return;
        }
        //if page in large screen: set a default root page (LandingPage) and hide the nav
        this.activeNav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_landing_page_landing_page__["a" /* LandingPage */]).then(function () {
            _this.navigationService.hide(_this.activeNav.name);
        });
        //if page in small screen : hiding is not allowed
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojPageHeader.prototype, "data", void 0);
    VojPageHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-page-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/'<div *ngIf="showHeader">\n    <ion-navbar [ngClass]="config.isLargeScreen ? \'desktop-header\' : \'mobile-header\'">\n        <!-- Back button -->\n        <!--<button class="header-back" (click)="goToPreviousPage()" *ngIf="canGoBack">\n            <ion-icon name="arrow-round-back" ></ion-icon>\n        </button>-->\n    \n        <!-- Close button -->\n        <button class="header-back" (click)="closePage()" *ngIf="canClose">\n            <span>\n                <ion-icon name="close"></ion-icon>\n            </span>\n        </button>\n    \n        {{ data.title | translate }}\n        \n        <span *ngIf="!config.isLargeScreen" class="voj-page-header-buttons">\n            <button class="page-header-button" *ngFor="let button of data.actions"\n                    ion-fab mini color="primary"\n                    (click)="button.action()">\n                <ion-icon name="{{button.icon}}"></ion-icon>\n            </button>\n        </span>\n    </ion-navbar>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], VojPageHeader);
    return VojPageHeader;
}());

//# sourceMappingURL=voj-page-header.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojFooter = (function () {
    function VojFooter(configurationService) {
        this.configurationService = configurationService;
        console.log('Hello VojFooter Component');
        this.config = this.configurationService.configuration;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], VojFooter.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], VojFooter.prototype, "testVar", void 0);
    VojFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-footer',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-footer/voj-footer.html"*/'<!-- Generated template for the VojFooter component -->\n<!--div-->\n<ion-footer *ngIf="config.isLargeScreen" >\n	<ion-toolbar>\n\n		<ion-buttons end *ngIf="data">\n			<button ion-button icon-left *ngFor="let btn of data.actions" (click)="btn.action()" [ngStyle]="data.style">\n				<ion-icon name="{{btn.icon}}"></ion-icon>\n				{{btn.label}}\n			</button>\n		</ion-buttons>\n\n		{{testVar}}\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-footer/voj-footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], VojFooter);
    return VojFooter;
}());

//# sourceMappingURL=voj-footer.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojHeader = (function () {
    function VojHeader() {
        console.log('Hello VojHeader Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojHeader.prototype, "data", void 0);
    VojHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header/voj-header.html"*/'<!-- Generated template for the VojHeader component -->\n<ion-header no-border>\n	<ion-navbar *ngIf="isWeb" class="generic">\n		<ion-item class="voj-style" no-lines>\n			<button ion-button icon-right outline item-end>\n				{{searchButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{offerButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{missionButtonTitle}}\n				<!--ion-icon name="search"></ion-icon-->\n			</button>\n			<button ion-button icon-right outline item-end>\n				{{accountButtonTitle}}\n				<!--ion-icon name="person"></ion-icon-->\n			</button>\n		</ion-item>\n		<div padding>\n			<ion-segment>\n				<ion-segment-button value="1" class="voj-style">\n					<span ion-text class="voj-style">8</span> Contrats en attente\n				</ion-segment-button>\n				<ion-segment-button value="3" class="voj-style">\n					<span ion-text class="voj-style">3</span>\n					Pointages à valider\n				</ion-segment-button>\n				<ion-segment-button value="4" class="voj-style">\n					<span ion-text class="voj-style">0</span>\n					Missions à clôturer\n				</ion-segment-button>\n			</ion-segment>\n		</div>\n	</ion-navbar>\n\n	<!--ion-navbar *ngIf="isViewNavbar && isWeb" >\n	  <!-- Sub navigation bar, content depends on every view -->\n	<!--ion-title>test</ion-title>\n  </ion-navbar-->\n\n\n	<ion-navbar *ngIf="!isWeb">\n		<ion-segment [(ngModel)]="icons" color="secondary">\n			<ion-segment-button value="camera">\n				<!--ion-icon name="camera"></ion-icon-->\n				{{firstSegment}}\n			</ion-segment-button>\n			<ion-segment-button value="bookmark">\n				<!--ion-icon name="bookmark"></ion-icon-->\n				{{secondSegment}}\n			</ion-segment-button>\n		</ion-segment>\n		<ion-buttons start>\n			<button ion-fab icon-only>\n				<ion-icon name="search"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n	<ion-navbar *ngIf="!isWeb">\n		<ion-searchbar></ion-searchbar>\n		<ion-searchbar></ion-searchbar>\n	</ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header/voj-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VojHeader);
    return VojHeader;
}());

//# sourceMappingURL=voj-header.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VojList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var VojList = (function () {
    function VojList() {
        console.log('Hello VojList Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('cards'),
        __metadata("design:type", Object)
    ], VojList.prototype, "cards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('title'),
        __metadata("design:type", String)
    ], VojList.prototype, "title", void 0);
    VojList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-list',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-list/voj-list.html"*/'<!-- Generated template for the VojList component -->\n<div>\n	<ion-list-header>{{title}}</ion-list-header>\n	<ion-list>\n		<div *ngFor="let card of cards">\n			<!--<voj-card [title]="card.title" [content]="card.content" [action-name]="card.actionName"> </voj-card>-->\n		</div>\n	</ion-list>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-list/voj-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VojList);
    return VojList;
}());

//# sourceMappingURL=voj-list.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_form_data_service__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VojForm component.
 *
 */
var VojForm = (function () {
    function VojForm(testFormService, formBuilder) {
        this.testFormService = testFormService;
        this.formBuilder = formBuilder;
        this.arePasswordsIdentical = true; // Passwords identity validation
        this.selectedItems = [];
        this.selectedCustomItems = [];
        this.showList = false;
        this.submitAttempt = false; // Form validation
        this.uploadedItems = [];
    }
    VojForm.prototype.checkNgModel = function (action) {
        // Call action if exists
        if (typeof action !== 'undefined') {
            action();
        }
    };
    VojForm.prototype.checkValidaionAvailability = function (type) {
        if (type === 'text' || type === 'textarea' || type === 'number' || type === 'tel' || type === 'week' ||
            type === 'url' || type === 'time' || type === 'date' || type === 'color' || type === 'mail' ||
            type === 'month' || type === 'password' || type === 'password-visible' || type === 'search') {
            return true;
        }
        else {
            return false;
        }
    };
    VojForm.prototype.formValidationInit = function (fieldsData) {
        var validationConfig = {};
        for (var i = 0; i < fieldsData.length; i++) {
            // Check available types for validation
            // if (!this.checkValidaionAvailability(fieldsData[i].type)) {
            // 	continue;
            // }
            var validators = [];
            // Min validation
            if (fieldsData[i].min !== null && typeof fieldsData[i].min !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(fieldsData[i].min));
            }
            // Max validation
            if (fieldsData[i].max !== null && typeof fieldsData[i].max !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(fieldsData[i].max));
            }
            // Regex validation
            if (fieldsData[i].regex !== null && fieldsData[i].regex !== '' && typeof fieldsData[i].regex !== 'undefined') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(fieldsData[i].regex));
            }
            // Required validation
            if (fieldsData[i].required === true) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
            }
            validationConfig[fieldsData[i].name] = ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose(validators)];
        }
        this.dynamicalForm = this.formBuilder.group(validationConfig);
    };
    VojForm.prototype.ngOnInit = function () {
        console.log('this.data:', this.data);
        this.formValidationInit(this.data.fields);
    };
    VojForm.prototype.onSubmit = function (formData, action) {
        // Form validation
        this.submitAttempt = true;
        // Passwords identical validation reset
        this.arePasswordsIdentical = true;
        if (!this.dynamicalForm.valid) {
            console.log('Error in validation.');
        }
        else {
            console.log('Success validation.');
            console.log('dynamicalForm value:', this.dynamicalForm.value);
            // Check password identity
            if (this.dynamicalForm.value.userPassword && this.dynamicalForm.value.passwordConfirmation &&
                (this.dynamicalForm.value.userPassword !== this.dynamicalForm.value.passwordConfirmation)) {
                // Passwords are not identical
                console.log('Passwords are not identical.');
                this.arePasswordsIdentical = false;
            }
            else {
                console.log("Form data:", formData);
                // Call action
                action();
            }
        }
    };
    VojForm.prototype.customSelectValidation = function (value) {
        // Check for customQualitiesSelect existing
        if ('customQualitiesSelect' in value === false) {
            return false;
        }
        var customSelectExists = 'customQualitiesSelect' in value;
        var selectedItemsLength = this.selectedItems.length;
        return !(customSelectExists === true && selectedItemsLength > 0);
    };
    VojForm.prototype.customSelect2Validation = function (chosenItems) {
        var customSelectWithSearchExists = 'customSelectWithSearch' in chosenItems;
        if (typeof this.data.fields[0].chosenItems === 'undefined') {
            return true;
        }
        var chosenItemsItemsLength = this.data.fields[0].chosenItems.length;
        return !(customSelectWithSearchExists === true && chosenItemsItemsLength > 0);
    };
    // Custom Select 2
    VojForm.prototype.onChangeSelectedItems2 = function (selectedValue, index) {
        var _this = this;
        // Clear select input
        setTimeout(function () {
            _this.data.fields[index].value = null;
        });
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.data.fields[0].chosenItems, function (item) { return item == selectedValue; })) {
            selectedValue ? this.testFormService.addData(selectedValue) : false;
            if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.data.fields[0].chosenItems, function (item) { return item == selectedValue; })) {
                selectedValue ? this.data.fields[0].chosenItems.push(selectedValue) : false;
            }
            console.log('this.chosenItems--->', this.data.fields[0].chosenItems);
        }
    };
    VojForm.prototype.deleteSelectedItem2 = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.data.fields[0].chosenItems, selectedValue) : false;
    };
    // Custom Select
    VojForm.prototype.onChangeSelectedItems = function (selectedValue, index) {
        var _this = this;
        // Clear select input
        setTimeout(function () {
            _this.data.fields[index].value = null;
        });
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.selectedItems, function (item) { return item == selectedValue; })) {
            selectedValue ? this.selectedItems.push(selectedValue) : false;
        }
    };
    VojForm.prototype.deleteSelectedItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.selectedItems, selectedValue) : false;
    };
    VojForm.prototype.deleteSelectedCustomItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.selectedCustomItems, selectedValue) : false;
    };
    VojForm.prototype.managePassword = function (value, fieldIndex) {
        // Change password visibility
        value._type === 'password' ?
            this.data.fields[fieldIndex].type = 'password-visible' : this.data.fields[fieldIndex].type = 'password';
    };
    VojForm.prototype.addCustomSelect = function (val1, val2) {
        if (this.сustomSubItem1 && this.сustomSubItem1.length && this.сustomSubItem2 && this.сustomSubItem2.length) {
            this.selectedCustomItems.push(this.сustomSubItem1 + " - " + this.сustomSubItem2);
            val1._value = '';
            val1._text = '';
            val2._value = '';
            val2._text = '';
            this.сustomSubItem1 = '';
            this.сustomSubItem2 = '';
        }
    };
    VojForm.prototype.onSelecteCustomItems = function (val) {
        if (val.id === 4 || val.id === 5 || val.id === 6) {
            this.сustomSubItem1 = val.value;
        }
        else {
            this.сustomSubItem2 = val.value;
        }
    };
    /* Custom Input  START*/
    VojForm.prototype.getItems = function (event, sourceArr) {
        if (!sourceArr) {
            return;
        }
        var val = event.target.value;
        if (val && val.trim() != '') {
            // Filter the items
            this.itemsForAutocomplete = sourceArr.filter(function (item) {
                return (item.key.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            // Show the results
            this.showList = true;
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
        }
    };
    VojForm.prototype.selectTip = function (value, field) {
        value ? field.value = value : false;
        this.showList = false;
    };
    /* Custom Input  END*/
    // Custom Select for Uploading items
    VojForm.prototype.fileEvent = function (selectedFile) {
        var files = selectedFile.srcElement.files;
        var fileName;
        if (files[0]) {
            fileName = files[0].name;
        }
        else {
            return false;
        }
        // Encode the file to base64
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            console.log('Current file in base64:', reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.uploadedItems, function (item) { return item == fileName; }) && files[0]) {
            fileName ? this.uploadedItems.push(fileName) : false;
        }
    };
    VojForm.prototype.deleteUploadedItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.uploadedItems, selectedValue) : false;
    };
    VojForm.prototype.downloadUploadedItem = function (item) {
        console.log('Downloaded item:', item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojForm.prototype, "data", void 0);
    VojForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-form',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/'<!-- Generated template for the VojForm component -->\n<div class="calendar-container">\n    <h2 [innerHTML]="data.title" *ngIf="data.title && data.title.length > 0"></h2>\n    <form #formComponent="ngForm" [formGroup]="dynamicalForm" (ngSubmit)="onSubmit(formComponent, data.submit.action)" novalidate>\n\n        <div class="dynamical-form" id="{{ field.id }}" *ngFor="let field of data.fields; let fieldIndex = index">\n            <button ion-button class="custom-btn" *ngIf="field.type === \'button\'" [hidden]="!field.visible"\n                    (click)="field.action()" type="button">\n                {{ field.label | translate }}\n            </button>\n\n            <ion-list *ngIf="field.type === \'text\' || field.type === \'textarea\'\n							|| field.type === \'number\' || field.type === \'tel\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{field.label | translate}}</ion-label>\n                    <ion-input type="{{ field.type }}"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               placeholder="{{field.placeholder | translate}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               (keyup)="getItems($event, field.dataset)"\n                               formControlName="{{field.name}}"></ion-input>\n                </ion-item>\n                <div *ngIf="showList && field.dataset" class="input-autocomplete">\n                    <ion-list>\n                        <ion-item *ngFor="let item of itemsForAutocomplete" (click)="selectTip(item.value, field)">\n                            {{ item.value }}\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'week\' || field.type === \'url\' || field.type === \'time\'\n             || field.type === \'color\' || field.type === \'mail\' || field.type === \'month\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{ field.label | translate }}</ion-label>\n                    <ion-input type="text"\n                               autocomplete="on"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               placeholder="{{field.placeholder | translate}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               formControlName="{{field.name}}"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'date\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked *ngIf="field.label && field.label.length > 0">{{ field.label | translate }}</ion-label>\n                    <ion-input type="date"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event; checkNgModel(field.action)"\n                               formControlName="{{field.name}}"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'password\' || field.type === \'password-visible\' || field.type === \'search\'">\n                <ion-item class="custom-input custom-input-password">\n                    <ion-label stacked>{{ field.label | translate }}</ion-label>\n                    <ion-input type="{{ (field.type === \'password\') ? \'password\' : \'text\' }}"\n                               autocomplete="on"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               placeholder="{{field.placeholder}}"\n                               maxlength="{{field.max}}"\n                               [(ngModel)]="field.value"\n                               (ngModelChange)="field.value = $event"\n                               formControlName="{{field.name}}" #inputPass></ion-input>\n                    <button ion-button icon-only type="button" item-right\n                            (click)="managePassword(inputPass, fieldIndex)">\n                        <ion-icon name="{{ field.type === \'password\' ? \'ios-eye\' : field.type === \'password-visible\' ?\n                                        \'ios-eye-off\' : \'ios-search\'}}">\n                        </ion-icon>\n                    </button>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'range\'">\n                <ion-item>\n                    <ion-range min="{{field.min}}" max="{{field.max}}" [(ngModel)]="field.value" color="secondary"\n                               [hidden]="!field.visible" formControlName="{{field.name}}">\n                        <ion-label range-left>{{field.min}}</ion-label>\n                        <ion-label range-right>{{field.max}}</ion-label>\n                    </ion-range>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'select\'">\n                <ion-item class="custom-select">\n                    <ion-label>{{ field.label | translate }}</ion-label>\n                    <ion-select [(ngModel)]="field.value"\n                                [hidden]="!field.visible"\n                                required="{{field.required}}"\n                                formControlName="{{field.name}}">\n                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                            {{ subSelect.key }}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n\n            <!-- Radio -->\n            <ion-list radio-group class="custom-radio" *ngIf="field.type === \'radio\'"\n                      [(ngModel)]="field.value" formControlName="{{field.name}}">\n                <ion-list-header class="voj-radio-label" *ngIf="field.label && field.label.length > 0">\n                    {{ field.label | translate }}\n                </ion-list-header>\n                <ion-item class="voj-radio-button" *ngFor="let radioItem of field.dataset">\n                    <ion-label>{{ radioItem.key | translate }}</ion-label>\n                    <ion-radio value="{{radioItem.value}}"></ion-radio>\n                </ion-item>\n            </ion-list>\n\n            <!-- Custom Select -->\n            <div class="custom-select-container" *ngIf="field.type === \'customSelect\'">\n                <div>{{ field.label | translate }}</div>\n                <ion-list class="custom-select-btn">\n                    <ion-label stacked>{{ field.label | translate }}</ion-label>\n                    <ion-item class="custom-select">\n                        <ion-select [(ngModel)]="field.value"\n                                    (ngModelChange)="onChangeSelectedItems($event, fieldIndex)"\n                                    [hidden]="!field.visible"\n                                    formControlName="{{field.name}}">\n                            <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                                {{ subSelect.value }}\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <!--<button ion-button icon-right icon-only class="custom-select-btn-inner">-->\n                    <!--<ion-icon ios="md-add" md="md-add"></ion-icon>-->\n                    <!--</button>-->\n                </ion-list>\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only class="custom-select-btn-attachment-inner" type="button"\n                            (click)="deleteSelectedItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <!-- Custom Select with Search function-->\n            <div class="custom-select-container" *ngIf="field.type === \'customSelect2\'">\n                <div>{{ field.label | translate }}</div>\n                <ion-list class="custom-select-btn">\n                    <ion-label stacked>{{ field.label | translate }}</ion-label>\n                    <ion-item class="custom-select">\n                        <ion-select [(ngModel)]="field.value"\n                                    (ngModelChange)="onChangeSelectedItems2($event, fieldIndex)"\n                                    formControlName="{{field.name}}"\n                                    [hidden]="!field.visible"\n                                    required="{{field.required}}">\n                            <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                                {{ subSelect.value }}\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-list>\n                <div class="custom-select-btn-attachment" *ngFor="let item of field.chosenItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only class="custom-select-btn-attachment-inner" type="button"\n                            (click)="deleteSelectedItem2(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <!-- Custom Two Selects -->\n            <div class="custom-select-container custom-select2" *ngIf="field.type === \'customTwoSelects\'">\n                <div>{{ field.label | translate }}</div>\n                <!--ion-list class="custom-select-btn"-->\n                <!--div class="custom-layer"-->\n                <ion-grid fixed no-padding>\n                    <ion-row align-items-center>\n                        <ion-col col-sm-10>\n                                <ion-row>\n\n                                    <ion-item class="custom-select" no-lines>\n                                        <ion-select [(ngModel)]="field.value"\n                                                    [hidden]="!field.visible"\n                                                    formControlName="{{field.name}}"\n                                                    required="{{field.required}}" #customSelect1>\n                                            <ion-option value="{{subSelect.value}}"\n                                                        *ngFor="let subSelect of field.dataset"\n                                                        (ionSelect)="onSelecteCustomItems(subSelect)">\n                                                {{ subSelect.value }}\n                                            </ion-option>\n                                        </ion-select>\n                                    </ion-item>\n                                </ion-row>\n                            <ion-row>\n                                <ion-item class="custom-select" no-lines>\n                                    <ion-select [(ngModel)]="field.value2"\n                                                [hidden]="!field.visible"\n                                                formControlName="{{field.name}}"\n                                                required="{{field.required}}" #customSelect2>\n                                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset2"\n                                                    (ionSelect)="onSelecteCustomItems(subSelect)">\n                                            {{ subSelect.value }}\n                                        </ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col col-2>\n                            <button ion-button icon-right icon-only class="custom-select-btn-inner" type="button"\n                                    (click)="addCustomSelect(customSelect1, customSelect2)">\n                                <ion-icon ios="md-add" md="md-add"></ion-icon>\n                            </button>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n\n                <!--/div-->\n\n                <!--/ion-list-->\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedCustomItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only small class="custom-select-btn-attachment-inner"\n                            (click)="deleteSelectedCustomItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <ion-list *ngIf="field.type === \'checkbox\'">\n                <ion-item [ngClass]="field.value ? \'\' : \'custom-checkbox-checked\'">\n                    <ion-label>{{field.label | translate}}</ion-label>\n                    <ion-checkbox [(ngModel)]="field.value" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                </ion-item>\n            </ion-list>\n\n            <!--Custom Select with Uploading files-->\n            <ion-grid *ngIf="field.type === \'customUploadSelect\'">\n                <ion-row align-items-center>\n                    <ion-col col-10>\n                        <p class="text-upload-field">{{field.label}}</p>\n                    </ion-col>\n                    <ion-col col-2 text-right>\n                        <input [(ngModel)]="field.value"\n                               [hidden]="!field.visible"\n                               formControlName="{{field.name}}"\n                               type="file" name="file" id="file" class="inputfile" (change)="fileEvent($event)"/>\n                        <label class="custom-upload-button" ion-button for="file">\n                            <ion-icon name="md-add"></ion-icon>\n                        </label>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row text-left align-items-center class="uploaded-items" *ngFor="let item of uploadedItems">\n                    <ion-col col-8>\n                        <div class="uploaded-item">{{ item }}</div>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button clear icon-only type="button" class="download-uploaded-item-btn"\n                                (click)="downloadUploadedItem(item)">\n                            <ion-icon name="ios-download-outline"></ion-icon>\n                        </button>\n                    </ion-col>\n                    <ion-col col-2>\n                        <button ion-button icon-only class="delete-uploaded-item-btn" type="button"\n                                (click)="deleteUploadedItem(item)">\n                            <ion-icon name="md-trash"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <!-- Validation error message -->\n            <div class="voj-validation-error-msg" *ngIf="field.type !== \'customSelect2\' && !dynamicalForm.controls[field.name].valid  && (dynamicalForm.controls[field.name].dirty || submitAttempt)">\n                <p>{{ field.validationMsg | translate }}</p>\n            </div>\n        </div>\n\n        <!-- Password identity error message -->\n        <div class="voj-validation-error-msg" *ngIf="!arePasswordsIdentical">\n            <p>{{ \'VALIDATION.PASSWORD_CONFIRMATION_MSG\' | translate }}</p>\n        </div>\n\n        <button ion-button class="custom-btn" [disabled]="formComponent.invalid || customSelectValidation(formComponent.value)">\n            {{ data.submit.label | translate }}\n        </button>\n    </form>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_form_data_service__["a" /* FormDataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], VojForm);
    return VojForm;
}());

//# sourceMappingURL=voj-form.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSearchHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_search_header_model__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_search_query_model__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VojSearchHeader = (function () {
    function VojSearchHeader(element, renderer, platform, confService) {
        this.element = element;
        this.renderer = renderer;
        this.confService = confService;
        this.criteriaMode = false;
        this.headerSegment = 'liste';
        this.isWeb = false;
        this.platform = platform;
        this.isWeb = !this.platform.is('cordova');
        this.config = this.confService.configuration;
    }
    VojSearchHeader.prototype.ngOnInit = function () {
        this.searchModeLabel = this.criteriaMode ? "Moins de critères" : "Plus de critères";
    };
    /**
     * trigger the search process, this proxy method will pass down the search arguments to
     * the calling controller in order to perform the search
     * @returns {any}
     */
    VojSearchHeader.prototype.triggerSearch = function () {
        var query = new __WEBPACK_IMPORTED_MODULE_3__models_search_query_model__["a" /* SearchQuery */]();
        query.freeText = this.fullText;
        query.job = this.job;
        query.location = this.location;
        query.timeslot = this.timeslot;
        query.name = this.name;
        query.queryType = this.criteriaMode ? 'criteria' : 'full_text';
        return this.searchHeaderData.action(query);
    };
    /**
     * Change search mode from full text search to criteria search
     */
    VojSearchHeader.prototype.toggleSearchMode = function () {
        this.criteriaMode = !this.criteriaMode;
        this.searchModeLabel = this.criteriaMode ? "Moins de critères" : "Plus de critères";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_search_header_model__["a" /* SearchHeaderData */])
    ], VojSearchHeader.prototype, "searchHeaderData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('criteria-mode'),
        __metadata("design:type", Boolean)
    ], VojSearchHeader.prototype, "criteriaMode", void 0);
    VojSearchHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-search-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/'<ion-header no-border [ngStyle]="{\'backgroundColor\' : config.isLargeScreen ? \'\' : \'#4c545d\'}">\n	<div class="search-header-container" >\n		<ion-item *ngIf="!criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.main}}"\n					   [(ngModel)]="fullText"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.what}}"\n					   [(ngModel)]="job"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.where}}"\n					   [(ngModel)]="location"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" onfocus="(this.type = \'date\')"\n					   placeholder="{{searchHeaderData.placeholders.when}}"\n					   [(ngModel)]="timeslot"></ion-input>\n		</ion-item>\n\n		<ion-item  *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.who}}"\n					   [(ngModel)]="name"></ion-input>\n		</ion-item>\n\n		<ion-item item class="toggler-text"  >\n			<span (click)="toggleSearchMode()">\n				{{searchModeLabel}}\n			</span>\n\n		</ion-item>\n\n		<button ion-button icon-only class="search-header-btn" (click)="triggerSearch()">\n			<ion-icon ios="ios-search" md="md-search"></ion-icon>\n		</button>\n\n	</div>\n\n</ion-header>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__config_voj_configuration__["a" /* Configuration */]])
    ], VojSearchHeader);
    return VojSearchHeader;
}());

//# sourceMappingURL=voj-search-header.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHeaderData; });
/**
 * Search header data is an input model specifying placeholders and the function performing actual search
 */
var SearchHeaderData = (function () {
    function SearchHeaderData() {
    }
    return SearchHeaderData;
}());

//# sourceMappingURL=search-header.model.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchQuery; });
/**
 * Encapsulating search arguments
 */
var SearchQuery = (function () {
    function SearchQuery() {
        this.queryType = '';
        this.freeText = '';
        this.job = '';
        this.location = '';
        this.timeslot = '';
        this.name = '';
    }
    return SearchQuery;
}());

//# sourceMappingURL=search-query.model.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeaderWeb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VojHeaderWeb = (function () {
    function VojHeaderWeb(platform) {
        this.platform = platform;
        this.showHeader = false;
        platform.is('core') ? this.showHeader = true : this.showHeader = false;
    }
    VojHeaderWeb.prototype.ngOnInit = function () {
        console.log('data', this.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojHeaderWeb.prototype, "data", void 0);
    VojHeaderWeb = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-header-web',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-web/voj-header-web.html"*/'<ion-header class="generic voj-web-header" *ngIf="showHeader">\n	<ion-row no-padding>\n		<ion-col col-5>\n			<img *ngIf="data.logo" [src]="data.logo">\n		</ion-col>\n		<ion-col col-7>\n			<button class="top-buttons" *ngFor="let item of data.menu" (click)="item.action()" ion-button icon-right outline item-end>\n			{{ item.label }}\n			</button>\n		</ion-col>\n	</ion-row>\n	<ion-row no-padding>\n		<ion-col col-5></ion-col>\n		<ion-col col-7 vertical-align-top>\n			<voj-segment [data]="data.segments" isStats="true"></voj-segment>\n		</ion-col>\n	</ion-row>\n</ion-header>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-web/voj-header-web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], VojHeaderWeb);
    return VojHeaderWeb;
}());

//# sourceMappingURL=voj-header-web.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeaderSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VojHeaderSegment = (function () {
    function VojHeaderSegment() {
        this.activeTabChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.enterpriseSearchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    VojHeaderSegment.prototype.setTab = function (tabNam) {
        this.callEnterpriseSearchPage();
        this.activeTab = tabNam;
        this.activeTabChange.emit(tabNam);
    };
    VojHeaderSegment.prototype.callEnterpriseSearchPage = function () {
        this.enterpriseSearchEvent.next();
    };
    VojHeaderSegment.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], VojHeaderSegment.prototype, "activeTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "activeTabChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
        __metadata("design:type", Object)
    ], VojHeaderSegment.prototype, "enterpriseSearchEvent", void 0);
    VojHeaderSegment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-header-segment',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-segment/voj-header-segment.html"*/'<section class="segmentSection">\n    <div class="form-wrap">\n        <ul class="segmentList">\n            <li *ngFor="let segment of data.segmentsList let i = index" class="segmentListItem"\n                [ngClass]="{active:activeTab === i }"\n                (click)="setTab(i)">{{segment.title}}\n            </li>\n        </ul>\n    </div>\n</section>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-header-segment/voj-header-segment.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], VojHeaderSegment);
    return VojHeaderSegment;
}());

//# sourceMappingURL=voj-header-segment.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerStrategy; });
var EmployerStrategy = (function () {
    function EmployerStrategy() {
    }
    EmployerStrategy.prototype.loadHeaderData = function () {
        return {
            title: 'USER_INFORMATION.TITLE_EMPLOYER',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    };
    return EmployerStrategy;
}());

//# sourceMappingURL=employer.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobyerStrategy; });
var JobyerStrategy = (function () {
    function JobyerStrategy() {
    }
    JobyerStrategy.prototype.loadHeaderData = function () {
        return {
            title: 'USER_INFORMATION.TITLE_JOBYER',
            actions: [
                {
                    id: 'help',
                    label: '',
                    icon: 'help',
                    action: function () {
                        console.log('Click help button.');
                    }
                }
            ],
            style: 'any',
            isCanceled: true
        };
    };
    return JobyerStrategy;
}());

//# sourceMappingURL=jobyer.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_navigation_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_environment__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_voj_events_voj_events__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_landing_page_landing_page__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_modal_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_account__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_information_user_information__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_identity_identity__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, configurationService, event, navigationService, translate, vojEvent, modalService, storage) {
        var _this = this;
        this.configurationService = configurationService;
        this.event = event;
        this.navigationService = navigationService;
        this.translate = translate;
        this.vojEvent = vojEvent;
        this.modalService = modalService;
        this.storage = storage;
        this.appPages = [
            { title: 'Schedule', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 0, icon: 'calendar' },
            { title: 'Speakers', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 1, icon: 'contacts' },
            { title: 'Map', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 2, icon: 'map' },
            { title: 'About', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: "", index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: "", icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
            { title: 'Logout', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: "", icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: "", icon: 'person-add' }
        ];
        this.self = this;
        this.config = this.configurationService.configuration;
        this.dataPageHeader = {
            title: 'string',
            actions: [
                { icon: 'search', label: 'button 1', action: Function },
                { icon: 'search', label: 'button 2', action: Function },
                { icon: 'search', label: 'button 3', action: Function }
            ],
            style: 'any'
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //determine the main root page according to the screen size
            _this.config.isLargeScreen = (platform.width() >= __WEBPACK_IMPORTED_MODULE_12__config_environment__["a" /* envConfig */].thresholdWidth);
            //set the main page (third nav) according to the screen width
            //(this function should be called after the platform is ready)
            _this.setMainPages();
        });
        this.listTitle = "Ma liste des cartes";
        this.cards = [{
                title: "JobyerStrategy 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "JobyerStrategy 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "JobyerStrategy 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "JobyerStrategy 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "JobyerStrategy 5",
                content: "contenu 5",
                actionName: "action 5"
            }];
        this.initializeTranslation();
    }
    MyApp.prototype.ngOnInit = function () {
        this.configurationService.initialize();
        //initializing the navigation params
        this.initializeNavigation();
        //initializing header
        this.initializeWebHeader();
    };
    MyApp.prototype.initializeWebHeader = function () {
        var _this = this;
        this.dataHeader = {
            menu: [
                {
                    icon: 'search',
                    label: 'Recherche',
                    action: Function
                },
                {
                    icon: 'search',
                    label: 'Annonces',
                    action: function () {
                        _this.nav3.push(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
                    }
                },
                {
                    icon: 'search',
                    label: 'Missions',
                    action: Function
                },
                {
                    self: this,
                    icon: 'search',
                    label: 'Compte',
                    action: this.goToAccount
                }
            ],
            logo: 'assets/img/vitonjob.png',
            searchbar: {
                placeholder: 'string'
            },
            segments: [
                {
                    title: {
                        icon: 'string',
                        label: '2'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Contrats en attente'
                    },
                    action: function () {
                        console.log('works 1');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '1'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Pointages à valider'
                    },
                    action: function () {
                        console.log('works 2');
                    },
                    style: 'style2'
                },
                {
                    title: {
                        icon: 'string',
                        label: '3'
                    },
                    subtitle: {
                        icon: 'string',
                        label: 'Missions à clôturer'
                    },
                    action: function () {
                        console.log('works 3');
                    },
                    style: 'style2'
                }
            ]
        };
    };
    MyApp.prototype.openPage = function () {
    };
    MyApp.prototype.openTutorial = function () {
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav1.getActiveChildNav();
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav1.getActive() && this.nav1.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.initializeTranslation = function () {
        // Translation configuration
        this.translate.addLangs(['en', 'fr']);
        // Default language
        this.translate.setDefaultLang('fr');
        // Use language
        this.translate.use('fr');
    };
    /*
    Set the main page according to the screen width
     */
    MyApp.prototype.setMainPages = function () {
        if (!this.config.isLargeScreen) {
            console.log("just one pane");
            //the other navs are not displayed in small screens, only the main nav is active
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
        }
        else {
            console.log("many panes");
            //the main page is the third nav (the one in the right) for large screens
            this.rootPageList = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
            this.rootPageDetails = __WEBPACK_IMPORTED_MODULE_14__pages_landing_page_landing_page__["a" /* LandingPage */];
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */];
        }
    };
    /*
    Function updating the rootMain page when switching from one tab to another
    (called only for small screens)
     */
    MyApp.prototype.tabChanged = function (e) {
        switch (this.selectedTab) {
            case ("searchTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
                break;
            case ("advertTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
                break;
            case ("missionTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */];
                break;
            case ("contactTab"):
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */];
                break;
            default:
                this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
                break;
        }
    };
    /*
    Initializing navigation params and subscribing to events
     */
    MyApp.prototype.initializeNavigation = function () {
        //initializition
        this.nav1.name = "list";
        this.nav2.name = "details";
        this.nav3.name = "main";
        this.navigationService.setNav1(this.nav1);
        this.navigationService.setNav2(this.nav2);
        this.navigationService.setNav3(this.nav3);
        //initializing the selected tab for small screens
        this.selectedTab = "searchTab";
        //the first and third navs should be displayed in large screens
        //the second nav is hidden by default
        this.showList = true;
        this.showDetails = false;
        this.showMain = true;
        //subscribe to routing events (push, setRoot, pop, hideNav)
        this.catchNavigationEvents();
        this.catchHideNavEvents();
        this.catchPopEvents();
    };
    /*
    Catch navigation events for routing
     */
    MyApp.prototype.catchNavigationEvents = function () {
        var _this = this;
        this.event.subscribe("navigate:" + this.nav1.name, function (data) {
            _this.showList = true;
            if (data.isRoot) {
                _this.nav1.setRoot(data.page, data.params);
            }
            else {
                _this.nav1.push(data.page, data.params);
            }
        });
        this.event.subscribe("navigate:" + this.nav2.name, function (data) {
            _this.showDetails = true;
            if (data.isRoot) {
                _this.nav2.setRoot(data.page, data.params);
            }
            else {
                _this.nav2.push(data.page, data.params);
            }
        });
        this.event.subscribe("navigate:" + this.nav3.name, function (data) {
            _this.showMain = true;
            if (data.isRoot) {
                _this.nav3.setRoot(data.page, data.params);
            }
            else {
                _this.nav3.push(data.page, data.params);
            }
        });
    };
    /*
  Catch hide navs events while routing
   */
    MyApp.prototype.catchHideNavEvents = function () {
        var _this = this;
        this.event.subscribe("hide:" + this.nav1.name, function () {
            _this.showList = false;
        });
        this.event.subscribe("hide:" + this.nav2.name, function () {
            _this.showDetails = false;
        });
        this.event.subscribe("hide:" + this.nav3.name, function () {
            _this.showMain = false;
        });
    };
    /*
    Catch pop events for routing
     */
    MyApp.prototype.catchPopEvents = function () {
        var _this = this;
        this.event.subscribe("pop:" + this.nav1.name, function () {
            _this.nav1.pop();
        });
        this.event.subscribe("pop:" + this.nav2.name, function () {
            _this.nav2.pop();
        });
    };
    MyApp.prototype.goToAccount = function () {
        var _this = this;
        this.self.storage.get("currentUser").then(function (currentUser) {
            if (!currentUser) {
                _this.self.modalService.present(__WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                var vojPageList = { page: __WEBPACK_IMPORTED_MODULE_18__pages_account_account__["a" /* AccountPage */], isRoot: true };
                _this.self.navigationService.navigate("list", vojPageList);
                if (_this.self.config.isLargeScreen) {
                    var vojPageDetails = { page: __WEBPACK_IMPORTED_MODULE_19__pages_user_information_user_information__["a" /* UserInformationPage */], isRoot: true };
                    _this.self.navigationService.navigate("details", vojPageDetails);
                    var vojPageMain = { page: __WEBPACK_IMPORTED_MODULE_20__pages_identity_identity__["a" /* IdentityPage */], isRoot: true };
                    _this.self.navigationService.navigate("main", vojPageMain);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentDetails'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentMain'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav3", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/'<ion-split-pane [when]="config.isLargeScreen">\n\n	<!-- logged out menu -->\n	<!--ion-menu id="loggedOutMenu" [content]="content">\n\n	  <ion-header>\n		<ion-toolbar>\n		  <ion-title>Listes</ion-title>\n		</ion-toolbar>\n	  </ion-header>\n\n	  <ion-content class="outer-content">\n\n		<voj-list [title]="listTitle" [cards]="cards"></voj-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<!-- logged in menu ->\n	<ion-menu id="loggedInMenu" [content]="content">\n\n	  <ion-header>\n		<ion-toolbar>\n		  <ion-title>Liste 2</ion-title>\n		</ion-toolbar>\n	  </ion-header>\n\n	  <ion-content class="outer-content">\n\n		<ion-list>\n		  <ion-list-header>\n			Navigate\n		  </ion-list-header>\n		  <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n			<ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n			{{p.title}}\n		  </button>\n		</ion-list>\n\n		<ion-list>\n		  <ion-list-header>\n			Account\n		  </ion-list-header>\n		  <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n			<ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n			{{p.title}}\n		  </button>\n		</ion-list>\n\n		<ion-list>\n		  <ion-list-header>\n			Tutorial\n		  </ion-list-header>\n		  <button ion-item menuClose (click)="openTutorial()">\n			<ion-icon item-left name="hammer"></ion-icon>\n			Show Tutorial\n		  </button>\n		</ion-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<!-- main navigation -->\n	<!-- <voj-header [data]="dataHeader"></voj-header> -->\n	 <voj-header-web [data]="dataHeader" *ngIf="config.isLargeScreen"></voj-header-web>\n	\n	<ion-nav [root]="rootPageList" #contentList name="list" [hidden]="!showList" swipeBackEnabled="false" class="voj-style"></ion-nav>\n	<ion-nav [root]="rootPageDetails" #contentDetails name="details" [hidden]="!showDetails" swipeBackEnabled="false" class="voj-style"></ion-nav>\n	<ion-nav [root]="rootPageMain" main #contentMain name="main" [hidden]="!showMain" swipeBackEnabled="false" class="voj-style"></ion-nav>\n\n	<!-- Bottom Tabs shown in small screens -->\n	<ion-footer *ngIf="!config.isLargeScreen" class="voj-tabs">\n		<ion-toolbar>\n			<ion-segment [(ngModel)]="selectedTab" (ionChange)="tabChanged($event)">\n					<ion-segment-button value="searchTab" class="segment-button-tab">\n						<div class="segment-tab"><ion-icon name="search" class="segment-tab-icon"></ion-icon></div>\n						<div class="segment-tab">Recherche</div>\n					</ion-segment-button>\n				\n				<ion-segment-button value="advertTab" class="segment-button-tab">\n					<div class="segment-tab"><ion-icon name="megaphone" class="segment-tab-icon"></ion-icon></div>\n					<div class="segment-tab">Annonces</div>\n				</ion-segment-button>\n				\n				<ion-segment-button value="missionTab" class="segment-button-tab">\n					<div class="segment-tab"><ion-icon name="folder" class="segment-tab-icon"></ion-icon></div>\n					<div class="segment-tab">Missions</div>\n				</ion-segment-button>\n				\n				<ion-segment-button value="contactTab" class="segment-button-tab" (click)="goToAccount()">\n					<div class="segment-tab"><ion-icon name="contact" class="segment-tab-icon"></ion-icon></div>\n					<div class="segment-tab">Compte</div>\n				</ion-segment-button>\n			\n			</ion-segment>\n		</ion-toolbar>\n	</ion-footer>\n\n	<!--<voj-footer *ngIf="!config.isLargeScreen">\n	</voj-footer>-->\n</ion-split-pane>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_voj_events_voj_events__["a" /* EventBusProvider */],
            __WEBPACK_IMPORTED_MODULE_15__services_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contacts_module__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_module__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobyer_availability_choice_jobyer_availability_choice_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_information_user_information_module__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_details_module__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sign_up_sign_up_module__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_voj_components_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__enterprise_details_enterprise_details_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__options_options_module__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_account_module__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__identity_identity_module__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_address_main_address_module__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_module__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bank_settings_bank_settings_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__personal_details_identity_personal_details_identity_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__availabilities_add_days_availabilities_add_days_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__availabilities_availabilities_module__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__landing_page_landing_page_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__jobs_list_jobs_list_module__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__languages_languages_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__enterprise_search_enterprise_search_module__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reset_password_reset_password_module__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__personal_details_personal_details_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__company_company_module__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__my_cv_my_cv_module__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__qualities_qualities_module__ = __webpack_require__(734);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_module__["TabsModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_3__contact_contacts_module__["a" /* ContactModule */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_module__["AboutModule"],
                __WEBPACK_IMPORTED_MODULE_5__search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__details_details_module__["a" /* DetailsPageModule */],
                __WEBPACK_IMPORTED_MODULE_15__main_address_main_address_module__["a" /* MainAddressModule */],
                __WEBPACK_IMPORTED_MODULE_11__enterprise_details_enterprise_details_module__["EnterpriseDetailsModule"],
                __WEBPACK_IMPORTED_MODULE_7__user_information_user_information_module__["UserInformationModule"],
                __WEBPACK_IMPORTED_MODULE_6__jobyer_availability_choice_jobyer_availability_choice_module__["JobyerAvailabilityChoiceModule"],
                __WEBPACK_IMPORTED_MODULE_12__options_options_module__["OptionsModule"],
                __WEBPACK_IMPORTED_MODULE_14__identity_identity_module__["a" /* IdentityModule */],
                __WEBPACK_IMPORTED_MODULE_13__account_account_module__["a" /* AccountPageModule */],
                __WEBPACK_IMPORTED_MODULE_18__personal_details_identity_personal_details_identity_module__["PersonalDetailsIdentityPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_17__bank_settings_bank_settings_module__["a" /* BankSettingsPageModule */],
                __WEBPACK_IMPORTED_MODULE_9__sign_up_sign_up_module__["a" /* SignUpPageModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_19__availabilities_add_days_availabilities_add_days_module__["a" /* AvailabilitiesAddDaysPageModule */],
                __WEBPACK_IMPORTED_MODULE_20__availabilities_availabilities_module__["a" /* AvailabilitiesPageModule */],
                __WEBPACK_IMPORTED_MODULE_21__landing_page_landing_page_module__["LandingPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__qualities_qualities_module__["a" /* QualitiesPageModule */],
                __WEBPACK_IMPORTED_MODULE_22__jobs_list_jobs_list_module__["a" /* JobslistPageModule */],
                __WEBPACK_IMPORTED_MODULE_23__languages_languages_module__["a" /* LanguagesPageModule */],
                __WEBPACK_IMPORTED_MODULE_24__enterprise_search_enterprise_search_module__["a" /* EnterpriseSearchPageModule */],
                __WEBPACK_IMPORTED_MODULE_25__reset_password_reset_password_module__["a" /* ResetPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_27__company_company_module__["CompanyModule"],
                __WEBPACK_IMPORTED_MODULE_26__personal_details_personal_details_module__["PersonalDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__my_cv_my_cv_module__["a" /* MyCvPageModule */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_footer_voj_footer_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]), __WEBPACK_IMPORTED_MODULE_3__components_voj_footer_voj_footer_module__["a" /* VojFooterModule */], __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdentityModule = (function () {
    function IdentityModule() {
    }
    IdentityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* IdentityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identity__["a" /* IdentityPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], IdentityModule);
    return IdentityModule;
}());

//# sourceMappingURL=identity.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_address__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainAddressModule = (function () {
    function MainAddressModule() {
    }
    MainAddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_address__["a" /* MainAddressPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_address__["a" /* MainAddressPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], MainAddressModule);
    return MainAddressModule;
}());

//# sourceMappingURL=main-address.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankSettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_settings__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BankSettingsPageModule = (function () {
    function BankSettingsPageModule() {
    }
    BankSettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bank_settings__["a" /* BankSettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bank_settings__["a" /* BankSettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], BankSettingsPageModule);
    return BankSettingsPageModule;
}());

//# sourceMappingURL=bank-settings.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesAddDaysPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilitiesAddDaysPageModule = (function () {
    function AvailabilitiesAddDaysPageModule() {
    }
    AvailabilitiesAddDaysPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availabilities_add_days__["a" /* AvailabilitiesAddDaysPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AvailabilitiesAddDaysPageModule);
    return AvailabilitiesAddDaysPageModule;
}());

//# sourceMappingURL=availabilities-add-days.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__availabilities__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AvailabilitiesPageModule = (function () {
    function AvailabilitiesPageModule() {
    }
    AvailabilitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__availabilities__["a" /* AvailabilitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__availabilities__["a" /* AvailabilitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], AvailabilitiesPageModule);
    return AvailabilitiesPageModule;
}());

//# sourceMappingURL=availabilities.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobslistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_list__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobslistPageModule = (function () {
    function JobslistPageModule() {
    }
    JobslistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobs_list__["a" /* JobsListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], JobslistPageModule);
    return JobslistPageModule;
}());

//# sourceMappingURL=jobs-list.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_data_service__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsListPage = (function () {
    function JobsListPage(configurationService, testFormDataService) {
        this.configurationService = configurationService;
        this.testFormDataService = testFormDataService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My jobs',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customSelect2',
                    value: '',
                    label: 'Test Label',
                    dataset: [
                        { id: 4, key: 'test 1', value: 'test1' },
                        { id: 5, key: 'test 2', value: 'test2' },
                        { id: 6, key: 'test 3', value: 'test3' }
                    ],
                    required: false,
                    visible: true,
                    chosenItems: [],
                    id: 'search-select',
                    name: 'customSelectWithSearch'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('button works');
                }
            }
        };
    }
    JobsListPage.prototype.getItems = function (ev) {
        this.formData.fields[0].chosenItems = this.testFormDataService.getData();
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.formData.fields[0].chosenItems = this.formData.fields[0].chosenItems.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    JobsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankSettingsPage');
    };
    JobsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'jobs-list-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/jobs-list/jobs-list.html"*/'<ion-content>\n    <voj-page-header [data]=\'headerData\'></voj-page-header>\n    <div [ngClass]="isMobile ? \'jobs-list-container\' : \'\'">\n        <div [ngClass]="isMobile ? \'jobs-list-child-container\' : \'\'">\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n            <voj-form [data]=\'formData\'></voj-form>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/jobs-list/jobs-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__services_form_data_service__["a" /* FormDataService */]])
    ], JobsListPage);
    return JobsListPage;
}());

//# sourceMappingURL=jobs-list.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LanguagesPageModule = (function () {
    function LanguagesPageModule() {
    }
    LanguagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__languages__["a" /* LanguagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__languages__["a" /* LanguagesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], LanguagesPageModule);
    return LanguagesPageModule;
}());

//# sourceMappingURL=languages.module.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguagesPage = (function () {
    function LanguagesPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My languages',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customTwoSelects',
                    value: 'select 1',
                    value2: 'select 2',
                    label: 'Add a language',
                    dataset: [
                        { id: 4, key: 'example 1', value: 'example1' },
                        { id: 5, key: 'example 2', value: 'example2' },
                        { id: 6, key: 'example 3', value: 'example3' },
                        { id: 7, key: 'example 4', value: 'example4' }
                    ],
                    dataset2: [
                        { id: 8, key: 'test 1', value: 'test1' },
                        { id: 9, key: 'test 2', value: 'test2' },
                        { id: 10, key: 'test 3', value: 'test3' },
                    ],
                    required: true,
                    visible: true,
                    id: '',
                    name: 'customlanguagesSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Navigation to J-S-CV-V1-01 Information Resume');
                }
            }
        };
    }
    LanguagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagesPage');
    };
    LanguagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'languages-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/languages/languages.html"*/'<ion-content>\n  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'languages-container\' : \'\'">\n    <div [ngClass]="isMobile ? \'languages-child-container\' : \'\'">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/languages/languages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], LanguagesPage);
    return LanguagesPage;
}());

//# sourceMappingURL=languages.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterprise_search__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnterpriseSearchPageModule = (function () {
    function EnterpriseSearchPageModule() {
    }
    EnterpriseSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__enterprise_search__["a" /* EnterpriseSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__enterprise_search__["a" /* EnterpriseSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], EnterpriseSearchPageModule);
    return EnterpriseSearchPageModule;
}());

//# sourceMappingURL=enterprise-search.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCardModel; });
var VojCardModel = (function () {
    function VojCardModel() {
    }
    return VojCardModel;
}());

//# sourceMappingURL=voj-card.model.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnterpriseSearchPage = (function () {
    function EnterpriseSearchPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.searchInput = '';
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'Rechercher mon entreprise',
            style: 'any',
            actions: [{
                    id: 'gcfhvjbknml',
                    label: '',
                    icon: 'help',
                    action: function showHelp() {
                        console.log('showHelp works');
                    }
                }],
            isCanceled: true
        };
        this.segmentData = {
            activeSegmentTab: 0,
            segmentsList: [
                {
                    title: 'Par nom',
                },
                {
                    title: 'Par siren'
                }
            ]
        };
    }
    EnterpriseSearchPage.prototype.initializeItems = function () {
        this.enterpriseData = [
            {
                companyname: 'TestCompany2',
                lastname: 'LastName2',
                firstname: 'FirstName2',
                siren: '765432178',
            },
            {
                companyname: 'TestCompany3',
                lastname: 'LastName3',
                firstname: 'FirstName3',
                siren: '897655638',
            },
            {
                companyname: 'TestCompany1',
                lastname: 'LastName1',
                firstname: 'FirstName1',
                siren: '123456789',
            },
            {
                companyname: 'TestCompany4',
                lastname: 'LastName4',
                firstname: 'FirstName4',
                siren: '123546789',
            },
            {
                companyname: 'TestCompany5',
                lastname: 'LastName5',
                firstname: 'FirstName5',
                siren: '123456798',
            }
        ];
    };
    EnterpriseSearchPage.prototype.filterItems = function () {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        // Filtering for first segment by name
        if (this.searchInput && this.searchInput.trim() != '' && this.segmentData.activeSegmentTab === 0) {
            console.log('Segment 1 works');
            this.enterpriseData = this.enterpriseData.filter(function (item) {
                var result = false;
                if ((item['firstname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) ||
                    (item['lastname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) ||
                    item['companyname'].toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1) {
                    result = true;
                }
                return result;
            });
        }
        else if (this.searchInput && this.searchInput.trim() != '' && this.segmentData.activeSegmentTab === 1) {
            this.enterpriseData = this.enterpriseData.filter(function (item) {
                var result = false;
                if ((item['siren'] === _this.searchInput)) {
                    result = true;
                }
                return result;
            });
        }
        else {
            this.enterpriseData = [];
        }
    };
    EnterpriseSearchPage.prototype.selectedItem = function () {
        console.log('Navigate tE-S-GCO-V1-04-Enterprise Details 1/3');
    };
    EnterpriseSearchPage.prototype.clearEnterpriseData = function () {
        this.enterpriseData = [];
        this.searchInput = '';
    };
    EnterpriseSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnterpriseSearchPage');
    };
    EnterpriseSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enterprise-search-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/enterprise-search/enterprise-search.html"*/'<voj-page-header [data]=\'headerData\'></voj-page-header>\n\n<!--<ion-content>-->\n\n\n    <div [ngClass]="isMobile ? \'enterprise-search-container\' : \'\'" class="enterprise-search-parent">\n        <div [ngClass]="isMobile ? \'enterprise-search-child-container\' : \'\'" class="enterprise-search-child">\n            <voj-header-segment (enterpriseSearchEvent)="clearEnterpriseData($event)" [data]=\'segmentData\'\n                                [(activeTab)]="segmentData.activeSegmentTab"></voj-header-segment>\n            <ion-searchbar class="enterprise-search-bar" [(ngModel)]="searchInput" (ionInput)="filterItems()"></ion-searchbar>\n            <ion-list>\n                <ion-item *ngFor="let item of enterpriseData">\n                    <h2>{{item.companyname}}</h2>\n                    <h2>{{item.lastname}} {{item.firstname}}</h2>\n                    <h2>SIREN {{item.siren}}</h2>\n                    <button item-end class="select-button" (click)="selectedItem()">Sélectionner</button>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n<!--</ion-content>-->'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/enterprise-search/enterprise-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], EnterpriseSearchPage);
    return EnterpriseSearchPage;
}());

//# sourceMappingURL=enterprise-search.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResetPasswordModule = (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__reset_password__["a" /* ResetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reset_password__["a" /* ResetPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCvPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_cv__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyCvPageModule = (function () {
    function MyCvPageModule() {
    }
    MyCvPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_cv__["a" /* MyCvPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_cv__["a" /* MyCvPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], MyCvPageModule);
    return MyCvPageModule;
}());

//# sourceMappingURL=my-cv.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyCvPage = (function () {
    function MyCvPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My CV',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customUploadSelect',
                    value: '',
                    label: 'Add file',
                    visible: true,
                    id: '',
                    name: 'customMyCvSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Button works');
                }
            }
        };
    }
    MyCvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyCvPage');
    };
    MyCvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-cv-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/my-cv/my-cv.html"*/'  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'my-cv-container\' : \'\'" class="my-cv-parent">\n    <div [ngClass]="isMobile ? \'my-cv-child-container\' : \'\'" class="my-cv-child">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/my-cv/my-cv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], MyCvPage);
    return MyCvPage;
}());

//# sourceMappingURL=my-cv.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qualities__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QualitiesPageModule = (function () {
    function QualitiesPageModule() {
    }
    QualitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* QualitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qualities__["a" /* QualitiesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__["a" /* VojComponentsModule */]
            ],
        })
    ], QualitiesPageModule);
    return QualitiesPageModule;
}());

//# sourceMappingURL=qualities.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QualitiesPage = (function () {
    function QualitiesPage(configurationService) {
        this.configurationService = configurationService;
        this.isMobile = false;
        this.config = this.configurationService.configuration;
        this.config.isLargeScreen ? this.isMobile = false : this.isMobile = true;
        this.headerData = {
            title: 'My qualities',
            style: 'any',
            actions: [{
                    id: 'xdcfgvyhubijnklbhvg',
                    label: 'help',
                    icon: 'help',
                    action: function () {
                        console.log('button works');
                    }
                }],
            isCanceled: true
        };
        this.formData = {
            fields: [
                {
                    type: 'customSelect',
                    label: 'Add quality',
                    value: '',
                    dataset: [
                        { id: 4, key: 'example 1', value: 'example1' },
                        { id: 5, key: 'example 2', value: 'example2' },
                        { id: 6, key: 'example 3', value: 'example3' },
                        { id: 7, key: 'example 4', value: 'example4' }
                    ],
                    required: false,
                    visible: true,
                    id: "",
                    name: 'customQualitiesSelect'
                },
            ],
            submit: {
                id: 'xdcfgvyhubijnkfwlbhvg',
                label: 'Validate',
                icon: 'help',
                action: function () {
                    console.log('Navigation to J-S-CV-V1-01 Information Resume');
                }
            }
        };
    }
    QualitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QualitiesPage');
    };
    QualitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'qualities-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/qualities/qualities.html"*/'<ion-content>\n  <voj-page-header [data]=\'headerData\'></voj-page-header>\n  <div [ngClass]="isMobile ? \'qualities-container\' : \'\'">\n    <div [ngClass]="isMobile ? \'qualities-child-container\' : \'\'">\n      <voj-form [data]=\'formData\'></voj-form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/qualities/qualities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__["a" /* Configuration */]])
    ], QualitiesPage);
    return QualitiesPage;
}());

//# sourceMappingURL=qualities.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSegmentModule", function() { return VojSegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_segment__ = __webpack_require__(652);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojSegmentModule = (function () {
    function VojSegmentModule() {
    }
    VojSegmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_segment__["a" /* VojSegment */]
            ]
        })
    ], VojSegmentModule);
    return VojSegmentModule;
}());

//# sourceMappingURL=voj-segment.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobyerAvailabilityChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobyerAvailabilityChoicePage = (function () {
    function JobyerAvailabilityChoicePage() {
        // Set page header title
        this.dataPageHeader = {
            title: 'Add an availability',
            actions: [
                {
                    id: 'help',
                    icon: 'help',
                    action: function () { console.log('Click help button.'); },
                    label: ''
                }
            ]
        };
    }
    JobyerAvailabilityChoicePage.prototype.presentPage = function (pageName) {
        console.log('Present page:', pageName);
    };
    JobyerAvailabilityChoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'jobyer-availability-choice-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/jobyer-availability-choice/jobyer-availability-choice.html"*/'<voj-page-header [data]="dataPageHeader"></voj-page-header>\n\n<ion-card padding>\n    <ion-card-header class="voj-card-header">\n        I am available:\n    </ion-card-header>\n    <ion-card-content class="voj-card-buttons">\n        <button ion-button block small (click)="presentPage(\'Totally\')">Totally</button>\n        <button ion-button block small (click)="presentPage(\'Partially\')">Partially</button>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/jobyer-availability-choice/jobyer-availability-choice.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], JobyerAvailabilityChoicePage);
    return JobyerAvailabilityChoicePage;
}());

//# sourceMappingURL=jobyer-availability-choice.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voj_calendar_voj_calendar_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card_voj_card_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_footer_voj_footer_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_header_voj_header_module__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_list_voj_list_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_form_voj_form_module__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voj_map_voj_map_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__voj_menu_voj_menu_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voj_search_header_voj_search_header_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__voj_segment_voj_segment_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__voj_header_web_voj_header_web_module__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__voj_header_segment_voj_header_segment_module__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var VojComponentsModule = (function () {
    function VojComponentsModule() {
    }
    VojComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__voj_calendar_voj_calendar_module__["VojCalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2__voj_card_voj_card_module__["VojCardModule"],
                __WEBPACK_IMPORTED_MODULE_3__voj_footer_voj_footer_module__["a" /* VojFooterModule */],
                __WEBPACK_IMPORTED_MODULE_4__voj_header_voj_header_module__["VojHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_5__voj_list_voj_list_module__["VojListModule"],
                __WEBPACK_IMPORTED_MODULE_6__voj_form_voj_form_module__["VojFormModule"],
                __WEBPACK_IMPORTED_MODULE_7__voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_8__voj_menu_voj_menu_module__["VojMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9__voj_search_header_voj_search_header_module__["VojSearchHeaderModule"],
                __WEBPACK_IMPORTED_MODULE_10__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_11__voj_header_web_voj_header_web_module__["VojHeaderWebModule"],
                __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_13__voj_header_segment_voj_header_segment_module__["VojHeaderSegmentModule"]
            ]
        })
    ], VojComponentsModule);
    return VojComponentsModule;
}());

//# sourceMappingURL=voj-components.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCardModule", function() { return VojCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_menu_voj_menu_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_segment_voj_segment_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_map_voj_map_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VojCardModule = (function () {
    function VojCardModule() {
    }
    VojCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_menu_voj_menu_module__["VojMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4__voj_segment_voj_segment_module__["VojSegmentModule"],
                __WEBPACK_IMPORTED_MODULE_5__voj_map_voj_map_module__["VojMapModule"],
                __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__["a" /* VojPageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_card__["a" /* VojCard */]
            ]
        })
    ], VojCardModule);
    return VojCardModule;
}());

//# sourceMappingURL=voj-card.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMapModule", function() { return VojMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_map__ = __webpack_require__(653);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VojMapModule = (function () {
    function VojMapModule() {
    }
    VojMapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_map__["a" /* VojMap */]
            ],
            providers: []
        })
    ], VojMapModule);
    return VojMapModule;
}());

//# sourceMappingURL=voj-map.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBusProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_event_model__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EventBusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EventBusProvider = (function () {
    function EventBusProvider(event) {
        this.event = event;
        console.log('Hello EventBusProvider Provider');
        this.passenger = new __WEBPACK_IMPORTED_MODULE_2__models_voj_event_model__["a" /* Passenger */]();
    }
    // MAP EVENTS
    /**
     * Send an event to set map values
     * @param {eMapType} passenger
     */
    EventBusProvider.prototype.set = function (passenger) {
        if (passenger.condition)
            this.event.publish(passenger.topic, passenger.data);
    };
    /**
     * Get an event to load map values
     */
    EventBusProvider.prototype.get = function (passenger) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.event.subscribe(passenger.topic, function (data) {
                if (passenger.condition)
                    resolve(data);
                else
                    reject('Passenger type is rejected for this bus line');
            });
        });
    };
    EventBusProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], EventBusProvider);
    return EventBusProvider;
}());

//# sourceMappingURL=voj-events.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPage = (function () {
    function LandingPage() {
    }
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'landing-page',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/landing-page/landing-page.html"*/'<!DOCTYPE html>\n<html lang="en">\n<head>\n	<meta charset="UTF-8">\n	<title>Landing page</title>\n</head>\n<body>\nBienvenue à Vitonjob\n\n</body>\n</html>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/landing-page/landing-page.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing-page.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map
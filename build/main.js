webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_header_model__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_configuration_model__ = __webpack_require__(131);
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
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_3__models_voj_card_header_model__["a" /* VojCardHeaderModel */]();
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
        // Testing Jobyer Data
        this.jobyerData = {
            title: 'Title',
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
            buttons: [
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
                title: "Jobyer 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "Jobyer 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "Jobyer 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "Jobyer 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "Jobyer 5",
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

/***/ 131:
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMenuModule", function() { return VojMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu__ = __webpack_require__(360);
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_request_http_request__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_voj_configuration__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__ = __webpack_require__(626);
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
            "role": this.configuration.configuration.customer == "J" ? "jobyer" : "employer",
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
     * Seek offers based on natural language query
     * @param fullText
     * @returns {Promise<T>}
     */
    SearchServiceProvider.prototype.semanticSearch = function (fullText) {
        var _this = this;
        var payload = {
            "service": "FULL_TEXT",
            "role": this.configuration.configuration.customer == "J" ? "jobyer" : "employer",
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
                var cards = [];
                for (var i = 0; i < data.length; i++) {
                    _this.idIndexation = data[i].indexation;
                    var r = new __WEBPACK_IMPORTED_MODULE_4__dtos_search_result_dto__["a" /* SeachResultDTO */]();
                    r.id = data[i].id;
                    r.job = data[i].job;
                    r.name = data[i].name;
                    r.lat = data[i].lat;
                    r.lng = data[i].lng;
                    r.email = data[i].email;
                    var c = r.toVojCard();
                    cards.push(c);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSearchHeaderModule", function() { return VojSearchHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_search_header__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(66);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_map_model__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_text_type__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__ = __webpack_require__(35);
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
    function HomePage(navCtrl, platform, appCtrl, viewCtrl, event, httpRequest, vojNotification, navigationService) {
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
        this.isWeb = false;
        // Testing Jobyer Data
        this.jobyerData = {
            title: 'Title',
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
            buttons: [
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
                    id: 121,
                    name: 'Input1'
                },
                {
                    type: 'button',
                    label: 'Button',
                    visible: true,
                    id: 120,
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
                    id: 122,
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
                    id: 129,
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
                    id: 123,
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
                    id: 124,
                    name: 'radioTest'
                },
                {
                    type: 'customSelect',
                    value: 'select 2',
                    label: 'Label 6',
                    dataset: [
                        { id: 4, key: 'select 4', value: 'select 4' },
                        { id: 5, key: 'select 5', value: 'select 5' },
                        { id: 6, key: 'select 6', value: 'select 6' }
                    ],
                    required: true,
                    visible: true,
                    id: 125,
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
                    id: 129,
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
        //this.navigationService.navigate('navigate:details', vojNav);
        this.navigationService.hide('hide:details');
    };
    HomePage.prototype.goToPage1 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('navigate:details', vojNav);
    };
    HomePage.prototype.goToPage2 = function () {
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */], params: { num: 0, str: "amal" }, isRoot: false };
        this.navigationService.navigate('navigate:list', vojNav);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('contentMenu'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "nav2", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/'<ion-content padding #mycontent fullscreen>\n\n	<h2>Welcome to Ionic!</h2>\n	<p>\n		This starter project comes with simple tabs-based layout for apps\n		that are going to primarily use a Tabbed UI.\n	</p>\n	<p>\n		Take a look at the <code>src/pages/</code> directory to add or change tabs,\n		update any existing page or create new pages.\n	</p>\n	\n	<button ion-button (click)="goToPage()">Click me</button>\n	<button ion-button (click)="goToPage1()">Click me1</button>\n	<button ion-button (click)="goToPage2()">Click me2</button>\n	<!-- Notification testing -->\n	<button ion-button (click)="testNotification()">Test notification</button>\n\n	<!-- Test translate service -->\n	<p>{{ \'HOME.TEST_TRANSLATION\' | translate}}</p>\n\n	<button ion-button (click)="goToPage()">Click me</button>\n	<!--<voj-card title="Mon titre" content="Ma description ici" action-name="Mon identité" subtitle1="Tél: 0669938121"\n			  subtitle1-icon="call" subtitle2="E-mail: test@compte.com" subtitle2-icon="mail"  thumbnail="assets/img/advance-card-bttf.png"></voj-card>-->\n	<voj-card [data]=\'jobyerData\' [vojData]="cards" ></voj-card>\n	<voj-form [data]=\'formData\'></voj-form>\n	<voj-calendar></voj-calendar>\n	<ion-fab bottom right>\n		<button ion-fab (click)="test()" color="vojgreen">\n			<ion-icon name="log-in"></ion-icon>\n		</button>\n	</ion-fab>\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="cards"></voj-map> -->\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_http_request_http_request__["a" /* HttpRequestProvider */],
            __WEBPACK_IMPORTED_MODULE_4__components_voj_notification_voj_notification_service__["a" /* VojNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_navigation_service__["a" /* NavigationService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_header_model__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_voj_events_voj_events__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__ = __webpack_require__(44);
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
    function SearchPage(navCtrl, eventBus, navigationService, configuration, searchService, event) {
        this.navCtrl = navCtrl;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.configuration = configuration;
        this.searchService = searchService;
        this.event = event;
        this.gmapView = false;
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapView = false;
        //  Page header
        this.pageHeader = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_header_model__["a" /* VojCardHeaderModel */]();
        this.pageHeader.title = "Recherche";
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
    };
    SearchPage.prototype.search = function (q) {
        var _this = this;
        if (q.queryType == 'full_text' && q.freeText && q.freeText != '') {
            //TODO TIM: Data should have an Array<VojCardType> as type
            this.searchService.semanticSearch(q.freeText).then(function (data) {
                _this.cards = data;
                var _loop_1 = function (i) {
                    var c = _this.cards[i];
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
                _this.eventBus.setMapData(_this.cards);
            });
        }
    };
    SearchPage.prototype.gotoDetails = function (card) {
        var _this = this;
        console.log("Details : " + card.id);
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_7__details_details__["a" /* DetailsPage */], isRoot: false };
        this.navigationService.navigate('navigate:details', vojNav);
        this.searchService.loadDetails(card.id).then(function (data) {
            var c = new __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__["a" /* VojCardModel */]();
            c.id = card.id;
            c.title = card.title;
            c.subtitles = [];
            c.cover = card.cover;
            c.thumbnail = card.thumbnail;
            c.header = card.header;
            c.socialButtons = card.socialButtons;
            c.menu = card.menu;
            c.actions = [{
                    id: '',
                    icon: '',
                    label: 'Recruter',
                    action: function () {
                    }
                }];
            c.segments = card.segments;
            for (var i = 0; i < card.subtitles.length; i++)
                c.subtitles.push(card.subtitles[i]);
            if (data.address)
                c.subtitles.push({
                    label: data.address,
                    icon: ''
                });
            if (data.languages && data.languages.length > 0) {
                for (var i = 0; i < data.languages.length; i++) {
                    var lang = data.languages[i].label + " " + (data.languages[i].level == 2 ? ' courant ' : ' débutant ');
                    c.subtitles.push({
                        label: lang,
                        icon: ''
                    });
                }
            }
            if (data.qualities && data.qualities.length > 0) {
                for (var i = 0; i < data.qualities.length; i++) {
                    var qual = data.qualities[i].label;
                    c.subtitles.push({
                        label: qual,
                        icon: ''
                    });
                }
            }
            _this.eventBus.publishCardDetails(c);
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search/search.html"*/'<ion-content padding class="search-page-content">\n  <voj-page-header [data]="pageHeader"></voj-page-header>\n  <voj-search-header [criteria-mode]="false" [data]="searchHeaderData"></voj-search-header>\n  <voj-map [data]="cards" *ngIf="gmapView"></voj-map>\n  <voj-card [hidden]="gmapView" *ngFor="let c of cards" [data]="c" [vojData]="cards" mode="reduced" ></voj-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_voj_events_voj_events__["a" /* VojEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */], __WEBPACK_IMPORTED_MODULE_8__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/voj-calendar/desktop-calendar/desktop-calendar.module": [
		256
	],
	"../components/voj-calendar/smart-calendar/smart-calendar.module": [
		253
	],
	"../components/voj-calendar/voj-calendar.module": [
		252
	],
	"../components/voj-card/voj-card.module": [
		90
	],
	"../components/voj-form/voj-form.module": [
		368
	],
	"../components/voj-header-web/voj-header-web.module": [
		369
	],
	"../components/voj-header/voj-header.module": [
		366
	],
	"../components/voj-list/voj-list.module": [
		367
	],
	"../components/voj-map/voj-map.module": [
		91
	],
	"../components/voj-menu/voj-menu.module": [
		171
	],
	"../components/voj-page-header/voj-page-header.module": [
		94
	],
	"../components/voj-search-header/voj-search-header.module": [
		173
	],
	"../components/voj-segment/voj-segment.module": [
		66
	],
	"../pages/about/about.module": [
		251
	],
	"../pages/home/home.module": [
		370
	],
	"../pages/search/search.module": [
		376
	],
	"../pages/tabs/tabs.module": [
		377
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
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(77);
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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCalendarModule", function() { return VojCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_calendar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_calendar_smart_calendar_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__desktop_calendar_desktop_calendar_module__ = __webpack_require__(256);
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartCalendarModule", function() { return SmartCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smart_calendar__ = __webpack_require__(470);
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopCalendarModule", function() { return DesktopCalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desktop_calendar__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_custom_title_formatter__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_demo_utils_module__ = __webpack_require__(613);
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
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(44);
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
    NavigationService.prototype.initialize = function (nav1, nav2, nav3, showList, showDetails, showMain) {
        //Publish navigation events
        //hide the details nav
        //this.catchHideNavEvents('hide:details', showDetails);
    };
    NavigationService.prototype.navigate = function (navName, vojNav) {
        if (this.config.isLargeScreen) {
            this.event.publish(navName, vojNav);
        }
        else {
            this.event.publish('navigate:main', vojNav);
        }
    };
    NavigationService.prototype.hide = function (eventName) {
        if (this.config.isLargeScreen) {
            this.event.publish(eventName);
        }
    };
    NavigationService.prototype.goBack = function (navName) {
        if (this.config.isLargeScreen) {
            this.event.publish(navName);
        }
        else {
            this.event.publish('pop:main');
        }
    };
    NavigationService.prototype.catchNavigationEvents = function (navName, nav, showNav) {
        this.event.subscribe(navName, function (data) {
            if (data.isRoot) {
                nav.setRoot(data.page, data.params);
                showNav = true;
            }
            else {
                nav.push(data.page, data.params);
                showNav = true;
            }
        });
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return envConfig; });
var envConfig = {
    cid: "8f3c82e6-12d0-4a86-bb22-c5d30d2c2b2f",
    server: "http://dev.vitonjob.com:81/appsettings/",
    thresholdWidth: 768
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 363:
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

/***/ 364:
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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_footer__ = __webpack_require__(628);
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

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderModule", function() { return VojHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header__ = __webpack_require__(629);
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

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojListModule", function() { return VojListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_list__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_card_voj_card_module__ = __webpack_require__(90);
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

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojFormModule", function() { return VojFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_form__ = __webpack_require__(631);
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
                __WEBPACK_IMPORTED_MODULE_3__voj_form__["a" /* VojForm */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__voj_form__["a" /* VojForm */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__voj_form__["a" /* VojForm */]
            ]
        })
    ], VojFormModule);
    return VojFormModule;
}());

//# sourceMappingURL=voj-form.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojHeaderWebModule", function() { return VojHeaderWebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_header_web__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_segment_voj_segment_module__ = __webpack_require__(66);
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

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_components_module__ = __webpack_require__(77);
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

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_notification__ = __webpack_require__(372);
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

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'voj-notification',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/'<!-- Title -->\n<h1 class="voj-notification-title">\n    <ion-icon name="{{ data.icon }}"></ion-icon>\n    {{ data.title }}\n</h1>\n\n<!-- Message -->\n<div class="voj-notification-message">\n    <p>{{ data.message }}</p>\n</div>\n\n<!-- Buttons -->\n<div class="voj-notification-buttons">\n    <button ion-button icon-left clear navPop *ngFor="let button of data.buttons" (click)="button.action()">\n        <ion-icon name="{{ button.icon }}"></ion-icon>\n        {{ button.label }}\n    </button>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-notification/voj-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], VojNotification);
    return VojNotification;
}());

//# sourceMappingURL=voj-notification.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_voj_search_header_voj_search_header_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_voj_card_voj_card_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_map_voj_map_module__ = __webpack_require__(91);
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
                __WEBPACK_IMPORTED_MODULE_3__components_voj_page_header_voj_page_header_module__["VojPageHeaderModule"],
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

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(378);
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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigation_service__ = __webpack_require__(35);
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_voj_components_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages_module__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_calendar__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_voj_notification_voj_notification__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_voj_notification_voj_notification_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_voj_configuration__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_navigation_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__ = __webpack_require__(131);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
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
                        { loadChildren: '../components/voj-page-header/voj-page-header.module#VojPageHeaderModule', name: 'VojPageHeader', segment: 'voj-page-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header/voj-header.module#VojHeaderModule', name: 'VojHeader', segment: 'voj-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-list/voj-list.module#VojListModule', name: 'VojList', segment: 'voj-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-form/voj-form.module#VojFormModule', name: 'VojForm', segment: 'voj-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-search-header/voj-search-header.module#VojSearchHeaderModule', name: 'VojSearchHeader', segment: 'voj-search-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/voj-header-web/voj-header-web.module#VojHeaderWebModule', name: 'VojHeaderWeb', segment: 'voj-header-web', priority: 'low', defaultHistory: [] }
                    ]
                }),
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_http_request_http_request__["a" /* HttpRequestProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_search_service_search_service__["a" /* SearchServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_voj_events_voj_events__["a" /* VojEventsProvider */],
                __WEBPACK_IMPORTED_MODULE_19__models_voj_configuration_model__["a" /* VojConfiguration */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_configuration_model__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_request_http_request__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_tuple_model__ = __webpack_require__(625);
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 463:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCardModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voj_card_header_model__ = __webpack_require__(56);

var VojCardModel = (function () {
    function VojCardModel() {
        this.header = new __WEBPACK_IMPORTED_MODULE_0__voj_card_header_model__["a" /* VojCardHeaderModel */]();
    }
    return VojCardModel;
}());

//# sourceMappingURL=voj-card.model.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_popover_page__ = __webpack_require__(254);
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
            selector: 'smart-calendar',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/'<div>\n	<div class="container-calendar">\n		<div class="voj-style">\n			<div class="header-calendar">\n				<span>{{viewTitle}}</span>\n				<button ion-button icon-only clear>\n					<ion-icon ios="md-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n				</button>\n				<button ion-button icon-only clear class="btn-more" (click)="presentPopover($event)">\n					<ion-icon ios="md-more" md="md-more"></ion-icon>\n				</button>\n			</div>\n\n			<ng-template #monthviewDisplayEventTemplate let-view="view" let-row="row" let-col="col">\n				{{view.dates[row*7+col].label}}\n				<div>\n					<span></span>\n				</div>\n			</ng-template>\n\n			<ng-template #monthviewInactiveDisplayEventTemplate let-view="view" let-row="row" let-col="col">\n				{{view.dates[row*7+col].label}}\n				<div>\n					<span></span>\n				</div>\n			</ng-template>\n\n			<ng-template #dayviewAllDayEventTemplate let-displayEvent="displayEvent">\n				<div class="calendar-event-inner">{{displayEvent.event.title}}</div>\n			</ng-template>\n\n			<ng-template #dayviewNormalEventTemplate let-displayEvent="displayEvent">\n				<div class="calendar-event-inner">{{displayEvent.event.title}}</div>\n			</ng-template>\n\n			<calendar\n				[eventSource]="eventSource"\n				[calendarMode]="calendar.mode"\n				[showEventDetail]="false"\n				[currentDate]="calendar.currentDate"\n				(onEventSelected)="onEventSelected($event)"\n				(onTimeSelected)="onTimeSelected($event)"\n				(onTitleChanged)="onViewTitleChanged($event)"\n				[monthviewDisplayEventTemplate]="monthviewDisplayEventTemplate"\n				[dayviewAllDayEventTemplate]="dayviewAllDayEventTemplate"\n				[dayviewNormalEventTemplate]="dayviewNormalEventTemplate"\n				[monthviewInactiveDisplayEventTemplate]="monthviewInactiveDisplayEventTemplate"\n				step="30">\n			</calendar>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-calendar/smart-calendar/smart-calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */]])
    ], SmartCalendar);
    return SmartCalendar;
}());

//# sourceMappingURL=smart-calendar.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCardHeaderModel; });
var VojCardHeaderModel = (function () {
    function VojCardHeaderModel() {
    }
    return VojCardHeaderModel;
}());

//# sourceMappingURL=voj-card-header.model.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEventTitleFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_calendar__ = __webpack_require__(88);
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

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__(88);
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
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

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_menu_voj_menu__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_voj_card_header_model__ = __webpack_require__(56);
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
        this.dataPageHeader = this.data.header;
        if (!this.data.header) {
            this.data.header = new __WEBPACK_IMPORTED_MODULE_4__models_voj_card_header_model__["a" /* VojCardHeaderModel */]();
        }
        this.dataPageHeader = this.data.header;
        // Social buttons for share
        if (this.data.socialButtons && this.data.socialButtons.length > 0) {
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
            selector: 'voj-card',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/'<!-- Generated template for the VojCard component -->\n<div *ngIf="data">\n	<voj-page-header *ngIf="!reduced" [data]="data.header"></voj-page-header>\n	<!-- DEACTIVATE IN CASE OF NEEDING TO SHOW A MAP -->\n	<!-- <voj-map [data]="vojData"></voj-map> -->\n\n	<!-- Card -->\n	<ion-card>\n		<div class="voj-style">\n			<div class="badges-container" [ngClass]="setClasses(data)">\n				<!-- Menu button -->\n				<button *ngIf="data.menu && data.menu.length > 0"\n						class="menu-button" \n						ion-button \n						icon-left \n						clear \n						round \n						small\n						(click)="openMenu($event)">\n						<ion-icon name="menu"></ion-icon>\n				</button>\n\n				<!-- Badges -->\n				<ion-item text-right *ngIf="data.badges && data.badges.length > 0">\n					<!-- Buttons for badges -->\n					<button ion-button icon-only round outline class="voj-badge-button" *ngFor="let badge of data.badges">\n						<ion-icon name="{{ badge.icon }}" (click)="badge.action()"></ion-icon>\n					</button>\n				</ion-item>\n\n				<!-- Cover -->\n				<img [src]="data.cover" *ngIf="data.cover && !reduced" class="{{reduced?\'cover-50\':\'\'}}"/>\n\n				<!-- Thumbnail -->\n				<ion-avatar item-left *ngIf="data.thumbnail">\n					<img [src]="data.thumbnail">\n				</ion-avatar>\n			</div>\n\n			<!-- Title -->\n			<div class="voj-style-header" *ngIf="data.title">\n				<h2>{{data.title.label}}</h2>\n			</div>\n\n			<!-- Segments -->\n			<voj-segment [data]="data.segments"></voj-segment>\n			<!-- Subtitles -->\n			<div *ngIf="data.subtitles && data.subtitles.length > 0">\n				<ion-item text-wrap no-lines *ngFor="let title of data.subtitles" class="voj-subtitle">\n					<ion-icon [name]="title.icon" item-start small></ion-icon>\n					<h3>{{title.label}}</h3>\n				</ion-item>\n			</div>\n\n			<!-- Content -->\n			<ion-card-content class="voj-content" no-margin no-lines *ngIf="data.content">{{data.content}}</ion-card-content>\n		</div>\n\n		<!-- Buttons -->\n		<ion-grid *ngIf="data.actions && data.actions.length > 0">\n			<ion-row>\n				<ion-col text-center *ngFor="let button of data.actions">\n					<button small ion-button icon-left class="voj-button" (click)="button.action($event)">\n						<ion-icon [name]="button.icon"></ion-icon>\n						{{button.label}}\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<!-- Social buttons -->\n		<ion-row>\n			<ion-col >\n\n				<button\n					*ngFor="let button of data.socialButtons"\n					class="social-buttons"\n					left\n					ion-button\n					clear\n					large\n					(click)="button.action($event)">\n					<ion-icon [name]="button.icon">\n					</ion-icon>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n</div>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-card/voj-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* PopoverController */]])
    ], VojCard);
    return VojCard;
}());

//# sourceMappingURL=voj-card.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSegment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__ = __webpack_require__(35);
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
    function VojMap(platform, searchService, eventBus, navigationService, event) {
        this.platform = platform;
        this.searchService = searchService;
        this.eventBus = eventBus;
        this.navigationService = navigationService;
        this.event = event;
        this.hiddenMap = true;
    }
    Object.defineProperty(VojMap.prototype, "data", {
        set: function (value) {
            var _this = this;
            this.eventBus.getMapData().then(function (eventValue) {
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
        var latLng = new google.maps.LatLng(48.855168, 2.344813);
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
                '<img src="' + card.thumbnail + '" style="width:50px;height: 50px"><br />' +
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
    };
    VojMap.prototype.loadJSMap = function (latLng) {
        var mapOptions = {
            center: latLng,
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    VojMap.prototype.updateDetails = function (card) {
        var _this = this;
        var vojNav = { page: __WEBPACK_IMPORTED_MODULE_5__pages_details_details__["a" /* DetailsPage */], isRoot: false };
        this.navigationService.navigate('navigate:details', vojNav);
        this.searchService.loadDetails(card.id).then(function (data) {
            var c = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
            c.id = card.id;
            c.title = card.title;
            c.subtitles = [];
            c.cover = card.cover;
            c.thumbnail = card.thumbnail;
            c.header = card.header;
            c.socialButtons = card.socialButtons;
            c.menu = card.menu;
            c.actions = [{
                    id: '',
                    icon: '',
                    label: 'Recruter',
                    action: function () {
                    }
                }];
            c.segments = card.segments;
            c.address = card.address;
            for (var i = 0; i < card.subtitles.length; i++)
                c.subtitles.push(card.subtitles[i]);
            if (c.address)
                card.subtitles.push({
                    label: data.address,
                    icon: ''
                });
            if (data.languages && data.languages.length > 0) {
                for (var i = 0; i < data.languages.length; i++) {
                    var lang = data.languages[i].label + " " + (data.languages[i].level == 2 ? ' courant ' : ' débutant ');
                    c.subtitles.push({
                        label: lang,
                        icon: ''
                    });
                }
            }
            if (data.qualities && data.qualities.length > 0) {
                for (var i = 0; i < data.qualities.length; i++) {
                    var qual = data.qualities[i].label;
                    c.subtitles.push({
                        label: qual,
                        icon: ''
                    });
                }
            }
            _this.eventBus.publishCardDetails(c);
        });
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
            __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__["a" /* VojEventsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], VojMap);
    return VojMap;
}());

//# sourceMappingURL=voj-map.js.map

/***/ }),

/***/ 625:
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

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeachResultDTO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_text_type__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_map_model__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_voj_card_header_model__ = __webpack_require__(56);




var SeachResultDTO = (function () {
    function SeachResultDTO() {
    }
    SeachResultDTO.prototype.toVojCard = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_0__models_voj_card_model__["a" /* VojCardModel */]();
        result.header = new __WEBPACK_IMPORTED_MODULE_3__models_voj_card_header_model__["a" /* VojCardHeaderModel */]();
        result.header.title = this.name;
        result.id = this.id;
        result.title = new __WEBPACK_IMPORTED_MODULE_1__models_text_type__["a" /* TextType */]();
        result.title.label = this.name;
        result.thumbnail = "http://dev.vitonjob.com/resources/jobyer_avatar.png";
        result.cover = "http://dev.vitonjob.com/resources/726.jpg";
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
    return SeachResultDTO;
}());

//# sourceMappingURL=search-result.dto.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojPageHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__ = __webpack_require__(35);
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
    function VojPageHeader(platform, navCtrl, navigationService, configurationService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navigationService = navigationService;
        this.configurationService = configurationService;
        this.showHeader = true;
        //isDesktop: boolean = true;
        this.canGoBack = false;
        //console.log('this.navCtrl.canGoBack()', this.navCtrl.canGoBack())
        this.config = this.configurationService.configuration;
        this.canGoBack = this.navCtrl.canGoBack();
    }
    VojPageHeader.prototype.goToPreviousPage = function () {
        if (this.config.isLargeScreen) {
            this.navigationService.hide("hide:details");
        }
        else {
            this.navigationService.goBack("pop:details");
        }
    };
    VojPageHeader.prototype.ngOnInit = function () {
        //this.platform.is('core') ? this.isDesktop=true : this.isDesktop=false;
        //this.navCtrl.canGoBack() ? this.canGoBack=true : this.canGoBack=false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojPageHeader.prototype, "data", void 0);
    VojPageHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-page-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/'<div *ngIf="showHeader">\n    <ion-navbar hideBackButton [ngClass]="config.isLargeScreen ? \'\' : \'mobile-header\'">\n        <button class="header-back" (click)="goToPreviousPage()">\n            <ion-icon name="arrow-round-back" *ngIf="!config.isLargeScreen && canGoBack"></ion-icon>\n            <span *ngIf="config.isLargeScreen">\n                <ion-icon name="close"></ion-icon>\n            </span>\n        </button>\n        {{ data.title }}\n        <span *ngIf="!config.isLargeScreen">\n            <button class="page-header-button" *ngFor="let button of data.actions"\n                    ion-fab mini color="primary"\n                    (click)="button.action()">\n                <ion-icon name="{{button.icon}}"></ion-icon>\n            </button>\n        </span>\n    </ion-navbar>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-page-header/voj-page-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_2__config_voj_configuration__["a" /* Configuration */]])
    ], VojPageHeader);
    return VojPageHeader;
}());

//# sourceMappingURL=voj-page-header.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_voj_configuration__ = __webpack_require__(44);
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

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
    function VojForm() {
        this.selectedItems = [];
        this.selectedCustomItems = [];
        this.showList = false;
    }
    VojForm.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    VojForm.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        valid ? console.log(value, valid) : console.log('form invalid');
    };
    VojForm.prototype.onChangeSelectedItems = function (selectedValue) {
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.find(this.selectedItems, function (item) { return item == selectedValue; })) {
            selectedValue ? this.selectedItems.push(selectedValue) : false;
        }
    };
    VojForm.prototype.deleteSelectedItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.pull(this.selectedItems, selectedValue) : false;
    };
    VojForm.prototype.deleteSelectedCustomItem = function (selectedValue) {
        selectedValue ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.pull(this.selectedCustomItems, selectedValue) : false;
    };
    VojForm.prototype.managePassword = function (value) {
        value._type == 'password' ? value._type = 'text' : value._type = 'password';
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], VojForm.prototype, "data", void 0);
    VojForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'voj-form',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/'<!-- Generated template for the VojForm component -->\n<div class="calendar-container">\n    <h2 [innerHTML]="data.title"></h2>\n    <form #formComponent="ngForm" (ngSubmit)="onSubmit(formComponent)" novalidate>\n\n        <div class="dynamical-form" *ngFor="let field of data.fields">\n            <button ion-button class="custom-btn" *ngIf="field.type === \'button\'" [hidden]="!field.visible"\n                    (click)="field.action()">\n                {{ field.label }}\n            </button>\n\n            <ion-list *ngIf="field.type === \'text\' || field.type === \'textarea\'\n							|| field.type === \'number\' || field.type === \'tel\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked [innerText]="field.label"></ion-label>\n                    <ion-input type="{{ field.type }}"\n                               [(ngModel)]="field.value"\n                               pattern="{{field.regex}}"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               name="{{field.name}}"\n                               placeholder="{{field.placeholder}}"\n                               minlength="{{field.min}}" maxlength="{{field.max}}"\n                               (ngModelChange)="field.value = $event"\n                               required="{{field.required}}"\n                               (keyup)="getItems($event, field.dataset)"></ion-input>\n                </ion-item>\n                <div *ngIf="showList && field.dataset" class="input-autocomplete">\n                    <ion-list>\n                        <ion-item *ngFor="let item of itemsForAutocomplete" (click)="selectTip(item.value, field)">\n                            {{ item.value }}\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'week\' || field.type === \'url\' || field.type === \'time\'\n							|| field.type === \'date\' || field.type === \'color\' || field.type === \'mail\'\n							|| field.type === \'month\'">\n                <ion-item class="custom-input">\n                    <ion-label stacked [innerText]="field.label"></ion-label>\n                    <ion-input type="text"\n                               autocomplete="on"\n                               [(ngModel)]="field.value"\n                               pattern="{{field.regex}}"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               name="{{field.name}}"\n                               placeholder="{{field.placeholder}}"\n                               minlength="{{field.min}}" maxlength="{{field.max}}"\n                               (ngModelChange)="field.value = $event"\n                               required="{{field.required}}"></ion-input>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'password\' || field.type === \'search\'">\n                <ion-item class="custom-input custom-input-password">\n                    <ion-label stacked [innerText]="field.label"></ion-label>\n                    <ion-input type="{{ (field.type === \'password\') ? \'password\' : \'text\' }}"\n                               autocomplete="on"\n                               [(ngModel)]="field.value"\n                               pattern="{{field.regex}}"\n                               [hidden]="!field.visible"\n                               [readonly]="field.readonly"\n                               name="{{field.name}}"\n                               placeholder="{{field.placeholder}}"\n                               minlength="{{field.min}}" maxlength="{{field.max}}"\n                               (ngModelChange)="field.value = $event"\n                               required="{{field.required}}" #inputPass></ion-input>\n                    <button ion-button icon-only type="button" item-right\n                            (click)="managePassword(inputPass)">\n                        <ion-icon ios="{{ field.type === \'password\' ? \'ios-eye\' : \'ios-search\'}}"\n                                  md="{{ field.type === \'password\' ? \'ios-eye\' : \'ios-search\'}}"></ion-icon>\n                    </button>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'range\'">\n                <ion-item>\n                    <ion-range min="{{field.min}}" max="{{field.max}}" [(ngModel)]="field.value" color="secondary"\n                               name="{{field.name}}" required="{{field.required}}" [hidden]="!field.visible">\n                        <ion-label range-left>{{field.min}}</ion-label>\n                        <ion-label range-right>{{field.max}}</ion-label>\n                    </ion-range>\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf="field.type === \'select\'">\n                <ion-item class="custom-select">\n                    <ion-label [innerText]="field.label"></ion-label>\n                    <ion-select [(ngModel)]="field.value"\n                                name="{{field.name}}"\n                                [hidden]="!field.visible"\n                                required="{{field.required}}">\n                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                            {{ subSelect.key }}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n\n            <ion-list radio-group class="custom-radio" *ngIf="field.type === \'radio\'"\n                      name="{{field.name}}"\n                      [(ngModel)]="field.value" [ngModelOptions]="{standalone: false}">\n                <div style="display: flex">\n                    <ion-list-header [innerText]="field.label">\n                    </ion-list-header>\n                    <ion-item>\n                        <ion-label [innerText]="field.dataset[0].key"></ion-label>\n                        <ion-radio value="{{field.dataset[0].value}}">\n                        </ion-radio>\n                    </ion-item>\n                </div>\n                <div style="display: flex;min-width: 315px;">\n                    <div style="width: 20%">\n                    </div>\n                    <ion-item>\n                        <ion-label [innerText]="field.dataset[1].key"></ion-label>\n                        <ion-radio value="{{ field.dataset[1].value }}"></ion-radio>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n            <div class="custom-select-container" *ngIf="field.type === \'customSelect\'">\n                <div [innerText]="field.label"></div>\n                <ion-list class="custom-select-btn">\n                    <ion-label stacked [innerText]="field.label"></ion-label>\n                    <ion-item class="custom-select">\n                        <ion-select [(ngModel)]="field.value" name="{{field.name}}"\n                                    (ngModelChange)="onChangeSelectedItems($event)"\n                                    [hidden]="!field.visible"\n                                    required="{{field.required}}">\n                            <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset">\n                                {{ subSelect.value }}\n                            </ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <!--<button ion-button icon-right icon-only class="custom-select-btn-inner">-->\n                    <!--<ion-icon ios="md-add" md="md-add"></ion-icon>-->\n                    <!--</button>-->\n                </ion-list>\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only class="custom-select-btn-attachment-inner"\n                            (click)="deleteSelectedItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n\n            <div class="custom-select-container custom-select2" *ngIf="field.type === \'customTwoSelects\'">\n                <div [innerText]="field.label"></div>\n                <!--ion-list class="custom-select-btn"-->\n                <!--div class="custom-layer"-->\n                <ion-grid fixed no-padding>\n                    <ion-row align-items-center>\n                        <ion-col col-sm-10>\n                                <ion-row>\n\n                                    <ion-item class="custom-select" no-lines>\n                                        <ion-select [(ngModel)]="field.value" name="{{field.name}}"\n                                                    [hidden]="!field.visible"\n                                                    required="{{field.required}}" #customSelect1>\n                                            <ion-option value="{{subSelect.value}}"\n                                                        *ngFor="let subSelect of field.dataset"\n                                                        (ionSelect)="onSelecteCustomItems(subSelect)">\n                                                {{ subSelect.value }}\n                                            </ion-option>\n                                        </ion-select>\n                                    </ion-item>\n                                </ion-row>\n                            <ion-row>\n                                <ion-item class="custom-select" no-lines>\n                                    <ion-select [(ngModel)]="field.value2" name="{{field.name}}"\n                                                [hidden]="!field.visible"\n                                                required="{{field.required}}" #customSelect2>\n                                        <ion-option value="{{subSelect.value}}" *ngFor="let subSelect of field.dataset2"\n                                                    (ionSelect)="onSelecteCustomItems(subSelect)">\n                                            {{ subSelect.value }}\n                                        </ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-row>\n                        </ion-col>\n                        <ion-col>\n                            <button ion-button icon-right icon-only class="custom-select-btn-inner"\n                                    (click)="addCustomSelect(customSelect1, customSelect2)">\n                                <ion-icon ios="md-add" md="md-add"></ion-icon>\n                            </button>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n\n                <!--/div-->\n\n                <!--/ion-list-->\n\n                <div class="custom-select-btn-attachment" *ngFor="let item of selectedCustomItems">\n                    <div>{{ item }}</div>\n                    <button ion-button icon-only small class="custom-select-btn-attachment-inner"\n                            (click)="deleteSelectedCustomItem(item)">\n                        <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <button ion-button class="custom-btn" type="submit"\n                [disabled]="formComponent.invalid">\n            Button\n        </button>\n    </form>\n</div>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-form/voj-form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], VojForm);
    return VojForm;
}());

//# sourceMappingURL=voj-form.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojSearchHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_search_header_model__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_search_query_model__ = __webpack_require__(634);
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
    function VojSearchHeader(element, renderer, platform) {
        this.element = element;
        this.renderer = renderer;
        this.criteriaMode = false;
        this.headerSegment = 'liste';
        this.isWeb = false;
        this.platform = platform;
        this.isWeb = !this.platform.is('cordova');
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
            selector: 'voj-search-header',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/'<ion-header no-border [ngStyle]="{\'backgroundColor\' : isWeb ? \'#00c1a9\' : \'#4c545d\'}">\n	<div class="search-header-container" >\n		<ion-item *ngIf="!criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.main}}"\n					   [(ngModel)]="fullText"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.what}}"\n					   [(ngModel)]="job"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.where}}"\n					   [(ngModel)]="location"></ion-input>\n		</ion-item>\n\n		<ion-item *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.when}}"\n					   [(ngModel)]="timeslot"></ion-input>\n		</ion-item>\n\n		<ion-item  *ngIf="criteriaMode">\n			<ion-input type="text" placeholder="{{searchHeaderData.placeholders.who}}"\n					   [(ngModel)]="name"></ion-input>\n		</ion-item>\n\n		<ion-item item class="toggler-text"  >\n			<span (click)="toggleSearchMode()">\n				{{searchModeLabel}}\n			</span>\n\n		</ion-item>\n\n		<button ion-button icon-only class="search-header-btn" (click)="triggerSearch()">\n			<ion-icon ios="ios-search" md="md-search"></ion-icon>\n		</button>\n\n	</div>\n\n</ion-header>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/components/voj-search-header/voj-search-header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], VojSearchHeader);
    return VojSearchHeader;
}());

//# sourceMappingURL=voj-search-header.js.map

/***/ }),

/***/ 633:
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

/***/ 634:
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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojHeaderWeb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojSegmentModule", function() { return VojSegmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_segment__ = __webpack_require__(615);
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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_navigation_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_environment__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_voj_events_voj_events__ = __webpack_require__(67);
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
    function MyApp(platform, statusBar, splashScreen, configurationService, event, navigationService, translate, vojEvent) {
        var _this = this;
        this.configurationService = configurationService;
        this.event = event;
        this.navigationService = navigationService;
        this.translate = translate;
        this.vojEvent = vojEvent;
        //the root page that will be shown in the contentList nav
        this.rootPageList = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
        //the root page that will be shown in the contentDetails nav
        this.rootPageDetails = __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */];
        this.selectedTab = "searchTab";
        this.showList = true;
        this.showDetails = true;
        this.showMain = true;
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
                    action: Function
                },
                {
                    icon: 'search',
                    label: 'Missions',
                    action: Function
                },
                {
                    icon: 'search',
                    label: 'Compte',
                    action: Function
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
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //determine the main root page according to the screen size
            _this.config.isLargeScreen = (platform.width() >= __WEBPACK_IMPORTED_MODULE_12__config_environment__["a" /* envConfig */].thresholdWidth);
            _this.navigationService.hide('hide:details');
            _this.getMainPage();
        });
        this.listTitle = "Ma liste des cartes";
        this.cards = [{
                title: "Jobyer 1",
                content: "contenu 1",
                actionName: "action 1"
            }, {
                title: "Jobyer 2",
                content: "contenu 2",
                actionName: "action 2"
            }, {
                title: "Jobyer 3",
                content: "contenu 3",
                actionName: "action 3"
            }, {
                title: "Jobyer 4",
                content: "contenu 4",
                actionName: "action 4"
            }, {
                title: "Jobyer 5",
                content: "contenu 5",
                actionName: "action 5"
            }];
        this.initializeTranslation();
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.initialize();
        this.navigationService.initialize(this.nav1, this.nav2, this.nav3, this.showList, this.showDetails, this.showMain);
        this.event.subscribe('hide:list', function () {
            _this.showList = false;
        });
        this.event.subscribe('hide:details', function () {
            _this.showDetails = false;
        });
        this.event.subscribe('hide:main', function () {
            _this.showMain = false;
        });
        this.event.subscribe('navigate:list', function (data) {
            if (data.isRoot) {
                _this.nav1.setRoot(data.page, data.params);
                _this.showList = true;
            }
            else {
                _this.nav1.push(data.page, data.params);
                _this.showList = true;
            }
        });
        this.event.subscribe('navigate:details', function (data) {
            if (data.isRoot) {
                _this.nav2.setRoot(data.page, data.params);
                _this.showDetails = true;
            }
            else {
                _this.nav2.push(data.page, data.params);
                _this.showDetails = true;
            }
        });
        this.event.subscribe('navigate:main', function (data) {
            if (data.isRoot) {
                _this.nav3.setRoot(data.page, data.params);
                _this.showMain = true;
            }
            else {
                _this.nav3.push(data.page, data.params);
                _this.showMain = true;
            }
        });
        this.event.subscribe('pop:list', function () {
            _this.nav1.pop();
        });
        this.event.subscribe('pop:details', function () {
            _this.nav2.pop();
        });
        this.event.subscribe('pop:main', function () {
            _this.nav3.pop();
        });
        /*this.catchNavigationEvents('navigate:list', nav1, showList);
        this.catchNavigationEvents('navigate:details', nav2, showDetails);
        this.catchNavigationEvents('navigate:main', nav3, showMain);*/
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
    /*ionViewDidEnter(){
     if (!this.platform.is('cordova')){

     document.getElementsByClassName('tabbar show-tabbar')[0].style.visibility = 'hidden';
     }
     }*/
    MyApp.prototype.initializeTranslation = function () {
        // Translation configuration
        this.translate.addLangs(['en', 'fr']);
        // Default language
        this.translate.setDefaultLang('en');
        // Use language
        this.translate.use('en');
    };
    /*
    Set the main page according to the screen width
     */
    MyApp.prototype.getMainPage = function () {
        if (!this.config.isLargeScreen) {
            console.log("just one pane");
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */];
        }
        else {
            console.log("many panes");
            this.rootPageMain = __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */];
        }
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/'<ion-split-pane [when]="config.isLargeScreen">\n\n	<!-- logged out menu -->\n	<!--ion-menu id="loggedOutMenu" [content]="content">\n\n	  <ion-header>\n		<ion-toolbar>\n		  <ion-title>Listes</ion-title>\n		</ion-toolbar>\n	  </ion-header>\n\n	  <ion-content class="outer-content">\n\n		<voj-list [title]="listTitle" [cards]="cards"></voj-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<!-- logged in menu ->\n	<ion-menu id="loggedInMenu" [content]="content">\n\n	  <ion-header>\n		<ion-toolbar>\n		  <ion-title>Liste 2</ion-title>\n		</ion-toolbar>\n	  </ion-header>\n\n	  <ion-content class="outer-content">\n\n		<ion-list>\n		  <ion-list-header>\n			Navigate\n		  </ion-list-header>\n		  <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n			<ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n			{{p.title}}\n		  </button>\n		</ion-list>\n\n		<ion-list>\n		  <ion-list-header>\n			Account\n		  </ion-list-header>\n		  <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n			<ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n			{{p.title}}\n		  </button>\n		</ion-list>\n\n		<ion-list>\n		  <ion-list-header>\n			Tutorial\n		  </ion-list-header>\n		  <button ion-item menuClose (click)="openTutorial()">\n			<ion-icon item-left name="hammer"></ion-icon>\n			Show Tutorial\n		  </button>\n		</ion-list>\n\n	  </ion-content>\n\n	</ion-menu>\n\n	<!-- main navigation -->\n	<!-- <voj-header [data]="dataHeader"></voj-header> -->\n	 <voj-header-web [data]="dataHeader" *ngIf="config.isLargeScreen"></voj-header-web>\n	\n	<ion-nav [root]="rootPageList" #contentList [hidden]="!showList" swipeBackEnabled="false" class="voj-style"></ion-nav>\n	<ion-nav [root]="rootPageDetails" #contentDetails [hidden]="!showDetails" swipeBackEnabled="false" class="voj-style"></ion-nav>\n	<ion-nav [root]="rootPageMain" main #contentMain [hidden]="!showMain" swipeBackEnabled="false" class="voj-style"></ion-nav>\n\n	<ion-footer *ngIf="!config.isLargeScreen">\n		<ion-toolbar >\n			<ion-segment [(ngModel)]="selectedTab" (ionChange)="tabChanged($event)">\n					<ion-segment-button value="searchTab" class="segment-button-tab">\n						<div class="voj-segment-title segment-tab"><ion-icon name="search"></ion-icon></div>\n						<div class="voj-segment-subtitle segment-tab">Recherche</div>\n					</ion-segment-button>\n				<ion-segment-button value="advertTab" class="segment-button-tab">\n					<div class="voj-segment-title segment-tab"><ion-icon name="megaphone"></ion-icon></div>\n					<div class="voj-segment-subtitle segment-tab">Annonces</div>\n				</ion-segment-button>\n				<ion-segment-button value="missionTab" class="segment-button-tab">\n					<div class="voj-segment-title segment-tab"><ion-icon name="folder"></ion-icon></div>\n					<div class="voj-segment-subtitle segment-tab">Missions</div>\n				</ion-segment-button>\n				<ion-segment-button value="contactTab" class="segment-button-tab">\n					<div class="voj-segment-title segment-tab"><ion-icon name="contact"></ion-icon></div>\n					<div class="voj-segment-subtitle segment-tab">Compte</div>\n				</ion-segment-button>\n			\n			</ion-segment>\n		</ion-toolbar>\n	</ion-footer>\n\n	<!--<voj-footer *ngIf="!config.isLargeScreen">\n	</voj-footer>-->\n</ion-split-pane>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__config_voj_configuration__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_14__providers_voj_events_voj_events__["a" /* VojEventsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contacts_module__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_module__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details_module__ = __webpack_require__(670);
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
                __WEBPACK_IMPORTED_MODULE_6__details_details_module__["a" /* DetailsPageModule */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_footer_voj_footer_module__ = __webpack_require__(365);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]), __WEBPACK_IMPORTED_MODULE_3__components_voj_footer_voj_footer_module__["a" /* VojFooterModule */]
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojEventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
  Generated class for the VojEventsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var VojEventsProvider = (function () {
    function VojEventsProvider(event) {
        this.event = event;
        console.log('Hello VojEventsProvider Provider');
    }
    // MAP EVENTS
    /**
     * Send an event to set map values
     * @param {Array<VojCardModel>} data
     */
    VojEventsProvider.prototype.setMapData = function (data) {
        this.event.publish('MAP_DATA', data);
    };
    /**
     * Get an event to load map values
     */
    VojEventsProvider.prototype.getMapData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.event.subscribe('MAP_DATA', function (data) {
                resolve(data);
            });
        });
    };
    VojEventsProvider.prototype.subscribeDetailsPage = function (instance) {
        this.detailsCardPage = instance;
    };
    VojEventsProvider.prototype.publishCardDetails = function (card) {
        this.detailsCardPage.updateCard(card);
    };
    /*getMapData () {
      return this.event.subscribe('MAP_DATA', ()=> {return})
    }*/
    /**
     * Navigation via events
     * @param {string} topic
     * @param {VojNavigation} data
     */
    VojEventsProvider.prototype.setMainNavigation = function (data) {
        this.event.publish('NAVIGATE_MAIN', data);
    };
    VojEventsProvider.prototype.getMainNavigation = function () {
    };
    VojEventsProvider.prototype.setDetailsView = function (data) {
        this.event.publish('SHOW_DETAILS', data);
    };
    VojEventsProvider.prototype.getDetailsView = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.event.subscribe('SHOW_DETAILS', function (data) {
                resolve(data);
            });
        });
    };
    VojEventsProvider.prototype.returnPromise = function (topic) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.event.subscribe(topic, function (data) {
                resolve(data);
            });
        });
    };
    VojEventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], VojEventsProvider);
    return VojEventsProvider;
}());

//# sourceMappingURL=voj-events.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_voj_components_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(95);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ContactPage() {
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
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/contact/contact.html"*/'<ion-header no-border>\n	<ion-navbar transparent>\n		<ion-title>\n			Contact\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n		<ion-list-header>Follow us on Twitter</ion-list-header>\n		<ion-item>\n			<ion-icon name="ionic" item-left></ion-icon>\n			@ionicframework\n		</ion-item>\n	</ion-list>\n	\n	<voj-footer [data]="contactButtonsData" [testVar]="testVar"></voj-footer>\n\n</ion-content>'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VojComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voj_calendar_voj_calendar_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card_voj_card_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_footer_voj_footer_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_header_voj_header_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_list_voj_list_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_form_voj_form_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voj_map_voj_map_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__voj_menu_voj_menu_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voj_search_header_voj_search_header_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__voj_segment_voj_segment_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__voj_header_web_voj_header_web_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_12__voj_page_header_voj_page_header_module__["VojPageHeaderModule"]
            ]
        })
    ], VojComponentsModule);
    return VojComponentsModule;
}());

//# sourceMappingURL=voj-components.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojCardModule", function() { return VojCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_card__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voj_menu_voj_menu_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__voj_segment_voj_segment_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voj_map_voj_map_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_6__voj_page_header_voj_page_header_module__["VojPageHeaderModule"],
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojMapModule", function() { return VojMapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_map__ = __webpack_require__(616);
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpRequestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
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

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__ = __webpack_require__(35);
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
    function DetailsPage(navCtrl, navParams, navigationService, eventBus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navigationService = navigationService;
        this.eventBus = eventBus;
        this.card = new __WEBPACK_IMPORTED_MODULE_2__models_voj_card_model__["a" /* VojCardModel */]();
        this.card.id = 0;
        this.eventBus.subscribeDetailsPage(this);
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage.prototype.updateCard = function (c) {
        this.card = c;
    };
    DetailsPage.prototype.noData = function () {
        return !this.card || this.card.id == 0;
    };
    DetailsPage.prototype.hideDetailsView = function () {
        this.navigationService.hide('hide:details');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/'<!--<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>\n\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="hideDetailsView()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content >\n  <voj-card [hidden]="noData()" [data]="card" mode="full" ></voj-card>\n</ion-content>\n'/*ion-inline-end:"/Users/tim/Documents/vitonjob/vitonjob-v2/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_navigation_service__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_voj_events_voj_events__["a" /* VojEventsProvider */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VojPageHeaderModule", function() { return VojPageHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voj_page_header__ = __webpack_require__(627);
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
                __WEBPACK_IMPORTED_MODULE_2__voj_page_header__["a" /* VojPageHeader */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voj_page_header__["a" /* VojPageHeader */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__voj_page_header__["a" /* VojPageHeader */]
            ]
        })
    ], VojPageHeaderModule);
    return VojPageHeaderModule;
}());

//# sourceMappingURL=voj-page-header.module.js.map

/***/ })

},[422]);
//# sourceMappingURL=main.js.map
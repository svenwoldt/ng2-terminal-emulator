"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var terminal_component_1 = require("./terminal.component");
var terminal_service_1 = require("./terminal.service");
var TerminalModule = (function () {
    function TerminalModule() {
    }
    TerminalModule = __decorate([
        core_1.NgModule({
            declarations: [terminal_component_1.TerminalComponent],
            providers: [terminal_service_1.TerminalService],
            imports: [platform_browser_1.BrowserModule],
        }), 
        __metadata('design:paramtypes', [])
    ], TerminalModule);
    return TerminalModule;
}());
exports.TerminalModule = TerminalModule;
//# sourceMappingURL=terminal.module.js.map
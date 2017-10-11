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
require("rxjs/add/operator/map");
var TerminalService = (function () {
    function TerminalService() {
    }
    TerminalService.prototype.prompt = function (config) {
        var _this = this;
        this.me = {};
        var _user, _path, _userPathSeparator, _promptEnd;
        config = config ? config.promptConfiguration : null;
        var build = function () {
            _this.me.text = _user + _userPathSeparator + _path + _promptEnd;
        };
        this.me.resetPath = function () {
            _path = config && config.path ? config.path : '\\';
            build();
        };
        this.me.resetUser = function () {
            _user = config && config.user ? config.user : 'anon';
            build();
        };
        this.me.reset = function () {
            _user = config && config.user != null ? (config.user || '') : 'anon';
            _path = config && config.path != null ? (config.path || '') : '\\';
            _userPathSeparator = config && config.separator != null ? (config.separator || '') : '@';
            _promptEnd = config && config.end != null ? (config.end || '') : ':>';
            build();
        };
        this.me.user = function (user) {
            if (user) {
                _user = user;
                build();
            }
            return _user;
        };
        this.me.path = function (path) {
            if (path) {
                _path = path;
                build();
            }
            return _path;
        };
        this.me.text = '';
        this.me.reset();
        return this.me;
    };
    ;
    TerminalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TerminalService);
    return TerminalService;
}());
exports.TerminalService = TerminalService;
//# sourceMappingURL=terminal.service.js.map
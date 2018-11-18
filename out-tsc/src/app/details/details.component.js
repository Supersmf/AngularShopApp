var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.edit = false;
        this.route.params.subscribe(function (params) { return _this.item$ = params.id; });
    }
    DetailsComponent.prototype.change = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.item$ = params.id; });
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.item$);
        this.data.getShop()
            .subscribe(function (data) {
            data.forEach(function (el) {
                if (el.id == _this.item$) {
                    _this.item$ = el;
                }
            });
        });
    };
    DetailsComponent.prototype.ngOnChanges = function () {
        console.log('hi');
    };
    DetailsComponent = __decorate([
        Component({
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.scss']
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map
import { NgModule, Component, Directive } from '@angular/core';
export var MyFooDirective = (function () {
    function MyFooDirective() {
    }
    MyFooDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[foo]'
                },] },
    ];
    MyFooDirective.ctorParameters = [];
    return MyFooDirective;
}());
export var MyBarDirective = (function () {
    function MyBarDirective() {
    }
    MyBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bar]'
                },] },
    ];
    MyBarDirective.ctorParameters = [];
    return MyBarDirective;
}());
export var MyFooComponent = (function () {
    function MyFooComponent() {
    }
    MyFooComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-foo',
                    template: 'my-foo'
                },] },
    ];
    MyFooComponent.ctorParameters = [];
    return MyFooComponent;
}());
export var MyBarComponent = (function () {
    function MyBarComponent() {
    }
    MyBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-bar',
                    template: 'my-bar'
                },] },
    ];
    MyBarComponent.ctorParameters = [];
    return MyBarComponent;
}());
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MyFooDirective, MyBarDirective, MyFooComponent, MyBarComponent],
                    exports: [MyFooDirective, MyBarDirective, MyFooComponent, MyBarComponent]
                },] },
    ];
    SharedModule.ctorParameters = [];
    return SharedModule;
}());

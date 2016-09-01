import { Component, Input } from '@angular/core';
export var GeneratedComponent000217 = (function () {
    function GeneratedComponent000217() {
        this.myName = "000217";
    }
    GeneratedComponent000217.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000217',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000434 [parentName]=\"myName\"></my-comp-000434>\n      <my-comp-000435 [parentName]=\"myName\"></my-comp-000435>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000217.ctorParameters = [];
    GeneratedComponent000217.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000217;
}());

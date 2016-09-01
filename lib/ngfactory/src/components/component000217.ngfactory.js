var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000217';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/component000434';
import * as import11 from '../../../components/component000435';
import * as import12 from './component000434.ngfactory';
import * as import13 from './component000435.ngfactory';
var renderType_GeneratedComponent000217_Host = null;
var _View_GeneratedComponent000217_Host0 = (function (_super) {
    __extends(_View_GeneratedComponent000217_Host0, _super);
    function _View_GeneratedComponent000217_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent000217_Host0, renderType_GeneratedComponent000217_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent000217_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-comp-000217', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GeneratedComponent0002170(this.viewUtils, this.injector(0), this._appEl_0);
        this._GeneratedComponent000217_0_4 = new import3.GeneratedComponent000217();
        this._appEl_0.initComponent(this._GeneratedComponent000217_0_4, [], compView_0);
        compView_0.create(this._GeneratedComponent000217_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GeneratedComponent000217_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GeneratedComponent000217) && (0 === requestNodeIndex))) {
            return this._GeneratedComponent000217_0_4;
        }
        return notFoundResult;
    };
    return _View_GeneratedComponent000217_Host0;
}(import1.AppView));
function viewFactory_GeneratedComponent000217_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000217_Host === null)) {
        (renderType_GeneratedComponent000217_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GeneratedComponent000217_Host0(viewUtils, parentInjector, declarationEl);
}
export var GeneratedComponent000217NgFactory = new import9.ComponentFactory('my-comp-000217', viewFactory_GeneratedComponent000217_Host0, import3.GeneratedComponent000217);
var styles_GeneratedComponent000217 = [];
var renderType_GeneratedComponent000217 = null;
var _View_GeneratedComponent0002170 = (function (_super) {
    __extends(_View_GeneratedComponent0002170, _super);
    function _View_GeneratedComponent0002170(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent0002170, renderType_GeneratedComponent000217, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent0002170.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'style', 'padding-left: 5px');
        this._text_6 = this.renderer.createText(this._el_5, '\n      ', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'my-comp-000434', null);
        this._appEl_7 = new import2.AppElement(7, 5, this, this._el_7);
        var compView_7 = import12.viewFactory_GeneratedComponent0004340(this.viewUtils, this.injector(7), this._appEl_7);
        this._GeneratedComponent000434_7_4 = new import10.GeneratedComponent000434();
        this._appEl_7.initComponent(this._GeneratedComponent000434_7_4, [], compView_7);
        compView_7.create(this._GeneratedComponent000434_7_4, [], null);
        this._text_8 = this.renderer.createText(this._el_5, '\n      ', null);
        this._el_9 = this.renderer.createElement(this._el_5, 'my-comp-000435', null);
        this._appEl_9 = new import2.AppElement(9, 5, this, this._el_9);
        var compView_9 = import13.viewFactory_GeneratedComponent0004350(this.viewUtils, this.injector(9), this._appEl_9);
        this._GeneratedComponent000435_9_4 = new import11.GeneratedComponent000435();
        this._appEl_9.initComponent(this._GeneratedComponent000435_9_4, [], compView_9);
        compView_9.create(this._GeneratedComponent000435_9_4, [], null);
        this._text_10 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ], [], []);
        return null;
    };
    _View_GeneratedComponent0002170.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.GeneratedComponent000434) && (7 === requestNodeIndex))) {
            return this._GeneratedComponent000434_7_4;
        }
        if (((token === import11.GeneratedComponent000435) && (9 === requestNodeIndex))) {
            return this._GeneratedComponent000435_9_4;
        }
        return notFoundResult;
    };
    _View_GeneratedComponent0002170.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.myName;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._GeneratedComponent000434_7_4.parentName = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.myName;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._GeneratedComponent000435_9_4.parentName = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(2, 'component ', this.context.myName, ', parent is ', this.context.parentName, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GeneratedComponent0002170;
}(import1.AppView));
export function viewFactory_GeneratedComponent0002170(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000217 === null)) {
        (renderType_GeneratedComponent000217 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000217.ts class GeneratedComponent000217 - inline template', 0, import8.ViewEncapsulation.None, styles_GeneratedComponent000217, {}));
    }
    return new _View_GeneratedComponent0002170(viewUtils, parentInjector, declarationEl);
}

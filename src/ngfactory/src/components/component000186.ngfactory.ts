/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000186';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../components/component000372';
import * as import11 from '../../../components/component000373';
import * as import12 from './component000372.ngfactory';
import * as import13 from './component000373.ngfactory';
var renderType_GeneratedComponent000186_Host:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent000186_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _GeneratedComponent000186_0_4:import3.GeneratedComponent000186;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent000186_Host0,renderType_GeneratedComponent000186_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-comp-000186',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GeneratedComponent0001860(this.viewUtils,this.injector(0),this._appEl_0);
    this._GeneratedComponent000186_0_4 = new import3.GeneratedComponent000186();
    this._appEl_0.initComponent(this._GeneratedComponent000186_0_4,[],compView_0);
    compView_0.create(this._GeneratedComponent000186_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.GeneratedComponent000186) && (0 === requestNodeIndex))) { return this._GeneratedComponent000186_0_4; }
    return notFoundResult;
  }
}
function viewFactory_GeneratedComponent000186_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_GeneratedComponent000186_Host === (null as any))) { (renderType_GeneratedComponent000186_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_GeneratedComponent000186_Host0(viewUtils,parentInjector,declarationEl);
}
export const GeneratedComponent000186NgFactory:import9.ComponentFactory<import3.GeneratedComponent000186> = new import9.ComponentFactory<import3.GeneratedComponent000186>('my-comp-000186',viewFactory_GeneratedComponent000186_Host0,import3.GeneratedComponent000186);
const styles_GeneratedComponent000186:any[] = [];
var renderType_GeneratedComponent000186:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent0001860 extends import1.AppView<import3.GeneratedComponent000186> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _GeneratedComponent000372_7_4:import10.GeneratedComponent000372;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _GeneratedComponent000373_9_4:import11.GeneratedComponent000373;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent0001860,renderType_GeneratedComponent000186,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'style','padding-left: 5px');
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'my-comp-000372',(null as any));
    this._appEl_7 = new import2.AppElement(7,5,this,this._el_7);
    var compView_7:any = import12.viewFactory_GeneratedComponent0003720(this.viewUtils,this.injector(7),this._appEl_7);
    this._GeneratedComponent000372_7_4 = new import10.GeneratedComponent000372();
    this._appEl_7.initComponent(this._GeneratedComponent000372_7_4,[],compView_7);
    compView_7.create(this._GeneratedComponent000372_7_4,[],(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_5,'my-comp-000373',(null as any));
    this._appEl_9 = new import2.AppElement(9,5,this,this._el_9);
    var compView_9:any = import13.viewFactory_GeneratedComponent0003730(this.viewUtils,this.injector(9),this._appEl_9);
    this._GeneratedComponent000373_9_4 = new import11.GeneratedComponent000373();
    this._appEl_9.initComponent(this._GeneratedComponent000373_9_4,[],compView_9);
    compView_9.create(this._GeneratedComponent000373_9_4,[],(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([],[
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
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.GeneratedComponent000372) && (7 === requestNodeIndex))) { return this._GeneratedComponent000372_7_4; }
    if (((token === import11.GeneratedComponent000373) && (9 === requestNodeIndex))) { return this._GeneratedComponent000373_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.myName;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._GeneratedComponent000372_7_4.parentName = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.myName;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._GeneratedComponent000373_9_4.parentName = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(2,'component ',this.context.myName,', parent is ',this.context.parentName,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_GeneratedComponent0001860(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.GeneratedComponent000186> {
  if ((renderType_GeneratedComponent000186 === (null as any))) { (renderType_GeneratedComponent000186 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000186.ts class GeneratedComponent000186 - inline template',0,import8.ViewEncapsulation.None,styles_GeneratedComponent000186,{})); }
  return new _View_GeneratedComponent0001860(viewUtils,parentInjector,declarationEl);
}
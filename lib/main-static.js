import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './ngfactory/src/components/app.module.ngfactory';
import { enableProdMode } from '@angular/core';
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

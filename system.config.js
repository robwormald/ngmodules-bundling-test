System.config({
  transpiler: 'typescript',
  typescriptOptions: {},
  map: {
    'app': 'lib',
    'app-aot': 'lib',
    'app-jit': 'lib',
    'zone.js': 'node_modules/zone.js',
    'core-js': 'node_modules/core-js',
    'typescript': 'node_modules/typescript/lib/typescript.js',
    '@angular': 'node_modules/@angular',
    '@angular/core': 'node_modules/@angular/core/esm',
    '@angular/common': 'node_modules/@angular/common/esm',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/esm',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/esm',
    '@ngrx': 'node_modules/@ngrx',
    'angularfire2': 'node_modules/angularfire2',
    'rxjs': 'node_modules/rxjs',
    'firebase': 'node_modules/firebase'

  },
  packages: {
    'app': {
      defaultExtension: 'js',
      main: 'main.jit.js'
    },
    'app-aot': {
      defaultExtension: 'js',
      main: 'main-static.js'
    },
    'app-jit': {
      defaultExtension: 'js',
      main: 'main.js'
    },
    'zone.js': {
      defaultExtension: 'js'
    },
    'core-js': {
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angularfire2': {
      defaultExtension: 'js',
      main: 'angularfire2.js'
    },
    'firebase': {
      defaultExtension: 'js',
      main: 'firebase-browser.js'
    },
    '@ngrx/store': {
      defaultExtension: 'js',
      main: 'index.js'
    },
    '@ngrx/core': {
      defaultExtension: 'js',
      main: 'index.js'
    }
  }
});

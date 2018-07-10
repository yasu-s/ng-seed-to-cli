// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const items = [
    require.context('../../src/client/', true, /\.spec\.ts$/)
];

for (const ctx of items) {
    // And load the modules.
    ctx.keys().map(key => {
        if (ctx(key).hasOwnProperty('main')) {
            ctx(key).main();
        }
        return key;
    }).map(ctx);
}

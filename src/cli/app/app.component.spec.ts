import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));

    it('onclick', fakeAsync(() => {
        // setup
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        // exercise
        app.onClick();
        tick();

        // verify
        expect('aaa').toBe('');
    }));
});

import { Component } from '@angular/core';

/**
 * サンプルコンポーネント
 */
@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.css']
})
export class AppComponent {

// #region fields

    /** タイトル */
    title = 'app';

// #endregion

// #region constructor

    /**
     * コンストラクタ
     */
    constructor() {
        //
    }

// #endregion

// #region methods

    /**
     * クリックイベント
     */
    onClick(): void {
        alert('aaa');
    }

// #endregion

}

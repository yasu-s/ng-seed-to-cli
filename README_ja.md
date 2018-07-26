# 概要  

Angular Seed で作成したプロジェクトを Angular CLI に移行するサンプルプロジェクトです。  

# 動作環境  

* Node.js 8.x  
* Angular 6.x  
* Visual Studio Code 1.20以上  
  * 拡張機能 Debugger for Chrome  

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-seed-to-cli.git
```

## 2. パッケージインストール  

```
cd ng-seed-to-cli
npm install
```

## 3. サンプルの起動  

### Angular Seedでの起動

```
npm start
```

### Angular CLIでの起動  

```
npm run ng:serve
```

# NPM Script 一覧  

## Angular Seed 

<table>
    <tr>
        <th>コマンド</th>
        <th>概要</th>
    </tr>
    <tr>
        <td><strong>npm start</strong></td>
        <td>デバッグ実行を行います。</td>
    </tr>
    <tr>
        <td><strong>npm run test</strong></td>
        <td>単体テストが実行されます。</td>
    </tr>
    <tr>
        <td><strong>npm run karma.start-debug</strong></td>
        <td><strong>npm run test</strong>実行後、デバッグ実行できます。</td>
    </tr>
</table>

## Angular CLI  

<table>
    <tr>
        <th>コマンド</th>
        <th>概要</th>
    </tr>
    <tr>
        <td><strong>npm run ng:serve</strong></td>
        <td>デバッグ実行を行います。</td>
    </tr>
    <tr>
        <td><strong>npm run ng:test</strong></td>
        <td>単体テストが実行されます。</td>
    </tr>
</table>

# Visual Studio Code でのデバッグ  

## Angular Seed 

1. `npm start` または `npm run karma.start-debug` で起動する。  
1. Visual Studio Code の デバッグメニューから`Attach to Chrome - Angular Seed`でデバッグ実行をする。  

## Angular CLI  

1. `npm run ng:serve` または `npm run ng:test` で起動する。  
1. Visual Studio Code の デバッグメニューから`Attach to Chrome - Angular CLI`でデバッグ実行をする。  


# Angular Seed からの変更箇所  

## package.json  

devDependenciesに以下を追加する。  

* @angular/cli  
* @angular-devkit/build-angular  
* typescript  

### Angular CLI関連のファイル追加  

#### ビルド向け  

* angular.json
* config/ng-cli/index.html
* config/ng-cli/main.ts
* config/ng-cli/polyfills.ts 
* config/ng-cli/tsconfig.app.json

#### テスト向け  

* angular.json
* config/ng-cli/test.ts
* config/ng-cli/polyfills.ts 
* config/ng-cli/tsconfig.spec.json  

### Angular Seed の設定ファイル置き換え  

src/client/app/shared/config/env.config.ts は Angular Seed の tools/env/dev.ts 等からAngularSeedでのビルド時に設定を読み込みます。  
Angular CLI ではビルドエラーになるのでビルド時に設定ファイルを差し替えます。

```
"fileReplacements": [
    {
        "replace": "src/client/app/shared/config/env.config.ts",
        "with": "src/client/app/shared/config/env.config.test.ts"
    }
]
```

# 参考URL  

* Angular Seed: https://github.com/mgechev/angular-seed  
* Angular CLI: https://cli.angular.io/  



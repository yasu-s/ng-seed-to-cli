# 概要  

Angular Seed で作成したプロジェクトを Angular CLI に移行するサンプルプロジェクトです。  

# 変更箇所  

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

src/client/app/shared/config/env.config.ts はAngular Seed の tools/env/dev.ts 等からAngularSeedでのビルド時に設定を読み込みます。  
Angular CLI ではビルドエラーになるのでビルド時に設定ファイルを差し替えます。

```
"fileReplacements": [
    {
        "replace": "src/client/app/shared/config/env.config.ts",
        "with": "src/client/app/shared/config/env.config.test.ts"
    }
]
```





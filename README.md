# Overview  

Sample project to migrate project created with Angular Seed to Angular CLI.  

# Changes  

## package.json  

Add the following to devDependencies.  

* @angular/cli  
* @angular-devkit/build-angular  
* typescript  

### Add Angular CLI related files  

#### For build  

* angular.json
* config/ng-cli/index.html
* config/ng-cli/main.ts
* config/ng-cli/polyfills.ts 
* config/ng-cli/tsconfig.app.json

#### For test  

* angular.json
* config/ng-cli/test.ts
* config/ng-cli/polyfills.ts 
* config/ng-cli/tsconfig.spec.json  

### Angular Seed configuration file replacement  

Since Angular CLI will be a build error, replace the configuration file at build time.

```
"fileReplacements": [
    {
        "replace": "src/client/app/shared/config/env.config.ts",
        "with": "src/client/app/shared/config/env.config.test.ts"
    }
]
```





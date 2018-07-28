# Overview  

Sample project to migrate project created with Angular Seed to Angular CLI.  

# System requirements  

* Node.js 8.x  
* Angular 6.x  
* Visual Studio Code 1.20 or higher  
  * Extension Debugger for Chrome  

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-seed-to-cli.git
```

## 2. Installing packages  

```
cd ng-seed-to-cli
npm install
```

## 3. Launch sample application  

### Launch Angular Seed

```
npm start
```

### Launch Angular CLI  

```
npm run ng:serve
```

# NPM Script list  

## Angular Seed 

<table>
    <tr>
        <th>Command</th>
        <th>Overview</th>
    </tr>
    <tr>
        <td><strong>npm start</strong></td>
        <td>Execute debugging.</td>
    </tr>
    <tr>
        <td><strong>npm run test</strong></td>
        <td>The unit test is executed.</td>
    </tr>
    <tr>
        <td><strong>npm run karma.start-debug</strong></td>
        <td><strong>npm run test</strong> after execution, debugging can be executed.</td>
    </tr>
</table>

## Angular CLI  

<table>
    <tr>
        <th>Command</th>
        <th>Overview</th>
    </tr>
    <tr>
        <td><strong>npm run ng:serve</strong></td>
        <td>Execute debugging.</td>
    </tr>
    <tr>
        <td><strong>npm run ng:test</strong></td>
        <td>The unit test is executed.</td>
    </tr>
</table>

# Debugging with Visual Studio Code  

## Angular Seed 

1. `npm start` or `npm run karma.start-debug` to start.  
1. Run debugging with `Attach to Chrome - Angular Seed` from the debug menu of Visual Studio Code.  

## Angular CLI  

1. `npm run ng:serve` or `npm run ng:test` to start.  
1. Run debugging with `Attach to Chrome - Angular CLI` from the debug menu of Visual Studio Code.  

# Changes from Angular Seed  

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

# Reference URL  

* Angular Seed: https://github.com/mgechev/angular-seed  
* Angular CLI: https://cli.angular.io/  





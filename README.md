# babel-loader-lost-polyfills-demo

Reproduce the issue with missing polyfills.

1. Install dependencies
```
yarn
```

2. Run compilation

```
yarn build
```


3. See that the output `dist/main.js` does not include the polyfills
 - NO POLYFILLS printed to the console
 - or just search for `flat:` in that file
4. Remove one of the presets from the `webpack.config.js`
5. Compile again
 - POLYFILLS ARE PRESENT printed to the console
 - or just search for `flat:` in that file

```
yarn build
```
6. See that the output `dist/main.js` includes the polyfills (search for `flat:`)

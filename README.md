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


3. See that the output `dist/main.js` does not include the polyfills (search for `flat:`)
4. Remove `'react-app'` from the `webpack.config.js`
5. Compile again

```
yarn build
```
6. See that the output `dist/main.js` includes the polyfills (search for `flat:`)

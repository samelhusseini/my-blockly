# my-blockly [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A custom Blockly.

## Installation

### Yarn
```
yarn add my-blockly
```

### npm
```
npm install my-blockly --save
```

## Usage

```js
import * as Blockly from 'my-blockly';

// Inject Blockly.
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolboxCategories,
});
```

## License
Apache 2.0

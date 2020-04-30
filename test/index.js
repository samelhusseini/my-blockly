/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Plugin test.
 */

import {toolboxCategories, addGUIControls} from '@blockly/dev-tools';
import Blockly from '../src/index';

/**
 * Test page startup, sets up Blockly.
 */
function start() {
  const defaultOptions = {
    toolbox: toolboxCategories,
    renderer: 'zelos',
  };
  addGUIControls((options) => {
    return Blockly.inject('blocklyDiv', options);
  }, defaultOptions);
}

document.addEventListener('DOMContentLoaded', start);

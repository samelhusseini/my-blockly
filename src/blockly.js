/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import './core/workspace_svg';
import './core/toolbox';

// Monkey patch inject.
const oldInject = Blockly.inject;
Blockly.inject = function(container, options) {
  console.log('Monkey patch inject');

  return oldInject.call(this, container, options);
};
// Mixin remaining methods on the prototype.
Blockly.utils.object.mixin(Blockly.inject, oldInject);

export {
  Blockly,
};



import * as Blockly from 'blockly';

/**
 *
 */
export class Toolbox extends Blockly.Toolbox {
  /**
   * @override
   */
  setColour_(colourValue, childOut, categoryName) {
    super.setColour_(colourValue, childOut, categoryName);
    childOut.hexColour =
        Blockly.utils.colour.blend('#000', childOut.hexColour, 0.3);
  }
}

Blockly.Toolbox = Toolbox;


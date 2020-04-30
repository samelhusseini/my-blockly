

import * as Blockly from 'blockly';

const CUSTOM_SVG_SIZE = 10;

/**
 *
 */
export class WorkspaceSvg extends Blockly.WorkspaceSvg {
  /**
   * Create the workspace DOM elements.
   * @param {string=} opt_backgroundClass Either 'blocklyMainBackground' or
   *     'blocklyMutatorBackground'.
   * @return {!Element} The workspace's SVG group.
   */
  createDom(opt_backgroundClass) {
    const dom = super.createDom(opt_backgroundClass);

    console.log(Blockly.Msg['CustomMessage']);

    // Only add custom SVG on main workspace.
    if (this.options.parentWorkspace) {
      return dom;
    }

    // Add custom SVG to the dom.
    this.customSvg_ = Blockly.utils.dom.createSvgElement('g', {
      'class': 'blocklyCustomDiv',
    }, dom);
    Blockly.utils.dom.createSvgElement('circle',
        {
          'r': CUSTOM_SVG_SIZE * 2,
          'stroke-width': 10,
        }, this.customSvg_);

    return dom;
  }

  /**
   * Resize and reposition all of the workspace chrome (toolbox,
   * trash, scrollbars etc.)
   * This should be called when something changes that
   * requires recalculating dimensions and positions of the
   * trash, zoom, toolbox, etc. (e.g. Window resize).
   */
  resize() {
    super.resize();

    if (!this.customSvg_) {
      return;
    }

    const margin = CUSTOM_SVG_SIZE + 40;
    const metrics = /** @type {Blockly.Metrics} */ (this.getMetrics());
    let top;
    let left;
    if (metrics.toolboxPosition == Blockly.TOOLBOX_AT_LEFT ||
      (this.horizontalLayout && !this.RTL)) {
      // Toolbox starts in the left corner.
      left = metrics.viewWidth + metrics.absoluteLeft - margin;
    } else {
      // Toolbox starts in the right corner.
      left = margin;
    }

    if (metrics.toolboxPosition == Blockly.TOOLBOX_AT_BOTTOM) {
      top = metrics.viewHeight + metrics.absoluteTop - margin;
    } else {
      top = margin;
    }

    this.customSvg_.setAttribute('transform',
        `translate(${left}, ${top})`);
  }
}

Blockly.WorkspaceSvg = WorkspaceSvg;

Blockly.Css.register([
  `.blocklyCustomDiv {
    cursor: pointer;
  }
  .blocklyCustomDiv > circle {
    fill: #fff;
    stroke: #ff00ff;
  }
  .blocklyCustomDiv:hover > circle {
    fill: #000;
    stroke: #ff0000;
  }
  `,
]);

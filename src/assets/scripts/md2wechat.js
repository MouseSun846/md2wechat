import * as marked from 'marked';
import { WxRenderer } from './renderers/wx-renderer.js';
import FuriganaMD from '../../libs/FuriganaMD.js';
import { inlineCss } from './inline-css.js';
const wxRenderer = new WxRenderer();
function renderWeChat(source) {
  let output = marked(source, { renderer: wxRenderer.getRenderer() });
  if (wxRenderer.hasFootnotes()) {
    // 去除第一行的 margin-top
    output = output.replace(/(style=".*?)"/, '$1;margin-top: 0"');
    // 引用注脚
    output += wxRenderer.buildFootnotes();
    // 附加的一些 style
    output += wxRenderer.buildAddition();
  }
  return output;
}

export { renderWeChat, WxRenderer, FuriganaMD, inlineCss };

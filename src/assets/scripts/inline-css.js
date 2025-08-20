import juice from 'juice/client';

export function inlineCss(html, style) {
  return juice(`<style>${style}</style>${html}`, {
    applyStyleTags: true,
    removeStyleTags: true,
    preserveMediaQueries: false,
    preserveFontFaces: false,
    applyWidthAttributes: false,
    applyHeightAttributes: false,
    applyAttributesTableElements: false,
    inlinePseudoElements: true,
    xmlMode: false,
    preserveImportant: false,
  });
}
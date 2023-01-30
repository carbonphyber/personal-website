/* eslint-env browser */
export function scrollIntoViewOfLinkAnchor (evt) {
  if (!(evt instanceof MouseEvent)) {
    throw TypeError('scrollIntoViewOfLinkAnchor expects a MouseEvent as first parameter');
  }
  const { target } = evt;
  if (!target || typeof target.getAttribute !== 'function') return;
  const thisLinkHref = target.getAttribute('href') || '';
  const anchorTargetElementId = String(thisLinkHref).substring(1);
  const anchorTargetElement = document.getElementById(anchorTargetElementId);
  if (anchorTargetElement) {
    anchorTargetElement.scrollIntoView();
    evt.preventDefault();
  }
}

/* eslint-env browser */
export function scrollIntoViewOfLinkAnchor (evt) {
  // using `typeof evt.clientX !== 'undefined'` as a proxy for identifying MouseEvent
  // We can detect evt's constructor is MouseEvent (in browser), but can't detect if the
  // constructor is SyntheticBaseEvent as we would need to export that from React library.
  if (typeof evt !== 'object' || typeof evt.clientX !== 'number') {
    throw TypeError('scrollIntoViewOfLinkAnchor expects a MouseEvent or SyntheticBaseEvent as first parameter');
  }
  const { target } = evt;
  if (typeof target !== 'object') {
    throw TypeError('scrollIntoViewOfLinkAnchor expects a MouseEvent or SyntheticBaseEvent as first parameter');
  }
  if (!target || typeof target.getAttribute !== 'function') return;
  const thisLinkHref = target.getAttribute('href') || '';
  const anchorTargetElementId = String(thisLinkHref).substring(1);
  const anchorTargetElement = document.getElementById(anchorTargetElementId);
  if (anchorTargetElement) {
    anchorTargetElement.scrollIntoView();
    evt.preventDefault();
  }
}

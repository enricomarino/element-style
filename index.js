/**
 * element-css
 * Element CSS component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Style`
 */

module.exports = Style;

/**
 * Properties to ignore appending "px".
 */

var ignore = {
  columnCount: true,
  fillOpacity: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
};

/**
 * Set `el` css values.
 *
 * @param {Element} el
 * @param {Object} obj
 * @return {Element}
 * @api public
 */

function Style (el) {
  this.el = el;
}

/**
 * css
 * Set css
 * 
 * @param {Object} obj CSS properties
 * @return {Style} this for chaining
 */

Style.prototype.css = function (obj) {
  var el = this.el;
  var key;
  var val;
  for (var key in obj) {
    val = obj[key];
    if ('number' == typeof val && !ignore[key]) {
      val += 'px';
    }
    el.style[key] = val;
  }
  return this;
};

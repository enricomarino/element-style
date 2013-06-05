/**
 * element-css
 * Element CSS component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

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
 * css
 * Set css
 * 
 * @param {Object} obj CSS properties
 * @return {Style} this for chaining
 */

exports.css = function (obj) {
  var el = this.el;
  var key;
  var val;
  for (key in obj) {
    val = obj[key];
    if ('number' == typeof val && !ignore[key]) {
      val += 'px';
    }
    el.style[key] = val;
  }
  return this;
};

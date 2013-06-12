/**
 * element-style
 * style plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `style`
 */

module.exports = style;

/**
 * style
 */

function style (element) {

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
   * style
   * get/set style
   * 
   * @param {String|Object} obj CSS properties
   * @return {Style} this for chaining
   */
  
  element.prototype.style = function (obj) {
    if (1 === arguments.length) {
      if (typeof obj === "string") {
        return this.get_style(obj);
      }
      return this.set_style_all(obj);
    }
    return this.set_style(obj, arguments[1]);
  };

  /**
   * get_style
   * get style.
   * 
   * @param {String} key key
   * @return {String} style
   * @api public
   */
  
  element.prototype.get_style = function (key) {
    return this.el.style[key];
  };

  /**
   * set_style
   * set style
   * 
   * @param {String} key key
   * @return {String} style
   * @api public
   */
  
  element.prototype.set_style = function (key, value) {
    if (typeof val === 'number' && !ignore[key]) {
      value += 'px';
    }
    this.el.style[key] = value;
    return this;
  };
  
  /**
   * set_style_all
   * set style all
   * 
   * @param {Object} obj CSS properties
   * @return {Style} this for chaining
   */
  
  element.prototype.set_style_all = function (obj) {
    var key;
    for (key in obj) {
      this.set_style(key, obj[key]);
    }
    return this;
  };

  return element;
}

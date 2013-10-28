var ObjectElement = require('object-element');
    require('object-element-selection');

/**
 * Insert a sibling before this element
 */
ObjectElement.prototype.before = function (element, shift) {
  element = element.OBJECT_ELEMENT ? element.element : element;
  this.parent.element.insertBefore(element, this.element);
}

/**
 * Insert a sibling after this element
 */
ObjectElement.prototype.after = function (element, shift) {
  if (this.nextSibling) {
    this.nextSibling.before(element);
  } else {
    this.parent.append(element);
  }
}

/**
 * Insert this element before the target sibling
 */
ObjectElement.prototype.insertBefore = function (targetSibling, shift) {
  ObjectElement.wrapElement(targetSibling).before(this);
}

/**
 * Insert this element after the target sibling
 */
ObjectElement.prototype.insertAfter = function (targetSibling, shift) {
  ObjectElement.wrapElement(targetSibling).after(this);
}


/**
 * Append an element after the last child or the position of the index
 * @param  {ObjectElement | Element element}
 * @param  [Number index]
 * @return {Null}
 */
ObjectElement.prototype.append = function (element, index) {
  element = element.OBJECT_ELEMENT ? element.element : element;

  var child;

  if (index) {
    child = this.children[index];
  }

  if (child) {
    child.after(element);
  } else {
    return this.element.appendChild(element);
  }
}

/**
 * Append an element before the first child or the position of the index
 * @param  {ObjectElement | Element element}
 * @param  [Number index]
 * @return {Null}
 */
ObjectElement.prototype.prepend = function (element, index) {
  element = element.OBJECT_ELEMENT ? element.element : element;

  var children = this.children;
  var child;

  if (children.length === 0) {
    return this.append(element);
  }

  if (index) {
    child = this.children[index];
  }

  if (child) {
    child.before(element);
  } else {
    this.firstChild.before(element);
  }
}

/**
 * Append element itself after another element's last child or the position of
 * the index
 * @param  {ObjectElement | Element element}
 * @param  [Number index]
 * @return {Null}
 */
ObjectElement.prototype.appendTo = function (element, index) {
  ObjectElement.wrapElement(element).append(this, index);
}

/**
 * Append element itself before another element's first child or the position
 * of the index
 * @param  {ObjectElement | Element element}
 * @param  [Number index]
 * @return {Null}
 */
ObjectElement.prototype.prependTo = function (element, index) {
  ObjectElement.wrapElement(element).prepend(this, index);
}

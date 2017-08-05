var IEvent = {
  EventListenerAdd: function (el, eventType, eventFunction) {
    if (el.addEventListener) {
      el.addEventListener(eventType, eventFunction, false);
    } else if (el.attachEvent) {
      el.attachEvent("on" + eventType, eventFunction);
    } else {
      var prefix = "on" + eventType;
      el.prefix = eventFunction;
    }
  },
  EventListenerRemove: function (el, eventType, eventFunction) {
    if (el.removeEventListener()) {
      el.removeEventListener(eventType, eventFunction, false);
    } else if (el.detachEvent) {
      el.detachEvent("on" + eventType, eventFunction);
    } else {
      var prefix = "on" + eventType;
      el.prefix = null;
    }
  },
  getEvent: function (event) {
    return event || window.event;
  },
  getTarget: function (event) {
    return event.target || window.event.target || event.srcElement;
  },
  IpreventDefault: function (event) {
    if (event.cancelable) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  IstopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  IstopImmediatePropagation: function (event) {
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
  }
}

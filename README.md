# IEvent
Javascript event functions for all browser

# Examples
```
var myButton = document.getElementById('myButton');
var myForm = document.getElementById('myForm');

IEvent.EventListenerAdd(myButton, 'click', function (event) {
  console.log(IEvent.getEvent(event));
};

IEvent.EventListenerAdd(myForm, 'submit', function (event) {
  IEvent.IpreventDefault(IEvent.getEvent(event));
});

IEvent.EventListenerRemove(myButton, 'click', function () {
  console.log('Removed click event listener for myButton');
});

IEvent.EventListenerRemove(myForm, 'submit', function () {
  console.log('Removed submit event listener for myForm');
});
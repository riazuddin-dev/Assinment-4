
# JavaScript DOM Basic Questions & Answers

## 1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById()  
→ Selects only one element by ID.

getElementsByClassName()  
→ Selects multiple elements by class name.  
→ It is a live collection (updates automatically).

querySelector()  
→ Selects the first matching element.  
→ Uses CSS selector.

querySelectorAll()  
→ Selects all matching elements.  
→ It is a static NodeList (does not update automatically).

## 2. How to Create and Insert a New Element into the DOM

Use document.createElement() to create a new element.  
Add content to it.  
Use appendChild() to insert it into the DOM.

Example:

const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);

## 3. What is Event Bubbling?

Event Bubbling means when an event happens on a child element,
it moves up to the parent, then parent’s parent, and continues upward.


## 4. What is Event Delegation?

Event Delegation means adding an event listener to a parent element
to handle events for its child elements.

It improves performance and works for dynamic elements.

## 5. Difference between preventDefault() and stopPropagation()

preventDefault()
→ Stops the browser’s default action.

stopPropagation()
→ Stops the event from bubbling to parent elements.

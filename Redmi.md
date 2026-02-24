# JavaScript DOM Basic Questions & Answers

## 1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

 1.getElementById → Sudhu 1 ta element dhore (ID diye).  

2.getElementsByClassName → Onek gula element dhore (class diye, live collection).  
3.querySelector → First matching element dhore (CSS selector diye).  
4.querySelectorAll → Sob matching element dhore (static NodeList).

---

## 2. How to create and insert a new element into the DOM?

document.createElement() diye element banai → content add kori → appendChild() diye DOM e add kori.

Example:

```js
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);


3. What is Event Bubbling?

Event Bubbling mane child e event hole seta parent → tar parent → evabe upor e uthe.

4. What is Event Delegation?

Parent e event listener diye child gula handle kora.
Eta performance valo kore ar dynamic element e kaj kore.

5. Difference between preventDefault() and stopPropagation()

preventDefault() → Browser er default kaj bondho kore.
stopPropagation() → Event bubbling bondho kore.
let elForm = document.querySelector(".site-form");
let elShoppingList = document.querySelector(".shopping-list");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let list = [];
  let elShoppingListValue = elShoppingList.value;
  elShoppingList.value = "";
  list.push(elShoppingListValue);
  
  for (item of list) {
    let elShoppingList = document.createElement("li");
    let text = document.createElement("p");
    elShoppingList.setAttribute("class", "item");
    text.setAttribute("class", "text");
    text.textContent = elShoppingListValue;
    elShoppingList.appendChild(text);
    elList.appendChild(elShoppingList);
  }
});


// ===========================================================================================================================================


let elBuzzForm = document.querySelector(".fizz-form");
let elCanculator = document.querySelector(".calculator");
let elText = document.querySelector(".buzz-text");

elBuzzForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  elCanculatorValue = elCanculator.value;
	elCanculator.value = "";
	let fizz = 9;
	let buzz = 2;
	let zero = 0;

  if (elCanculatorValue % fizz == zero & elCanculatorValue % buzz == zero)  {
		elText.textContent = "It is divided by both 9 and 2 without remainder";
	} else if (elCanculatorValue % fizz == zero) {
    elText.textContent = "It is divided by 9 without any remainder";
  } else if (elCanculatorValue % buzz == zero) {
    elText.textContent = "It is divisible by 2 without remainder";
  } else {
    elText.textContent = "It is divided into 9 and 2 with the remainder";
  }
});
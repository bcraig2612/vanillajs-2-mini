document.querySelector("form").addEventListener("submit", addToDo);

function addToDo(event) {
  // preventing the default form action from running
  event.preventDefault();
  // create a new list item
  const item = document.createElement("li");
  // set the text of the newly created list item to the value of the input with an id of "item".
  item.innerText = document.getElementById("item").value;
  //
  item.addEventListener("click", completeToDo);
  // create a new button element
  const button = document.createElement("button");
  //adding an "X" to the inside of a button
  button.innerText = "X";
  // add removeToDo function to the button of each list item
  button.addEventListener("click", removeToDo);
  // add the remove button to the newly created list item
  item.appendChild(button);
  // select the unordered list that will hold the newly created li
  const list = document.querySelector("ul");
  // attach the newly created li to the unordered list
  list.appendChild(item);
  // user experience: clear input out after submission
  document.getElementById("item").value = "";
}
// removeToDo function as a callback to the button of each list item created
function removeToDo(event) {
  event.target.parentNode.remove();
}
function completeToDo(event) {
  // value of the "aria-check" attribute list item that was clicked
  const value = event.target.getAttribute("aria-checked");
  // if the value is 'false' set it to 'true'
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}

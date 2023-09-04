var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
};

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.addEventListener("click", () => {
    ul.removeChild(li);
  });
  li.appendChild(deleteButton);
};

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
};

function addListAfterEnter(enter) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
};
button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterEnter);

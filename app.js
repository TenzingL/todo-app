const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function createTodoItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "12px";

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  list.appendChild(createTodoItem(text));
  input.value = "";
  input.focus();
});

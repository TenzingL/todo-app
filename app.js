const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function createTodoItem(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  span.addEventListener("click", () => {
    span.style.textDecoration =
      span.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "12px";

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
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

// Minor update for PR comparison

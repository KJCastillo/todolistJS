const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <h6>${todo}</h6>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  };
  //if on click that specific item has a class name of delete, it'll remove
  //deleting parent elment, which is entire li tag
});

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => {
        return !todo.textContent.includes(term);
    })
    .forEach((todo) => {
        todo.classList.add('.filtered');
    })
    //checks search term in li children, if included it does not add filtered class to li
};

search.addEventListener('keyup', (e) => {
    const term = search.value.trim();
    filterTodos(term);
});
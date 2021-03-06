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
  }
  //if on click that specific item has a class name of delete, it'll remove
  //deleting parent elment, which is entire li tag
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  //checks search term in li children
  //if term is not in task, filtered class get added to it to not display

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
  //this function checks term to update if term is updated while typing
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

//digital clock
const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

//date
const date = document.querySelector(".date");
const now = new Date();

const today = () => {
  const day = dateFns.format(now, "dddd, MMMM Do YYYY");
  //add dateFns script in HTML
  const html = `
  <span>${day}</span>  
  `;

  date.innerHTML = html;
};

today();
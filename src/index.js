document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.querySelector('#new-task-description').value);
    buildToDo(e.target.querySelector('#new-task-description').value);
    form.reset();
  })
});

function buildToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}
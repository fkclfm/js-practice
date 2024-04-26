const todoInput = document.querySelector('#todo-input');

const createTodo = function () {
  const todoList = document.querySelector('#todo-list');
  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');
  const newBtn = document.createElement('button');

  newBtn.addEventListener('click', () => {
    newLi.classList.toggle('complete');
  });

  newLi.addEventListener('dblclick', () => {
    newLi.remove();
  });

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newBtn);
  todoList.appendChild(newLi);
  newLi.appendChild(newSpan);
  todoInput.value = '';  
};
const keyCodeCheck = function () {
  if(window.event.keyCode === 13 && todoInput.value !== '') {
    createTodo();
  }
};

//li 전체 삭제 기능 함수
const deleteAll = function () {
   const liList = document.querySelectorAll('li');
   for(let i = 0; i < liList.length; i++) {
    liList[i].remove();
   }
}
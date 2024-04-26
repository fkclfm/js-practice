const todoInput = document.querySelector('#todo-input');
//내부로 들어가게 되면 함수 내부에서만 동작하는 변수가 되어
// save함수에서 못쓰게된다.
const todoList = document.querySelector('#todo-list');

const createTodo = function () {
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
  saveItemsFn();
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
};

//로컬 스토리지로 to-do list 저장
const saveItemsFn = function () {
  const saveItems = [];
  for(let i = 0; i < todoList.children.length; i++) {
    //취소선까지 저장 위해 객체 작성
    const todoObj = {
      contents : todoList.children[i].querySelector('span').textContent,
      complete : todoList.children[i].classList.contains('complete')
    };
    saveItems.push(todoObj);
  }
  console.log(saveItems);
}
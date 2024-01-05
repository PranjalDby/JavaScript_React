const todoArray = [];
const elementTodoVal = document.querySelector(".js-input");
const elementTodoDate = document.querySelector('.js-el-date');

function addTodo() {
    
    const inputtedValue = elementTodoVal.value;
    const inputtedDate = elementTodoDate.value;
    
    if ((inputtedValue != '' && inputtedDate != '') && !todoArray.includes(inputtedValue)) {
        todoArray.push({
            name: inputtedValue,
            date:inputtedDate
        });
        elementTodoVal.value = '';
        elementTodoDate.value = '';
        updateTodo();
    }
}
const elementInfo = document.querySelector('#js-show-info');
elementTodoVal.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
document.querySelector('.btn').addEventListener('click', () => {
    addTodo();
});

function updateTodo() {
    let todoHtml = '';
    todoArray.forEach((items, i) => {
        const todoObj = todoArray[i];
        console.log(todoObj)
        let html = `
        <div class='name'>${todoObj.name}</div>
        <div class='date'>${todoObj.date}</div>
        <button class = 'btn btn-primary btn-delete'> Delete </button>`;
        todoHtml += html
    })
    if (todoHtml != null) {
        elementInfo.innerHTML = todoHtml;
        document.querySelectorAll('.btn-delete')// returns an array of all the element with that selector
            .forEach((element, key) => {
                element.addEventListener('click', () => {
                    todoArray.splice(key, 1)
                    updateTodo()
                })
            });
    }  
}

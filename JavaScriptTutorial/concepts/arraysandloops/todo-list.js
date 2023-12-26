const todoArray = [];
function addTodo() {
    const elementTodoVal = document.querySelector(".js-input");
    const elementTodoDate = document.querySelector('.js-el-date')
    const inputtedValue = elementTodoVal.value;
    const inputtedDate = elementTodoDate.value;
    console.log(inputtedDate)
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
function updateTodo() {
    let todoHtml = '';
    for (let i = 0; i < todoArray.length; ++i) {
        const todoObj = todoArray[i];
        console.log(todoObj)
        let html = `
        <div class='name'>${todoObj.name}</div>
        <div class='date'>${todoObj.date}</div>
        <button onclick = '
            todoArray.splice(${i},1)
            updateTodo()
        'class = 'btn btn-primary btn-delete'> Delete </button>`;
        todoHtml += html
    }
    if (todoHtml != null) {
        elementInfo.innerHTML = todoHtml
    }
    else {
        elementInfo.innerHTML = 'Error'
    }
}

let task = prompt('What would you like to do?')

let list = []

while (task !== 'quit') {
    let todo;
    switch (task) {
        case 'new':
            todo = prompt('Add new Todo');
            newTodo(list, todo)
            
            break;
        case 'list':
            console.log('*****');
            listTodo(list);
            console.log('******');
            break;
        case 'delete':
            todo = prompt('delete Todo');
            deleteTodo(list, todo)
            
    }
    task = prompt('What would you like to do?');
}
console.log('You have quit the App');
// Add new
function newTodo(arr, todo) {
    let newArr =  arr.push(todo)
    console.log(list[list.length - 1]);
    return newArr
}
// list Todos
function listTodo(arr) {
   
    
    return arr.forEach(el => {
        console.log(el);
    })
}
// Delete Todo
function deleteTodo(arr, todo) {
    arr.splice(arr.indexOf(todo), 1)
    return arr
}
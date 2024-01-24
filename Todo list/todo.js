let deleteBtn=document.getElementById('dlt')
let input = document.getElementById('input')
let button = document.getElementById('btn')
let list = document.getElementById('list')

let todolist = [];
button.addEventListener('click', () => {
    todolist.push(input.value);
    addtodo(input.value);
    input.value = '';


});
function addtodo(todo) {
    let para = document.createElement('p');
    let divbox = document.createElement('div')
    let box = document.createElement('input')
    box.type = 'checkbox';

    para.style.display = 'inline-block'; // Make the paragraph and checkbox inline-block elements
    para.style.margin= '5px';
    box.style.margin='6px';
    if(para.textContent = todo)
    {
    divbox.appendChild(box);
    divbox.appendChild(para);
    list.appendChild(divbox);
    para.style.borderBottom='1px solid black';
    para.style.width='390px';
    

    }
    
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through'
    })
    box.addEventListener('click',()=>
    {
        para.style.textDecoration = 'line-through'
        
    })
    para.addEventListener('dblclick', () => {
        list.removeChild(divbox)
        remove(todo)
    })
}
deleteBtn.addEventListener('click',()=>
{
    while (list.firstChild)
    {
        list.removeChild(list.firstChild)
    
    }
    todolist=[];
})

function remove(todo) {
    let index = todolist.indexOf(todo)
    if (index > -1) {
        todolist.splice(index, 1);
    }
}
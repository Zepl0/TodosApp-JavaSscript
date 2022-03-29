//JS

var list = document.getElementById("todos-list");
var addBtn = document.getElementById("todo-add-btn");
var addInput = document.getElementById("todo-input");

function createTodo(){

    var text = addInput.value;

    //Si el input esta vacio este acaba la funcion con un return y no hara nada.
    if( text === ""){
        return;
    }

    var li = document.createElement("li");
    li.className = "d-flex align-items-center justify-content-between align-items-center shadow-lg p-3 mb-1 bg-white rounded";

    var checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";

    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.className = "w-75 p-3"

    var remove = document.createElement("span");
    remove.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    remove.className = "btn btn-danger";

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);

    list.appendChild(li);

    //al final igualamos el valor de nuestro input a una cadena vacia para hacer una especie de borrado.
    addInput.value = "";
}

function removeTodo(removeElement){
    removeElement.parentElement.remove();
}

function showEditInput(){
    return;
}

function toggleComplete(inputElement){
    if( inputElement.checked === false){
        inputElement.parentElement.classList.remove("complete");
    }else{
        inputElement.parentElement.classList.add("complete");
    }
}

list.addEventListener("click", (event) => {

    switch (event.target.tagName){
        case "P":
            showEditInput();
            break;
        case "SPAN":
            removeTodo(event.target);
            break;
    }

});

list.addEventListener("change", (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox"){
        toggleComplete(event.target);
    }
});

//para agregar cuando presionemos el boton
addBtn.addEventListener("click", createTodo);

//Para agregar cuando presionemos el boton enter
addInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        createTodo();
    }
});
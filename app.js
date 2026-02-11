var tareas = [];

function init() {
    document.getElementById("footer").innerHTML =
    "Entrega: WEB-01 | Grupo: 1 | Código: 123";

    document.getElementById("addBtn").onclick = addTask;
}

function addTask() {
    var input = document.getElementById("taskInput");
    var texto = input.value;

    if (texto == "") {
        document.getElementById("message").innerHTML = "No puede estar vacío";
        return;
    }

    var obj = {
        id: new Date().getTime(),
        text: texto,
        done: false
    };

    tareas.push(obj);
    input.value = "";
    render();
}

function toggleTask(id) {
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i].id == id) {
            tareas[i].done = !tareas[i].done;
        }
    }
    render();
}

function removeTask(id) {
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i].id == id) {
            tareas.splice(i, 1);
        }
    }
    render();
}

function render() {
    var lista = document.getElementById("tasks");
    lista.innerHTML = "";

    var pendientes = 0;

    for (var i = 0; i < tareas.length; i++) {

        if (tareas[i].done == false) {
            pendientes++;
        }

        var li = document.createElement("li");

        var span = document.createElement("span");
        span.innerHTML = tareas[i].text;

        span.onclick = (function(id){
            return function() {
                toggleTask(id);
            }
        })(tareas[i].id);

        if (tareas[i].done) {
            span.className = "done";
        }

        var btn = document.createElement("button");
        btn.innerHTML = "Eliminar";

        btn.onclick = (function(id){
            return function() {
                removeTask(id);
            }
        })(tareas[i].id);

        li.appendChild(span);
        li.appendChild(btn);
        lista.appendChild(li);
    }

    document.getElementById("pendientes").innerHTML = pendientes + " tareas pendientes";
}

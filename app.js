let tareas = [];

window.onload = function () {
    document.getElementById("taskForm").addEventListener("submit", agregarTarea);
    document.getElementById("btnFocus").addEventListener("click", enfocarInput);

    document.getElementById("foot").textContent =
        "Entrega: WEB-01 | Grupo: C | Código: 123";
};

function enfocarInput() {
    document.getElementById("taskInput").focus();
}

function agregarTarea(e) {
    e.preventDefault();

    let input = document.getElementById("taskInput");
    let texto = input.value.trim();

    if (texto === "") {
        alert("No puede estar vacío");
        return;
    }

    let tarea = {
        id: Date.now(),
        text: texto
    };

    tareas.push(tarea);

    input.value = "";

    mostrarTareas();
}

function mostrarTareas() {
    let lista = document.getElementById("taskList");
    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
        let li = document.createElement("li");
        li.textContent = tareas[i].text;
        lista.appendChild(li);
    }
}

window.onload = function() {
    loadTasks();
};

function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

    if (taskText === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskText;

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Selesai';
    completeButton.onclick = function() {
        li.style.textDecoration = 'line-through';
        saveTasks();
    };

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.onclick = function() {
        li.remove();
        saveTasks();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    input.value = '';
    saveTasks();
}

function saveTasks() {
    var tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.childNodes[0].textContent,
            completed: li.style.textDecoration === 'line-through'
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        var li = document.createElement('li');
        li.textContent = task.text;

        var completeButton = document.createElement('button');
        completeButton.textContent = 'Selesai';
        completeButton.onclick = function() {
            li.style.textDecoration = 'line-through';
            saveTasks();
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        if (task.completed) li.style.textDecoration = 'line-through';

        document.getElementById('taskList').appendChild(li);
    });
}

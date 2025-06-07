    const input = document.getElementById('task-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');

        addBtn.addEventListener('click', () => {
            const task = input.value.trim();
            if (task) {
                const li = document.createElement('li');
                li.textContent = task;
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.className = 'remove-btn';
                removeBtn.onclick = () => li.remove();
                li.appendChild(removeBtn);
                todoList.appendChild(li);
                input.value = '';
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addBtn.click();
        });
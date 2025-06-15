const readline = require('readline');
const {
  addTask,
  listTasks,
  completeTask,
  updateTask,
  deleteTask,
  searchTasks,
} = require('./taskManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\nWelcome to the Task Manager CLI');
console.log('Type "help" to see the list of available commands.\n');

function showHelp() {
  console.log(`
Available Commands:
- add-task        : Add a new task (requires title and due date)
- list-tasks      : Display all tasks
- complete-task   : Mark a task as completed (by ID or title)
- update-task     : Update the title or due date of a task
- delete-task     : Delete a task by ID or title
- search-tasks    : Search tasks by title or due date
- help            : Show this help message
- exit            : Exit the application
`);
}

function prompt() {
  rl.question('Enter command: ', (command) => {
    switch (command.trim()) {
      case 'add-task':
        rl.question('Enter task title: ', (title) => {
          rl.question('Enter due date (YYYY-MM-DD): ', (dueDate) => {
            console.log(addTask(title, dueDate));
            prompt();
          });
        });
        break;

      case 'list-tasks':
        console.log('\nTasks:\n');
        console.log(listTasks());
        prompt();
        break;

      case 'complete-task':
        rl.question('Enter task ID or title to mark as completed: ', (idOrTitle) => {
          console.log(completeTask(idOrTitle));
          prompt();
        });
        break;

      case 'update-task':
        rl.question('Enter task ID or title to update: ', (idOrTitle) => {
          rl.question('Enter new title (press enter to skip): ', (newTitle) => {
            rl.question('Enter new due date (press enter to skip): ', (newDueDate) => {
              console.log(updateTask(idOrTitle, newTitle || null, newDueDate || null));
              prompt();
            });
          });
        });
        break;

      case 'delete-task':
        rl.question('Enter task ID or title to delete: ', (idOrTitle) => {
          console.log(deleteTask(idOrTitle));
          prompt();
        });
        break;

      case 'search-tasks':
        rl.question('Enter search keyword (title or due date): ', (query) => {
          console.log(searchTasks(query));
          prompt();
        });
        break;

      case 'help':
        showHelp();
        prompt();
        break;

      case 'exit':
        console.log('Goodbye!');
        rl.close();
        break;

      default:
        console.log('Invalid command. Type "help" to see available commands.');
        prompt();
    }
  });
}

prompt();

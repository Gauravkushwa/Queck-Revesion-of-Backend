const readline = require('readline');
const { addTask, listTasks, completeTask } = require('./taskManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('\n🎯 Welcome to Task Manager CLI!');
console.log('Available Commands:\n - add-task\n - list-tasks\n - complete-task\n - exit\n');

function prompt() {
  rl.question('👉 Enter command: ', (command) => {
    switch (command.trim()) {
      case 'add-task':
        rl.question('📌 Task Title: ', (title) => {
          rl.question('📅 Due Date: ', (dueDate) => {
            console.log(addTask(title, dueDate));
            prompt();
          });
        });
        break;

      case 'list-tasks':
        console.log('\n📋 Your Tasks:\n');
        console.log(listTasks());
        prompt();
        break;

      case 'complete-task':
        rl.question('✅ Enter Task ID or Title: ', (identifier) => {
          console.log(completeTask(identifier));
          prompt();
        });
        break;

      case 'exit':
        console.log('👋 Goodbye!');
        rl.close();
        break;

      default:
        console.log('⚠️ Invalid command. Try again.');
        prompt();
    }
  });
}

prompt();

const fs = require('fs');
const path = require('path');
const TASK_FILE = path.join(__dirname, 'tasks.json');

function readTasks() {
  if (!fs.existsSync(TASK_FILE)) return [];
  return JSON.parse(fs.readFileSync(TASK_FILE, 'utf-8'));
}

function writeTasks(tasks) {
  fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
}

function addTask(title, dueDate) {
  if (!title || !dueDate) return 'Error: Title and due date are required.';

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title,
    dueDate,
    status: 'pending',
  };

  tasks.push(newTask);
  writeTasks(tasks);
  return `Task added: "${title}" due on ${dueDate}`;
}

function listTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) return 'No tasks found.';
  return tasks.map((t, i) =>
    `${i + 1}. [${t.status.toUpperCase()}] "${t.title}" — Due: ${t.dueDate} (ID: ${t.id})`
  ).join('\n');
}

function completeTask(identifier) {
  const tasks = readTasks();
  let found = false;

  const updatedTasks = tasks.map(task => {
    if (
      task.id.toString() === identifier.toString() ||
      task.title.toLowerCase() === identifier.toLowerCase()
    ) {
      task.status = 'completed';
      found = true;
    }
    return task;
  });

  if (!found) return `Error: Task not found with ID or title "${identifier}"`;
  writeTasks(updatedTasks);
  return `Task "${identifier}" marked as completed.`;
}

function updateTask(identifier, newTitle, newDueDate) {
  const tasks = readTasks();
  let found = false;

  const updatedTasks = tasks.map(task => {
    if (
      task.id.toString() === identifier.toString() ||
      task.title.toLowerCase() === identifier.toLowerCase()
    ) {
      if (newTitle) task.title = newTitle;
      if (newDueDate) task.dueDate = newDueDate;
      found = true;
    }
    return task;
  });

  if (!found) return `Error: Task not found with ID or title "${identifier}"`;
  writeTasks(updatedTasks);
  return `Task "${identifier}" updated successfully.`;
}

function deleteTask(identifier) {
  const tasks = readTasks();
  const filtered = tasks.filter(
    task =>
      task.id.toString() !== identifier.toString() &&
      task.title.toLowerCase() !== identifier.toLowerCase()
  );

  if (filtered.length === tasks.length) return `Error: Task not found with ID or title "${identifier}"`;
  writeTasks(filtered);
  return `Task "${identifier}" deleted successfully.`;
}

function searchTasks(query) {
  const tasks = readTasks();
  const matches = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase()) ||
    task.dueDate.includes(query)
  );
  if (matches.length === 0) return `No matching tasks found for "${query}"`;
  return matches.map((t, i) =>
    `${i + 1}. [${t.status.toUpperCase()}] "${t.title}" — Due: ${t.dueDate} (ID: ${t.id})`
  ).join('\n');
}

module.exports = {
  addTask,
  listTasks,
  completeTask,
  updateTask,
  deleteTask,
  searchTasks,
};

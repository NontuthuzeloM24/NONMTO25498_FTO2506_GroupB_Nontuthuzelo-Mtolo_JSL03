const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 4,
    title: "Gym",
    description: "Work those muscles",
    status: "todo",
  },
  {
    id: 5,
    title: "Study",
    description: "Work those brain cells",
    status: "doing",
  },
  {
    id: 6,
    title: "Sleep",
    description: "Rest that body",
    status: "done",
  },
];

const validStatuses = ["todo", "doing", "done"];
const tasks = [];

function getNextId() {
  if (tasks.length === 0) return 1;
  return tasks[tasks.length - 1].id + 1;
}

function AddNewTask() {
  let added = 0;
  while (added < 3) {
    const answer = prompt("Do you want to add a new task? (yes/no)").toLowerCase();

    if (answer !== "yes") break;

    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    let status = prompt("Enter task status (todo, doing, done):").toLowerCase();

    if (!validStatuses.includes(status)) {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      continue;
    }

    const newTask = {
      id: getNextId(),
      title,
      description,
      status,
    };

    tasks.push(newTask);
    added++;
  }

  if (added === 3) {
    alert("There are enough tasks on your board, please check them in the console.");
  }
}

function displayAllTasks() {
  console.log("All Tasks:");

  for (let i = 0; i < tasks.length; i++) {
    const taskName = tasks[i];
    console.log("id:", taskName.id, "Title:", taskName.title, "Description:", taskName.description, "Status:", taskName.status);
  }
}

function displayCompletedTasks() {
  console.log("Completed Tasks:");

  for (let i = 0; i < tasks.length; i++) {
    const taskName = tasks[i];
  }
}
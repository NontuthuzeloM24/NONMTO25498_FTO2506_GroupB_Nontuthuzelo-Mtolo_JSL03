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
const tasks = [...initialTasks];

function getNextId() {
  if (tasks.length === 0) return 1;
  return tasks[tasks.length - 1].id + 1;
}

function AddNewTask() {
  let added = 0;

  while (added < 3) {
    const answer = prompt(
      "Do you want to add a new task? (yes/no)"
    ).toLowerCase();

    if (answer !== "yes" && answer !== "no") {
      alert("Please answer with 'yes' or 'no'.");
      answer = prompt("Please enter 'yes' or 'no':").toLowerCase();
    }

    if (answer !== "yes") break;

    const title = prompt("Enter task title:").toLowerCase();
    const description = prompt("Enter task description:").toLowerCase();
    let status = prompt("Enter task status (todo/doing/done):").toLowerCase();

    if (!validStatuses.includes(status)) {
      alert("Invalid status! Task not added.");
      continue;
    }
  }
}

function displayAllTasks() {
  console.log("All Tasks:", tasks);
}

function displayCompletedTasks() {
  const completed = tasks.filter((task) => task.status === "done");
  console.log("Completed Tasks:", completed);
}

AddNewTask();
displayAllTasks();
displayCompletedTasks();

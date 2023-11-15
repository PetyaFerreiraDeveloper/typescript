type NewTask = {
  name: string;
  level: "low" | "medium" | "hard";
};

class NewEmployee {
  @withNewTask({ name: "Task1", level: "hard" })
  tasks: NewTask[] = [];
  @withComplicatedTask()
  extraTasks: NewTask[] = [];
}

const employee1 = new NewEmployee();
console.log(employee1);

function withNewTask(task: NewTask) {
  return function <T, V extends NewTask[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push(task);
      return args;
    };
  };
}

function withComplicatedTask() {
  return withNewTask({ name: "other task", level: "hard" });
}

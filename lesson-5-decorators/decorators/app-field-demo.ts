type Task = {
  name: string;
  level: "low" | "medium" | "complicated";
};

class Employee {
  @withMoreTasks
  task: Task[] = [];
}

const employee = new Employee();
console.log(employee);

function withMoreTasks<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext
) {
  return function (args: V) {
    args.push({ name: "first task", level: "low" });
    args.push({ name: "second task", level: "medium" });
    args.push({ name: "third task", level: "complicated" });
    return args;
  };
}

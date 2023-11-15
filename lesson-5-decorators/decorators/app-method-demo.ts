class Project {
  budget: number = 900;
  @withBudget(10)
  writeTest() {
    console.log("Tests are important");
  }
  @withBudget(500)
  fixBugInProduction() {
    console.log("Fixing bugs in production is expensive");
  }
}

const project = new Project();
project.writeTest();
project.writeTest();
project.writeTest();
project.fixBugInProduction();
project.fixBugInProduction();
console.log(project.budget);


type WithBudget = {
  budget: number;
};
function withBudget(actionBudget: number) {
  return function <T extends WithBudget>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (...args: any) {
      const instance = this as T; // T -> our decorated class
      if (instance.budget > actionBudget) {
        instance.budget -= actionBudget;
        target.apply(instance, args); // call our method for instance with args
      } else {
        console.log(
          `insufficient funds for ${context.name.toString()}. Required ${actionBudget}, available ${
            instance.budget
          }!`
        );
      }
    };
  };
}

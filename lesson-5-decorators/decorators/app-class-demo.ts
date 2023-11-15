@withEmploymentDateOnPrototype
@withEmploymentDate
class Manager {
  task: string = "this is task";
  project: string = "this is project";
  constructor() {
    console.log("manager is created");
  }
}

const manager = new Manager();
console.log(manager);
console.log(manager.constructor.prototype);

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.employementDateOnPrototype = new Date().toISOString();
}

// function printDecoratorData(value: Function, context: ClassDecoratorContext) {
//   console.log({ value });
//   console.log({ context });

//   context.addInitializer(() => {
//     console.log("Class initialized: " + context.name);
//   });
// }

type Args = { new (...args: any[]): {} };

function withEmploymentDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employementDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log("Adding employment date to " + baseClass.name);
    }
  };
}

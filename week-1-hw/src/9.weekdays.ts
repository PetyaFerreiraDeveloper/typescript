enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const printDay = (weekday: string): void => {
  if (DaysOfWeek[weekday] === undefined) {
    console.log("Please enter valid weekday")
  } else {
    console.log(DaysOfWeek[weekday])
  }
}
printDay("Friday")

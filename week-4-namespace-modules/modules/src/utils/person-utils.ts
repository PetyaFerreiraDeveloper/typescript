import { Person, PersonWithoutAge } from "../interfaces/Person"
import { capitalizeFirstLetter } from "./capitalizeFirstLetter"

export const getCapitalizedName = (person: Person | PersonWithoutAge) => {
  const { name } = person
  return {
    ...person,
    name: capitalizeFirstLetter(person.name),
  }
}

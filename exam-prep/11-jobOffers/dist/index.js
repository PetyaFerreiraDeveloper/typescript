class JobOffers {
    constructor(employer, position) {
        this.jobCandidates = [];
        this.employer = employer;
        this.position = position;
    }
    jobApplication(candidates) {
        const uniqueNames = [];
        for (let candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split("-");
            const currentCandidate = {
                name,
                education,
                yearsExperience: Number(yearsExperience),
            };
            const candidateIndex = this.jobCandidates.findIndex((c) => c.name === name);
            if (candidateIndex === -1) {
                this.jobCandidates.push(currentCandidate);
                uniqueNames.push(name);
            }
            else {
                if (Number(this.jobCandidates[candidateIndex].yearsExperience) <
                    Number(yearsExperience)) {
                    this.jobCandidates[candidateIndex].yearsExperience =
                        Number(yearsExperience);
                    if (!uniqueNames.includes(name)) {
                        uniqueNames.push(name);
                    }
                }
            }
        }
        return `You successfully added candidates: ${uniqueNames.join(", ")}.`;
    }
    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const personIndex = this.jobCandidates.findIndex((candidate) => candidate.name === name);
        if (personIndex === -1) {
            return `${name} is not in the candidates list!`;
        }
        if (Number(minimalExperience) >
            Number(this.jobCandidates[personIndex].yearsExperience)) {
            return `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years."`;
        }
        this.jobCandidates[personIndex].yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }
    salaryBonus(name) {
        const personIndex = this.jobCandidates.findIndex((cand) => cand.name === name);
        if (personIndex === -1) {
            return `${name} is not in the candidates list!`;
        }
        if (this.jobCandidates[personIndex].education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }
        if (this.jobCandidates[personIndex].education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            return "Candidate Database is empty!";
        }
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        return `Candidates list:\n${this.jobCandidates
            .map((cand) => `${cand.name}-${cand.yearsExperience}`)
            .join("\n")}`;
    }
}
// let Jobs = new JobOffers("Google", "Strategy Analyst")
// console.log(
//   Jobs.jobApplication([
//     "John Doe-Bachelor-10",
//     "Peter Parker-Master-5",
//     "Daniel Jones- Bachelor-18",
//   ])
// )
// let Jobs = new JobOffers("Google", "Strategy Analyst")
// console.log(
//   Jobs.jobApplication([
//     "John Doe-Bachelor-10",
//     "Peter Parker-Master-5",
//     "Daniel Jones- Bachelor-18",
//   ])
// )
// console.log(Jobs.jobOffer("John Doe-8"))
// console.log(Jobs.jobOffer("Peter Parker-4"))
// console.log(Jobs.jobOffer("John Jones-8"))
// let Jobs = new JobOffers("Google", "Strategy Analyst")
// console.log(
//   Jobs.jobApplication([
//     "John Doe-Bachelor-10",
//     "Peter Parker-Master-5",
//     "Daniel Jones- Bachelor-18",
//   ])
// )
// console.log(Jobs.jobOffer("John Doe-8"))
// console.log(Jobs.jobOffer("Peter Parker-4"))
// console.log(Jobs.salaryBonus("John Doe"))
// console.log(Jobs.salaryBonus("Peter Parker"))
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Jordan Cole-High School-5",
    "Daniel Jones- Bachelor-18",
]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
//# sourceMappingURL=index.js.map
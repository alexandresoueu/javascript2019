const students =  [
    { name: 'Angelo', note: 7.0, scholarship: false },
    { name: 'Miguel', note: 9.3, scholarship: false },
    { name: 'Giulia', note: 6.5, scholarship: true },
    { name: 'Fernanda', note: 9.8, scholarship: true }
]

const allScholarship = (result, scholarship) => result && scholarship

console.log(students.map(children => children.scholarship).reduce(allScholarship))

const anyScholarship = (result, scholarship) => result || scholarship

console.log(students.map(children => children.scholarship).reduce(anyScholarship))
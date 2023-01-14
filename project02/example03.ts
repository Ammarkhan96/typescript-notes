//Object Type Expicitly
//create type: (Ke os me kia kia properties honi chahiyen)

type ImranType = {
    name: {firstName: string, lastName: string},
    age: number,
    teacher: boolean,
    dob: Date,
    certifications: string[],
}

let imran: ImranType

imran = {
    name: {firstName: "Ammar", lastName: "Khan"},
    age: 25,
    teacher: true,
    dob: new Date(),
    certifications: ["AWS", "Docker", "Rust"],
}

imran = "Alexandar"

export{}
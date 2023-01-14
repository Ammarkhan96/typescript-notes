type Author = {
    firstName: string;
    lastName: string;
}

type Book = {

    author: Author;
    // author: {
    //     firstName: string;
    //     lastName: string;
    // }
    name: string;
    pages?: number;    // additional property which not required
}

const book: Book = { 
    author: {
        firstName: "Niccolo",
        lastName: "Machiavelli",
    },
    name: "The Prince",
    // pages: 10    not required additional property
}
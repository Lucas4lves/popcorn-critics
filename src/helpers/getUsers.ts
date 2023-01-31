export class User
{
    id: Number;
    username: String;
    favoriteGenre: String;
    favoriteMovies: any[];

    constructor(id: Number, username: String, favoriteGenre: String, favoriteMovies: any[])
    {
        this.id = id;
        this.username = username;
        this.favoriteGenre = favoriteGenre;
        this.favoriteMovies = favoriteMovies;
    }
}

const users = [
    {id: 1,
    username: "Juliana Santos",
    favoriteGenre: "Terror",
    favoriteMovies: []
    },
    {id: 2,
    username: "Abner Ferreira",
    favoriteGenre: "Comédia",
    favoriteMovies: []
    },
    {id: 3,
    username: "Mikael Previtera",
    favoriteGenre: "Ação",
    favoriteMovies: []
    },
    {id: 4,
    username: "Jhon Previtera",
    favoriteGenre: "Romance",
    favoriteMovies: []
    },
]

export const objUsers = users.map(user => new User(user.id, user.username, user.favoriteGenre, user.favoriteMovies))

export function getUser(id : Number)
{
    return users.filter(user => user.id == id)
}



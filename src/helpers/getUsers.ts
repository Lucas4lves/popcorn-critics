export class User
{
    id: Number;
    username: String;
    favoriteGenre: String;
    favoriteMovies: any[];
    following: User[];
    followers: User[];


    constructor(id: Number, username: String, favoriteGenre: String, favoriteMovies: any[])
    {
        this.id = id;
        this.username = username;
        this.favoriteGenre = favoriteGenre;
        this.favoriteMovies = favoriteMovies;
        this.following = [];
        this.followers = [];
    }

}

const users = [
    {id: 1,
    username: "Juliana Santos",
    favoriteGenre: "Terror",
    favoriteMovies: [],
    following : [],
    followers : [],
    },
    {id: 2,
    username: "Abner Ferreira",
    favoriteGenre: "Comédia",
    favoriteMovies: [],
    following : [],
    followers : [],
    
    },
    {id: 3,
    username: "Mikael Previtera",
    favoriteGenre: "Ação",
    favoriteMovies: [],
    following : [],
    followers : [],
    },
    {id: 4,
    username: "Jhon Previtera",
    favoriteGenre: "Romance",
    favoriteMovies: [],
    following : [],
    followers : [],
    },
]

export const objUsers = users.map(user => new User(user.id, user.username, user.favoriteGenre, user.favoriteMovies))

export function getUser(id : Number)
{
    return users.filter(user => user.id == id)
}



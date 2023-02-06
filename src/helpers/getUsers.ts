import {Movie} from "./getMovies"

export class User
{
    id: number;
    username: String;
    profilePicUrl : string;
    bio : string;
    favoriteGenre: String;
    favoriteMovies: Movie[];
    followers: number;


    constructor(id: number, username: String, profilePicUrl : string, bio:string, favoriteGenre: String, favoriteMovies: Movie[])
    {
        this.id = id;
        this.username = username;
        this.profilePicUrl = profilePicUrl;
        this.bio = bio;
        this.favoriteGenre = favoriteGenre;
        this.favoriteMovies = favoriteMovies;
        this.followers = 0;
    }

}

const users = [
    {id: 1,
    username: "Wandinha",
    profilePicUrl: "https://s2.glbimg.com/V--tmMxW0NDAG3DxKsYQqmpmoIQ=/0x0:2400x3600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/U/4/9QXF2wQcGuwmDGBOP3cQ/wednesday-jenna-ortega-gallery-single-0258r2c.jpg",
    bio: "lorem ipsum",
    favoriteGenre: "Terror",
    favoriteMovies: [],
    followers : [],
    },
    {id: 2,
    username: "Naruto",
    profilePicUrl: "https://nerdhits.com.br/wp-content/uploads/2022/10/Naruto-Pain.jpg", 
    bio: "lorem ipsum",
    favoriteGenre: "Comédia",
    favoriteMovies: [],
    followers : [],
    
    },
    {id: 3,
    username: "Macaco do Luffy",
    profilePicUrl: "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png",
    bio: "lorem ipsum",
    favoriteGenre: "Ação",
    favoriteMovies: [],
    followers : [],
    },
    {id: 4,
    username: "Hinata",
    profilePicUrl: "https://static.wikia.nocookie.net/naruto/images/b/b1/Hinata-Genin.png/revision/latest/scale-to-width-down/350?cb=20140328224439&path-prefix=pt-br",
    bio: "lorem ipsum",
    favoriteGenre: "Romance",
    favoriteMovies: [],
    followers : [],
    },
]

export const objUsers = users.map(user => new User(user.id, user.username, user.bio, user.profilePicUrl, user.favoriteGenre, user.favoriteMovies));

export function getUserById(id : number) : User
{
    let result = objUsers.filter(user => user.id == id)[0];
    return result; 
}


// tirar users para arquivo de dados
//
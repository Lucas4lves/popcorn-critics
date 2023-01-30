const users = [
    {id: 1,
    username: "Juliana Santos",
    favoriteGenre: "Terror",
    favoriteMovies: [
        "M3GAN", "X", "Pânico na Floresta"
    ]
    },
    {id: 2,
    username: "Abner Ferreira",
    favoriteGenre: "Comédia",
    favoriteMovies: [
        "American Pie", "Todo Mundo em Pânico", "Esqueceram de mim"
    ]
    },
    {id: 3,
    username: "Mikael Previtera",
    favoriteGenre: "Ação",
    favoriteMovies: [
        "Duro de Matar", "Missão Impossível", "Hitman"
    ]
    },
    {id: 4,
    username: "Jhon Previtera",
    favoriteGenre: "Romance",
    favoriteMovies: [
        "ABC do Amor", "Forrest Gump", "Batman: o cavaleiro das trevas"]
    },
]

export default function getUser(id)
{
    return users.filter(user => user.id == id)
}

console.log(getUser(4));


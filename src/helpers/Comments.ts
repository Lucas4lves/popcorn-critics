export class Comments{
    id: number;
    author: string;
    content: string;
    likes: number;
    dislikes: number;

    constructor(id: number, author: string, content: string, likes: number, dislikes:number)
    {
        this.id = id,
        this.author = author,
        this.content = content,
        this.likes = likes;
        this.dislikes = dislikes;
    }

    getId()
    {
        return this.id;
    }
    getAuthor()
    {
        return this.author;
    }
    getContent()
    {
        return this.content;
    }
    getLikes()
    {
        return this.likes;
    }
    getDislikes()
    {
        return this.dislikes; 
    }

    setAuthor(value : string)
    {
        this.author = value;
    }
    setContent(value : string)
    {
        this.content = value;
    }
    setLikes()
    {
        this.likes++;
    }

    setDislikes()
    {
        this.dislikes++;
    }

}   
export default class Critic{
    content: string;
    likes : number;
    dislikes : number;
    impressions : number; 


    constructor(content: string)
    {
        this.content = content;
        this.likes = 0;
        this.dislikes = 0;
        this.impressions = this.likes + this.dislikes;
    }   

    // getId()
    // {
    //     return this.id;
    // }
    // getAuthor()
    // {
    //     return this.author;
    // }
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

    // setAuthor(value : string)
    // {
    //     this.author = value;
    // }
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
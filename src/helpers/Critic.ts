export default class Critic{
    content: string;


    constructor(content: string)
    {
        this.content = content;
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
    // getLikes()
    // {
    //     return this.likes;
    // }
    // getDislikes()
    // {
    //     return this.dislikes; 
    // }

    // setAuthor(value : string)
    // {
    //     this.author = value;
    // }
    setContent(value : string)
    {
        this.content = value;
    }
    // setLikes()
    // {
    //     this.likes++;
    // }

    // setDislikes()
    // {
    //     this.dislikes++;
    // }

}   
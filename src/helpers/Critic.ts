export default class Critic{
    content: any;
    likes : any;
    dislikes : any;
    impressions : any; 


    constructor(content: any)
    {
        this.content = content;
        this.likes = 0;
        this.dislikes = 0;
        this.impressions = this.likes + this.dislikes;
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

    // setAuthor(value : string)
    // {
    //     this.author = value;
    // }
    setContent(value : string)
    {
        this.content = value;
    }
    increaseLikes()
    {
        this.likes++;
    }

    increaseDislikes()
    {
        this.dislikes++;
    }

}   
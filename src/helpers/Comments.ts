export class Comments{
    id: number;
    content: string;
    replies: string[]

    constructor(id: number, content: string, replies: string[])
    {
        this.id = id,
        this.content = content,
        this.replies = replies
    }
}   
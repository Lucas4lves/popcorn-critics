import Critic from "./Critic";
export default class Critics
{
    constructor(private critcisList : Array<any>)
    {}

    appendTo(critic : Critic) : void
    {
        this.critcisList.push(critic);
    }

    getCritics() : ReadonlyArray<Critic>
    {
        return this.critcisList;
    }
}
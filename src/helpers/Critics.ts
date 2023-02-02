import Critic from "./Critic";
export default class Critics
{
    constructor(private critcisList : Array<Critic>)
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
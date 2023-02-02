import Critic from "./Critic";
import Critics from "./Critics"

export default class CriticsController
{
    private list;
    private textField: HTMLTextAreaElement;
    constructor()
    {
        this.list = new Critics([])
        this.textField = document.querySelector(".novo-comentario-input")!;
    }

    instantiateCritic()
    {
        const c = this.fetchCritic();
        this.list.appendTo(c);
    }

    fetchCritic() : Critic
    {
        return new Critic(this.textField.value);
    }
}
export class Buildguidesfrontcard {
    public name: String = "";
    public cpu: String = "";
    public gpu: String = "";
    public case: String = "";
    public cost: Number = 0;
    public comments: Number = 0;
    public picture: String = "";

    constructor(name: String, cpu: String, gpu: String, _case: String, cost: Number, comments: Number, picture: String){
        this.name = name;
        this.cpu = cpu;
        this.gpu = gpu;
        this.case = _case;
        this.cost = cost;
        this.comments = comments;
        this.picture = picture;
    }

}
export class Department {
  private id:number;
  private name:string;
  constructor (id:number=0,name:string=""){
    this.id = id;
    this.name = name;
  }
  getId(){
    return this.id;
  }
  setId(id:number){
    this.id = id
  }
  getName(){
    return this.name;
  }
  setName(name:string){
    this.name = name;
  }
}

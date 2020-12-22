class employeePayRollData{
    //property
    id;
    salary;

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){return this._name};
    set name(name){this._name=name};

    toString(){
        return "ID:"+this.id+", name:"+this.name+",salary:"+this.salary;
    }
}

    let EmployeePayRollData=new employeePayRollData(1,"Mark",30000);
    console.log(EmployeePayRollData.toString());
    EmployeePayRollData.name="Sravani";
    console.log(EmployeePayRollData.toString());
    

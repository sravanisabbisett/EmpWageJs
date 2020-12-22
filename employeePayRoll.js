class employeePayRollData{
    //property
    id;
    salary;

    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name(){return this._name};
    set name(name){
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)) this._name=name;
        else throw 'Name is in incorrectFormat';
    };

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;0
    }
}

    let EmployeePayRollData=new employeePayRollData(1,"Mark",30000);
    console.log(EmployeePayRollData.toString());
    try{
    EmployeePayRollData.name="Sravani";
    console.log(EmployeePayRollData.toString());
    }catch(e){
        console.error(e);
    }
    

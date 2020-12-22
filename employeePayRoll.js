class EmployeePayrollData {
    // constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    // getter and setter methods
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) this._name = name;
        else throw 'Name is  in Incorrect format!';
    }
    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw 'Incorrect Id';
        }
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MFmf]{1}$');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw 'Invalid input for gender';
        }
    }
    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        } else {
            throw 'Invalid input for salary';
        }
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw "Incorrect date";
    }
    // method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}
let newEmployeePayrollData = new EmployeePayrollData(1, "Smith", 3000, 'M', new Date());
console.log(newEmployeePayrollData.toString());
try {
    newEmployeePayrollData.name = "rohit";
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.id = -1;
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.salary = -1;
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
try {
    newEmployeePayrollData.startDate = new Date();
    console.log(newEmployeePayrollData.toString());
} catch (e) {
    console.error(e);
}
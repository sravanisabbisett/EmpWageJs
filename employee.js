const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORK_HRS = 160;
const Number_Of_Working_Days = 20;
// Returns the working hours of the employee
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}
// Returns the wage of the employee
function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
// UC10 store daily wage work hours day in a object
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_WORK_HRS && totalWorkingDays < Number_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: CalculateWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + ' => working hours is '
                    + this.dailyHours + ' And wage earned =' + this.dailyWage
            },
        });
}
console.log("UC10 store daily wage, work, hours day in a object: " + empDailyHrsAndWageArr);
console.log("UC10 store daily wage, work, hours day in a object: " + empDailyHrsAndWageArr);
//UC 11.a Calculate total hours and wage using arrow functions
let totalHours = empDailyHrsAndWageArr
    .filter(obj => obj.dailyHours > 0)
    .reduce((totalHours, obj) => totalHours += obj.dailyHours, 0);
let totalWage = empDailyHrsAndWageArr
    .filter(obj => obj.dailyWage > 0)
    .reduce((totalWage, obj) => totalWage += obj.dailyWage, 0);
console.log("\nUC 11.a Calculate total hours and wage using arrow functions");
console.log("Total Hours: " + totalHours + "   Total Wage: " + totalWage);
//UC 11.b Show the full working days using foreach
console.log("\nUC 11.b Show the full working days");
empDailyHrsAndWageArr.filter(obj => obj.dailyHours == 8).forEach(obj => process.stdout.write(obj.toString()));
//UC 11.c Show Part working days using Map by reducing to String Array
let partWorkingDays = empDailyHrsAndWageArr
    .filter(obj => obj.dailyHours == 4)
    .map(obj => obj.toString());
console.log("\nUC 11.c Show part time working days");
console.log(partWorkingDays);
//UC 11.d Show No working days using Map by reducing to String Array
let noWorkingDays = empDailyHrsAndWageArr
    .filter(obj => obj.dailyHours == 0)
    .map(obj => obj.toString());
console.log("\nUC 11.d Show no working days");
console.log(noWorkingDays);
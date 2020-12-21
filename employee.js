//uc3 function for getting working hours
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
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
let empCheck = Math.floor(Math.random() * 10) % 3;
let empWage = getWorkingHours(empCheck) * WAGE_PER_HR;
console.log("Emp wage:" + empWage);

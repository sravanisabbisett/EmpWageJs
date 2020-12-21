//uc1 check employee
{
    const IS_ABSENT=0;
    let empCheck=Math.floor(Math.random()*10)%2;
    if(empCheck==IS_ABSENT){
        console.log("UC1_Employee is absent");
    }else{
        console.log("UC1_Employee is present")
    }
}
function createEmployeeRecord(employeeProfileArray) {
    let obj = {
        firstName: employeeProfileArray[0],
        familyName: employeeProfileArray[1],
        title: employeeProfileArray[2],
        payPerHour: employeeProfileArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(employeesArray) {
    for (const employee of employeesArray) {
        const newObj = createEmployeeRecord(employee)
        employeesArray.push(newObj)
    }
    return employeesArray
}

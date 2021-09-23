const employee = {
    name: 'lisa',
    streetaddress: '123 tearoad',
}
function updateEmployeeWithKeyAndValue(obj,key,value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
  obj[key] = value; 
  return obj;
}
function deleteFromEmployeeByKey(obj,key,value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee['name']; 
return employee
 
}
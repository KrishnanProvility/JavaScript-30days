const employeeDeatils = [
  {
    Name: "krishnan",
    role: "junior-developer",
    gender: "male",
    city: "chennai",
    salary: 1000,
  },
  {
    Name: "vignesh",
    role: "senior-developer",
    gender: "male",
    city: "pondy",
    salary: 3000,
  },
  {
    Name: "uma",
    role: "hr",
    gender: "female",
    city: "thirvanamalai",
    salary: 1500,
  },
  {
    Name: "harish",
    role: "manager",
    gender: "male",
    city: "kanchepuram",
    salary: 2500,
  },
];

function filteredMaleList(employeeDeatils) {
  const filterdMale = employeeDeatils.filter((employee) => {
    return employee.gender == "male";
  });
  return filterdMale;
}
function filteredFemaleList(employeeDeatils) {
  const filterdFemale = employeeDeatils.filter((employee) => {
    return employee.gender == "female";
  });
  return filterdFemale;
}

function filterByGender(employeeDeatils, value) {
  const filterdGender =
    value.toLowerCase() == "male"
      ? filteredMaleList(employeeDeatils)
      : filteredFemaleList(employeeDeatils);
  return filterdGender;
}

function filteredBycity(employeeDeatils, cityString) {
  const filterdCity = employeeDeatils.filter((employee) => {
    return employee.city.includes(cityString);
  });
  return filterdCity;
}

function filteredByRole(employeeDeatils, roleString) {
  const filteredRole = employeeDeatils.filter((employee) => {
    return employee.role.includes(roleString);
  });
  return filteredRole;
}
function filteredByname(employeeDeatils, name) {
  const filteredName = employeeDeatils.filter((employee) => {
    return employee.Name.includes(name);
  });
  return filteredName;
}
function filterBySalary(employeeDeatils, greaterLesser ,value) {
  const filteredSalary = employeeDeatils.filter((employee) => {
    const check =greaterLesser =='greater' ? employee.salary >value : employee.salary < value ;
       return check;
  });
  return filteredSalary;
}
function filteredEmployeeList(employeeDeatils) {
  while (true) {
    const searchby = parseInt(
      prompt(
        "Searching employee deatails BY \n1.gender\n2.name\n3.city\n4.role\n5.salary"
      )
    );

    switch (searchby) {
      case 1:
        const gender = prompt("enter the gender");
        return filterByGender(employeeDeatils, gender);
      case 2:
        const name = prompt("enter the the name of employee");
        return filteredByname(employeeDeatils, name);
      case 3:
        const city = prompt("enter the name of the city");
        return filteredBycity(employeeDeatils, city);
      case 4:
        const role = prompt("enter the role you searching");
        return filteredByRole(employeeDeatils, role);
      case 5:
        const greater = prompt("greater  or lesser ");
        const value =parseInt(prompt("Enter Your amount"))
        return filterBySalary(employeeDeatils,greater,value)
      default:
        alert("please enter correct option!!!!!");
    }
  }
}

console.log(filteredEmployeeList(employeeDeatils));

// console.log(filteredByname(employeeDeatils,'kris'));
// console.log(filterByGender(employeeDeatils,'male'));
// console.log(filteredByRole(employeeDeatils,"sen"));
// console.log(filteredBycity(employeeDeatils,"chen"));

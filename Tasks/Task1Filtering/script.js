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
    salary: 1500,
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
  let filterdGender = "";

  if (value.toLowerCase() == "male") {
    return (filterdGender = filteredMaleList(employeeDeatils));
  } else if (value.toLowerCase() == "female") {
    return (filterdGender = filteredFemaleList(employeeDeatils));
  } else {
return ;
  }
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
function filterBySalary(employeeDeatils, greaterLesser, value) {
  const filteredSalary = employeeDeatils.filter((employee) => {
    const check =
      greaterLesser == "greater"
        ? employee.salary > value
        : employee.salary < value;
    return check;
  });
  return filteredSalary;
}
function filteredEmployeeList(employeeDeatils, searchby, value) {
  switch (searchby) {
    case "gender":
      return filterByGender(employeeDeatils, value);
    case "name":
      return filteredByname(employeeDeatils, value);
    case "city":
      return filteredBycity(employeeDeatils, value);
    case "role":
      return filteredByRole(employeeDeatils, value);
    // case 5:
    //   const greater = prompt("greater  or lesser ");
    //   const value =parseInt(prompt("Enter Your amount"))
    //   return filterBySalary(employeeDeatils,greater,value)
    default:
      console.log("please enter correct option!!!!!");
  }
}
function clearTable() {
  const tableBody = document.querySelector(".addingRow"); 
  tableBody.innerHTML = ""; 
}

function addingTable() {
  const searchMenu = document.getElementById("search-menu");
  const selectedValue = searchMenu.value;

  const recivedInput = document.getElementById("searchBar").value;

  if (selectedValue === 'none' || recivedInput === '') {
    console.log("No valid input provided.");
    return;
  }
  
  const filteredList = filteredEmployeeList(
    employeeDeatils,
    selectedValue,
    recivedInput
  );

   
if(filteredList.length>0)
  clearTable();
  
  const tableBody = document.querySelector(".addingRow");
  
  filteredList.forEach((element) => {
    const Name = element.Name;
    const role = element.role;
    const gender = element.gender;
    const city = element.city;
    const salary = element.salary;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
              <td>${Name}</td>
              <td>${role}</td>
              <td>${gender}</td>
              <td>${city}</td>
              <td>${salary}</td>`;
    tableBody.appendChild(newRow);
  });
}

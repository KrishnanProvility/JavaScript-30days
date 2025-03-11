//EXCERSICE  9:

const firstName =prompt("enter Yout Name");
const lastName  =prompt("enter Last name");

const  condition = firstName.length > lastName.length ? "longer ":"shorter";

const final =`your first name ${firstName} is ${condition} then Your yor family name  ${lastName}`;

console.log(final)

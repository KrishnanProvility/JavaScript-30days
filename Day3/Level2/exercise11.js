//EXCERSICE  11:

const year =prompt("enter your year :");

const age = new Date().getFullYear() -year;

const agedeatail = age >=18 ? `You are${age} .You are old enough to drive`: `You are${age} .You will be allowed to drive after ${18-age} years.`;


alert(agedeatail);
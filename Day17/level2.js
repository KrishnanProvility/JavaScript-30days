
const student ={firstname: 'krishnan',lastName :'e',age :5,country:'india',city:'chennai',skills: ['HTML', 'CSS', 'JS', 'React']
}

const studentJSON =JSON.stringify(student,undefined,4)

localStorage.setItem("student",studentJSON)

console.log(localStorage);


const getStudentinfo =localStorage.getItem('student');

const studentConvertObject =JSON.parse(getStudentinfo)

console.log(studentConvertObject);
